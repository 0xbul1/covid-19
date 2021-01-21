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
    this.GET_THE_TREND();
  },
  methods: {
    ...mapActions('virus', ['GET_THE_TREND']),
  },
};
</script>
