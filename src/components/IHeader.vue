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
  <div class="headerBig font-helveticaLight header-grid pt-[26px] text-[17px] h-[170px] header-wrapper">
      <div class="header-container pb-[30px] pt-[10px]">
        <div class="ml-[20%] flex items-center gap-[10px]">
          <img src="@/assets/images/map-pin.svg" alt="map-pin">
          <div class="text-[#FBF6ED]">
            Абхазия, г. Гудаута, ул. Пушкина, 2
          </div>
        </div>
    </div>
    <div @click="redirectToLogin" class="mx-auto">
      <img src="@/assets/images/logo.svg" width="145px" alt="logo" >
    </div>
      <div class="header-container pb-[30px] pt-[10px]">
        <div class="text-right mr-[20%] text-[#FBF6ED] flex justify-end gap-[60px]">
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
