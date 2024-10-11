<script lang="ts">
export default {
  props: {
    showVerticalStick: {
      type: Boolean,
      default: true,
    }
  }
}
</script>

<template>
<div class="flex flex-col items-center">
  <div v-if="showVerticalStick" class="vertical-stick"></div>
  <div class="mb-[20px] lg:mb-[40px] font-cormorant leading-[37px] text-[34px] md:text-[50px] lg:text-[70px]">
    <slot name="title"></slot>
  </div>
  <div class="font-ralewayRegular uppercase tracking-[2.9px] text-center text-[11px] md:text-[20px] text-[#F2C452]">
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
@media (min-width: 769px) {
  .headerSmall {
    display: none;
  }
  .textMediaSmall {
    display: none;
  }
}
@media (max-width: 768px) {
  .vertical-stick {
    height: 30px;
    margin-bottom: 10px;
  }
}
</style>
