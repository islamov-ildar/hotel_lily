<script lang="ts">
export default {}
</script>

<template>
  <div class="mainContainer lg:w-full relative p-[20px] lg:p-[30px] mx-[15px] text-[13px] lg:text-[18px] text-blueMain">
    <div class="innerContainer w-full h-full bg-whiteMain py-[20px] px-[13px] lg:p-[55px] flex flex-col lg:flex-row gap-[30px] lg:gap-[60px] bgImg">
      <div class="flex flex-col gap-[40px] lg:w-1/2">
        <div class="flex items-center gap-[18px] lg:gap-[30px]">
          <img src="@/assets/icons/bannerIcons/percent.svg" alt="ico">
          <div class="font-montserratRegular ">Для многодетных семей скидка 15%</div>
        </div>
        <div class="flex items-center gap-[18px] lg:gap-[30px]">
          <img src="@/assets/icons/bannerIcons/pacifier.svg" alt="ico">
          <div class="font-montserratRegular">Для детей до 3х лет размещение без места
            с бесплатным питанием</div>
        </div>
        <div class="flex items-center gap-[18px] lg:gap-[30px]">
          <img src="@/assets/icons/bannerIcons/children.svg" alt="ico">
          <div class="font-montserratRegular">Для детей от 3х до 5 лет размещение без места
            с доплатой за питание 450 руб/сутки</div>
        </div>
      </div>
      <div class="flex flex-col gap-[40px] lg:w-1/2">
        <div class="flex items-center gap-[18px] lg:gap-[30px]">
          <img src="@/assets/icons/bannerIcons/cutlery_blue.svg" alt="ico">
          <div class="font-montserratRegular">Завтраки включены в стоимость проживания, предоставляются с июня по сентябрь</div>
        </div>
        <div class="flex items-center gap-[18px] lg:gap-[30px]">
          <img src="@/assets/icons/bannerIcons/sofa.svg" alt="ico">
          <div class="font-montserratRegular">Доп место евро-раскладушка - 1200 руб<br>
            Доп место диван - 1500 руб</div>
        </div>
        <div class="flex items-center gap-[18px] lg:gap-[30px]">
          <img src="@/assets/icons/bannerIcons/ironingBoard.svg" alt="ico">
          <div class="font-montserratRegular">Постирочная и гладильная комната</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainContainer {
  border: 1.5px solid rgba(242, 196, 82, 1);
  z-index: 1;
  margin-bottom: 250px;
}
@media (max-width: 768px) {
  .mainContainer {
    margin-bottom: 50px;
  }
}
.bgImg {
  background-image: url('@/assets/icons/bannerIcons/lily_yellow.svg');
  background-repeat: no-repeat;
  background-position: 100% 100%;
}
</style>
