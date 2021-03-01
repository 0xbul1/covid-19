<template>
  <div class="home">
    <div>
      <span class="allCountry">全国</span>
      <span>截至(北京时间)</span>
      <div class="categoryBox">
        <HomeCategory :title="'确诊'" :color="'#e57471'" />
        <HomeCategory :title="'疑似'" :color="'#dda451'" />
        <HomeCategory :title="'重症'" :color="'#5d4037'" />
        <HomeCategory :title="'死亡'" :color="'#919399'" />
        <HomeCategory :title="'治愈'" :color="'#7ebe50'" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import HomeCategory from '@/components/HomeCategory';

export default {
  name: 'Home',
  components: {
    HomeCategory,
  },
  data() {
    return {};
  },
  computed: {},
  created() {
    // const province = 'aomen';
    // this.GET_PROVINCE_JSON(province);
    this.GET_REAL_TIME();
  },
  methods: {
    ...mapActions('covid', ['GET_REAL_TIME']),
  },
};
</script>
