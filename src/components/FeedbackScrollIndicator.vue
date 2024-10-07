<script lang="ts">
export default {
  props: ['countOfSlides', 'currentIdx'],
}
</script>

<template>
  <div class="w-full flex">
    <div v-for="(item, idx) in countOfSlides - 2"
         :key="item" class="indicator"
         :class="{active: idx === currentIdx}"
    ></div>
  </div>
</template>

<style scoped>
.indicator{
  height: 7px;
  width: calc(100vw / 8);
  background-color: #F2C4524D;
  transition: background-color 0.2s;
}
.active {
  background-color: #F2C452;
}
</style>
