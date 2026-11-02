<script lang="ts">
import SectionTop from "@/views/sections/SectionTop.vue";
import SectionAbout from "@/views/sections/SectionAbout.vue";
import SectionServices from "@/views/sections/SectionServices.vue";
import SectionRooms from "@/views/sections/SectionRooms.vue";
const FullScreenCarousel = defineAsyncComponent(() => import("@/components/FullScreenCarousel.vue"));
import IFooter from "@/components/IFooter.vue";
import {computed, defineAsyncComponent, inject, onMounted, onBeforeUnmount, ref} from "vue";
import {fetchHotelData, hotelDataKey} from "@/common/hotelData";
import {hotelVideo, scheduleVideoWarmup} from "@/common/videoWarmup";
import {useHomeSeo} from "@/common/seo";
import SectionFeedbacks from "@/views/sections/SectionFeedbacks.vue";
import SectionMap from "@/views/sections/SectionMap.vue";
import IButton from "@/components/IButton.vue";
import IButtonDiscounts from "@/components/IButtonDiscounts.vue";
const FullScreenFeedbackModal = defineAsyncComponent(() => import("@/components/FullScreenFeedbackModal.vue"));
const ContactsModal = defineAsyncComponent(() => import("@/components/ContactsModal.vue"));
import {parseData} from "@/common/utils/parseData";

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

    useHomeSeo();
    const hotelData = inject(hotelDataKey);
    const pricesRefreshFailed = ref(false);
    let active = true;
    let stopVideoWarmup = () => {};
    onMounted(() => { stopVideoWarmup = scheduleVideoWarmup(hotelVideo); });
    onBeforeUnmount(() => stopVideoWarmup());
    onBeforeUnmount(() => { active = false; });
    onMounted(async () => {
      try {
        const latest = await fetchHotelData();
        if (active && hotelData) hotelData.value = latest;
      } catch {
        if (active) pricesRefreshFailed.value = true;
      }
    });
    const dataFromDB = computed(() => hotelData?.value ? parseData(hotelData.value) : undefined);

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
      pricesRefreshFailed,
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
    <p v-if="pricesRefreshFailed" role="status" class="bg-blueMain text-whiteMain text-center px-6 py-4">
      Не удалось обновить цены. <span v-if="dataFromDB">Показаны данные последней публикации; </span>актуальную стоимость уточните при бронировании.
    </p>
    <p v-if="!dataFromDB && !pricesRefreshFailed" role="status" class="text-center py-4">Загружаем актуальные цены…</p>
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
