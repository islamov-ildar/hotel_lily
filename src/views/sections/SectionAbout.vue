<script>

import HeaderSection from '@/components/HeaderSection.vue';
import { slides } from "@/common/mockData/aboutCarouselSource";
import Carousel from '@/components/Carousel/Carousel.vue';

export default {
  components: {HeaderSection, Carousel},
  emits: ['openFullScreenViewHandler'],
  setup(_, { emit }) {
    const openFullScreenViewAscent = (slides) => {
      emit('openFullScreenViewHandler', slides);
    }
    return {
      openFullScreenViewAscent,
      slides,
    }
  }
};
</script>

<template>
<div class="bg-[#2A657E] bgImg py-[90px] px-[150px]">
  <HeaderSection class="mb-[90px]">
    <template #title >
      <span class="text-[#FBF6ED]">Об отеле</span>
    </template>
    <template #description>
      где мечты о море становятся реальностью
    </template>
  </HeaderSection>
  <div class="flex gap-[110px] text-[20px]">
    <div class="w-1/2">
      <div class="ml-[-50px]">
        <Carousel :carousel-idx="0" :slides="slides" :interval="3000" controls indicators @openFullScreenView="openFullScreenViewAscent"></Carousel>
      </div>
    </div>
    <div class="text-[18px] ml-[10px] w-1/2 text-[#FBF6ED] tracking-[0.8px] leading-[28px] font-montserratRegular">
      <div class="ml-[30px]">
        <p>
          Отель "Лилия" на берегу моря с панорамными окнами и завораживающим видом - отличное место для тихого семейного отдыха! Отель находится в 65 км от границы (р. Псоу) и в 300 метрах от городского парка, где детские площадки, набережная, рестораны и кафе.
        </p><br>
        <p>
          Огороженная территория, бесплатная охраняемая парковка, зона барбекю, бар на территории базы. Организация экскурсий по тур-маршрутам Абхазии, трансфер от границы до места и обратно.
        </p><br>
        <p>
          Профессиональный подход к управлению отелем обеспечивает качественные условия проживания. Замечательный персонал и радушные хозяева, самолично встречающие своих постояльцев.
        </p><br>
        <p>
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
