<template>
  <div
    class="q-pa-md relative-position"
    style="height: 280px; max-height: 80vh"
  >
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
    <!-- <q-btn
      v-morph:btn:mygroup:300.resize="morphGroupModel"
      class="absolute-bottom-left q-ma-md"
      fab
      color="primary"
      size="lg"
      icon="add"
      @click="nextMorph"
    />

    <q-card
      v-morph:card1:mygroup:500.resize="morphGroupModel"
      class="absolute-bottom-left q-ma-md bg-primary text-white"
      style="width: 300px; border-bottom-left-radius: 2em"
    >
      <q-card-section class="text-h6">
        New user
      </q-card-section>

      <q-card-section class="text-subtitle1">
        Please fill the details for a new user.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Next" @click="nextMorph" />
      </q-card-actions>
    </q-card>

    <q-card
      v-morph:card2:mygroup:500.tween="morphGroupModel"
      class="absolute-bottom-left q-ma-md bg-primary text-white"
      style="width: 300px; border-bottom-left-radius: 2em"
    >
      <q-card-section class="text-h6">
        Finalize registration
      </q-card-section>

      <q-card-section class="q-py-xl text-center text-subtitle2">
        Thank you for registering.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Close" @click="nextMorph" />
      </q-card-actions>
    </q-card> -->
  </div>
</template>
<script>
const nextMorphStep = {
  btn: 'card1',
  card1: 'card2',
  card2: 'btn',
};

export default {
  data() {
    return {
      morphGroupModel: 'btn',
    };
  },
  props: {
    stopScroll: Boolean,
  },
  methods: {
    nextMorph() {
      this.morphGroupModel = nextMorphStep[this.morphGroupModel];
    },
  },
};
</script>
