<script lang="ts">
import type {PropType} from "vue";
import type {IPriceTable} from "@/common/mockData/prices";
import type {IRoomDescription} from "@/common/mockData/roomsDescription";

export default {
  props: {
    price: {
      type: Object as PropType<IPriceTable[]>,
      required: true,
    },
    roomDescription: {
      type: Object as PropType<IRoomDescription>,
      required: true,
    }
  },
}
</script>

<template>
  <div class="font-montserratRegular text-whiteMain flex flex-col items-center">
    <div class="text-[52px] mb-[92px]">{{ roomDescription.title }}</div>
    <div class="flex gap-[70px] mb-[42px]">
      <div class="flex gap-[12px] items-center">
        <img src="@/assets/icons/area.svg" alt="area">
        <div class="text-[28px]">{{ roomDescription.area }} м2</div>
      </div>
      <div class="flex gap-[12px] items-center">
        <img src="@/assets/icons/sleep_place.svg" alt="area">
        <div class="text-[28px]">x {{ roomDescription.sleep_place }}</div>
      </div>
      <div class="flex gap-[12px] items-center">
        <img src="@/assets/icons/add_person.svg" alt="area">
        <div class="text-[28px]">{{ roomDescription.additional_sleep_place }} доп. места</div>
      </div>
    </div>
    <div>
      <div class="text-[22px] text-yellowMain mb-[30px] text-center">Цены на {{price.year}} год за номер/день (руб.)</div>
      <div class="gridTable">
        <div>
          <div class="cell topCell">
            <div>Месяц</div>
          </div>
          <div class="cell">
            <div class="flex items-center">
              <div><img src="@/assets/icons/person.svg" alt="person"></div>
              <div>х 2</div>
            </div>
          </div>
        </div>

        <div v-for="(item, idx) in price.pricesByMonths" :key="idx" :class="{endCell: idx === price.pricesByMonths.length - 1}">
          <div class="cell topCell">
            <div>{{ item.month }}</div>
          </div>
          <div class="cell">
            {{ item.price }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-[1008px] flex ">
      <div class="max-w-[1008px] mt-[35px]">
        <div class="mt-[35px]">
          Комнат в номере: 1
        </div>
        <div>
          Этаж: {{ roomDescription.onlyOnSecondFloor ? '2' : '1-2' }}
        </div>
        <div>
          Санузел и Душ: в номере.
        </div>
        <div>
          Мебель: {{ roomDescription.furniture }}
        </div>
        <div>
          Удобства: {{ roomDescription.amenities }}
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.gridTable{
  display: grid;
  grid-template-columns: repeat(8, 126px);
}
.cell {
  width: 126px;
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
