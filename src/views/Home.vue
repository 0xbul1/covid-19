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
    this.GET_REAL_TIME({});
  },
  methods: {
    ...mapActions('virus', ['GET_REAL_TIME']),
  },
};
</script>
