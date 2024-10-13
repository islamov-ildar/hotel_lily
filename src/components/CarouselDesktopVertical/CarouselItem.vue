<template>
  <transition :name="transitionEffect">
    <div
      @click="$emit('clickOnImg', index)"
      v-if="slide.type === 'img'"
      class="carousel-item topCircle"
      v-show="currentSlide === index"
      @mouseenter="$emit('mouseenter')"
      @mouseout="$emit('mouseout')"
    >
      <div class="indicatorImg topCircle">
        <img src="@/assets/images/Zoom.svg" alt="Zoom" class="">
      </div>
      <img :src="slide.src" alt="Nature" class="responsive" >
    </div>
    <div v-else class="carousel-item" v-show="currentSlide === index">
      <video controls :src="slide.src" width="100%" muted>
        Простите, но ваш браузер не поддерживает встроенные видео.
      </video>
    </div>
  </transition>
</template>

<script>
import {computed} from "vue";

export default {
  emits: ["mouseenter", "mouseout", "clickOnImg"],
  props: ["slide", "currentSlide", "index", "direction", "typeVertical"],

  setup(props) {
    const transitionEffect = computed(() => props.direction === "right" ? "slide-out" : "slide-in");

    const customStyle = (url) => {
      return {
        'background-image': `url(${url})`,
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        'background-position': 'center',
      };
    };

    return {transitionEffect, customStyle}
  },
};
</script>

<style scoped>
.responsive {
  width: 100%;
  //max-width: 400px;
  height: auto;
  border-radius: 290px 290px 0 0;
}
.indicatorImg {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.55);
}
.carousel-item:hover .indicatorImg {
  visibility: visible;
}
.carousel-item {
  //padding: 0 25px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}
.topCircle {
  border-radius: 290px 290px 0 0;
}
</style>
