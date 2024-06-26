<script lang="ts">
import { defineComponent, onMounted, ref} from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import {addZeroBeforeOneNumber} from "@/common/utils/addZeroBeforeOneNumber";

export default defineComponent({
  name: 'ICarousel',
  components: {
    Carousel,
    Slide,
  },

  setup() {
    const myCarousel = ref(null);
    const next = () => {
      myCarousel.value.next();
      lastClick.value = 'next'
    }
    const prev = () => {
      myCarousel.value.prev();
      lastClick.value = 'prev'
    }

    let lastClick = ref<string>('prev');

    const currentSlide = ref<number>(0);
    const nextSlide = ref<number>(currentSlide.value + 1);

    const handleSlide = (slideData) => {
      if(slideData.currentSlideIndex < slideData.slidingToIndex && currentSlide.value !== slideData.slidesCount - 1) {
        console.log('incrementSlideNumber')
        ++currentSlide.value;
        currentSlide.value + 1 === slideData.slidesCount ? nextSlide.value = 0 : nextSlide.value = currentSlide.value + 1;
      } else if(slideData.currentSlideIndex < slideData.slidingToIndex && currentSlide.value === slideData.slidesCount - 1) {
        console.log('toZero')
        currentSlide.value = 0;
        nextSlide.value = 1;
      }

      if(slideData.currentSlideIndex > slideData.slidingToIndex && currentSlide.value > 0) {
        console.log('decrementSlideNumber')
        --currentSlide.value;
        nextSlide.value = currentSlide.value + 1
      } else if(slideData.currentSlideIndex > slideData.slidingToIndex && currentSlide.value === 0) {
        currentSlide.value = slideData.slidesCount - 1;
        nextSlide.value = 0;
      }
    }

    const images = [
      {name: 'room1.png'},
      {name: 'room2.png'},
      {name: 'room3.png'},
    ];

    return {
      lastClick,
      myCarousel,
      next,
      prev,
      currentSlide,
      nextSlide,
      handleSlide,
      addZeroBeforeOneNumber,
      images,
    }
  }
})
</script>

<template>
  <Carousel ref="myCarousel" @slide-start="handleSlide" :mouseDrag="false" :touchDrag="false" wrapAround>
    <Slide v-for="(img, idx) in images" :key="idx">
      <div class="carousel__item">
        <img :src="`/src/assets/images/carousel/${img.name}`" width="506" height="691" :alt="`carousel_${idx}`">
      </div>
    </Slide>
  </Carousel>
  <div class="ml-[6px] mt-[34px] flex justify-end relative">
    <div class="absolute w-[506px] h-[690px] carouselBorder"></div>
    <div class="absolute left-0">
      <button @click="prev" class="w-[80px] h-[40px] hover:bg-[#a0a0a0]" :class="{'bg-[#F2C452]': lastClick === 'prev'}">
        <img src="@/assets/icons/arrow-left.svg" alt="arrow-left" class="mx-auto">
      </button>
      <button @click="next" class="w-[80px] h-[40px] hover:bg-[#a0a0a0]" :class="{'bg-[#F2C452]': lastClick === 'next'}">
        <img src="@/assets/icons/arrow-right.svg" alt="arrow-right" class="mx-auto">
      </button>
    </div>
    <div class="absolute right-[-6px] flex gap-[60px] mr-[-45px]">
      <div class="text-[#F2C452] mt-[32px]">
        {{ addZeroBeforeOneNumber(currentSlide + 1) }}
      </div>
      <div class="text-[#458099] mt-[52px]">
        {{ addZeroBeforeOneNumber(nextSlide + 1) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -70px;
}
.carouselBorder {
  border: 2px solid #F2C452;
  border-radius: 290px 280px 0 0;
  bottom: -77px;
  left: 80px;
}
</style>
