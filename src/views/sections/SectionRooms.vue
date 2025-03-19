<script lang="ts">
import HeaderSection from '@/components/HeaderSection.vue';
import {semiluxRoomDescription, standartRoomDescription, familySemiluxRoomDescription} from "@/common/mockData/roomsDescription";
import {slidesStandardRoom} from "@/common/mockData/roomStandardCarouselSource";
import {slidesSemiLuxRoom} from "@/common/mockData/roomSemiLuxCarouselSource";
import AdditionalConditions from "@/components/AdditionalConditions.vue";
import type {PropType} from "vue";
import RoomWrapper from "@/components/MobileComponents/RoomDescription/RoomWrapper.vue";
import {slidesFamilySemiLux} from "@/common/mockData/roomFamilySemiLuxCarouselSource";
import RoomWrapperDesktop from "@/components/RoomWrapperDesktop.vue";

export default {
  components: {
    RoomWrapperDesktop,
    RoomWrapper,
    AdditionalConditions, HeaderSection},
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
<div id="rooms" class="bg-[#2A657E] pt-[50px] lg:py-[90px] lg:px-[5%] relative overflow-hidden">
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
  <div class="flex flex-col lg:gap-[110px] text-[20px] z-[9] relative lg:mb-[200px]">
    <div class="lg:hidden mb-[40px]">
      <RoomWrapper :price="standard" :slides="slidesStandardRoom" :roomDescription="standartRoomDescription"/>
      <RoomWrapper :price="semiLuxurySeaView" :slides="slidesSemiLuxRoom" :roomDescription="semiluxRoomDescription" />
      <RoomWrapper :price="semiLuxuryFamily" :slides="slidesFamilySemiLux" :roomDescription="familySemiluxRoomDescription" />
    </div>
    <div class="hidden lg:flex flex-col gap-[230px] min-[1440px]:gap-[100px]">
      <RoomWrapperDesktop @openFullScreenView="openFullScreenViewAscent" :price="standard" :slides="slidesStandardRoom" :roomDescription="standartRoomDescription" />
      <RoomWrapperDesktop @openFullScreenView="openFullScreenViewAscent" :price="semiLuxurySeaView" :slides="slidesSemiLuxRoom" :roomDescription="semiluxRoomDescription" :rightCarousel="true" />
      <RoomWrapperDesktop @openFullScreenView="openFullScreenViewAscent" :price="semiLuxuryFamily" :slides="slidesFamilySemiLux" :roomDescription="familySemiluxRoomDescription" />
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
