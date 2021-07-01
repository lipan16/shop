<template>
    <div id="app">
        <keep-alive :include="$store.state.keepAlive">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import FastClick from 'fastclick';
// 使用
FastClick.attach(document.body);
export default {
    name: 'App'
};
</script>

<style lang="less">
html, body{
    height  : 100%;
    width   : 100%;
    padding : 0;
    margin  : 0;
}

#app{
    font-family             : Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing  : antialiased;
    -moz-osx-font-smoothing : grayscale;
    height                  : 100%;
    width                   : 100%;
    display                 : flex;
    flex-direction          : column;

    >:first-child{
        flex-grow   : 1;
        flex-shrink : 0;
    }
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar{
    width            : 0px;
    height           : 0px;
    background-color : #f5f5f5;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track{
    -webkit-box-shadow : inset 0 0 1px rgba(0, 0, 0, 0);
    border-radius      : 10px;
    background-color   : #f5f5f5;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb{
    border-radius      : 10px;
    -webkit-box-shadow : inset 0 0 6px rgba(0, 0, 0, .3);
    background-color   : #555;
}

// 省略号
.ellipsis{
    white-space   : nowrap;
    overflow      : hidden;
    text-overflow : ellipsis;
}
</style>
