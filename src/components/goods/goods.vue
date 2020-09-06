<template>
  <div>
    <video ref="videoPlayer" controls class="video-js vjs-default-skin vjs-big-play-centered" preload="auto"
            >
      <source src="http://127.0.0.1/520.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  data(){
    return {
      player: null
    }
  },
  mounted(){
    let options = {
      controls: true, // 是否显示底部控制栏
      preload: 'auto', // 加载<video>标签后是否加载视频
      autoplay: 'muted', // 静音播放
      playbackRates: [0.5, 1, 1.5, 2] // 倍速播放
    }
    this.player = this.$video(this.$refs.videoPlayer, options, function onPlayerReady() {
      console.log('onPlayerReady', this)
    })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style scoped >
</style>
