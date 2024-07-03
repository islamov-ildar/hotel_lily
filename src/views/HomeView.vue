<script lang="ts">
import SectionTop from "@/views/sections/SectionTop.vue";
import SectionAbout from "@/views/sections/SectionAbout.vue";
import SectionServices from "@/views/sections/SectionServices.vue";
import SectionRooms from "@/views/sections/SectionRooms.vue";
import SectionTest from "@/views/sections/SectionTest.vue";
import FullScreenCarousel from "@/components/FullScreenCarousel.vue";
import {ref} from "vue";

export default {
  components: {FullScreenCarousel, SectionRooms, SectionTop, SectionAbout, SectionServices, SectionTest },
  setup() {
    const showFullscreenCarousel = ref(false);
    const slidesForFullscreenCarousel = ref([]);
    const targetImgIdx = ref();
    const openFullScreenCarousel = (slides: any, imgIdx: number) => {
      targetImgIdx.value = imgIdx;
      showFullscreenCarousel.value = true;
      slidesForFullscreenCarousel.value = slides;
    }

    return {
      showFullscreenCarousel,
      openFullScreenCarousel,
      slidesForFullscreenCarousel,
      targetImgIdx
    }
  }
}
</script>

<template>
  <SectionTop />
  <SectionAbout @openFullScreenViewHandler="openFullScreenCarousel" />
  <SectionServices />
  <SectionRooms @openFullScreenViewHandler="openFullScreenCarousel" />
  <SectionTest />
  <FullScreenCarousel :imgIdx="targetImgIdx" v-if="showFullscreenCarousel" :slides="slidesForFullscreenCarousel" @close="showFullscreenCarousel = false"/>
</template>
