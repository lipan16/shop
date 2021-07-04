import {Dialog} from 'vant';

export default {
    methods: {
        pageBack(event, param = -1){
            // 所有页面左上角的返回按钮都应该调用这个方法
            if(this.$route.path === '/'){
                window.WebApp.closeWebapp();
            }
            this.$router.go(param);
        },
        $b_dialogAlert: function (msg, title = '温馨提示'){
            let message = '';
            if(typeof msg === 'string'){
                message = msg;
            }
            if(typeof msg === 'object'){
                message = msg.info || msg.result;
                if(msg.message){
                    if(msg.message.includes('timeout')){
                        message = '请求超时';
                    }else{
                        message = msg.message || 'error';
                    }
                }
            }
            Dialog.alert({
                title,
                message,
                closeOnClickOverlay: true
            }).then(() => {
            }).catch(() => {
            });
        }
    }
};
