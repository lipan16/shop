import Axios from 'axios'

const service = Axios.create({
  baseURL: 'http://iwenwiki.com/api/blueberrypai/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 添加响应拦截器
service.interceptors.response.use(response => {
  if(typeof response.data === 'undefined'){
    return Promise.reject(response.info)
  }else{
    return response
  }
}, error => {
  return Promise.reject(error)
})

export default function({url, method = 'post'}){
  return new Promise((resolve, reject) => {
    service({url, method}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
