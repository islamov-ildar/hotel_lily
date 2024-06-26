<template>
  <div>
    <button @click="prev" class="w-[80px] h-[40px] hover:bg-[#a0a0a0]" :class="{'bg-[#F2C452]': lastClick === 'prev'}">
      <img src="@/assets/icons/arrow-left.svg" alt="arrow-left" class="mx-auto">
    </button>
    <button  @click="next" class="w-[80px] h-[40px] hover:bg-[#a0a0a0]" :class="{'bg-[#F2C452]': lastClick === 'next'}">
      <img src="@/assets/icons/arrow-right.svg" alt="arrow-right" class="mx-auto">
    </button>
  </div>

</template>

<script lang="ts">
import {ref} from "vue";

export default {
  emits: ["prev", "next"], // vue v3

  setup(_, {emit}) {

    const lastClick = ref<string>('prev');
    const next = () => {
      emit('next');
      lastClick.value = 'next'
    }
    const prev = () => {
      emit('prev');
      lastClick.value = 'prev'
    }


    return {
      next,
      prev,
      lastClick,
    }
  }
};
</script>
<style scoped>
</style>
