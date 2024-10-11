<script lang="ts">

import HeaderSection from '@/components/HeaderSection.vue';
import { slides } from "@/common/mockData/aboutCarouselSource";
import CarouselDesktop from '@/components/CarouselDesktop/Carousel.vue';
import CarouselMobile2 from '@/components/CarouselMobile2/Carousel.vue';
export default {
  components: {HeaderSection, CarouselDesktop, CarouselMobile2},
  emits: ['openFullScreenViewHandler'],
  setup(_, { emit }) {
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
<div id="about" class="bg-[#2A657E] max-[1920px]:bgImg py-[44px] max-[1920px]:py-[90px] max-[1920px]:px-[150px]">
  <HeaderSection class="mb-[45px] max-[1920px]:mb-[90px]">
    <template #title >
      <span class="text-[#FBF6ED]">Об отеле</span>
    </template>
    <template #description>
      где мечты о море становятся реальностью
    </template>
  </HeaderSection>
  <div class="max-[1920px]:flex justify-between">
    <div class="max-[1920px]:w-[45%]">
      <div class="max-[1920px]:hidden px-[5%]">
        <CarouselMobile2 :carousel-idx="0" :slides="slides" :interval="3000" controls indicators />
      </div>
      <div class="hidden max-[1920px]:block ml-[-50px]">
        <CarouselDesktop :carousel-idx="0" :slides="slides" :interval="3000" controls indicators @openFullScreenView="openFullScreenViewAscent"></CarouselDesktop>
      </div>
    </div>
    <div class="text-[13px] md:text-[14px] 2xl:text-[20px] ml-[10px] max-[1920px]:w-[48%] text-[#FBF6ED] tracking-[0.8px] lg:leading-[28px] font-montserratRegular">
      <div class="ml-[30px] mr-[30px]">
        <p>Отель "Лилия" на берегу моря с панорамными окнами и завораживающим видом - отличное место для тихого семейного отдыха! Отель находится в 65 км от границы (р. Псоу) и в 300 метрах от городского парка, где детские площадки, набережная, рестораны и кафе.
        </p><br>
        <p>
          Огороженная территория, бесплатная охраняемая парковка, зона барбекю. Организация экскурсий по тур-маршрутам Абхазии, трансфер от границы/аэропорта/жд вокзала до отеля и обратно.
        </p><br>
        <p>
          Профессиональный подход к управлению отелем обеспечивает качественные условия проживания. Замечательный персонал и радушные хозяева, самолично встречающие своих постояльцев.
        </p>
        <p class="pt-[18px] md:text-center lg:text-left">
          Ждем Вас! Добро пожаловать!
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.bgImg {
  background-image: url('@/assets/images/Logo_Liliya_Flower_To_BG.svg');
  background-repeat: no-repeat;
  background-position: 100% 60%;
}
</style>
