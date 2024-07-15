<script lang="ts">
import SectionTop from "@/views/sections/SectionTop.vue";
import SectionAbout from "@/views/sections/SectionAbout.vue";
import SectionServices from "@/views/sections/SectionServices.vue";
import SectionRooms from "@/views/sections/SectionRooms.vue";
import FullScreenCarousel from "@/components/FullScreenCarousel.vue";
import IFooter from "@/components/IFooter.vue";
import {ref} from "vue";
import SectionFeedbacks from "@/views/sections/SectionFeedbacks.vue";
import SectionMap from "@/views/sections/SectionMap.vue";
import IButton from "@/components/IButton.vue";
import FullScreenFeedbackModal from "@/components/FullScreenFeedbackModal.vue";

export default {
  components: { FullScreenFeedbackModal,IButton, IFooter,SectionMap, SectionFeedbacks, FullScreenCarousel, SectionRooms, SectionTop, SectionAbout, SectionServices },
  setup() {
    const showFullscreenCarousel = ref(false);
    const showFullscreenFeedback = ref(false);
    const fullscreenFeedback = ref();
    const slidesForFullscreenCarousel = ref([]);
    const targetImgIdx = ref();
    const openFullScreenCarousel = (slides: any, imgIdx: number) => {
      targetImgIdx.value = imgIdx;
      showFullscreenCarousel.value = true;
      slidesForFullscreenCarousel.value = slides;
    }
    const openFullScreenFeedbackView = (feedback: any) => {
      console.log('openFullScreenFeedbackView', feedback)
      fullscreenFeedback.value = feedback;
      showFullscreenFeedback.value = true;
    }

    return {
      showFullscreenCarousel,
      openFullScreenCarousel,
      slidesForFullscreenCarousel,
      targetImgIdx,
      openFullScreenFeedbackView,
      fullscreenFeedback,
      showFullscreenFeedback,
    }
  }
}
</script>

<template>
  <div>
    <IButton label="Забронировать"/>
  </div>
  <SectionTop />
  <SectionAbout @openFullScreenViewHandler="openFullScreenCarousel" />
  <SectionServices />
  <SectionRooms @openFullScreenViewHandler="openFullScreenCarousel" />
  <SectionFeedbacks @openFullScreenFeedback="openFullScreenFeedbackView" />
  <SectionMap />
  <IFooter />
  <FullScreenCarousel :imgIdx="targetImgIdx" v-if="showFullscreenCarousel" :slides="slidesForFullscreenCarousel" @close="showFullscreenCarousel = false" />
  <FullScreenFeedbackModal v-if="showFullscreenFeedback" :feedback="fullscreenFeedback" @close="showFullscreenFeedback = false" />
</template>
