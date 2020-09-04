import Axios from 'axios'
import Toast from 'vant'

const service = Axios.create({
  baseURL: 'http://127.0.0.1:80',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

service.interceptors.response.use(response => {
  if(typeof (response.data.flag) === 'undefined'){
    return response
  }
  const res = response.data
  if(res.flag !== 0){
    Toast.fail('网络异常')
    return Promise.reject(res.info)
  }else{
    return response
  }
}, error => {
  Toast('不能连接到服务器')
  return Promise.reject(error)
})

export default function({uri, params, url = 'invoke.php', method = 'post', headers}){
  uri = `uri=${uri}&parameter=${JSON.stringify(params)}`
  return new Promise((resolve, reject) => {
    service({method, url, uri, headers}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
