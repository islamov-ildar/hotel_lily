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
  <div v-if="roomDescription" class="text-whiteMain text-[18px] flex justify-around mb-[45px] px-[5%]">
    <div class="flex gap-[10px] items-center">
      <img src="../../../assets/icons/area.svg" alt="area" class="w-[30px] h-[30px]">
      <div>{{ roomDescription.area }} м2</div>
    </div>
    <div class="flex gap-[10px] items-center">
      <img src="../../../assets/icons/sleep_place.svg" alt="area" class="w-[30px] h-[30px]">
      <div>x {{ roomDescription.sleep_place }}</div>
    </div>
    <div class="flex gap-[10px] items-center">
      <img src="../../../assets/icons/add_person.svg" alt="area" class="w-[30px] h-[30px]">
      <div>{{ roomDescription.additional_sleep_place }} доп. места</div>
    </div>
  </div>
</template>

<style scoped>

</style>