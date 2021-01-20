<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
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
    this.fetchTRData();
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
