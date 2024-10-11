<template>
  <div class="absolute w-full z-[4] btnContainer">
    <button @click="prev" class="btn h-[40px] w-[40px] md:h-[10vw] md:w-[5vw]" :class="{'bg-[#F2C452]': lastClick === 'prev', 'bg-[#528CA5]' : lastClick !== 'prev'}">
      <img src="../../assets/icons/arrow-left.svg" alt="arrow-left" class="mx-auto">
    </button>
    <button  @click="next" class="btn h-[40px] w-[40px] md:h-[10vw] md:w-[5vw]" :class="{'bg-[#F2C452]': lastClick === 'next', 'bg-[#528CA5]' : lastClick !== 'next'}">
      <img src="../../assets/icons/arrow-right.svg" alt="arrow-right" class="mx-auto">
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
.btnContainer {
  top: 33%;
  width: 100vw;
  margin-left: -5.5%;
}

@media (min-width: 769px) {
  .btnContainer {
    top: 40%;
    z-index: 0;
  }
}

.btn {
  border: 1px solid transparent;
}
.btn:hover {
  border: 1px solid #FFFFFF;
}
</style>
