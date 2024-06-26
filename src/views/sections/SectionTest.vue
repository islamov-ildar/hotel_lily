<script lang="ts">

import HeaderSection from '@/components/HeaderSection.vue';
import Carousel from '@/components/Carousel/Carousel.vue';
import { slides } from "@/common/mockData/aboutCarouselSource";

export default {
  components: {HeaderSection, Carousel},
  setup(){
    return {
      slides
    }
  },
};
</script>

<template>
<div class="bg-[#2A657E] bgImg py-[90px] px-[150px]">
  <HeaderSection class="mb-[90px]">
    <template #title >
      <span class="text-[#FBF6ED]">Test</span>
    </template>
    <template #description>
      TestTestTestTest
    </template>
  </HeaderSection>
  <div>
    <carousel :slides="slides" :interval="3000" controls></carousel>
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
