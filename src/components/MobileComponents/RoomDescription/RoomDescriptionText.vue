<script lang="ts">
export default {
  props: ['roomDescription']
}
</script>

<template>
  <div class="flex flex-col text-[13px] text-whiteMain leading-[20px]">
    <div class="flex justify-around">
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