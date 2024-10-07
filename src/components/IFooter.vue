<script setup lang="ts">
</script>

<template>
  <div class="w-full py-[27px] bg-blueMain px-[10%] lg:px-[150px] flex flex-col items-center lg:flex-row justify-between">
    <div class="mb-[30px] lg:mb-0">
      <img src="@/assets/images/logo.svg" width="145px" alt="logo">
    </div>
    <div class="flex items-center gap-[10px] lg:gap-[50px] py-[5px]">
      <div class="hidden lg:block flex-col justify-end h-full">
        <div class="flex gap-[20px]">
          <img src="@/assets/icons/telegram.svg" alt="logo">
          <img src="@/assets/icons/instagram.svg" alt="logo">
        </div>
      </div>
      <div class="flex flex-col justify-between h-full">
        <div class="flex items-center gap-[10px]">
          <img src="@/assets/images/map-pin.svg" alt="map-pin">
          <div class="text-[#FBF6ED]">
            Абхазия, г. Гудаута, ул. Пушкина, 2
          </div>
        </div>
        <div class="flex items-center gap-[10px]">
          <img src="@/assets/icons/phone.svg" alt="phone">
          <div class="text-[#FBF6ED]">
            +7 (968) 076-55-27
          </div>
        </div>
        <div class="flex items-center gap-[10px]">
          <img src="@/assets/icons/mail.svg" alt="mail">
          <div class="text-[#FBF6ED]">
            asmatka2008@mail.ru
          </div>
        </div>
      </div>
      <div class="lg:hidden min-w-[40px]">
        <div class="flex flex-col gap-[20px]">
          <img src="@/assets/icons/telegram.svg" alt="logo">
          <img src="@/assets/icons/instagram.svg" alt="logo">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-grid {
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
}
.header-container {
  border-bottom: 2px solid #F2C452;
}
</style>
