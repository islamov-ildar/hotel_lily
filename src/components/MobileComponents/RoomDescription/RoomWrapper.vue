<script lang="ts">
import RoomDescriptionShort from "@/components/MobileComponents/RoomDescription/RoomDescriptionShort.vue";
import {standartRoomDescription} from "@/common/mockData/roomsDescription";
import CarouselVerticalMobile from "@/components/MobileComponents/CarouselVerticalMobile/Carousel.vue";
import {slidesStandardRoom} from "@/common/mockData/roomStandardCarouselSource";

export default {
  methods: {
    slidesStandardRoom() {
      return slidesStandardRoom
    },
    standartRoomDescription() {
      return standartRoomDescription
    }
  },
  components: {CarouselVerticalMobile, RoomDescriptionShort}
}
</script>

<template>
  <div class="px-[5%]">

    <RoomDescriptionShort :room-description="standartRoomDescription()"/>
    <CarouselVerticalMobile :carousel-idx="1" :slides="slidesStandardRoom()" :interval="3000" controls indicators/>
  </div>
</template>

<style scoped>

</style>