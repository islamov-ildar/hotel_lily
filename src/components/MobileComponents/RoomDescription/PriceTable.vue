<script lang="ts">
import {monthsDictionary} from "@/common/utils/monthsDictionary";

export default {
  computed: {
    monthsDictionary() {
      return monthsDictionary
    }
  },
  props: ['price', 'sleep_places'],
}
</script>

<template>
  <div class="flex flex-col">
    <div class="text-[15px] min-[550px]:text-[22px] font-montserratMedium text-yellowMain my-[30px] min-[550px]:my-[45px] text-center">Цены на {{price.year}} год за номер/день (руб.)</div>
    <div class="w-full flex justify-center font-montserratMedium text-whiteMain
    text-[18px]
    min-[1200px]:text-[22px]
    min-[1440px]:text-[17px]"
    >
      <div class="col">
        <div class="cell topCell">
          <div>Месяц</div>
        </div>
        <div class="cell">
          <div class="flex items-center">
            <div><img src="@/assets/icons/person.svg" alt="person"></div>
            <div>х {{ sleep_places }}</div>
          </div>
        </div>
      </div>
      <div v-for="(item, idx) in price.pricesByMonths" :key="idx" class="col"
           :class="{endCell: idx === price.pricesByMonths.length - 1}">
        <div class="cell topCell">
          <div>{{ monthsDictionary[item.month] }}</div>
        </div>
        <div class="cell relative">
          {{ item.price }}
          <div v-if="'promotion' in item" class="absolute right-0 bottom-[3px]">
            <img src="@/assets/icons/promotion.svg" alt="%">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.col {
  width: calc(100% / 8);
  min-width: 100px;
}
.cell {
  width: 100%;
  //width: calc(100% / 8);
  height: 68px;
  border: 2px solid #F2C452;
  border-right: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.topCell {
  border-bottom: none;
}

.endCell {
  border-right: 2px solid #F2C452;
}
</style>
