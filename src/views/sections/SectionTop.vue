<script lang="ts">
import IHeader from "@/components/IHeader.vue";
import MobileBlackout from "@/components/MobileComponents/MobileBlackout.vue";
import {mobileBooking, mobileMenuContent} from "@/components/MobileComponents/mockData"
import {ref} from "vue";
export default {
  components: {MobileBlackout, IHeader},
  emits: ['openContactsModal'],
  setup(){

    const showBooking = ref(false);
    const showMenu = ref(false);

    return {
      showMenu,
      showBooking,
      mobileBooking,
      mobileMenuContent,
    }
  }
}
</script>
<template>
  <div>
    <div class="headerSmall flex justify-between pt-[38px] pb-[15px] px-[14px]">
      <img @click="showMenu = !showMenu; showBooking = false" src="@/assets/icons/burger_menu.svg" width="40px" alt="logo">
      <img src="@/assets/icons/logo_Liliya_small.svg" width="67px" alt="logo">
      <img @click="showBooking = !showBooking; showMenu = false" src="@/assets/icons/bell.svg" width="40px" alt="logo">
    </div>
  </div>
  <div class="wrapper relative">
    <IHeader @openContactsModal="$emit('openContactsModal')"/>
<!--    <div class="md:hidden">-->
    <div class="mobileBlackoutWrapper">
      <MobileBlackout v-if="showBooking" @close="showBooking = false">
        <div class="flex flex-col justify-between items-center h-full pb-[10%]">
          <div class="text-[34px] text-whiteMain font-cormorant text-center">Бронирование<br>номеров</div>
          <a v-for="(item, idx) in mobileBooking" :key="idx" :href="item.link">
            <img :src="`/src/assets/icons/${item.iconName}.svg`" alt="cross" class="w-[55px]">
          </a>
        </div>
      </MobileBlackout>
      <MobileBlackout v-if="showMenu" @close="showMenu = false">
        <div @click="showMenu = false" class="flex flex-col justify-between items-center h-full pb-[10%]">
          <a v-for="(item, idx) in mobileMenuContent" :key="idx" :href="item.link" class="w-full">
            <div class="text-[20px] text-whiteMain py-[23px] menuItem w-full text-center">{{item.title}}</div>
          </a>
          <a href="#map">
            <div class="flex items-start gap-[10px] text-[20px] pt-[25px] pr-[14px]">
              <img src="@/assets/images/map-pin.svg" alt="map-pin">
              <div class="text-[#FBF6ED] text-left">
                Абхазия, г. Гудаута,<br> ул. Пушкина, 2
              </div>
            </div>
          </a>
        </div>
      </MobileBlackout>
    </div>
    <div class="addressInMobile absolute right-0 top-0 flex items-start gap-[10px] text-[13px] pt-[25px] pr-[14px]">
      <img src="@/assets/images/map-pin.svg" alt="map-pin">
      <div class="text-[#FBF6ED] text-right">
        Абхазия, г. Гудаута,<br> ул. Пушкина, 2
      </div>
    </div>
    <div class="titleContainer relative md:w-[70%] w-full h-[70%] title-background mt-[215px]">
      <div class="font-cormorant text-[#FFFFFF]">
        <div class="hidden md:block textMedia text-[54px] lg:text-[75px] leading-[92px] pl-[130px]">
          ОТЕЛЬ,<br>
          В&nbsp;КОТОРОМ&nbsp;ВАС<br>
          ВСЕГДА&nbsp;ЖДУТ!
        </div>
        <div class="md:hidden textMediaSmall text-[54px]">
          ОТЕЛЬ,<br>
          В КОТОРОМ <br>ВАС
          ВСЕГДА <br>ЖДУТ!
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menuItem {
  border-bottom: 1px solid var(--main-blue-color);
}
.headerSmall {
  background-color: var(--main-blue-color);
}

@media (min-width: 769px) {
  .headerSmall {
    display: none;
  }

  .mobileBlackoutWrapper {
    display: none;
  }
  .addressInMobile {
    display: none;
  }
  .textMediaSmall{
    padding-left: 20%;
  }
}

.wrapper {
  width: 100%;
  object-fit: cover;
  background: url("@/assets/images/top-section-cover.png") no-repeat;
  background-size: cover;
  height: 100vh;
}

@media (max-width: 768px) {
  .wrapper {
    @apply flex justify-center items-center h-[86vh]
  }
  .titleContainer {
    @apply mt-0 text-[54px] flex justify-center items-center
  }
}



.title-background {
  background: radial-gradient(at center, rgba(1, 1, 1, 0.3), rgba(1, 1, 1, 0.2), rgba(1, 1, 1, 0.1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
}

</style>
