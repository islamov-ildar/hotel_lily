<script lang="ts">
import RoomDescriptionShort from "@/components/MobileComponents/RoomDescription/RoomDescriptionShort.vue";
import {standartRoomDescription} from "@/common/mockData/roomsDescription";
import CarouselVerticalMobile from "@/components/MobileComponents/CarouselVerticalMobile/Carousel.vue";
import {slidesStandardRoom} from "@/common/mockData/roomStandardCarouselSource";
import SectionAccordion from "@/components/MobileComponents/RoomDescription/SectionAccordion.vue";
import {ref} from "vue";
import RoomDescriptionText from "@/components/MobileComponents/RoomDescription/RoomDescriptionText.vue";

export default {
  methods: {
    slidesStandardRoom() {
      return slidesStandardRoom
    },
    standartRoomDescription() {
      return standartRoomDescription
    }
  },
  components: {RoomDescriptionText, SectionAccordion, CarouselVerticalMobile, RoomDescriptionShort},
  setup() {
    const collapse = ref(true);

    return {
      collapse,
    }
  }
}
</script>

<template>
  <div class="px-[5%]">
    <SectionAccordion @click="collapse = !collapse" :title="standartRoomDescription().title" :isCollapse="collapse" />
    <div v-if="!collapse">
      <RoomDescriptionShort :room-description="standartRoomDescription()"/>
      <CarouselVerticalMobile :carousel-idx="1" :slides="slidesStandardRoom()" :interval="3000" controls indicators/>
      <RoomDescriptionText class="mt-[25%] px-[5%]" :room-description="standartRoomDescription()" />
      <PriceTableVertical />
    </div>
  </div>
</template>

<style scoped>

</style>