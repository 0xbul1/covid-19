<template>
  <div class="home">
    <Timeline>
      <TimelineItem color="red">111</TimelineItem>
      <TimelineItem>222</TimelineItem>
      <TimelineItem>333</TimelineItem>
      <TimelineItem>444</TimelineItem>
      <TimelineItem>111</TimelineItem>
    </Timeline>
    <Carousel>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </Carousel>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
// import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {};
  },
  computed: {},
  created() {
    // const province = 'aomen';
    // this.GET_PROVINCE_JSON(province);
    // this.GET_REAL_TIME();
  },
  methods: {
    ...mapActions('covid', ['GET_REAL_TIME']),
  },
};
</script>
<style lang="less">
.ant-carousel .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel .slick-slide h3 {
  color: #fff;
}
</style>
