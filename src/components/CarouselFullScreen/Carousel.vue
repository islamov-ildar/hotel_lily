<template>
  <div class="carousel">
    <button @click="prev()" class="w-[80px] h-[40px] hover:bg-[#a0a0a0] ml-[20px]" :class="{'bg-[#F2C452]': lastClick === 'prev'}">
      <img src="@/assets/icons/arrow-left.svg" alt="arrow-left" class="mx-auto">
    </button>
    <div class="carousel-inner">
      <carousel-item
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="`item-${index}`"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
      ></carousel-item>
    </div>
    <button  @click="next()" class="w-[80px] h-[40px] hover:bg-[#a0a0a0] mr-[20px]" :class="{'bg-[#F2C452]': lastClick === 'next'}">
      <img src="@/assets/icons/arrow-right.svg" alt="arrow-right" class="mx-auto">
    </button>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";
import CarouselIndicatorsCustom from "@/components/Carousel/CarouselIndicatorsCustom.vue";
import {ref} from "vue";

export default {
  props: {
    slides: {
      type: Array,
      required: true,
    },
    controls: {
      type: Boolean,
      default: false,
    },
    indicators: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 5000,
    },
  },
  components: {CarouselItem},
  data: () => ({
    currentSlide: 0,
    slideInterval: null,
    direction: "right",
    lastClick: 'prev',
  }),
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
    prev(step = -1) {
      const index = this.currentSlide > 0 ? this.currentSlide + step : this.slides.length - 1;
      this.setCurrentSlide(index);
      this.direction = "left";
      this.lastClick = 'prev'
      // this.startSlideTimer();

    },
    _next(step = 1) {
      const index =
        this.currentSlide < this.slides.length - 1
          ? this.currentSlide + step
          : 0;

      this.setCurrentSlide(index);
      this.direction = "right";
    },
    next(step = 1) {
      this.lastClick = 'next'
      this._next(step);
      // this.startSlideTimer();
    },
    // startSlideTimer() {
    //   this.stopSlideTimer();
    //   this.slideInterval = setInterval(() => {
    //     this._next();
    //   }, this.interval);
    // },
    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },
    switchSlide(index) {
      const step = index - this.currentSlide;
      if (step > 0) {
        this.next(step);
      } else {
        this.prev(step);
      }
    },
  },
  mounted() {
    // this.startSlideTimer();
  },
  beforeUnmount() {
    // this.stopSlideTimer();
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.carousel-inner {
  position: relative;
  width: 1200px;
  height: 674px;
  overflow: hidden;
  z-index: 1;
}
</style>
