import Axios from 'axios';

const service = Axios.create({
    baseURL: '',
    timeout: 1000, // request timeout 1s
    headers: {
        'Content-Type': 'application/json'
    }
});

// 添加请求拦截器
service.interceptors.request.use(config => {
    // 如果有token 就携带tokon
    const token = window.localStorage.getItem('token');
    if(token){
        config.headers.Authorization = token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// 响应拦截器
service.interceptors.response.use(response => {
    if(response.status && response.status === 200){ // 接口请求调用成功
        if(response.data.flags === 200){ //业务逻辑调用成功
            return response.data;
        }
        return Promise.reject(new Error(response.data.info || 'Error'));
    }
    return Promise.reject(new Error('接口调用Error'));
}, error => {
    console.log(JSON.stringify(error));
    return Promise.reject(error);
});

export default function (url, params, method = 'post'){
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(params);
        service({url, method, data}).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
}
