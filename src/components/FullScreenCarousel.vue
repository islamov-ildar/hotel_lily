<script lang="ts">
import Carousel from "@/components/CarouselFullScreen/Carousel.vue";

export default {
  components: {Carousel},
  props: ['slides'],
  emits: ['close'],

  setup(_, { emit }){
    const click123 = (some: any) => {
      const classes = Array.from(some.srcElement.classList);
      if(classes.includes('carousel') || classes.includes('cross')){
        console.log('click on blackout')
        emit('close')
      }
    }
    return {
      click123
    }
  }
}
</script>

<template>
<div @click="click123" class="fixed top-0 left-0 z-10 w-[100vw] h-[100vh] bg-[#040404D9]">
  <div class="cross h-full flex flex-col justify-center">
    <div class="cross cursor-pointer absolute top-[35px] right-[90px] w-[35px] h-[35px]">
      <img class="cross" src="@/assets/icons/cross.svg" alt="cross">
    </div>
    <Carousel :slides="slides" :interval="3000" controls/>
  </div>
</div>
</template>

<style scoped>

</style>
