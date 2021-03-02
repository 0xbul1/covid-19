<template>
  <div class="home">
    <div>
      <span class="allCountry">全国</span>
      <span>截至(北京时间)</span>
      <div class="categoryBox">
        <HomeCategory
          :title="'确诊'"
          :color="'#e57471'"
          :count="HomeCategoryCom1"
          :addcount="HomeCategoryCom2"
        />
        <HomeCategory
          :title="'疑似'"
          :color="'#dda451'"
          :count="HomeCategoryCom3"
          :addcount="HomeCategoryCom4"
        />
        <HomeCategory
          :title="'重症'"
          :color="'#5d4037'"
          :count="HomeCategoryCom5"
          :addcount="HomeCategoryCom6"
        />
        <HomeCategory
          :title="'死亡'"
          :color="'#919399'"
          :count="HomeCategoryCom7"
          :addcount="HomeCategoryCom8"
        />
        <HomeCategory
          :title="'治愈'"
          :color="'#7ebe50'"
          :count="HomeCategoryCom9"
          :addcount="HomeCategoryCom10"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import HomeCategory from '@/components/HomeCategory';

export default {
  name: 'Home',
  components: {
    HomeCategory,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState('covid', ['REAL_TIME']),
    HomeCategoryCom() {
      return this.REAL_TIME?.[0].desc;
    },
    HomeCategoryCom1() {
      return this.HomeCategoryCom?.confirmedCount | 0;
    },
    HomeCategoryCom2() {
      return this.HomeCategoryCom?.confirmedIncr | 0;
    },
    HomeCategoryCom3() {
      return this.HomeCategoryCom?.suspectedCount | 0;
    },
    HomeCategoryCom4() {
      return this.HomeCategoryCom?.suspectedIncr | 0;
    },
    HomeCategoryCom5() {
      return this.HomeCategoryCom?.seriousCount | 0;
    },
    HomeCategoryCom6() {
      return this.HomeCategoryCom?.seriousIncr | 0;
    },
    HomeCategoryCom7() {
      return this.HomeCategoryCom?.deadCount | 0;
    },
    HomeCategoryCom8() {
      return this.HomeCategoryCom?.deadIncr | 0;
    },
    HomeCategoryCom9() {
      return this.HomeCategoryCom?.curedCount | 0;
    },
    HomeCategoryCom10() {
      return this.HomeCategoryCom?.curedIncr | 0;
    },
  },
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
<style lang="scss">
.categoryBox {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 8px;
}
</style>
