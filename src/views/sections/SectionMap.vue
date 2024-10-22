<script lang="ts">
import HeaderSection from '@/components/HeaderSection.vue';
import 'vue3-carousel/dist/carousel.css'

export default {
  components: {HeaderSection},

  setup(){


    return {
    }
  }
};
</script>

<template>
<div id="map" class="bg-[#FBF6ED] pt-[30px] lg:pt-[90px]">
   <HeaderSection class="mb-[20px] lg:mb-[90px]" :showVerticalStick="false">
     <template #title>
       <span class="text-blueMain">Ждём вас по адресу</span>
     </template>
     <template #description>
       Абхазия, г. Гудаута, ул. Пушкина, 2
     </template>
   </HeaderSection>
  <div class="w-full">
    <div class="w-full">
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A551e1dad9748bf1c6a95e1c58f9c8499b7a90ac434ad45db713cfb20935a5225&amp;source=constructor" width="100%" height="476" frameborder="0"></iframe>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
