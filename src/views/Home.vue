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
    this.fetchRMData();
  },
  methods: {
    ...mapActions('virus', [
      'fetchRTData',
      'fetchSTData',
      'fetchRMData',
      'fetchTRData',
    ]),
  },
};
</script>
