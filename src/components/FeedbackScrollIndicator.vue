<script lang="ts">
// import {computed} from "vue";

export default {
  props: ['countOfSlides', 'currentIdx'],
  setup() {
    // const calcWidth = computed(() => {
    //
    // })
  }
}
</script>

<template>
  <div class="w-full flex">
    <div v-for="(item, idx) in countOfSlides" :key="item" class="indicator" :class="{active: idx === currentIdx}"></div>
  </div>
</template>

<style scoped>
.indicator{
  height: 7px;
  width: calc(100vw / 10);
  background-color: #F2C4524D;
}
.active {
  background-color: #F2C452;
}
</style>
