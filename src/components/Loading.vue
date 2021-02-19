<template>
  <div id="loading"></div>
</template>

<script>
import lottie from 'lottie-web';
// import datajson from '../assets/lottie/loading.json';
export default {
  name: 'Loading',
  mounted() {
    this.lottieInit();
  },
  computed: {
    loadingJson() {
      const random = Math.random() * 10 > 5 ? '0' : '1';
      const param = [{ name: 'covid' }, { name: 'loading' }];
      console.log(['covid', 'loading'][Math.floor(Math.random() * 10) % 2]);
      console.log(`${param[random]['name']}.json`);
      return import(`../assets/lottie/${param[random]['name']}.json`);
    },
  },
  methods: {
    async lottieInit() {
      const JsonData = await import(
        `../assets/lottie/${
          ['covid', 'loading', '1', '2'][Math.floor(Math.random() * 10) % 4]
        }.json`
      );
      const icon = document.getElementById('loading');
      lottie.loadAnimation({
        container: icon, // 包含动画的dom元素
        renderer: 'svg', // 渲染出来的是什么格式
        loop: true, // 循环播放
        autoplay: true, // 自动播放
        animationData: JsonData, // 动画json的路径
      });
    },
    show() {
      this.showloading = true;
      lottie.play();
    },
    hidden() {
      this.showloading = false;
      lottie.stop();
    },
  },
};
</script>

<style lang="less">
#loading {
  // background-color: #38c172;
  width: 100%;
  height: 100vh;
  min-width: 31.25rem;
  display: block;
  overflow: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  text-align: center;
  opacity: 1;
}
</style>
