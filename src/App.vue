<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name : 'App',
    watch: {
        $route(to, from){
            console.log(to, from)
        }
    }
}
</script>

<style lang="less">
#app {
    font-family             : Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing  : antialiased;
    -moz-osx-font-smoothing : grayscale;
}
</style>
