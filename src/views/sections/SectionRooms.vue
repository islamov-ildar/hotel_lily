<script lang="ts">
import HeaderSection from '@/components/HeaderSection.vue';
import ICarouselRoom from "@/components/ICarouselRoom.vue";
import InfoTable from "@/components/InfoTable.vue";
// import {semiLuxurySeaView, standard, semiLuxuryFamily} from "@/common/mockData/prices";
import {semiluxRoomDescription, standartRoomDescription, familySemiluxRoomDescription} from "@/common/mockData/roomsDescription";
import {slidesStandardRoom} from "@/common/mockData/roomStandardCarouselSource";
import Carousel from '@/components/Carousel/Carousel.vue';
import CarouselVerticalMobile from '@/components/MobileComponents/CarouselVerticalMobile/Carousel.vue';
import {slidesSemiLuxRoom} from "@/common/mockData/roomSemiLuxCarouselSource";
import AdditionalConditions from "@/components/AdditionalConditions.vue";
import type {PropType} from "vue";
import RoomDescriptionShort from "@/components/MobileComponents/RoomDescription/RoomDescriptionShort.vue";
import RoomWrapper from "@/components/MobileComponents/RoomDescription/RoomWrapper.vue";
import {slidesFamilySemiLux} from "@/common/mockData/roomFamilySemiLuxCarouselSource";

export default {
  components: {
    RoomWrapper,
    RoomDescriptionShort,
    AdditionalConditions, ICarouselRoom, HeaderSection, InfoTable, Carousel, CarouselVerticalMobile},
  props: {
    data: {
      type: Object as PropType<any>,
      required: true,
    }
  },
  emits: ['openFullScreenViewHandler'],

  setup(props, { emit }) {
    const openFullScreenViewAscent = (slides, imgIdx) => {
      emit('openFullScreenViewHandler', slides, imgIdx);
    }

    const standard = props.data.standard;
    const semiLuxuryFamily = props.data.semiLuxuryFamily;
    const semiLuxurySeaView = props.data.semiLuxurySeaView;

    return {
      standard,
      semiLuxuryFamily,
      semiLuxurySeaView,
      standartRoomDescription,
      semiluxRoomDescription,
      familySemiluxRoomDescription,
      slidesStandardRoom,
      slidesSemiLuxRoom,
      slidesFamilySemiLux,
      openFullScreenViewAscent,
    }
  }

};
</script>

<template>
<div id="rooms" class="bg-[#2A657E] pt-[50px] lg:py-[90px] lg:px-[150px] relative overflow-hidden">
  <div class="glare w-[1000px] h-[1000px] absolute top-[10%] left-[-20%] z-0"></div>
  <div class="glare w-[1000px] h-[1000px] absolute top-0 right-[-20%] z-0"></div>
  <HeaderSection class="mb-[40px] lg:mb-[90px] z-10 relative">
    <template #title >
      <span class="text-[#FBF6ED]">Комфорт в номерах</span>
    </template>
    <template #description>
      ваш дом, даже вдали от дома
    </template>
  </HeaderSection>
  <AdditionalConditions />
  <div class="flex flex-col lg:flex-row lg:gap-[110px] text-[20px] z-[9] relative lg:mb-[200px]">
    <div class="lg:hidden">
      <RoomWrapper :price="standard" :slides="slidesStandardRoom" :roomDescription="standartRoomDescription"/>
      <RoomWrapper :price="semiLuxurySeaView" :slides="slidesSemiLuxRoom" :roomDescription="semiluxRoomDescription" />
      <RoomWrapper :price="semiLuxuryFamily" :slides="slidesFamilySemiLux" :roomDescription="familySemiluxRoomDescription" />
    </div>
    <div class="hidden lg:block">
      <div class="hidden lg:block w-[45%]">
        <Carousel :carousel-idx="1" :type-vertical="true" :slides="slidesStandardRoom" :interval="3000" controls indicators @openFullScreenView="openFullScreenViewAscent"></Carousel>
      </div>
      <div class="ml-[120px] w-[55%]">
        <InfoTable :price="standard" :roomDescription="standartRoomDescription" />
      </div>
      <div class="flex ml-[85px] gap-[100px] text-[20px] z-[9] relative mb-[200px]">
        <div class="w-[55%]">
          <InfoTable :price="semiLuxurySeaView" :roomDescription="semiluxRoomDescription"/>
        </div>
        <div class="w-[45%]">
          <Carousel :carousel-idx="1" type-vertical onRight :slides="slidesSemiLuxRoom" :interval="3000" controls indicators @openFullScreenView="openFullScreenViewAscent"></Carousel>
        </div>
      </div>
      <div class="flex gap-[110px] text-[20px] z-[9] relative mb-[200px]">
        <div class="w-[45%]">
          <Carousel :carousel-idx="1" :type-vertical="true" :slides="slidesSemiLuxRoom" :interval="3000" controls indicators @openFullScreenView="openFullScreenViewAscent"></Carousel>
        </div>
        <div class="ml-[120px] w-[55%]">
          <InfoTable :price="semiLuxuryFamily" :roomDescription="familySemiluxRoomDescription" />
        </div>
      </div>
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
