<template>
  <transition :name="transitionEffect">
    <div v-show="currentSlide === index" class="carousel-item flex items-center justify-center">
      <div
          @mouseenter="$emit('mouseenter')"
          @mouseout="$emit('mouseout')"
      >
        <img v-if="slide.type === 'img'" :src="slide.src" alt="alt"/>
        <div v-else>
          <video controls :src="slide.src" width="1200">
            Простите, но ваш браузер не поддерживает встроенные видео.
          </video>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  emits: ["mouseenter", "mouseout"],
  props: ["slide", "currentSlide", "index", "direction"],
  computed: {
    transitionEffect() {
      return this.direction === "right" ? "slide-out" : "slide-in";
    },
  },
};
</script>

<style scoped>
.carousel-item {
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
</style>
