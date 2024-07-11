<script lang="ts">
export default {
  props: ['number', 'data'],
}
</script>

<template>
  <div class="card relative">
    <div class="absolute top-[-40px] left-[55px]">
      <img v-if="data.user_photo !== 'default'" :src="`src/assets/images/users/${data.user_photo}`" alt="person_elips">
      <img v-else src="@/assets/icons/person_elips.svg" alt="person_elips">
    </div>
    <div class="w-full text-left pt-[30px] pb-[30px] px-[30px] text-blueMain">
      <div class="pb-[12px] w-full flex justify-end">
        <img src="@/assets/images/yandex_logo.png" alt="yandex_logo">
      </div>
      <div class="font-montserratMedium text-[24px]">{{ data.user_name }}</div>
      <div class="font-montserratRegular text-[17px] flex gap-[16px] mt-[16px] mb-[25px] items-center">
        <div class="flex">
          <div v-for="idx in 5" :key="idx">
            <img src="@/assets/icons/star.svg" alt="star">
          </div>
        </div>
        <div>{{ data.feedback_date }}</div>
      </div>
      <div class="font-montserratRegular text-[16px] leading-[22px]">
        Отдых на все 100 %!!! Полный релакс! Заселение за 3 минуты в современный, оснащённый всем необходимым номер, уборка каждый день, вкусные разнообразные завтраки. Сама гостиница находится в 2х минутах от моря ...
      </div>
      <div class="mt-[8px] cursor-pointer font-montserratMedium text-[16px] flex items-center gap-[7px]">
        <div>Читать отзыв</div><img src="@/assets/icons/arrow-right_blue.svg" alt="arrow-right_blue">
      </div>
    </div>
  </div>
</template>

<style scoped>
.card{
  width: 682px;
  height: 310px;
  background-color: #FFFFFF;
}
</style>
