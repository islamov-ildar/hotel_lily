<script lang="ts">
import type {PropType} from "vue";
import type {IPriceTable} from "@/common/mockData/prices";
import {ref, watch} from "vue";
import {monthsDictionary} from "@/common/utils/monthsDictionary";

export default {
  computed: {
    monthsDictionary() {
      return monthsDictionary
    }
  },
  props: {
    price: {
      type: Object as PropType<IPriceTable[]>,
      required: true,
    },
    places: {
      type: Number,
      default: 2,
    }
  },
  setup(props) {

    const priceForRender = ref(props.price);

    watch(props, () => {
      priceForRender.value = props.price
    })

    const hasEmptyField = ref(0);
    const hasIncorrectField = ref(0);

    const validationTable = () => {
      hasEmptyField.value = 0;
      priceForRender.value.pricesByMonths.forEach(it => {
        if(!it.price) {
          ++hasEmptyField.value;
        }

        if(it.price.toString().length > 5) {
          it.price = it.price.toString().slice(0, 5);
        }
      })
    }

    validationTable();

    return {priceForRender, hasEmptyField, hasIncorrectField, validationTable}
  }
}
</script>

<template>
  <div class="font-montserratRegular text-whiteMain flex flex-col items-center">
    <div>
      <div class="text-[22px] text-yellowMain mb-[30px] text-center">Цены на {{priceForRender.year}} год за номер/день (руб.)</div>
      <div class="gridTable">
        <div>
          <div class="cell topCell">
            <div>Месяц</div>
          </div>
          <div class="cell">
            <div class="flex items-center">
              <div><img src="@/assets/icons/person.svg" alt="person"></div>
              <div>х {{ places }}</div>
            </div>
          </div>
        </div>

        <div v-for="(item, idx) in priceForRender.pricesByMonths" :key="idx" :class="{endCell: idx === priceForRender.pricesByMonths.length - 1}">
          <div class="cell topCell">
            <div>{{ monthsDictionary[item.month] }}</div>
          </div>
          <div class="cell priceCell relative">
            <input
                type="number"
                v-model="item.price"
                @input="validationTable"
                :class="{errorBorder: !item.price || item.price.toString().length > 5}"
            >
            <div v-if="'promotion' in item" class="absolute right-0 bottom-[3px]">
              <img src="@/assets/icons/promotion.svg" alt="%">
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="text-right font-montserratRegular text-[#999999]">Поле ввода стоимости номеров</div>
  <div v-if="hasEmptyField" class="text-right font-montserratRegular text-mainPink">Не все поля заполнены</div>
  <div v-if="hasIncorrectField" class="text-right font-montserratRegular text-mainPink">Введите цифры без пробелов не более 5 символов</div>
</template>

<style scoped>
.errorBorder {
  border: 1px solid var(--main-pink-color);
}
.priceCell {
  background-color: #FFFFFF26;
}
.cell input {
  width: 90%;
  text-align: center;
  outline: none !important;
  background-color: transparent;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
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
