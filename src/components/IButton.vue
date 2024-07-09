<script lang="ts">

import {ref} from "vue";

export default {
  props: {
    label: {type: String, required: true}
  },
  setup(){
    const showFullBtn = ref<boolean>(false);

    return {
      showFullBtn,
    }
  }
};

</script>

<template>
<!--  <button class="rounded-full hover:rounded-none px-[70px] py-[30px] text-[28px]">-->
  <div
      @mouseenter="showFullBtn = true"
      @mouseleave="showFullBtn = false"
      class="btn fixed bottom-[120px] right-[50px] z-20"
      :class="{'h-[86px] w-[382px]': showFullBtn, 'h-[86px] w-[100px]': !showFullBtn}">
    <div class="relative flex items-center">
      <transition name="fullBtn">
        <div v-if="showFullBtn" class="cursor-pointer absolute rounded-[60px] right-0 top-0 btnLabel px-[35px] py-[17px] text-[28px] bg-yellowMain text-left text-[#FFFFFF]">
          {{ label }}
        </div>
      </transition>
      <transition name="smallBtn">
        <div v-if="!showFullBtn" class="pulse absolute mt-[-4px] right-0 top-0 w-[86px] h-[86px] yellowBgTelegram">
          <img src="@/assets/icons/yellowBgTelegram.svg" height="86" width="86" alt="yellowBgTelegram">
        </div>
      </transition>
    </div>

  </div>
</template>

<style scoped>
/*.pulse{
  transition: all .5s;
  animation: shadow 2.2s infinite linear;
  background-color: #F2C45299;
  border-radius: 50%;
}

@keyframes shadow {
  0% {
    box-shadow: 0 0 10px 0 #F2C45299, 0 0 10px 0 #F2C45299;
  }
  100% {
    box-shadow: 0 0 18px 6px rgba(255, 48, 26, 0), 0 0 4px 50px rgba(255, 48, 26, 0);
  }
}

 */
.pulse::after,
.pulse::before {
  content: '';
  position: absolute;
  border: 3px solid #F2C452;
  left: -20px;
  opacity: 0;
  right: -20px;
  top: -20px;
  bottom: -20px;
  border-radius: 50%;
  animation: pulse 2.5s linear infinite;
}

.pulse::after {
  animation-delay: 1.25s;
}

@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}




.fullBtn-enter-active,
.fullBtn-leave-active {
  transition: opacity 0.5s ease;
}

.fullBtn-enter-from,
.fullBtn-leave-to {
  opacity: 0;
}
.smallBtn-enter-active,
.smallBtn-leave-active {
  transition: opacity 1s ease;
}

.smallBtn-enter-from,
.smallBtn-leave-to {
  opacity: 0;
}
</style>
