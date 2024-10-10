<script lang="ts">
import {useRouter} from "vue-router";

export default {
  emits: ['openContactsModal'],

  setup() {
    const router = useRouter();
    const redirectToLogin = () => router.push({name: 'login'});

    return {
      redirectToLogin,
    }
  }
}
</script>

<template>
  <div class="headerBig font-helveticaLight header-grid pt-[26px] text-[17px] header-wrapper">
    <div class="pt-[10px]">
      <div class="header-container pb-[30px] pl-[20%] flex items-center gap-[10px]">
        <img src="@/assets/images/map-pin.svg" alt="map-pin">
        <div class="text-[#FBF6ED]">
          Абхазия, г. Гудаута, ул. Пушкина, 2
        </div>
      </div>
    </div>
    <div @click="redirectToLogin" class="mx-auto">
      <img src="@/assets/images/logo.svg" width="145px" alt="logo">
    </div>
    <div class="pt-[10px]">
      <div class="pr-[20%] pb-[30px] w-full header-container text-right text-[#FBF6ED] flex justify-end gap-[60px]">
        <div class="cursor-pointer">Номера</div>
        <div @click="$emit('openContactsModal')" class="cursor-pointer">Контакты</div>
        <a :href="'#rooms'">
          <div class="cursor-pointer">
            Бронирование
          </div>
        </a>
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

@media (max-width: 768px) {
  .headerBig {
    display: none;
  }
}

</style>
