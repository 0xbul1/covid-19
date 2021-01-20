<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import { HTTP_SERVER_ADDRESS_1 } from '@/config';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      HTTP_SERVER_ADDRESS_1,
    };
  },
  computed: {},
  created() {
    this.fetchVirusRTData();
  },
  methods: {
    ...mapActions('virus', ['fetchVirusRTData']),
  },
};
</script>
