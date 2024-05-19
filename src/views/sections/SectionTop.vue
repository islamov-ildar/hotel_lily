<script setup>
import IHeader from "@/components/IHeader.vue";
import IButton from "@/components/IButton.vue";
</script>
<template>
  <div class="wrapper">
    <IHeader />
    <div class="w-[70%] h-[295px] title-background mt-[215px]">
      <div class="font-cormorant  text-[75px] leading-[92px] text-[#FFFFFF] pl-[130px]">
        ОТЕЛЬ,<br>
        В КОТОРОМ ВАС<br>
        ВСЕГДА ЖДУТ!
      </div>
    </div>
    <div class="text-right mr-[150px] mt-[125px] mb-[170px]">
      <IButton label="ЗАБРОНИРОВАТЬ"/>
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
  background: rgba(1, 1, 1, 0.99);
  background: radial-gradient(at center, rgba(1, 1, 1, 0.7), rgba(1, 1, 1, 0.6), rgba(1, 1, 1, 0.3), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
}

</style>
