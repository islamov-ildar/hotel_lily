<script lang="ts">
import {ref} from "vue";
import PriceTable from "@/components/PriceTable.vue";
import {getAuth, signOut, onAuthStateChanged} from "firebase/auth";
import {app, writeAllData, getAll} from '@/firebase-api';
import {useRouter} from "vue-router";
import { allData } from "@/common/allData";
import {parseData} from "@/common/utils/parseData";
import {buildData} from "@/common/utils/buildData";

export default {
  components: {PriceTable},

  setup() {

    console.log(app);
    const router = useRouter();
    const isUserLogin = ref(false);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log('User is signed in', uid)
        isUserLogin.value = true
      } else {
        console.log('User is signed out')
        isUserLogin.value = false
        router.push({name: 'home'})
      }
    });


    const logout = async () => {
      const auth = getAuth();
      signOut(auth)
          .then(() => {
            router.push({name: 'home'});
          })
          .catch((error) => {
            error.log;
          });
    }

    const loading = ref<boolean>(false);

    const isSalesEnabled = ref(true);

    const salesText = ref({
      main: '',
      additional: '',
    });

    const saveData = () => {
      loading.value = true;

      const objForBuild = JSON.parse(JSON.stringify({
        isSalesEnabled: isSalesEnabled.value,
        salesText: salesText.value,
        salesMonths: salesMonths.value,
        priceYear: priceYear.value,
        standard: buildData(standard.value),
        semiLuxurySeaView: buildData(semiLuxurySeaView.value),
        semiLuxuryFamily: buildData(semiLuxuryFamily.value),
      }))
      console.log(objForBuild);
      writeAllData(objForBuild).then(() => loading.value = false)
    }

    const salesMonths = ref({
      april: false,
      may: false,
      june: false,
      july: false,
      august: false,
      september: false,
      october: false,
    });

    const salesTextErrors = ref({
      mainError: false,
      additionalError: false,
    });

    const validationSaleText = () => {
      if (salesText.value.main.length > 55) salesText.value.main = salesText.value.main.slice(0, 55)
      if (salesText.value.additional.length > 55) salesText.value.additional = salesText.value.additional.slice(0, 55)
      salesText.value.main.length > 55 ? salesTextErrors.value.mainError = true : salesTextErrors.value.mainError = false
      salesText.value.additional.length > 60 ? salesTextErrors.value.additionalError = true : salesTextErrors.value.additionalError = false
    }

    validationSaleText();

    const priceYear = ref(2024);

    const switchSales = () => {
      for (const key in salesMonths.value) {
        salesMonths.value[key] = false;
      }
    }

    const semiLuxuryFamily = ref({});
    const semiLuxurySeaView = ref({});
    const standard = ref({});

    const loadingDataComplete = ref(false);

    getAll().then(res => {
      console.log('getAll123', res);
      const parsedData = parseData(res);

      isSalesEnabled.value = parsedData.isSalesEnabled;

      salesMonths.value = parsedData.salesMonths;
      salesText.value = parsedData.salesText;
      semiLuxuryFamily.value = parsedData.semiLuxuryFamily;
      semiLuxurySeaView.value = parsedData.semiLuxurySeaView;
      standard.value = parsedData.standard;

      if(!isSalesEnabled.value) switchSales()

      loadingDataComplete.value = true;

      priceYear.value = parsedData.year;

    });

    return {
      salesText,
      loading,
      priceYear,
      validationSaleText,
      salesTextErrors,
      isSalesEnabled,
      salesMonths,
      switchSales,
      logout,
      isUserLogin,
      saveData,
      semiLuxuryFamily,
      semiLuxurySeaView,
      standard,
      loadingDataComplete,
    }
  }
}


</script>
<template>
  <div v-if="isUserLogin">
    <button @click="saveData"
            class="fixed bottom-[70px] right-[40px] btnBorderWrapper cursor-pointer select-none z-10">
      <span
          class="block relative bg-yellowMain py-[30px] px-[40px] font-montserratSemiBold uppercase text-[24px] text-whiteMain btnBorder">
      <span v-if="loading" class="absolute flex justify-center items-center h-full top-0 left-0 w-full">
        <span class="loader"></span>
      </span>
      <span class="block" :class="{invisible: loading}">СОХРАНИТЬ</span>
        </span>
    </button>
  </div>
  <div v-if="isUserLogin && loadingDataComplete" class="flex flex-col h-[100vh]">
    <button @click="logout" class="absolute">Logout</button>
    <div class="bg-blueMain">
      <div class="font-helveticaLight header-grid pt-[26px] text-[17px] h-[170px]">
        <div>
          <div class="header-container pb-[30px] pt-[25px]">
            <div class="ml-[20%] flex items-center gap-[10px]">
            </div>
          </div>
        </div>
        <div class="mx-auto">
          <img src="@/assets/images/logo.svg" width="145px" alt="logo">
        </div>
        <div class="">
          <div class="header-container pb-[30px] pt-[25px]">
            <div class="text-right mr-[20%] text-[#FBF6ED] flex justify-end gap-[60px]">
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center pb-[40px]">
        <div class="font-ralewayRegular uppercase text-yellowMain text-[40px]">
          Админ-панель
        </div>
      </div>
    </div>
    <div class="bg-whiteMain h-full">
      <div class="mx-auto mt-[50px] flex gap-[48px] justify-center bg-whiteMain pb-[50px]">
        <div class="mt-[24px] text-blueMain text-[23px] font-montserratMedium flex flex-col items-end">
          <div class="border-[3px] border-yellowMain py-[44px] px-[45px] flex gap-[32px] items-center">
            <div>Информировать о СКИДКЕ</div>
            <div class="h-[45px]">
              <input @input="switchSales" type="checkbox" id="sales" class="custom-checkbox" v-model="isSalesEnabled" :checked="isSalesEnabled">
              <label for="sales" class="cursor-pointer"></label>
            </div>
          </div>
          <div :class="{'text-mainGrey': !isSalesEnabled}">
            <div class="flex items-center gap-[10px] mt-[50px]">
              <div>
                Укажите месяц СКИДКИ
              </div>
              <div v-if="isSalesEnabled">
                <img src="@/assets/icons/promotion.svg" alt="promotion">
              </div>
            </div>
            <div class="monthsWrapper mt-[42px] flex flex-col gap-[10px]">
              <div>
                <div>Апрель</div>
                <div>
                  <input v-model="salesMonths.april" :disabled="!isSalesEnabled" type="checkbox" id="april" :checked="salesMonths.april"
                         class="custom-checkbox checkboxSmallBorder"
                         :class="{checkboxSmallBorderDisabled: !isSalesEnabled}">
                  <label for="april"></label></div>
              </div>
              <div>
                <div>Май</div>
                <div>
                  <input v-model="salesMonths.may" :disabled="!isSalesEnabled" type="checkbox" id="may" :checked="salesMonths.may"
                         class="custom-checkbox checkboxSmallBorder"
                         :class="{checkboxSmallBorderDisabled: !isSalesEnabled}">
                  <label for="may"></label></div>
              </div>
              <div>
                <div>Июнь</div>
                <div>
                  <input v-model="salesMonths.june" :disabled="!isSalesEnabled" type="checkbox" id="june" :checked="salesMonths.june"
                         class="custom-checkbox checkboxSmallBorder"
                         :class="{checkboxSmallBorderDisabled: !isSalesEnabled}">
                  <label for="june"></label></div>
              </div>
              <div>
                <div>Июль</div>
                <div>
                  <input v-model="salesMonths.july" :disabled="!isSalesEnabled" type="checkbox" id="july" :checked="salesMonths.july"
                         class="custom-checkbox checkboxSmallBorder"
                         :class="{checkboxSmallBorderDisabled: !isSalesEnabled}">
                  <label for="july"></label></div>
              </div>
              <div>
                <div>Август</div>
                <div>
                  <input v-model="salesMonths.august" :disabled="!isSalesEnabled" type="checkbox" id="august" :checked="salesMonths.august"
                         class="custom-checkbox checkboxSmallBorder"
                         :class="{checkboxSmallBorderDisabled: !isSalesEnabled}">
                  <label for="august"></label></div>
              </div>
              <div>
                <div>Сентябрь</div>
                <div>
                  <input v-model="salesMonths.september" :disabled="!isSalesEnabled" type="checkbox" id="september" :checked="salesMonths.september"
                         class="custom-checkbox checkboxSmallBorder"
                         :class="{checkboxSmallBorderDisabled: !isSalesEnabled}">
                  <label for="september"></label></div>
              </div>
              <div>
                <div>Октябрь</div>
                <div>
                  <input v-model="salesMonths.october" :disabled="!isSalesEnabled" type="checkbox" id="october" :checked="salesMonths.september"
                         class="custom-checkbox checkboxSmallBorder"
                         :class="{checkboxSmallBorderDisabled: !isSalesEnabled}">
                  <label for="october"></label></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="text-right font-montserratRegular text-[#999999]">Поле ввода текста</div>
          <div class="relative flex border border-blueMain text-[20px]">
            <div
                class="w-[243px] h-[65px] bg-blueMain text-whiteMain flex items-center justify-center font-montserratRegular"
                :class="{'bg-mainGrey': !isSalesEnabled}">
              <div>Основной текст</div>
            </div>
            <input :disabled="!isSalesEnabled" v-model="salesText.main" @input="validationSaleText"
                   class="inputText text-blueMain font-montserratSemiBold text-[27px] bg-whiteMain w-[512px] text-center"
                   :class="{'text-mainGrey': !isSalesEnabled}"
                   type="text">
            <div
                class="absolute bottom-[-12px] w-full justify-end text-right text-[#F01414] text-[13px] flex items-end">
              <div v-if="salesTextErrors.mainError" class="h-[13px]">Не более 55 символов</div>
            </div>
          </div>
          <div class="relative mt-[32px] flex border border-blueMain text-[20px]">
            <div
                class="w-[243px] h-[65px] bg-blueMain text-whiteMain flex items-center justify-center font-montserratRegular"
                :class="{'bg-mainGrey': !isSalesEnabled}">
              <div class="text-center">Дополнительный<br> текст</div>
            </div>
            <input :disabled="!isSalesEnabled" v-model="salesText.additional" @input="validationSaleText"
                   class="inputText text-blueMain font-montserratRegular text-[23px] bg-whiteMain w-[512px] text-center"
                   :class="{'text-mainGrey': !isSalesEnabled}"
                   type="text">
            <div
                class="absolute bottom-[-12px] w-full justify-end text-right text-[#F01414] text-[13px] flex items-end">
              <div v-if="salesTextErrors.additionalError" class="h-[13px]">Не более 60 символов</div>
            </div>
          </div>
          <div class="mt-[28px] text-right font-montserratRegular text-[#999999]">Пример</div>
          <div class="flex max-w-[760px]">
            <div class="relative border-2 border-blueMain" :class="{'border-mainGrey': !isSalesEnabled}">
              <div :class="{invisible: !isSalesEnabled}" class="absolute right-0 top-0">
                <img src="@/assets/icons/yellow-cross.svg" alt="cross">
              </div>
              <div :class="{invisible: !isSalesEnabled}" class="h-full flex items-center justify-center">
                <div class="text-blueMain font-montserratMedium text-[18px] bg-whiteMain p-[50px]">
                  <div class="border-2 border-yellowMain">
                    <div class="bg-whiteMain px-[12px] mt-[-32px] mx-[210px] mb-[62px]">
                      <img src="@/assets/icons/discount_badge.svg" alt="logo_blue">
                    </div>
                    <div class="flex justify-center items-center">
                      <div class="flex flex-col justify-between items-center h-full gap-[30px]">
                        <div class="flex items-center font-montserratSemiBold text-[27px] text-center px-[55px]">
                          {{ salesText.main }}
                        </div>
                        <div class="flex font-montserratRegular items-center text-[23px] text-center px-[55px]">
                          {{ salesText.additional }}
                        </div>
                      </div>
                    </div>
                    <div class="mt-[30px] flex justify-end h-full mb-[30px] mr-[30px]">
                      <div class="flex gap-[15px]">
                        <svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1044_1688)">
                            <circle cx="24.3202" cy="24.9672" r="23.5375" stroke="#2A657E" stroke-width="1.20705"/>
                            <path
                                d="M35.1091 14.8737L31.1318 34.9264C31.1318 34.9264 30.5758 36.3169 29.0459 35.6494L19.8265 28.593C21.0656 27.4791 30.679 18.8363 31.0994 18.4444C31.7492 17.8378 31.3459 17.4768 30.5905 17.9355L16.3909 26.9531L10.9126 25.1088C10.9126 25.1088 10.0501 24.8028 9.9671 24.1353C9.88361 23.4679 10.9406 23.1064 10.9406 23.1064L33.2737 14.3452C33.2737 14.3452 35.1091 13.5388 35.1091 14.8737Z"
                                fill="#2A657E"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_1044_1688">
                              <rect width="48.282" height="48.282" fill="white"
                                    transform="translate(0.179199 0.826233)"/>
                            </clipPath>
                          </defs>
                        </svg>
                        <svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1044_1691)">
                            <circle cx="24.8197" cy="24.9672" r="23.5375" stroke="#2A657E" stroke-width="1.20705"/>
                            <path
                                d="M30.8548 12.8966H18.7846C15.4656 12.8966 12.7495 15.6127 12.7495 18.9317V31.0025C12.7495 34.3207 15.4656 37.0376 18.7846 37.0376H30.8548C34.1738 37.0376 36.8899 34.3207 36.8899 31.0025V18.9317C36.8899 15.6127 34.1738 12.8966 30.8548 12.8966ZM34.8781 31.0025C34.8781 33.2204 33.074 35.0258 30.8548 35.0258H18.7846C16.5664 35.0258 14.7613 33.2204 14.7613 31.0025V18.9317C14.7613 16.7133 16.5664 14.9084 18.7846 14.9084H30.8548C33.074 14.9084 34.8781 16.7133 34.8781 18.9317V31.0025Z"
                                fill="#2A657E"/>
                            <path
                                d="M31.3584 19.9369C32.1917 19.9369 32.8672 19.2614 32.8672 18.4281C32.8672 17.5948 32.1917 16.9193 31.3584 16.9193C30.5251 16.9193 29.8496 17.5948 29.8496 18.4281C29.8496 19.2614 30.5251 19.9369 31.3584 19.9369Z"
                                fill="#2A657E"/>
                            <path
                                d="M24.8198 18.9319C21.486 18.9319 18.7847 21.6335 18.7847 24.967C18.7847 28.2993 21.486 31.0027 24.8198 31.0027C28.1526 31.0027 30.8549 28.2993 30.8549 24.967C30.8549 21.6335 28.1526 18.9319 24.8198 18.9319ZM24.8198 28.9909C22.5979 28.9909 20.7965 27.1894 20.7965 24.967C20.7965 22.7446 22.5979 20.9437 24.8198 20.9437C27.0416 20.9437 28.8431 22.7446 28.8431 24.967C28.8431 27.1894 27.0416 28.9909 24.8198 28.9909Z"
                                fill="#2A657E"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_1044_1691">
                              <rect width="48.282" height="48.282" fill="white"
                                    transform="translate(0.678711 0.826233)"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <img v-if="isSalesEnabled" src="@/assets/icons/gift.svg" height="122" width="122" alt="gift"
               class="mt-[45px] ml-[60px]">
        </div>

      </div>
      <div class="bg-blueMain flex justify-center items-center">
        <div class="flex py-[24px] items-center">
          <div class="font-montserratRegular text-[40px] text-whiteMain mr-[32px]">Цены на номера</div>
          <input type="number" min="2024" max="2099" step="1" v-model="priceYear" onkeypress="return false"
                 class="inputYear text-center text-[22px] w-[118px] h-[42px] bg-[#FFFFFF26] border border-yellowMain text-yellowMain"/>
          <div class="font-montserratRegular text-[18px] text-[#999999] ml-[10px]">Укажите год</div>
        </div>
      </div>
      <div class="bg-whiteMain flex justify-center items-center py-[30px]">
        <div class="font-montserratMedium text-[23px] text-blueMain">Редактировать цены на “Стандарт”</div>
      </div>
      <div>
        <div class="bg-blueMain">
          <div class="text-center text-[52px] font-montserratRegular text-whiteMain pt-[54px] pb-[40px]">Стандарт</div>
          <div class="flex justify-center">
            <div>
              <PriceTable :price="standard"/>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-whiteMain flex justify-center items-center py-[30px]">
        <div class="font-montserratMedium text-[23px] text-blueMain">Редактировать цены на “Полулюкс с видом на море”
        </div>
      </div>
      <div>
        <div class="bg-blueMain">
          <div class="text-center text-[52px] font-montserratRegular text-whiteMain pt-[54px] pb-[40px]">Полулюкс с
            видом на море
          </div>
          <div class="flex justify-center">
            <div>
              <PriceTable :price="semiLuxurySeaView"/>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-whiteMain flex justify-center items-center py-[30px]">
        <div class="font-montserratMedium text-[23px] text-blueMain">Редактировать цены на “Семейный полулюкс”</div>
      </div>
      <div>
        <div class="bg-blueMain">
          <div class="text-center text-[52px] font-montserratRegular text-whiteMain pt-[54px] pb-[40px]">Семейный
            полулюкс
          </div>
          <div class="flex justify-center">
            <div>
              <PriceTable :price="semiLuxuryFamily"/>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>
.inputYear:focus {
  outline: none !important;
  @apply border border-yellowMain
}

.inputText:focus {
  outline: none !important;
  border: none;
}

.monthsWrapper > div {
  @apply flex items-center justify-between pl-[90px] pr-[42px] gap-[10px]
}

.monthsWrapper > div > div {
  height: 45px;
}

.monthsWrapper > div > div:first-child {
  padding-top: 4px;
}

.monthsWrapper > div > div > label {
  @apply cursor-pointer
}

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.custom-checkbox + label::before {
  content: '';
  display: inline-block;
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 4px solid var(--main-blue-color);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom-checkbox:checked + label::before {
  background-image: url("src/assets/icons/checkMark.svg");
  background-size: 30px 32px;
}

.checkboxSmallBorder + label::before {
  border: 2px solid var(--main-blue-color);
}

.checkboxSmallBorderDisabled + label::before {
  border: 2px solid var(--main-grey-color);
}

.btnBorderWrapper {
  border-radius: 70px;
  padding: 1px;
  background: linear-gradient(161.94deg, #FFFFFF 13.92%, #999999 99.89%);
}

.btnBorder {
  border-radius: 70px;
}

.header-grid {
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
}

.header-container {
  border-bottom: 2px solid var(--main-yellow-color);
  background-color: var(--main-blue-color);
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid var(--main-white-color);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
