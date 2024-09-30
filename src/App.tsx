import axios from "axios";
import { useEffect, useState } from "react";
import API from './axiosInstace';

const App:React.FC =() => {

  const [data, setData] = useState([]);
  const getData = async() => {
    const {data} = await API.get('/products');
    setData(data?.products);
  };
  useEffect(() => {
    getData();
  },[]);

  let radNum:number | string;
  radNum = 'Typscript Test 123'

  return (
    <>
    
      Welcome
      <p>{radNum}</p>
      {data?.map((d) => (
        <p key={d.id}>{d.id}</p>
      ))}
    </>
  )
}

export default App
