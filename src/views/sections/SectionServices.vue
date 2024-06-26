<script lang="ts">

import HeaderSection from '@/components/HeaderSection.vue';

export default {
  components: {HeaderSection}
};
</script>

<template>
<div class="bg-[#FBF6ED] pt-[90px] px-[150px] pb-[240px]">
  <div class="flex gap-[10px] text-[20px]">
    <div class="w-2/3">
      <HeaderSection class="mb-[90px]">
        <template #title>
          <span class="text-blueMain">Услуги</span>
        </template>
        <template #description>
          ваш уютный уголок на берегу счастья
        </template>
      </HeaderSection>
      <div class="text-blueMain text-[18px] font-montserratRegular">
        Отель находится на первой береговой линии, всего в 100 метрах от моря.<br>Имеется собственный  мелко-галечный пляж, оборудованный лежаками и зонтами, включенными в стоимость номеров.
      </div>
      <div class="flex gap-[125px] mt-[60px] text-[18px] font-montserratRegular">
        <div class="flex flex-col gap-[21px]">
          <div class="flex gap-[30px] items-center">
            <div><img src="@/assets/icons/swim.svg" alt="beach"></div>
            <div class="text-blueMain">Собственный пляж</div>
          </div>
          <div class="flex gap-[30px] items-center">
            <div><img src="@/assets/icons/beachUmbrella.svg" alt="beachUmbrella"></div>
            <div class="text-blueMain">Бесплатные лежаки и зонтики</div>
          </div>
          <div class="flex gap-[30px] items-center">
            <div><img src="@/assets/icons/alcove.svg" alt="alcove"></div>
            <div class="text-blueMain">Беседка</div>
          </div>
          <div class="flex gap-[30px] items-center">
            <div><img src="@/assets/icons/grill.svg" alt="grill"></div>
            <div class="text-blueMain">Мангал/барбекю</div>
          </div>
        </div>
        <div class="flex flex-col gap-[21px]">
          <div class="flex gap-[30px] items-center">
            <div><img src="@/assets/icons/cutlery.svg" alt="cutlery"></div>
            <div class="text-blueMain">Кафе<br>(включённый завтрак)</div>
          </div>
          <div class="flex gap-[30px] items-center">
            <div><img src="@/assets/icons/parking.svg" alt="parking"></div>
            <div class="text-blueMain">Автостоянка<br>с видеонаблюдением</div>
          </div>
          <div class="flex gap-[30px] items-center">
            <div><img src="@/assets/icons/taxi.svg" alt="taxi"></div>
            <div class="text-blueMain">Трансфер</div>
          </div>
          <div class="flex gap-[30px] items-center">
            <div><img src="@/assets/icons/wifi.svg" alt="wifi"></div>
            <div class="text-blueMain">Wi-Fi интернет</div>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-[40px] w-1/3">
      <div class="w-[626px] mx-auto relative">
        <div class="mt-[100px] w-full">
          <img src="@/assets/images/beach.jpg" alt="beach" width="525" height="699" class="mx-auto">
        </div>
        <div class="absolute w-[626px] h-[676px] border-2 border-yellowMain top-[73px]"></div>
      </div>
    </div>
  </div>
  <HeaderSection :show-vertical-stick="false" class="mt-[253px] mb-[90px]">
    <template #title>
      <span class="text-blueMain">Вкусная домашняя кухня</span>
    </template>
    <template #description>
      всегда пожелаем  приятного аппетита
    </template>
  </HeaderSection>
  <div class="flex gap-[10px] text-[20px]">
    <div class="w-2/3 flex gap-[20px] relative">
      <div>
        <img src="@/assets/images/cafe.jpg" width="380" height="549" alt="cafe">
      </div>
      <div class="flex flex-col gap-[20px]">
        <img src="@/assets/images/vegetables.jpg" width="265" height="169" alt="vegetables">
        <img src="@/assets/images/cake.jpg" width="265" height="170" alt="cake">
        <img src="@/assets/images/dishes.jpg" width="265" height="170" alt="dishes">
      </div>
      <div class="absolute w-[595px] h-[500px] border-2 border-yellowMain top-[125px] left-[200px]"></div>
    </div>
    <div class="ml-[40px] w-1/3 flex items-center">
      <div class="text-blueMain text-[18px] font-montserratRegular">
        В отеле имеется своё уютное кафе.
        Мы угощаем своих гостей вкуснейшими завтраками, которые включены в стоимость проживания!
        Сможем приготовить для Вас и прекрасный комплексный обед по предварительному заказу.      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
</style>
