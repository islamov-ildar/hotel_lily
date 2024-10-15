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
        'z-10': this.slides[this.currentSlide].type === 'video',
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
      console.log(index)
      const step = index - this.currentSlide;
      if (step > 0) {
        this.next(step);
      } else {
        this.prev(step);
      }
    },
    clickInCarousel(imgIdx) {
      this.$emit('openFullScreenView', this.slides, imgIdx);
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
    <div class="carousel-inner z-0" :class="classObjectCarouselBorder">
      <div v-show="showBlackout" class="carouselBlackout"
           :class="typeVertical ? 'topCircle' : ''">
        <img v-show="showBlackout" src="@/assets/images/Zoom.svg" alt="Zoom" class="absolute top-[40%] left-[47%]">
      </div>
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
<!--    <div class="absolute carouselBorder" :class="classObjectCarouselBorder">-->
    <div class="absolute carouselBorder">
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
  height: 22.5vw;
  margin-bottom: 10%;
}

.carouselBorder {
  border: 2px solid #F2C452;
  pointer-events: none;
  top: 17%;
  width: 85%;
  height: 100%;
  left: 20.5%;
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

.carousel-item:hover {
  background: rgba(0, 0, 0, .5);
}
</style>
