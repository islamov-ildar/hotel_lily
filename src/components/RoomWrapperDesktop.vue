<script lang="ts">
import RoomDescriptionShort from "@/components/MobileComponents/RoomDescription/RoomDescriptionShort.vue";
import CarouselDesktopVertical from "@/components/CarouselDesktopVertical/Carousel.vue";
import RoomDescriptionText from "@/components/MobileComponents/RoomDescription/RoomDescriptionText.vue";
import PriceTable from "@/components/MobileComponents/RoomDescription/PriceTable.vue";
import RoomDescriptionTextHorizontal
  from "@/components/MobileComponents/RoomDescription/RoomDescriptionTextHorizontal.vue";

export default {
  components: {
    RoomDescriptionTextHorizontal,
    CarouselDesktopVertical,
    RoomDescriptionText,
    RoomDescriptionShort,
    PriceTable,
  },
  props: ['price', 'slides', 'roomDescription', 'rightCarousel'],

  setup(_, {emit}) {
    const openFullScreenViewAscent = (slides, imgIdx) => {
      emit('openFullScreenViewHandler', slides, imgIdx);
    }
    return {
      openFullScreenViewAscent,
    }
  }
}
</script>

<template>
<!--  <div class="min-[1500px]:px-[5%]">-->
  <div class="">
    <div class="font-montserratRegular text-whiteMain text-[52px] mb-[40px] min-[1440px]:hidden">
      {{ roomDescription.title }}
    </div>
    <div class="flex w-full justify-between mb-[10%]">
      <CarouselDesktopVertical
          class="w-1/2 min-[1440px]:w-1/3"
          :class="{'order-2': rightCarousel, 'mr-[65px]': rightCarousel}"
          :carousel-idx="1"
          :slides="slides"
          :interval="3000"
          @openFullScreenView="(slides, imgIdx) => $emit('openFullScreenView', slides, imgIdx)"
          controls indicators/>
<!--      <div class="min-[1440px]:pl-[5%] min-[1440px]:w-2/3" >-->
      <div class="min-[1440px]:w-2/3" :class="[rightCarousel ? 'min-[1440px]:pr-[5%]' : 'min-[1440px]:pl-[5%]' ]" >
        <div class="font-montserratRegular text-whiteMain text-[52px] mb-[40px] hidden min-[1440px]:block text-center">
          {{ roomDescription.title }}
        </div>
        <RoomDescriptionShort :room-description="roomDescription"/>
        <PriceTable :price="price" :sleep_places="roomDescription.sleep_place" class="mx-auto hidden min-[1440px]:flex"/>
        <RoomDescriptionText class="mt-[25%] px-[5%] min-[1440px]:hidden" :room-description="roomDescription"/>
        <RoomDescriptionTextHorizontal :room-description="roomDescription" class="hidden min-[1440px]:block" />
      </div>
    </div>
    <PriceTable :price="price" class="mx-auto min-[1440px]:hidden"/>
  </div>
</template>

<style scoped>

</style>
