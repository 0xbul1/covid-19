<template>
  <!-- <q-circular-progress
    show-value
    indeterminate
    font-size="10px"
    class="q-ma-md"
    size="200px"
    :thickness="0.08"
    color="dark-2"
    track-color="grey-3"
  >
    <div id="loading"></div>
  </q-circular-progress> -->
  <q-inner-loading showing size="200px">
    <div id="loading">
      <!-- red-3,pink-3,purple-3 deep-purple-3 indigo-3 blue-3 light-blue-3 cyan-3 teal-3 green-3 light-green-3 lime-3 yellow-3 amber-3 orange-3 deep-orange-3 brown-3-->
      <q-ajax-bar
        ref="bar"
        position="bottom"
        :color="ajaxBarColor"
        size="10px"
        skip-hijack
      />
    </div>
  </q-inner-loading>
</template>

<script>
import lottie from 'lottie-web';
// import datajson from '../assets/lottie/loading.json';
export default {
  name: 'Loading',
  computed: {
    ajaxBarColor() {
      //
      return [
        'grey-3',
        'red-3',
        'pink-3',
        'purple-3',
        'deep-purple-3',
        'indigo-3',
        'blue-3',
        'light-blue-3',
        'cyan-3',
        'teal-3',
        'green-3',
        'light-green-3',
        'lime-3',
        'light-green-3',
        'yellow-3',
        'amber-3',
        'orange-3',
        'deep-orange-3',
        'brown-3',
        'blue-grey-3',
      ][Math.floor(0 + Math.random() * (20 - 0))];
    },
  },
  mounted() {
    this.lottieInit();
    this.show();
  },
  destroyed() {
    this.stop();
  },
  methods: {
    async lottieInit() {
      const JsonData = await import(
        `../assets/lottie/${
          ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'][
            Math.floor(Math.random() * 10) % 10
          ]
        }.json`
      );
      // const JsonData = await import(`../assets/lottie/10.json`);
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
      lottie.play();
      this.$refs.bar.start();
    },
    stop() {
      lottie.stop();
      this.$refs.bar.stop();
    },
  },
};
</script>

<style lang="less">
#loading {
  // background-color: #38c172;
  // width: 100%;
  // height: 100vh;
  // min-width: 31.25rem;
  // display: block;
  // overflow: hidden;
  // -webkit-transform: translateZ(0);
  // transform: translateZ(0);
  // text-align: center;
  opacity: 1;
}
</style>
