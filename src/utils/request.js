// 二次封装axios
import axios from 'axios';
const request = axios.create({
    baseURL: 'http://127.0.0.1:3000/', // url = base url + request url
    timeout: 5000 // request timeout
})
request.interceptors.request.use(config => {
    // 判断客户端是否存储token,如存在携带token
    return config
}, error => {
    return Promose.reject(error);
})
request.interceptors.response.use(response => {
    const res = response.data;
    // if (res.code === 20000) {

    // }
    return res;
}, error => {
    return Promise.reject(error)
})
export default request;