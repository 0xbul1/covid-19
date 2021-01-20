<template>
  <div class="home"></div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {};
  },
  computed: {},
  created() {
    this.fetchData({});
  },
  methods: {
    ...mapActions('virus', [
      'fetchRTData',
      'fetchSTData',
      'fetchRMData',
      'fetchTRData',
      'fetchData',
    ]),
  },
};
</script>
