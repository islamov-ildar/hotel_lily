<script lang="ts">
import IHeader from "@/components/IHeader.vue";

export default {
  components: { IHeader },
  emits: ['openContactsModal'],
}
</script>
<template>
  <div>
    <div class="headerSmall flex justify-between pt-[38px] pb-[15px] px-[14px]">
      <img src="@/assets/icons/burger_menu.svg" width="40px" alt="logo">
      <img src="@/assets/icons/logo_Liliya_small.svg" width="67px" alt="logo">
      <img src="@/assets/icons/bell.svg" width="40px" alt="logo">
    </div>
  </div>
  <div class="wrapper relative">
    <IHeader @openContactsModal="$emit('openContactsModal')" />
      <div class="lg:hidden absolute right-0 top-0 flex items-start gap-[10px] text-[13px] pt-[25px] pr-[14px]">
        <img src="@/assets/images/map-pin.svg" alt="map-pin">
        <div class="text-[#FBF6ED] text-right">
          Абхазия, г. Гудаута,<br> ул. Пушкина, 2
        </div>
      </div>
    <div class="titleContainer relative md:w-[70%] h-[295px] title-background mt-[215px]">
      <div class="font-cormorant text-[#FFFFFF]">
        <div class="textMedia text-[75px] leading-[92px]  pl-[130px]">
          ОТЕЛЬ,<br>
          В КОТОРОМ ВАС<br>
          ВСЕГДА ЖДУТ!
        </div>
        <div class="textMediaSmall text-[54px]">
          ОТЕЛЬ,<br>
          В КОТОРОМ <br>ВАС
          ВСЕГДА <br>ЖДУТ!
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.headerSmall {
  background-color: var(--main-blue-color);
}
@media (min-width: 769px) {
  .headerSmall {
    display: none;
  }
  .textMediaSmall {
    display: none;
  }
}
@media (max-width: 768px) {
  .wrapper {
    @apply flex justify-center items-center
  }
  .titleContainer {
    @apply mt-0 text-[54px] flex justify-center items-center
  }
  .textMedia {
    display: none;
  }
  .textMediaSmall {
    line-height: normal!important;
  }
}
.wrapper {
  width: 100%;
  //max-width: 1920px;
  object-fit: cover;
  background: url("@/assets/images/top-section-cover.png") no-repeat;
  background-size: cover;
  height: 85vh;
}

.title-background {
  background: radial-gradient(at center, rgba(1, 1, 1, 0.3), rgba(1, 1, 1, 0.2), rgba(1, 1, 1, 0.1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
}

</style>
