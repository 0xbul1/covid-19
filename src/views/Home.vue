<template>
  <div class="home"></div>
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
    // axios
    //   .get(
    //     'https://raw.githubusercontent.com/huanent/vue-echarts-map-demo/master/map/province/anhui.json',
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   });
    const province = 'anhui';
    this.GET_PROVINCE_JSON({ province });
  },
  methods: {
    ...mapActions('map', ['GET_PROVINCE_JSON']),
  },
};
</script>
