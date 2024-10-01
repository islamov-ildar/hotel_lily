<template>
  <div class="absolute w-full z-[4]">
    <button @click="prev" class="btn" :class="{'bg-[#F2C452]': lastClick === 'prev', 'bg-[#528CA5]' : lastClick !== 'prev'}">
      <img src="@/assets/icons/arrow-left.svg" alt="arrow-left" class="mx-auto">
    </button>
    <button  @click="next" class="btn" :class="{'bg-[#F2C452]': lastClick === 'next', 'bg-[#528CA5]' : lastClick !== 'next'}">
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
.btn {
  width: 40px;
  height: 40px;
  border: 1px solid transparent;
}
.btn:hover {
  border: 1px solid #FFFFFF;
}
</style>
