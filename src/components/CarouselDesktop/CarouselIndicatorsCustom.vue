<script lang="ts">
import {computed} from "vue";
import {addZeroBeforeOneNumber} from "@/common/utils/addZeroBeforeOneNumber";

export default {
  emits: ["switch"],
  props: ["total", "currentIndex", "typeVertical", "onRight"],

  setup(props){
    const nextIndex = computed(() => {
      if(props.currentIndex + 1 === props.total) {
        return 1
      } else {
        return props.currentIndex + 2
      }
    });
    const classObject = computed(() => {
          return {
            'mr-[-145px]': props.typeVertical && !props.onRight,
            'mr-[-120px]': props.typeVertical && props.onRight,
            'mr-[-70px]': !props.typeVertical && !props.onRight,
          }
    })

    return{
      nextIndex,
      addZeroBeforeOneNumber,
      classObject,
    }
  }
};
</script>
<template>
  <div class="carousel-indicators font-aliceRegular text-[40px]"
       :class="classObject">
    <div class="text-[#F2C452]">
      {{addZeroBeforeOneNumber(currentIndex + 1)}}
    </div>
    <div class="text-[#458099] mt-[30px]">
      {{addZeroBeforeOneNumber(nextIndex)}}
    </div>
  </div>
</template>
<style scoped>
.carousel-indicators {
  display: flex;
  gap: 70%;
  right: 60px;
  bottom: -3%;
}
</style>
