<script lang="ts">
import HeaderSection from '@/components/HeaderSection.vue';
import ICarouselRoom from "@/components/ICarouselRoom.vue";
import InfoTable from "@/components/InfoTable.vue";
import {semiLuxurySeaView, standard} from "@/common/mockData/prices";
import {standartRoomDescription} from "@/common/mockData/roomsDescription";
import {slidesStandardRoom} from "@/common/mockData/roomStandardCarouselSource";
import Carousel from '@/components/Carousel/Carousel.vue';

export default {
  components: {ICarouselRoom, HeaderSection, InfoTable, Carousel},
  emits: ['openFullScreenViewHandler'],

  setup(_, { emit }) {
    const openFullScreenViewAscent = (slides) => {
      emit('openFullScreenViewHandler', slides);
    }

    console.log('slidesStandardRoom', slidesStandardRoom)
    return {
      standard,
      semiLuxurySeaView,
      standartRoomDescription,
      slidesStandardRoom,
      openFullScreenViewAscent
    }
  }

};
</script>

<template>
<div class="bg-[#2A657E] py-[90px] px-[150px] relative overflow-hidden">
  <div class="glare w-[1000px] h-[1000px] absolute top-[10%] left-[-20%] z-0"></div>
  <div class="glare w-[1000px] h-[1000px] absolute top-0 right-[-20%] z-0"></div>
  <HeaderSection class="mb-[90px] z-10 relative">
    <template #title >
      <span class="text-[#FBF6ED]">Комфорт в номерах</span>
    </template>
    <template #description>
      ваш дом, даже вдали от дома
    </template>
  </HeaderSection>
  <div class="flex gap-[110px] text-[20px] z-10 relative mb-[200px]">
    <div class="w-[45%]">
<!--      <ICarouselRoom />-->
      <Carousel :carousel-idx="1" type-vertical :slides="slidesStandardRoom" :interval="3000" controls indicators @openFullScreenView="openFullScreenViewAscent"></Carousel>
    </div>
    <div class="ml-[120px] w-[55%]">
      <InfoTable :price="standard" :roomDescription="standartRoomDescription" />
    </div>
  </div>
  <div class="flex gap-[10px] text-[20px] z-10 relative">
    <div class="mr-[120px] w-[55%]">
      <InfoTable :price="semiLuxurySeaView" :roomDescription="standartRoomDescription"/>
    </div>
    <div class="w-[45%]">
      <ICarouselRoom />
    </div>
  </div>
</div>
</template>

<style scoped>
.glare {
  background: rgba(42,131,169, 0.9);
  background: radial-gradient(at center, rgba(42,131,169, 0.7), rgba(42,131,169, 0.6), rgba(42,131,169, 0.3), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
}
</style>
