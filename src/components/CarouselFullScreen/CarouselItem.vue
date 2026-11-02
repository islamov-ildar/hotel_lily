<template>
  <transition :name="transitionEffect">
    <div v-if="currentSlide === index" class="carousel-item flex items-center justify-center h-full">
      <div
          @mouseenter="$emit('mouseenter')"
          @mouseout="$emit('mouseout')"
          class="h-full flex items-center"
      >
<!--        <img v-if="slide.type === 'img' && currentSlide === index" :src="slide.src" :alt="slide.alt || 'Фотография отеля «Лилия»'" class="h-full"/>-->
        <img v-if="slide.type === 'img' && currentSlide === index" :src="slide.src" :alt="slide.alt || 'Фотография отеля «Лилия»'" class="fullscreen-photo" />
        <div v-else class="h-full flex items-center justify-center">
          <VideoPlayer :src="slide.src" class="w-[80vw]" :poster="slide.poster" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  components: { VideoPlayer },
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
@media (min-width: 1920px) { .fullscreen-photo { height: 100%; } }
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
