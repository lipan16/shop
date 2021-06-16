<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'App',
    watch: {
        $route(to, from){
            console.log(to, from)
        }
    }
}
</script>

<style lang="less">
body{
    height : 100%;
    width  : 100%;
}

#app{
    font-family             : Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing  : antialiased;
    -moz-osx-font-smoothing : grayscale;
    height                  : 100%;
    width                   : 100%;
    display                 : flex;
}

.text-overflow{
    word-break    : keep-all;
    white-space   : nowrap;
    overflow      : hidden;
    text-overflow : ellipsis;
}
</style>
