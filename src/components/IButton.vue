<script lang="ts">

import {onMounted, ref} from "vue";

export default {
  props: {
    label: {type: String, required: true}
  },
  setup(){
    const showFullBtn = ref<boolean>(false);

    const isOnBottom = ref(false);

    onMounted(() => {
        document.addEventListener('scroll', function() {
          const documentHeight = document.body.scrollHeight;
          const currentScroll = window.scrollY + window.innerHeight;
          const modifier = 10;
          isOnBottom.value = currentScroll + modifier > documentHeight;
        })
    })

    return {
      showFullBtn,
      isOnBottom,
    }
  }
};

</script>

<template>
  <div
      @mouseenter="showFullBtn = true"
      @mouseleave="showFullBtn = false"
      class="btn fixed bottom-[40px] lg:bottom-[120px] right-[10px] md:right-[50px] z-[11]"
      :class="{'h-[86px] w-[382px]': showFullBtn, 'h-[86px] w-[100px]': !showFullBtn, onBottom: isOnBottom}">
    <div class="relative flex items-center">
      <transition name="fullBtn">
        <div v-if="showFullBtn" class="z-[11] cursor-pointer absolute rounded-[60px] right-0 top-0 btnLabel px-[35px] py-[17px] text-[28px] bg-yellowMain text-left text-[#FFFFFF]">
          <a href="https://t.me/Asmat_Agumava">
            {{ label }}
          </a>
        </div>
      </transition>
      <transition name="smallBtn">
        <div v-if="!showFullBtn" class="z-[10] pulse absolute mt-[-4px] right-0 top-0 w-[86px] h-[86px] yellowBgTelegram">
          <img src="@/assets/icons/yellowBgTelegram.svg" height="86" width="86" alt="yellowBgTelegram">
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.btn {
  transition: margin 700ms;
}
.onBottom {
  margin-bottom: 50px;
}

@media (max-width: 550px) {
  .onBottom {
    margin-bottom: 90px;
  }
}

.pulse::before {
  content: '';
  position: absolute;
  border: 60px solid #F2C452;
  left: -20px;
  opacity: 1;
  right: -20px;
  top: -20px;
  bottom: -20px;
  border-radius: 100%;
  animation: pulse 2s linear infinite;
}

.pulse::after {
  animation-delay: 0.5s;
}

@keyframes pulse {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  25% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.pulse {
  animation: scalePulse 2s linear infinite;
}

@keyframes scalePulse {
  0% {
    transform:  scale(1);
  }
  50% {
    transform:  scale(0.8);
  }
  60% {
    transform:  scale(1);
  }
  100% {
    transform:  scale(1);
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
  transition: opacity 0.5s;
}

.smallBtn-enter-from,
.smallBtn-leave-to {
  opacity: 0;
}
</style>
