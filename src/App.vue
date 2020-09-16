<template>
  <div id="app">
    <l-header></l-header>
    <button @click="getAxiosData()">测试axios</button>
    <button @click="getGoodsMock()">测试mock</button>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header/header'
import axios from './api/axiosRequest'

export default {
  data(){
    return {
    }
  },
  methods: {
    getAxiosData(){
      axios.get('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
        .then(res => {
          console.log(res)
        })
    },
    getGoodsMock(){
      axios({url: 'getChengpinDetails.php', method: 'post'}).then(res => {
        console.info(res)
      }).catch(err => {
        console.error(err)
      })
    }
  },
  components: {
    'l-header': header
  }
}
</script>

<style>
* {
  margin  : 0;
  padding : 0;
}

.tab {
  width         : 100%;
  height        : 40px;
  line-height   : 40px;
  display       : flex;
  border-bottom : 1px solid rgba(7, 17, 24, 0.1);
}

.tab-item {
  flex       : 1;
  text-align : center;
}

.tab-item > a {
  display         : inline;
  text-decoration : none;
  font-size       : 14px;
  color           : rgb(77, 85, 93);
}

.active {
  color : rgb(240, 20, 20);
}
</style>
