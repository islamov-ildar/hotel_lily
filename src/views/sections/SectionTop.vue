<!--<script setup>-->
<script lang="ts">
import IHeader from "@/components/IHeader.vue";

export default {
  components: { IHeader },
  emits: ['openContactsModal'],
}
</script>
<template>
  <div class="wrapper">
    <IHeader @openContactsModal="$emit('openContactsModal')" />
    <div class="w-[70%] h-[295px] title-background mt-[215px]">
      <div class="font-cormorant  text-[75px] leading-[92px] text-[#FFFFFF] pl-[130px]">
        ОТЕЛЬ,<br>
        В КОТОРОМ ВАС<br>
        ВСЕГДА ЖДУТ!
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  object-fit: cover;
  background: url("@/assets/images/top-section-cover.png") no-repeat;
  background-size: cover;
  height: 100vh;
}
.title-background {
  background: radial-gradient(at center, rgba(1, 1, 1, 0.3), rgba(1, 1, 1, 0.2), rgba(1, 1, 1, 0.1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
}

</style>
