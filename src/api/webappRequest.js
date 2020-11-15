var WebApp = window.WebApp

export default function(){
    return function({uri, parameter}){
        return new Promise((resolve, reject) => {
            WebApp.invoke(uri, 'post', JSON.stringify(parameter),
                response => {
                    console.info(response)
                    resolve(response)
                }, err => {
                    console.error(err)
                    reject(new Error('请求失败'))
                })
        })
    }
}

export function getLoginInfo(){
    return new Promise((resolve, reject) => {
        WebApp.getLoginInfo(res => {
            resolve(JSON.parse(res))
        }, err => {
            reject(new Error(err))
        })
    })
}
