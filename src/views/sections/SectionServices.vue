<script lang="ts">

import HeaderSection from '@/components/HeaderSection.vue';

export default {
  components: {HeaderSection}
};
</script>

<template>
  <div id="services"
       class="bg-[#FBF6ED] pt-[40px] lg:pt-[90px] min-[1500px]:px-[150px] fhd:px-[225px] pb-[60px] lg:pb-[120px] min-[1275px]:pb-[240px]">
    <div class="flex flex-col lg:flex-row gap-[20px] text-[20px] px-[50px]">
      <div class="w-full lg:w-2/3 fhd:w-2/3">
        <HeaderSection class="mb-[25px] lg:mb-[5%]">
          <template #title>
            <span class="text-blueMain">Услуги</span>
          </template>
          <template #description>
            ваш уютный уголок на берегу счастья
          </template>
        </HeaderSection>
        <div class="lg:hidden mb-[70px] w-full mx-auto relative">
          <div class="lg:mt-[100px] px-[25px] z-10 relative">
            <img
                src="https://firebasestorage.googleapis.com/v0/b/hotel-lily.appspot.com/o/common%2Fbeach.jpg?alt=media&token=281d488d-2421-405c-9bc4-cde699a2afe7"
                alt="beach" width="525" height="699" class="mx-auto">
          </div>
          <div class="absolute w-[100%] h-[95%] left-[0] border-2 border-yellowMain top-[13%] z-0"></div>
        </div>
        <div class="text-blueMain text-[13px] md:text-[18px] font-montserratRegular">
          Отель находится на первой береговой линии, всего в 100 метрах от моря.<br>Имеется собственный мелко-галечный
          пляж, оборудованный лежаками и зонтами, включенными в стоимость номеров.
        </div>
        <div class="cardContainer flex flex-col
        min-[792px]:flex-row gap-[10px] lg:gap-[20px] fhd:gap-[125px]
        mt-[60px] lg:mt-[2%] text-[13px] md:text-[18px] min-[1024px]:max-[1170px]:text-[15px] min-[1171px]:text-[18px] font-montserratRegular">
          <div class="flex flex-col gap-[21px]">
            <div class="flex gap-[30px] items-center">
              <div class="min-w-[60px]"><img src="@/assets/icons/swim.svg" alt="swim"></div>
              <div class="text-blueMain">Собственный пляж</div>
            </div>
            <div class="flex gap-[30px] items-center">
              <div class="min-w-[60px]"><img src="@/assets/icons/beachUmbrella.svg" alt="beachUmbrella"></div>
              <div class="text-blueMain">Бесплатные лежаки и зонтики</div>
            </div>
            <div class="flex gap-[30px] items-center">
              <div class="min-w-[60px]"><img src="@/assets/icons/alcove.svg" alt="alcove"></div>
              <div class="text-blueMain">Беседка</div>
            </div>
            <div class="flex gap-[30px] items-center">
              <div class="min-w-[60px]"><img src="@/assets/icons/grill.svg" alt="grill"></div>
              <div class="text-blueMain">Мангал/барбекю</div>
            </div>
          </div>
          <div class="flex flex-col justify-center gap-[21px]">
            <div class="flex gap-[30px] items-center">
              <div class="min-w-[60px]"><img src="@/assets/icons/cutlery.svg" alt="cutlery"></div>
              <div class="text-blueMain">Кафе<br>(включённый завтрак)</div>
            </div>
            <div class="flex gap-[30px] items-center">
              <div class="min-w-[60px]"><img src="@/assets/icons/parking.svg" alt="parking"></div>
              <div class="text-blueMain">Автостоянка<br>с&nbsp;видеонаблюдением</div>
            </div>
            <div class="flex gap-[30px] items-center">
              <div class="min-w-[60px]"><img src="@/assets/icons/taxi.svg" alt="taxi"></div>
              <div class="text-blueMain">Трансфер</div>
            </div>
            <div class="flex gap-[30px] items-center">
              <div class="min-w-[60px]"><img src="@/assets/icons/wifi.svg" alt="wifi"></div>
              <div class="text-blueMain">Wi-Fi интернет</div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 fhd:w-1/3 hidden lg:block">
        <div class="mx-auto relative">
          <div class="mt-[100px] w-[90%] mx-auto">
            <img
                src="https://firebasestorage.googleapis.com/v0/b/hotel-lily.appspot.com/o/common%2Fbeach.jpg?alt=media&token=281d488d-2421-405c-9bc4-cde699a2afe7"
                alt="beach" class="mx-auto w-full">
          </div>
          <div class="absolute w-full h-full border-2 border-yellowMain top-[73px]"></div>
        </div>
      </div>
    </div>
    <HeaderSection id="kitchen" class="mt-[45px] mb-[60px] md:mt-[70px] lg:mt-[120px] fhd:mt-[253px] lg:mb-[90px]">
      <template #title>
        <span class="text-blueMain">Вкусная домашняя кухня</span>
      </template>
      <template #description>
        всегда пожелаем приятного аппетита
      </template>
    </HeaderSection>
    <div class="flex flex-col min-[1275px]:flex-row gap-[10px] text-[20px] justify-between">
      <div class="relative md:mb-[5%]">
        <div class="w-[85%] mx-auto">
          <img
              src="https://firebasestorage.googleapis.com/v0/b/hotel-lily.appspot.com/o/common%2Fkitchen.jpg?alt=media&token=4c707a47-66c6-4be8-92cb-1fb1a1bf1765"
              alt="kitchen" class="w-full">
        </div>
        <div class="absolute w-[78%] h-[95%] right-[3%] top-[15%] border-2 border-yellowMain z-0"></div>
      </div>
      <div
          class="min-[850px]:max-[1274px]:text-center max-w-[75%] mx-auto min-[1275px]:w-1/3 mt-[60px] min-[1275px]:mt-0 flex items-center">
        <div class="text-blueMain text-[13px] md:text-[18px] font-montserratRegular">
          Добро пожаловать в уютное кафе с домашней кухней, где по утрам для вас готовит наш прекрасный персонал!
          Насладитесь утром в уютной обстановке, окруженные заботой и вниманием наших чудесных девушек-поваров.<br><br>
          Приходите к нам за вкусом и теплой атмосферой!
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 520px) and (width < 792px) {
  .cardContainer {
    margin-left: 10%;
  }
}

.cafeImg {
  width: 100%;
  object-fit: cover;
  background: url("https://firebasestorage.googleapis.com/v0/b/hotel-lily.appspot.com/o/common%2Fcafe.jpg?alt=media&token=f2f98058-6da5-4fd0-abd3-4cd2e53b3d59") no-repeat;
  background-size: cover;
  object-position: 50% 50%;
//height: 100vh;
}
</style>
