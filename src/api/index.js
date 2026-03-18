import axios from "axios";

const API = axios.create({
    baseURL: `https://dummyjson.com/`
})



API.interceptors.request.use(
    (config) => {
        console.log('INTERSEPTORS REQUEST');

        const token = localStorage.getItem('acc_token')
        if (token) {
            config['headers']['Authorization'] = `Bearer ${token}`
        }
        return config
    },
)


API.interceptors.response.use(
    (response) => {
        console.log('INTERSEPTORS RESPOONSE');
        return response
    },
    (error) => {
        if (error?.response && error.response?.status === 401) {
            localStorage.removeItem('acc_token')
            localStorage.removeItem('ref_token')
        }
        console.log('INTERSEPTORS RESPOONSE');
        return Promise.reject(error)
    }
)

export default API