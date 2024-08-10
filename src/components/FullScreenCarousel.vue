<script lang="ts">
import Carousel from "@/components/CarouselFullScreen/Carousel.vue";

export default {
  components: {Carousel},
  props: ['slides', 'imgIdx'],
  emits: ['close'],

  setup(_, { emit }){
    const clickIntoCarousel = (some: any) => {
      const classes = Array.from(some.srcElement.classList);
      console.log('clickIntoCarousel', classes)
      if(classes.includes('carousel') || classes.includes('cross') || classes.includes('carousel-item')){
        console.log('click on blackout')
        emit('close')
      }
    }
    return {
      clickIntoCarousel
    }
  }
}
</script>

<template>
<div @click="clickIntoCarousel" class="fixed top-0 left-0 z-10 w-[100vw] h-[100vh] bg-[#040404D9] z-30">
  <div class="cross h-full flex flex-col justify-center">
    <div class="cross cursor-pointer absolute top-[35px] right-[90px] w-[35px] h-[35px] z-10">
      <img class="cross" src="@/assets/icons/cross.svg" alt="cross">
    </div>
    <Carousel :startImgIdx="imgIdx" :slides="slides" :interval="3000" controls/>
  </div>
</div>
</template>

<style scoped>

</style>
