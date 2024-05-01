<script setup lang="ts">
</script>

<template>
  <div class="header-grid pt-[20px] text-[16px]">
    <div class="">
      <div class="header-container pb-[30px] pt-[10px]">
        <div class="ml-[20%] flex gap-[10px]">
          <img src="@/assets/images/map-pin.svg" alt="map-pin">
          <div class="text-[#FBF6ED]">
            Абхазия, г. Гудаута, ул. Пушкина, 2
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <img src="@/assets/images/logo.svg" alt="logo">
    </div>
    <div class="">
      <div class="header-container pb-[30px] pt-[10px]">
        <div class="text-right mr-[20%] text-[#FBF6ED] flex justify-end gap-[60px]">
          <div class="cursor-pointer">Номера</div>
          <div class="cursor-pointer">Услуги</div>
          <div class="cursor-pointer">Контакты</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-grid {
  display: grid;
  grid-template-columns: 1fr 180px 1fr;
}
.header-container {
  border-bottom: 2px solid #F2C452;
}
</style>
