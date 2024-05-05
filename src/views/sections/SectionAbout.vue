<script setup lang="ts">

import HeaderSection from '@/components/HeaderSection.vue';
</script>

<template>
<div class="bg-[#2A657E] py-[90px] px-[150px]">
  <HeaderSection class="mb-[90px]">
    <template #title>
      Об отеле
    </template>
    <template #description>
      где мечты о море становятся реальностью
    </template>
  </HeaderSection>
  <div class="flex gap-[10px] text-[12px]">
    <div class="w-1/2"><img src="@/assets/images/Foto-hotel-temp.png" alt="carousel"></div>
    <div class="w-1/2 text-[#FBF6ED]">
      <p class="font-helveticaLight">
        Отель "Лилия" на берегу моря с панорамными окнами и завораживающим видом - отличное место для тихого семейного отдыха! Отель находится в 65 км от границы (р. Псоу) и в 300 метрах от городского парка, где детские площадки, набережная, рестораны и кафе.
      </p><br>
      <p class="font-helvetica">
        Огороженная территория, бесплатная охраняемая парковка, зона барбекю, бар на территории базы. Организация экскурсий по тур-маршрутам Абхазии, трансфер от границы до места и обратно.
      </p><br>
      <p class="font-helveticaLight2">
        Профессиональный подход к управлению отелем обеспечивает качественные условия проживания. Замечательный персонал и радушные хозяева, самолично встречающие своих постояльцев.
      </p><br>
      <p>
        Ждем Вас! Добро пожаловать!
      </p>
    </div>
  </div>
</div>
</template>

<style scoped>
</style>
