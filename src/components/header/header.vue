<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64px" height="64px" alt="头像" border-radius="2px" src="../../assets/logo.png">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊</span>
        </div>
        <div class="description">5分钟送达</div>
        <div class="support">
          <span class="icon"></span>
          <span class="text">满10减5</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.header {
  color: #ffffff;
  background: black;
}

.content-wrapper {
  padding: 24px 12px 18px 24px;
  font-size: 0;
}

.avatar {
  display: inline-block;
}

.content {
  display: inline-block;
  font-size: 14px;
  margin-left: 16px;
}

.title {
  margin: 2px 0 8px 0;

  .brand {
    vertical-align: top;
    display: inline-block;
    width: 30px;
    height: 18px;
    background-image: url('../../assets/brand@2x.png');
    background-size: 30px 18px;
    background-repeat: no-repeat;
  }

  .name {
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
  }
}

.description {
  font-weight: 100;
  margin-bottom: 10px;
  line-height: 12px;
  font-size: 12px;
}

.support {
  .icon {
    display: inline-block;
    height: 12px;
    width: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    background-image: url('../../assets/decrease_1@2x.png');
  }

  .text {
    line-height: 12px;
    font-size: 10px;
    font-weight: 100;

  }
}
</style>
