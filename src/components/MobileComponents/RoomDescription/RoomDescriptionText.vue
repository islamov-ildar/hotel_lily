<script lang="ts">
export default {
  props: ['roomDescription']
}
</script>

<template>
  <div class="flex flex-col font-montserratRegular
  text-whiteMain
  text-[13px]
  min-[550px]:text-[22px]
  min-[1024px]:text-[18px]
  min-[1200px]:text-[22px]
  min-[1360px]:text-[24px]
  leading-[20px]
  min-[550px]:leading-[26px]
  min-[1024px]:leading-[30px]
  min-[1200px]:leading-[40px]>
  min-[1360px]:leading-[50px]">
    <div class="flex justify-around min-[550px]:gap-[5%]">
      <div class="flex flex-col">
        <div>Этаж: {{ roomDescription.onlyOnSecondFloor ? '2' : '1-2' }}</div>
        <div>{{ roomDescription.terrace ? 'Терасса' : ''}}</div>

        <div class="mt-[25px]">
          <div>Мебель:</div>
          <ul class="list-disc text-wrap ml-[12%]">
            <li v-for="(item, idx) in roomDescription.furnitureList" :key="idx">{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col">
        <div>Комнат в номере: 1</div>
        <div>Санузел и Душ: в номере.</div>

        <div class="mt-[25px]">
          <div>Удобства:</div>
          <ul class="list-disc text-wrap ml-[12%]">
            <li v-for="(item, idx) in roomDescription.amenitiesList" :key="idx">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
