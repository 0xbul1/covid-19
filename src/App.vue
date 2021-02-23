<template>
  <div class="scroll overflow-hidden" ref="ttt">
    <q-layout
      view="lHh lpr lFf"
      class="shadow-2 rounded-borders"
      @scroll="scrollHandler"
    >
      <q-header bordered class="bg-white text-primary" reveal>
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm" />
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          <q-toolbar-title>新型冠状病毒肺炎疫情</q-toolbar-title>
          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="q-pa-md" style="padding-top: 66px">
          <p v-for="n in 20" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            praesentium molestias a adipisci, dolore vitae odit, quidem
            consequatur optio voluptates asperiores pariatur eos numquam rerum
            delectus commodi perferendis voluptate?
          </p>
          <q-page-sticky expand position="top">
            <q-toolbar class="bg-primary text-white">
              <q-tabs v-model="tab">
                <q-tab name="realname" label="疫情地图" />
                <q-tab name="statustics" label="最新消息" />
                <q-tab name="rumor" label="辟谣信息" />
                <q-tab name="trend" label="疫情趋势" />
              </q-tabs>
            </q-toolbar>
          </q-page-sticky>
          <q-page-sticky position="bottom-right" :offset="[18, 28]">
            <q-fab
              icon="keyboard_arrow_up"
              direction="up"
              color="primary"
              glossy
              :disable="fabDisable"
            >
              <q-fab-action color="primary" icon="person_add" />
              <q-fab-action color="primary" icon="mail" />
            </q-fab>
            <!-- <q-btn fab icon="keyboard_arrow_up" color="accent" glossy /> -->
          </q-page-sticky>
          <q-page-scroller
            expand
            position="top"
            :scroll-offset="300"
            :offset="[0, 50]"
          >
            <div class="col cursor-pointer bg-primary text-white text-center">
              <q-icon name="eject" size="2rem" />
            </div>
          </q-page-scroller>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { scroll } from 'quasar';
const { getScrollTarget } = scroll;
export default {
  name: 'LayoutDefault',

  // components: {
  //   HelloWorld
  // },

  data() {
    return {
      tab: 'realname',
      fabDisable: false,
      isScroll: false,
    };
  },
  computed: {
    test() {
      return this.isScroll;
    },
  },
  mounted() {
    // console.log(getScrollTarget(this.$refs.ttt));
    console.log(getScrollTarget(this.$refs.ttt));
  },
  methods: {
    scrollHandler() {
      // console.log(getScrollTarget());
    },
  },
};
</script>

<style></style>
