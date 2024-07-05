<script lang="ts">
import HeaderSection from '@/components/HeaderSection.vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import {computed, ref} from "vue";
import FeedBackCard from "@/components/FeedBackCard.vue";
import FeedbackScrollIndicator from "@/components/FeedbackScrollIndicator.vue";

export default {
  components: {FeedBackCard, HeaderSection, Carousel, Slide, Pagination, FeedbackScrollIndicator},

  setup(){
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

    // const currentSlide = computed(() => myCarousel.value.data.currentSlide)
    const currentSlide = ref(0);

    const handleSlide = (slideData) => {
      currentSlide.value = slideData.currentSlideIndex;
      console.log('currentSlide.value', currentSlide.value)
    }

    return {
      lastClick,
      myCarousel,
      next,
      prev,
      currentSlide,
      handleSlide,
    }
  }
};
</script>

<template>
<div class="bg-[#FBF6ED] pt-[90px] pl-[10px] pb-[240px] bgImg">
   <HeaderSection class="mb-[90px]">
     <template #title>
       <span class="text-blueMain">Отзывы</span>
     </template>
     <template #description>
       наших гостей
     </template>
   </HeaderSection>
  <div>
      <Carousel @slide-start="handleSlide" ref="myCarousel" :items-to-show="3" :wrap-around="false">
        <Slide v-for="slide in 10" :key="slide" class="mr-[75px]">
            <FeedBackCard :number="slide" />
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    <div class="relative">
      <div class="">
        <button @click="prev" class="w-[80px] h-[40px]" :class="{'bg-[#F2C452]': lastClick === 'prev'}">
          <img v-if="lastClick === 'prev'" src="@/assets/icons/arrow-left.svg" alt="arrow-left" class="mx-auto">
          <img v-else src="@/assets/icons/arrow-left_yellow.svg" alt="arrow-left" class="mx-auto">
        </button>
        <button @click="next" class="w-[80px] h-[40px]" :class="{'bg-[#F2C452]': lastClick === 'next'}">
          <img v-if="lastClick === 'next'" src="@/assets/icons/arrow-right.svg" alt="arrow-right" class="mx-auto">
          <img v-else src="@/assets/icons/arrow-right_yellow.svg" alt="arrow-right_yellow" class="mx-auto">
        </button>
      </div>
    </div>
    <div class="relative w-full mt-[30px]">
      <FeedbackScrollIndicator :countOfSlides="10" :currentIdx="currentSlide" />
    </div>
  </div>
<!--  <div>-->
<!--    <div style="width:560px;height:800px;overflow:hidden;position:relative;"><iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/180430998084?comments"></iframe><a href="https://yandex.ru/maps/org/liliya/180430998084/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">Лилия на карте Гудауты — Яндекс Карты</a></div>-->
<!--  </div>-->

</div>
</template>

<style scoped>
.bgImg {
  background-image: url('@/assets/icons/lily_yellow_left.svg');
  background-repeat: no-repeat;
  background-position: 0 30%;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: green;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 70px 10px 10px 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
