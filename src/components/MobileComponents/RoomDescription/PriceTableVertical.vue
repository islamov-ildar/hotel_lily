<script lang="ts">
import {monthsDictionary} from "@/common/utils/monthsDictionary";

export default {
  computed: {
    monthsDictionary() {
      return monthsDictionary
    }
  },
  props: ['price', 'roomDescription']
}
</script>

<template>
  <div class="mb-[50px]">
    <div class="text-[15px] min-[550px]:text-[22px] font-montserratMedium text-yellowMain my-[30px] min-[550px]:my-[45px] text-center">Цены на {{price.year}} год за номер/день (руб.)</div>
    <div class="verticalTableContainer text-whiteMain text-[15px]">
      <div class="flex">
        <div class="cell leftCell">
          <div>Месяц</div>
        </div>
        <div class="cell">
          <div class="flex items-center">
            <div><img src="@/assets/icons/person.svg" alt="person"></div>
            <div>х {{ roomDescription.sleep_place }}</div>
          </div>
        </div>
      </div>
      <div v-for="(item, idx) in price.pricesByMonths"
           :key="idx"
           :class="{endCell: idx === price.pricesByMonths.length - 1}"
           class="flex"
      >
        <div class="cell leftCell">
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
.verticalTableContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cell {
  width: 126px;
  height: 68px;
  border: 2px solid #F2C452;
  border-bottom: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.leftCell {
  border-right: none;
}
.endCell {
  border-bottom: 2px solid #F2C452;
}
@media (min-width: 550px) {
  .cell {
    width: 200px;
    height: 100px;
    font-size: 22px;
  }
}
@media (min-width: 1024px) {
  .cell {
    width: 150px;
    height: 80px;
    font-size: 22px;
  }
}
</style>
