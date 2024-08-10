<script lang="ts">
import HeaderSection from '@/components/HeaderSection.vue';
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import {ref} from "vue";
import FeedBackCard from "@/components/FeedBackCard.vue";
import FeedbackScrollIndicator from "@/components/FeedbackScrollIndicator.vue";
import { feedbacks } from "@/common/mockData/feedbacks"

export default {
  components: {FeedBackCard, HeaderSection, Carousel, Slide, FeedbackScrollIndicator},
  emits: ['openFullScreenFeedback'],

  setup(_, { emit }){
    const myCarousel = ref();
    const next = () => {
      lastClick.value = 'next'
      myCarousel.value.next();
    }
    const prev = () => {
      lastClick.value = 'prev'
      myCarousel.value.prev();
    }

    let lastClick = ref<string>('prev');

    const currentSlide = ref(0);
    const itemsToShow = 3;
    const countOfSlideView = ref(feedbacks.length - itemsToShow);

    const handleSlide = () => {
      if(lastClick.value === 'prev') {
        currentSlide.value - 1 >= 0 ? currentSlide.value-- : false;
      } else if(lastClick.value === 'next') {
        currentSlide.value + 1 <= countOfSlideView.value ? currentSlide.value++ : false;
      }
    }

    const handleOpenFeedbackModal = (feedback: any) => emit('openFullScreenFeedback', feedback);

    return {
      lastClick,
      myCarousel,
      next,
      prev,
      currentSlide,
      handleSlide,
      feedbacks,
      handleOpenFeedbackModal,
      itemsToShow,
    }
  }
};
</script>

<template>
<div class="bg-[#FBF6ED] pt-[90px] pl-[10px] pb-[200px] bgImg">
   <HeaderSection class="mb-[90px]">
     <template #title>
       <span class="text-blueMain">Отзывы</span>
     </template>
     <template #description>
       наших гостей
     </template>
   </HeaderSection>
  <div>
    <Carousel @slide-start="handleSlide" :touchDrag="false" :mouseDrag="false" ref="myCarousel" :items-to-show="itemsToShow" :wrap-around="false">
      <Slide v-for="(slide, idx) in feedbacks" :key="idx" class="mr-[75px]">
          <FeedBackCard :number="idx" :data="slide" @openFeedbackModal="handleOpenFeedbackModal" />
      </Slide>
    </Carousel>
    <div class="relative mt-[90px]">
        <button @click="prev" class="btn" :class="{'bg-[#F2C452]': lastClick === 'prev'}">
          <img v-if="lastClick === 'prev'" src="@/assets/icons/arrow-left.svg" alt="arrow-left" class="mx-auto">
          <img v-else src="@/assets/icons/arrow-left_yellow.svg" alt="arrow-left" class="mx-auto">
        </button>
        <button @click="next" class="btn" :class="{'bg-[#F2C452]': lastClick === 'next'}">
          <img v-if="lastClick === 'next'" src="@/assets/icons/arrow-right.svg" alt="arrow-right" class="mx-auto">
          <img v-else src="@/assets/icons/arrow-right_yellow.svg" alt="arrow-right_yellow" class="mx-auto">
        </button>
    </div>
    <div class="relative w-full mt-[30px]">
      <FeedbackScrollIndicator :countOfSlides="feedbacks.length" :currentIdx="currentSlide" />
    </div>
  </div>
</div>
</template>

<style scoped>
.btn {
  width: 80px;
  height: 40px;
  border: 1px solid transparent;
}
.btn:hover {
  border: 1px solid #F2C452;
}
.carousel__pagination {
  position: absolute;
  bottom: -200px;
}
.carousel__pagination-button--active::after {
  background-color: #F2C4524D!important;
}
.carousel__pagination-button {
  background-color: #F2C4524D!important;

}
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
