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
  <div class="headerBig font-helveticaLight header-grid pt-[26px] header-wrapper">
    <div class="pt-[10px]">
      <div class="w-full header-container flex justify-center">
        <a href="#map">
          <div class="pb-[30px] header-container-left flex items-center gap-[10px]">
            <img src="@/assets/images/map-pin.svg" alt="map-pin">
            <div class="text-[#FBF6ED] md:text-[11px] lg:text-[17px]">
              Абхазия, г. Гудаута, ул. Пушкина, 2
            </div>
          </div>
        </a>
      </div>
    </div>
    <div @click="redirectToLogin" class="mx-auto">
      <img src="@/assets/icons/logo_liliya_for_header.svg" width="145px" alt="logo">
    </div>
    <div class="pt-[10px]">
      <div class="md:text-[11px] lg:text-[17px] header-container-right pb-[30px] w-full header-container text-right text-[#FBF6ED] flex justify-center gap-[60px]">
        <a href="#rooms">
          <div class="cursor-pointer">Номера</div>
        </a>
        <a href="#">
          <div @click="$emit('openContactsModal')" class="cursor-pointer">Контакты</div>
        </a>
        <a href="https://t.me/Asmat_Agumava" target="blank">
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

@media (max-width: 930px) {
  .header-container-left {
    padding-left: 5%;
  }
  .header-container-right {
    padding-right: 5%;
  }
}

</style>
