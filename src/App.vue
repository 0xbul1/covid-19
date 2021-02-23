<template>
  <div>
    <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
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
            <q-fab icon="keyboard_arrow_up" direction="up" color="primary">
              <q-fab-action color="primary" icon="person_add" />
              <q-fab-action color="primary" icon="mail" />
            </q-fab>
          </q-page-sticky>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',

  // components: {
  //   HelloWorld
  // },

  data() {
    return {
      tab: 'realname',
    };
  },
};
</script>

<style></style>
