<template>
  <div class="carousel-indicators mr-[-93px] font-aliceRegular text-[40px]">
    <div class="text-[#F2C452]">
      {{addZeroBeforeOneNumber(currentIndex + 1)}}
    </div>
    <div class="text-[#458099] mt-[35px]">
      {{addZeroBeforeOneNumber(nextIndex)}}
    </div>
  </div>
</template>

<script lang="ts">
import {computed} from "vue";
import {addZeroBeforeOneNumber} from "../../common/utils/addZeroBeforeOneNumber";

export default {
  emits: ["switch"],
  props: ["total", "currentIndex"],

  setup(props){

    const nextIndex = computed(() => {
      if(props.currentIndex + 1 === props.total) {
        return 1
      } else {
        return props.currentIndex + 2
      }
    });

    return{
      nextIndex,
      addZeroBeforeOneNumber,
    }
  }
};
</script>

<style scoped>
.carousel-indicators {
  display: flex;
  gap: 60px;
}
</style>
