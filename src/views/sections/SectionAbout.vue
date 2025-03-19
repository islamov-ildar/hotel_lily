<script lang="ts">

import HeaderSection from '@/components/HeaderSection.vue';
import {slides} from "@/common/mockData/aboutCarouselSource";
import CarouselDesktop from '@/components/CarouselDesktop/Carousel.vue';
import CarouselMobile2 from '@/components/CarouselMobile2/Carousel.vue';

export default {
  components: {HeaderSection, CarouselDesktop, CarouselMobile2},
  emits: ['openFullScreenViewHandler'],
  setup(_, {emit}) {
    const openFullScreenViewAscent = (slides, imgIdx) => {
      emit('openFullScreenViewHandler', slides, imgIdx);
    }
    return {
      openFullScreenViewAscent,
      slides,
    }
  }
};
</script>

<template>
  <div id="about" class="bg-[#2A657E] bgImg py-[44px] fhd:py-[90px] fhd:px-[150px]">
    <HeaderSection class="mb-[45px] lg:mb-[70px] fhd:mb-[90px]">
      <template #title>
        <span class="text-[#FBF6ED]">Об отеле</span>
      </template>
      <template #description>
        где мечты о море становятся реальностью
      </template>
    </HeaderSection>
    <div class="fhd:flex justify-between fhd:mx-auto">
      <div class="fhd:w-[45%]">
        <div class="fhd:hidden px-[5%]">
          <CarouselMobile2 :carousel-idx="0" :slides="slides" :interval="3000" controls indicators @openFullScreenView="openFullScreenViewAscent" />
        </div>
        <div class="hidden fhd:block ml-[-50px]">
          <CarouselDesktop :carousel-idx="0" :slides="slides" :interval="3000" controls indicators
                           @openFullScreenView="openFullScreenViewAscent" />
        </div>
      </div>
      <div
          class="text-[13px] mt-[-5%] fhd:mt-0 md:text-[14px] lg:text-[20px] md:px-[5%] ml-[10px] fhd:w-[48%] text-[#FBF6ED] tracking-[0.8px] lg:leading-[28px] font-montserratRegular">
        <div class="ml-[30px] mr-[30px]">
          <p>Отель "Лилия" на берегу моря с панорамными окнами и завораживающим видом - отличное место для тихого
            семейного отдыха! Отель находится в 65 км от границы (р. Псоу) и в 300 метрах от городского парка, где
            детские площадки, набережная, рестораны и кафе.
          </p><br>
          <p>
            Огороженная территория, охраняемая парковка, зона барбекю. Организация экскурсий по тур-маршрутам
            Абхазии, трансфер от границы/аэропорта/жд вокзала до отеля и обратно.
          </p><br>
          <p>
            Профессиональный подход к управлению отелем обеспечивает качественные условия проживания. Замечательный
            персонал и радушные хозяева, самолично встречающие своих постояльцев.
          </p>
          <p class="pt-[18px] md:text-center fhd:text-left">
            Ждем Вас! Добро пожаловать!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1920px) {
  .bgImg {
    background-image: url('@/assets/images/Logo_Liliya_Flower_To_BG.svg');
    background-repeat: no-repeat;
    background-position: 100% 60%;
  }
}
</style>
