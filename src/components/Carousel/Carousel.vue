<template>
  <div @click="clickInCarousel" class="carousel">
    <div class="carousel-inner" :class="typeVertical ? 'w-[507px] h-[692px]' : 'w-[690px] h-[387px]'">
      <div v-show="showBlackout" class="carouselBlackout"
      :class="typeVertical ? 'topCircle' : ''"></div>
      <carousel-item
        v-for="(slide, index) in slides"
        :slide="slide"
        :typeVertical="typeVertical"
        :key="`item-${index}`"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
      ></carousel-item>
    </div>
    <div class="absolute w-[580px] h-[420px] carouselBorder"
         :class="[
             slides[currentSlide].type === 'video' ? 'toBackGround' : '',
             typeVertical ? 'w-[507px] h-[692px] topCircle top-[110px] left-[83px]' : 'w-[580px] h-[420px] top-[85px] left-[234px]'
             ]">
      <div class="absolute left-0 top-0 w-[505px] h-[300px] carouselBorderUpper">
        <img v-show="showBlackout" src="@/assets/images/Zoom.svg" alt="Zoom" class="absolute top-[20%] left-[30%]">
      </div>
    </div>

    <div class="relative flex justify-between mt-[40px] w-full pl-[50px]"
         :class="typeVertical ? 'pl-[3px]' : 'pl-[50px]'">
      <carousel-controls
          v-if="controls"
          @prev="prev"
          @next="next">
      </carousel-controls>
      <carousel-indicators-custom
          v-if="indicators"
          :total="slides.length"
          :current-index="currentSlide"
          @switch="switchSlide($event)"
          :typeVertical="typeVertical"
      ></carousel-indicators-custom>
    </div>

  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";
import CarouselIndicatorsCustom from "@/components/Carousel/CarouselIndicatorsCustom.vue";

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
    carouselIdx: {
      type: Number,
      default: 0,
    }
  },
  components: {CarouselIndicatorsCustom, CarouselItem, CarouselControls },
  data: () => ({
    currentSlide: 0,
    slideInterval: null,
    direction: "right",
    showBlackout: false,
    inRectByY: false,
    inRectByX: false,
  }),
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
    hoverHandler() {
      const carousel = document.getElementsByClassName('carousel');
      let carouselElementInDomIdx = this.carouselIdx;

      carousel[carouselElementInDomIdx].addEventListener('mousemove', (e) => {
        const rect = document.getElementsByClassName('carousel-inner')[carouselElementInDomIdx].getBoundingClientRect()

        this.inRectByY = e.clientY > rect.y && e.clientY < (rect.y + rect.height) && this.slides[this.currentSlide].type !== 'video';
        this.inRectByX = e.clientX > rect.x && e.clientX < (rect.x + rect.width);
        this.inRectByY && this.inRectByX ? this.showBlackout = true : this.showBlackout = false;
      })
    },
    clickInCarousel(){
      if(this.inRectByY && this.inRectByX) {
        this.$emit('openFullScreenView', this.slides);
      }
    },
  },
  mounted() {
    // this.startSlideTimer();

    this.hoverHandler();

  },
  beforeUnmount() {
    // this.stopSlideTimer();
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.carousel-inner {
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.stick {
  background-color: #F2C452;
  position: absolute;
  top: 10px;
  left: 10px;
  height: 2px;
}
.carouselBorder {
  border: 2px solid #F2C452;
  z-index: 1;
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
