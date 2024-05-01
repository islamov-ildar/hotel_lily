<script setup>
import IHeader from "@/components/IHeader.vue";
import IButton from "@/components/IButton.vue";
</script>
<template>
  <div class="wrapper flex flex-col justify-around">
    <IHeader />
    <div class="font-cormorant text-[90px] leading-[100px] text-[#FFFFFF] mt-[50px] ml-[8%] mb-[120px]">
      ОТЕЛЬ,<br>
      В КОТОРОМ ВАС<br>
      ВСЕГДА ЖДУТ!
    </div>
    <div class="text-right mr-[150px]">
      <IButton label="ЗАБРОНИРОВАТЬ"/>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background: url("@/assets/images/top-section-cover.png") no-repeat;
  background-size: cover;
}
</style>
