<template>
  <div ref="scrollWrapper" id="main">
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
          <q-page-sticky position="bottom-right" :offset="[18, 30]">
            <q-fab
              icon="keyboard_arrow_up"
              direction="up"
              color="primary"
              glossy
              push
              :disable="!stopScroll"
              padding="sm"
              class="scroll-opacity"
              :class="stopScroll ? '' : 'opacity-transition'"
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
import { scroll, debounce } from 'quasar';
const { getScrollTarget, getScrollPosition } = scroll;

export default {
  name: 'LayoutDefault',
  data() {
    return {
      tab: 'realname',
      timer: null,
      stopScroll: true,
      startPosition: null,
      endPosition: null,
    };
  },
  methods: {
    scrollHandler(e) {
      clearTimeout(this.timer); // 清除定時器
      this.timer = setTimeout(this.ScrollEnd, 200);
      this.startPosition = e.position;
      this.stopScroll = false;
    },
    ScrollEnd() {
      this.endPosition = getScrollPosition(
        getScrollTarget(this.$refs.scrollWrapper),
      ); // 停止后的scrolltop
      if (this.endPosition === this.startPosition) {
        debounce((this.stopScroll = true), 200);
      }
    },
  },
};
</script>
<style lang="less">
.scroll-opacity {
  &.opacity-transition {
    opacity: 0.7;
    transition: opacity 200ms 0ms ease-out;
  }
  transition: opacity 200ms 0ms ease-in;
}
</style>
