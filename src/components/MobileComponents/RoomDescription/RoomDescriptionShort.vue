<script lang="ts">
import {PropType} from "vue";
import {IRoomDescription} from "@/common/mockData/roomsDescription";

export default {
  props: {
    roomDescription: {
      type: Object as PropType<IRoomDescription>,
      required: false,
    }
  },
}
</script>

<template>
  <div v-if="roomDescription" class="text-whiteMain text-[18px] min-[550px]:text-[22px] flex justify-around mb-[15%]
  min-[1440px]:px-[15%] min-[1440px]:mb-0">
    <div class="flex gap-[10px] items-center">
      <img src="../../../assets/icons/area.svg" alt="area" class="iconSize">
      <div>{{ roomDescription.area }}&nbsp;м2</div>
    </div>
    <div class="flex gap-[10px] items-center">
      <img src="../../../assets/icons/sleep_place.svg" alt="area" class="iconSize">
      <div>x&nbsp;{{ roomDescription.sleep_place }}</div>
    </div>
    <div class="flex gap-[10px] items-center">
      <img src="../../../assets/icons/add_person.svg" alt="area" class="iconSize">
      <div>{{ roomDescription.additional_sleep_place }}&nbsp;доп.&nbsp;места</div>
    </div>
  </div>
</template>

<style scoped>
.iconSize {
  width: 60%;
  height: 60%;
}
@media (min-width: 550px) {
  .iconSize {
    width: 70%;
    height: 70%;
  }
}
@media (min-width: 660px) {
  .iconSize {
    width: 80%;
    height: 80%;
  }
}
</style>
