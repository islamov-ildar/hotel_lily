<script setup lang="ts">
const props = defineProps({
  label: {type: String, required: true}
});

</script>

<template>
<!--  <button class="rounded-full hover:rounded-none px-[70px] py-[30px] text-[28px]">-->
  <button class="btn fixed bottom-[120px] right-[50px] z-20">
    <div class="yellowBgTelegram">
      <img src="@/assets/icons/yellowBgTelegram.svg" alt="yellowBgTelegram">
    </div>
    <div class="btnLabel px-[72px] py-[13px] text-[28px] bg-yellowMain text-left text-[#FFFFFF]">
      {{ label }}
    </div>
  </button>
</template>

<style scoped>
.btn {
  width: 100px;
  height: 100px;
}
.btn:hover {
  right: 50px;
  width: 382px;

}
.btn:hover .yellowBgTelegram {
  display: none;
  transition: opacity 0.3s ease;
}
.btnLabel {
  display: none;
  transition: opacity 0.3s ease;
}
.btnLabel:hover {
  display: block;
  transition: opacity 0.3s ease;
}
.btn:hover .btnLabel {
  display: block;
  transition: opacity 0.3s ease;
}

</style>
