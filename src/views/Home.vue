<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import { HTTP_SERVER_ADDRESS } from '@/config';
console.log(process.env);
export default {
  name: 'Home',
  data() {
    return {
      HTTP_SERVER_ADDRESS: HTTP_SERVER_ADDRESS,
    };
  },
  components: {},
};
</script>
