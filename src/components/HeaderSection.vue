<script setup lang="ts">

</script>

<template>
<div class="flex flex-col items-center">
  <div class="vertical-stick"></div>
  <div class="mb-[40px] text-[70px] text-[#FBF6ED] font-cormorant">
    <slot name="title"></slot>
  </div>
  <div class="uppercase tracking-[4px] text-[20px] text-[#F2C452] font-helveticaCondensed">
    <slot name="description"></slot>
  </div>
</div>
</template>

<style scoped>
.vertical-stick {
  height: 70px;
  width: 2px;
  background-color: #F2C452;
  margin-bottom: 30px;
}
</style>
