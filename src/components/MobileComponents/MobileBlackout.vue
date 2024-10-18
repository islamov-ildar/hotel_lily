<script lang="ts">
import {onBeforeUnmount, onMounted} from "vue";

export default {
  setup() {
    // onMounted(() => {
    //   window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: 'smooth'
    //   });
    //   document.body.style.overflow = 'hidden';
    // })
    // onBeforeUnmount(() => {
    //   document.body.style.overflow = '';
    // })

    return {}
  }
}
</script>

<template>
  <div class="mobileMenuWrapper p-[8%] absolute">
    <div class="w-full flex justify-end">
      <img @click="$emit('close')" src="@/assets/icons/cross.svg" alt="cross">
    </div>
    <slot/>
  </div>
</template>

<style scoped>
.mobileMenuWrapper {
  background: rgba(4, 15, 20, 0.98);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 11;
}
</style>
