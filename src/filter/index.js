import Vue from 'vue'

function dateFormat(value, fmt){
    // if('object' === typeof value){ // 类型比较
    if(value instanceof Date){ // 原型比较
        const obj = {
            'M+': value.getMonth() + 1, // 月
            'd+': value.getDate(), // 日
            'h+': value.getHours(), // 时
            'm+': value.getMinutes(), // 分
            's+': value.getSeconds(), // 秒
            's' : value.getMilliseconds(), // 毫秒
        }
        if(/(y+)/.test(fmt)){ // 短 年位数 yy
            fmt = fmt.replace(RegExp.$1, (value.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for(const key in obj){
            if(new RegExp('(' + key + ')').test(fmt)){
                // 前面补零替换，毫秒除外
                fmt = fmt.replace(RegExp.$1,
                    RegExp.$1.length === 1 ? obj[key] : ('00' + obj[key]).substr(('' + obj[key]).length))
            }
        }
        return fmt
    }else{
        return value
    }
}

Vue.filter('dateFormat', dateFormat)
