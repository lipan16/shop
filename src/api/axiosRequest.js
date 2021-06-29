import Axios from 'axios';

const CancelToken = Axios.CancelToken;
// const source = CancelToken.source();
let reqList = []; // 请求列表

const stopRepeatRequest = function (reqList, url, cancel, errorMessage){ // 停止重复请求
    const errorMsg = errorMessage || '';
    for(let i = 0; i < reqList.length; i++){
        if(reqList[i].url === url){
            reqList[i].cancal({url: url, errorMsg: errorMsg});
        }
    }
    reqList.push({
        'cancal': cancel,
        'url': url
    });
};

const allowRequest = function (reqList, url){ // 允许请求
    for(let i = 0; i < reqList.length; i++){
        if(reqList[i].url === url){
            reqList.splice(i, 1);
            break;
        }
    }
};

const service = Axios.create({
    baseURL: '',
    timeout: 1000, // request timeout 1s
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    }
});

// 添加请求拦截器
service.interceptors.request.use(config => {
    // 如果有token 就携带tokon
    const token = window.localStorage.getItem('token');
    if(token){
        config.headers.Authorization = token;
    }
    let cancel = null;
    // 设置cancelToken对象
    config.cancelToken = new CancelToken(function executor(c){
        cancel = c;
    });
    // 阻止重复请求。当上个请求未完成时，相同的请求不会进行
    stopRepeatRequest(reqList, config.url, cancel, `重复请求，默认中断`);

    return config;
}, error => {
    return Promise.reject(error);
});

// 响应拦截器
service.interceptors.response.use(response => {
    if(undefined !== response.config.url){
        allowRequest(reqList, response.config.url);
    }

    if(response.status && response.status === 200){ // 接口请求调用成功
        if(response.data.flags === 200){ //业务逻辑调用成功
            return response.data;
        }
        return Promise.reject(new Error(response.data.info || 'Error'));
    }
    return Promise.reject(new Error('接口调用Error'));
}, error => {
    console.log(error);

    if(undefined !== error.message.url){
        setTimeout(() => {
            allowRequest(reqList, error.message.url);
        }, 1000);
    }

    return Promise.reject(error);
});

export default service;
