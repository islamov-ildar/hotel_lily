<script lang="ts">
import RoomDescriptionShort from "@/components/MobileComponents/RoomDescription/RoomDescriptionShort.vue";
import CarouselVerticalMobile from "@/components/MobileComponents/CarouselVerticalMobile/Carousel.vue";
import SectionAccordion from "@/components/MobileComponents/RoomDescription/SectionAccordion.vue";
import {ref} from "vue";
import RoomDescriptionText from "@/components/MobileComponents/RoomDescription/RoomDescriptionText.vue";
import PriceTableVertical from "@/components/MobileComponents/RoomDescription/PriceTableVertical.vue";

export default {
  components: {RoomDescriptionText, SectionAccordion, CarouselVerticalMobile, RoomDescriptionShort, PriceTableVertical},
  props: ['price', 'slides', 'roomDescription'],

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
    <SectionAccordion @click="collapse = !collapse" :title="roomDescription.title" :isCollapse="collapse"/>
    <div v-if="!collapse">
      <div>
        <RoomDescriptionShort :room-description="roomDescription"/>
        <CarouselVerticalMobile :carousel-idx="1" :slides="slides" :interval="3000" controls indicators/>
        <RoomDescriptionText class="mt-[25%] px-[5%]" :room-description="roomDescription"/>
        <PriceTableVertical :price="price"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
