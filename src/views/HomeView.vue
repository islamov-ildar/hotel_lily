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
import IButtonDiscounts from "@/components/IButtonDiscounts.vue";
import FullScreenFeedbackModal from "@/components/FullScreenFeedbackModal.vue";
import ContactsModal from "@/components/ContactsModal.vue";
import {parseData} from "@/common/utils/parseData";
import {getAll} from '@/firebase-api.js';
import SectionDeveloperInfo from "@/views/sections/SectionDeveloperInfo.vue";

export default {
  components: {
    SectionDeveloperInfo,
    IButtonDiscounts,
    ContactsModal,
    FullScreenFeedbackModal,
    IButton,
    IFooter,
    SectionMap,
    SectionFeedbacks,
    FullScreenCarousel,
    SectionRooms,
    SectionTop,
    SectionAbout,
    SectionServices
  },
  setup() {

    const dataFromDB = ref();

    getAll().then(res => {
      console.log('getAll in Home.vue', res);
      dataFromDB.value = parseData(res);
    });

    const showFullscreenCarousel = ref(false);
    const showFullscreenFeedback = ref(false);
    const showContacts = ref(false);
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
      showContacts,
      dataFromDB,
    }
  }
}
</script>

<template>
  <div class="relative">
    <div>
      <IButton label="Забронировать"/>
    </div>
    <IButtonDiscounts v-if="dataFromDB && dataFromDB.isSalesEnabled" :data="dataFromDB.salesText" label="Скидки"/>
    <SectionTop @openContactsModal="showContacts = true"/>
    <SectionAbout @openFullScreenViewHandler="openFullScreenCarousel"/>
    <SectionServices/>
    <SectionRooms v-if="dataFromDB" :data="dataFromDB" @openFullScreenViewHandler="openFullScreenCarousel"/>
    <SectionFeedbacks @openFullScreenFeedback="openFullScreenFeedbackView"/>
    <SectionMap/>
    <IFooter/>
    <SectionDeveloperInfo/>
    <FullScreenCarousel :imgIdx="targetImgIdx" v-if="showFullscreenCarousel" :slides="slidesForFullscreenCarousel"
                        @close="showFullscreenCarousel = false"/>
    <FullScreenFeedbackModal v-if="showFullscreenFeedback" :feedback="fullscreenFeedback"
                             @close="showFullscreenFeedback = false"/>
    <ContactsModal v-if="showContacts" @close="showContacts = false"/>
  </div>
</template>
