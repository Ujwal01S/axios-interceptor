import axios from "axios"

const baseURL = 'https://dummyjson.com'

const axiosInstace = axios.create({
    baseURL,
});


axiosInstace.interceptors.request.use(async req => {
    console.log('interceptor ran');
    return req;
})

export default axiosInstace;