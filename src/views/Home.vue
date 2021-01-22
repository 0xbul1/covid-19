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
    // const province = 'aomen';
    // this.GET_PROVINCE_JSON(province);
    // this.GET_REAL_TIME();
  },
  methods: {
    ...mapActions('covid', ['GET_REAL_TIME']),
  },
};
</script>
