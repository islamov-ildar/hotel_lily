<script lang="ts">
export default {
  props: ['title', 'isCollapse']
}
</script>

<template>
  <div class="flex gap-[14px] mb-[27px] px-[2%]">
    <img src="../../../assets/icons/triangle_yellow.svg" alt="triangle" :class="{'rotate-[270deg]': isCollapse}">
    <div class="text-[34px] text-yellowMain font-montserratRegular">{{ title }}</div>
  </div>
</template>