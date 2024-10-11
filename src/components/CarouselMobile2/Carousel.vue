<script>
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";
import CarouselIndicatorsCustom from "./CarouselIndicatorsCustom.vue";

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
    typeVertical: {
      type: Boolean,
      default: false,
    },
    onRight: {
      type: Boolean,
      default: false,
    },
    carouselIdx: {
      type: Number,
      default: 0,
    }
  },
  components: {CarouselIndicatorsCustom, CarouselItem, CarouselControls},
  data: () => ({
    currentSlide: 0,
    slideInterval: null,
    direction: "right",
    showBlackout: false,
  }),
  computed: {
    classObject() {
      return {
        'pl-[3px]': this.typeVertical && !this.onRight,
        'pl-[38px]': this.typeVertical && this.onRight,
        'pl-[50px]': !this.typeVertical && !this.onRight,
      }
    },
    classObjectCarouselBorder() {
      return {
        'toBackGround': this.slides[this.currentSlide].type === 'video',
        // 'w-[580px] h-[420px] top-[85px] left-[210px]': !this.typeVertical,
        // 'w-[507px] h-[692px] topCircle top-[110px]': this.typeVertical,
        // 'left-[83px]': !this.onRight && this.typeVertical,
        // 'left-[118px]': this.onRight && this.typeVertical,
      }
    },
  },
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
    prev(step = -1) {
      const index =
          this.currentSlide > 0
              ? this.currentSlide + step
              : this.slides.length - 1;
      this.setCurrentSlide(index);
      this.direction = "left";
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
    clickInCarousel(imgIdx) {
      if(window.innerWidth > 768) this.$emit('openFullScreenView', this.slides, imgIdx);
    },
  },
  mounted() {
  },
  beforeUnmount() {
  },
};
</script>
<template>
  <div class="carousel">
    <div class="carousel-inner">
      <carousel-item
          v-for="(slide, index) in slides"
          :slide="slide"
          :typeVertical="typeVertical"
          :key="`item-${index}`"
          :current-slide="currentSlide"
          :index="index"
          :direction="direction"
          @clickOnImg="clickInCarousel"
      ></carousel-item>
    </div>
    <div class="absolute carouselBorder" :class="classObjectCarouselBorder">
      <carousel-indicators-custom
          :onRight="onRight"
          v-if="indicators"
          :total="slides.length"
          :current-index="currentSlide"
          @switch="switchSlide($event)"
          :typeVertical="typeVertical"
          class="indicatorCustom"
      />
    </div>
    <carousel-controls
        v-if="controls"
        @prev="prev"
        @next="next"
        class="flex justify-between"
    />
  </div>
</template>
<style scoped>
.indicatorCustom {
  position: absolute;
}

.carousel {}

.carousel-inner {
  position: relative;
  overflow: hidden;
  overflow-x: clip;
  z-index: 1;
  height: 70vw;
}

.carouselBorder {
  border: 2px solid #F2C452;
  pointer-events: none;
  top: -5%;
  width: 93%;
  height: 90%;
  left: 10%;
}

@media (min-width: 769px) {
  .carousel-inner {
    //height: 65vw;
    height: 49.5vw;
    margin-bottom: 15%;
  }
  .carouselBorder {
    height: 115%;
  }
}



.toBackGround {
  z-index: 0;
}

.carouselBlackout {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #0404048C;
  z-index: 2;
}

.topCircle {
  border-radius: 290px 290px 0 0;
}

</style>
