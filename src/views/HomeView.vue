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
    // let slidesForFullscreenCarousel: any = [];

    const openFullScreenCarousel = (slides: any) => {
      showFullscreenCarousel.value = true;
      slidesForFullscreenCarousel.value = slides;
    }

    return {
      showFullscreenCarousel,
      openFullScreenCarousel,
      slidesForFullscreenCarousel,
    }
  }
}
</script>

<template>
  <SectionTop />
  <SectionAbout @openFullScreenViewHandler="openFullScreenCarousel" />
  <SectionServices />
  <SectionRooms />
  <SectionTest />
  <FullScreenCarousel v-if="showFullscreenCarousel" :slides="slidesForFullscreenCarousel" @close="showFullscreenCarousel = false"/>
</template>
