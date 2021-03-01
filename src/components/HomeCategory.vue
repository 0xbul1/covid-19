<template>
  <div :style="{ color: color }" class="home-category">
    <p>{{ title }}</p>
    <p>{{ count }}例</p>
    <p>
      <span class="tip">较昨日</span><span class="add">+{{ addcount }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeCategory',
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    addcount: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.home-category {
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
}
.home-category p {
  margin-bottom: 5px;
}
.home-category .add {
  font-size: xx-small;
}
.home-category .tip {
  color: gray;
  font-size: xx-small;
}
</style>
