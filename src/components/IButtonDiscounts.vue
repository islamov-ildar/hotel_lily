<script lang="ts">

import {onMounted, PropType, ref} from "vue";

export default {
  props: {
    label: {type: String, required: true},
    data: {type: Object as PropType<any>}
  },
  setup(){
    const showFullBtn = ref<boolean>(false);
    const showDiscount = ref<boolean>(false);

    const isOnBottom = ref(false);

    onMounted(() => {
        document.addEventListener('scroll', function() {
          const documentHeight = document.body.scrollHeight;
          const currentScroll = window.scrollY + window.innerHeight;
          const modifier = 10;
          isOnBottom.value = currentScroll + modifier > documentHeight;
        })
    })

    return {
      showDiscount,
      showFullBtn,
      isOnBottom,
    }
  }
};

</script>

<template>
  <div v-if="showDiscount" class="fixed bottom-[275px] z-[11] hidden fixedModal">
    <div @click="showDiscount = false" class="cursor-pointer absolute right-0 top-0">
      <img src="@/assets/icons/yellow-cross.svg" alt="cross">
    </div>
    <div class="cross h-full flex items-center justify-center">
      <div class="text-blueMain font-montserratMedium text-[18px] bg-whiteMain p-[50px]">
        <div class="border-2 border-yellowMain">
          <div class="bg-whiteMain px-[12px] mt-[-32px] mx-[210px] mb-[62px]">
            <img src="@/assets/icons/discount_badge.svg" alt="logo_blue">
          </div>
          <div class="flex justify-center items-center">
            <div class="flex flex-col justify-between items-center h-full gap-[30px]">
              <div class="flex items-center font-montserratSemiBold text-[27px]">
                {{ data.main }}
              </div>
              <div class="flex font-montserratRegular items-center text-[23px]">
                {{ data.additional }}
              </div>
            </div>
          </div>

          <div class="mt-[30px] flex justify-end h-full mb-[30px] mr-[30px]">
            <div class="flex gap-[15px]">
              <a href="https://t.me/Asmat_Agumava">
                <svg class="cursor-pointer" width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1044_1688)">
                    <circle cx="24.3202" cy="24.9672" r="23.5375" stroke="#2A657E" stroke-width="1.20705"/>
                    <path d="M35.1091 14.8737L31.1318 34.9264C31.1318 34.9264 30.5758 36.3169 29.0459 35.6494L19.8265 28.593C21.0656 27.4791 30.679 18.8363 31.0994 18.4444C31.7492 17.8378 31.3459 17.4768 30.5905 17.9355L16.3909 26.9531L10.9126 25.1088C10.9126 25.1088 10.0501 24.8028 9.9671 24.1353C9.88361 23.4679 10.9406 23.1064 10.9406 23.1064L33.2737 14.3452C33.2737 14.3452 35.1091 13.5388 35.1091 14.8737Z" fill="#2A657E"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1044_1688">
                      <rect width="48.282" height="48.282" fill="white" transform="translate(0.179199 0.826233)"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://www.instagram.com/lily_hotel_gudauta?igsh=c2ZxbGpiNnI0ZGF5">
                <svg class="cursor-pointer" width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1044_1691)">
                    <circle cx="24.8197" cy="24.9672" r="23.5375" stroke="#2A657E" stroke-width="1.20705"/>
                    <path d="M30.8548 12.8966H18.7846C15.4656 12.8966 12.7495 15.6127 12.7495 18.9317V31.0025C12.7495 34.3207 15.4656 37.0376 18.7846 37.0376H30.8548C34.1738 37.0376 36.8899 34.3207 36.8899 31.0025V18.9317C36.8899 15.6127 34.1738 12.8966 30.8548 12.8966ZM34.8781 31.0025C34.8781 33.2204 33.074 35.0258 30.8548 35.0258H18.7846C16.5664 35.0258 14.7613 33.2204 14.7613 31.0025V18.9317C14.7613 16.7133 16.5664 14.9084 18.7846 14.9084H30.8548C33.074 14.9084 34.8781 16.7133 34.8781 18.9317V31.0025Z" fill="#2A657E"/>
                    <path d="M31.3584 19.9369C32.1917 19.9369 32.8672 19.2614 32.8672 18.4281C32.8672 17.5948 32.1917 16.9193 31.3584 16.9193C30.5251 16.9193 29.8496 17.5948 29.8496 18.4281C29.8496 19.2614 30.5251 19.9369 31.3584 19.9369Z" fill="#2A657E"/>
                    <path d="M24.8198 18.9319C21.486 18.9319 18.7847 21.6335 18.7847 24.967C18.7847 28.2993 21.486 31.0027 24.8198 31.0027C28.1526 31.0027 30.8549 28.2993 30.8549 24.967C30.8549 21.6335 28.1526 18.9319 24.8198 18.9319ZM24.8198 28.9909C22.5979 28.9909 20.7965 27.1894 20.7965 24.967C20.7965 22.7446 22.5979 20.9437 24.8198 20.9437C27.0416 20.9437 28.8431 22.7446 28.8431 24.967C28.8431 27.1894 27.0416 28.9909 24.8198 28.9909Z" fill="#2A657E"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1044_1691">
                      <rect width="48.282" height="48.282" fill="white" transform="translate(0.678711 0.826233)"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showDiscount" class="fixed bottom-[275px] left-[40px] z-[11] max-w-[65%] responsiveModal">
    <div @click="showDiscount = false" class="cursor-pointer absolute right-0 top-0 w-[17%]">
      <img src="@/assets/icons/yellow-cross.svg" alt="cross">
    </div>
    <div class="cross h-full flex items-center justify-center">
      <div class="text-blueMain font-montserratMedium text-[18px] bg-whiteMain p-[15%]">
        <div class="border-2 border-yellowMain">
          <div class="bg-whiteMain px-[5%] mt-[-11%] mx-[10%] mb-[5%]">
            <img src="@/assets/icons/discount_badge.svg" alt="logo_blue">
          </div>
<!--          <div class="pin pin-green">2 new</div>-->

          <div class="flex justify-center items-center">
            <div class="flex flex-col justify-between items-center h-full gap-[30px]">
              <div class="flex items-center text-center font-montserratSemiBold text-[13px] lg:text-[27px]">
                  {{ data.main }}
              </div>
              <div class="flex font-montserratRegular text-center items-center text-[13px] lg:text-[23px]">
                  {{ data.additional }}
              </div>
            </div>
          </div>

          <div class="mt-[30px] flex justify-end h-full mb-[30px] mr-[30px]">
            <div class="flex gap-[15px]">
              <a href="https://t.me/Asmat_Agumava">
                <svg class="cursor-pointer" width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1044_1688)">
                    <circle cx="24.3202" cy="24.9672" r="23.5375" stroke="#2A657E" stroke-width="1.20705"/>
                    <path d="M35.1091 14.8737L31.1318 34.9264C31.1318 34.9264 30.5758 36.3169 29.0459 35.6494L19.8265 28.593C21.0656 27.4791 30.679 18.8363 31.0994 18.4444C31.7492 17.8378 31.3459 17.4768 30.5905 17.9355L16.3909 26.9531L10.9126 25.1088C10.9126 25.1088 10.0501 24.8028 9.9671 24.1353C9.88361 23.4679 10.9406 23.1064 10.9406 23.1064L33.2737 14.3452C33.2737 14.3452 35.1091 13.5388 35.1091 14.8737Z" fill="#2A657E"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1044_1688">
                      <rect width="48.282" height="48.282" fill="white" transform="translate(0.179199 0.826233)"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://www.instagram.com/lily_hotel_gudauta?igsh=c2ZxbGpiNnI0ZGF5">
                <svg class="cursor-pointer" width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1044_1691)">
                    <circle cx="24.8197" cy="24.9672" r="23.5375" stroke="#2A657E" stroke-width="1.20705"/>
                    <path d="M30.8548 12.8966H18.7846C15.4656 12.8966 12.7495 15.6127 12.7495 18.9317V31.0025C12.7495 34.3207 15.4656 37.0376 18.7846 37.0376H30.8548C34.1738 37.0376 36.8899 34.3207 36.8899 31.0025V18.9317C36.8899 15.6127 34.1738 12.8966 30.8548 12.8966ZM34.8781 31.0025C34.8781 33.2204 33.074 35.0258 30.8548 35.0258H18.7846C16.5664 35.0258 14.7613 33.2204 14.7613 31.0025V18.9317C14.7613 16.7133 16.5664 14.9084 18.7846 14.9084H30.8548C33.074 14.9084 34.8781 16.7133 34.8781 18.9317V31.0025Z" fill="#2A657E"/>
                    <path d="M31.3584 19.9369C32.1917 19.9369 32.8672 19.2614 32.8672 18.4281C32.8672 17.5948 32.1917 16.9193 31.3584 16.9193C30.5251 16.9193 29.8496 17.5948 29.8496 18.4281C29.8496 19.2614 30.5251 19.9369 31.3584 19.9369Z" fill="#2A657E"/>
                    <path d="M24.8198 18.9319C21.486 18.9319 18.7847 21.6335 18.7847 24.967C18.7847 28.2993 21.486 31.0027 24.8198 31.0027C28.1526 31.0027 30.8549 28.2993 30.8549 24.967C30.8549 21.6335 28.1526 18.9319 24.8198 18.9319ZM24.8198 28.9909C22.5979 28.9909 20.7965 27.1894 20.7965 24.967C20.7965 22.7446 22.5979 20.9437 24.8198 20.9437C27.0416 20.9437 28.8431 22.7446 28.8431 24.967C28.8431 27.1894 27.0416 28.9909 24.8198 28.9909Z" fill="#2A657E"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1044_1691">
                      <rect width="48.282" height="48.282" fill="white" transform="translate(0.678711 0.826233)"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
      @mouseenter="showFullBtn = true"
      @mouseleave="showFullBtn = false"
      @click="showDiscount = !showDiscount"
      class="btn fixed h-[86px] bottom-[120px] z-[11] w-[100px]"
      :class="{ 'w-[180px]': showFullBtn, onBottom: isOnBottom}">
    <div class="relative flex items-center">
      <transition name="fullBtn">
        <div v-if="showFullBtn"
             class="z-[11] cursor-pointer absolute rounded-[60px] left-[10px] md:left-[40px] top-0 px-[35px] py-[17px] text-[28px] bg-yellowMain text-[#FFFFFF]">
          {{ label }}
        </div>
      </transition>
      <transition name="smallBtn">
        <div v-if="!showFullBtn" class="z-[10] absolute mt-[-4px] left-[10px] md:left-[40px] top-0 w-[86px] h-[86px] yellowBgTelegram">
          <img src="@/assets/icons/gift.svg" height="86" width="86" alt="yellowBgTelegram">
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fixedModal {
  box-shadow: 7px 7px 25px 2px rgba(42, 101, 126, 0.20);
}

@media (min-width: 670px) {
  .responsiveModal {
    display: none;
  }
}
@media (min-width: 670px) {
  .fixedModal {
    display: block;
  }
}
@media (min-width: 810px) {
  .fixedModal {
    left: 40px;
  }
}
.btn {
  transition: margin 700ms;
}
.onBottom {
  margin-bottom: 50px;
}

.fullBtn-enter-active,
.fullBtn-leave-active {
  transition: opacity 0.5s ease;
}

.fullBtn-enter-from,
.fullBtn-leave-to {
  opacity: 0;
}

.smallBtn-enter-active,
.smallBtn-leave-active {
  transition: opacity 0.5s;
}

.smallBtn-enter-from,
.smallBtn-leave-to {
  opacity: 0;
}
svg:hover {
  stroke: #2A657E;
  fill: #2A657E;
}
svg:hover circle{
  stroke: #2A657E;
}
svg:hover path{
  fill: #FBF6ED;
}
</style>
