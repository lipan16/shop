<template>
  <div id="app">
    <l-header></l-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评价</div>
      <div class="tab-item">商家</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header/header'

export default {
  components: {
    'l-header': header
  }
}
</script>

<style>
.tab {
  width       : 100%;
  height      : 40px;
  line-height : 40px;
  display     : flex;
}

.tab-item {
  flex       : 1;
  text-align : center;
}
</style>
