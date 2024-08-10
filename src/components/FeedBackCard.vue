<script lang="ts">
import {onMounted, ref} from "vue";

export default {
  props: ['number', 'data'],
  emits: ['openFeedbackModal'],

  setup(props) {

    const rowCount = ref(0);

    onMounted(() => {
      if(document.getElementById(`feedback_text-${props.number}`)){
        rowCount.value = document.getElementById(`feedback_text-${props.number}`)!.offsetHeight;
      }
    })

    return {
      rowCount
    }
  }
}
</script>

<template>
  <div class="card relative shadow">
    <div v-if="data.user_name !=='link_to_yandex'" class="absolute top-[-60px] left-[55px] w-[132px] h-[132px] rounded-t-full bg-[#FFFFFF] flex items-center justify-center">
      <div v-if="data.user_photo !== 'default'" class="w-[90px] h-[90px] rounded-full overflow-hidden">
        <img :src="`src/assets/images/users/${data.user_photo}`" alt="person_elips">
      </div>
      <img v-else src="@/assets/icons/person_elips.svg" alt="person_elips">
    </div>
    <div v-if="data.user_name !=='link_to_yandex'" class="w-full text-left pt-[30px] pb-[30px] px-[30px] text-blueMain">
      <div class="pb-[12px] w-full flex justify-end">
        <img src="@/assets/images/yandex_logo.png" alt="yandex_logo">
      </div>
      <div class="font-montserratMedium text-[24px]">{{ data.user_name }}</div>
      <div class="font-montserratRegular text-[17px] flex gap-[16px] mt-[16px] mb-[25px] items-center">
        <div class="flex">
          <div v-for="idx in 5" :key="idx">
            <img src="@/assets/icons/star.svg" alt="star">
          </div>
        </div>
        <div>{{ data.feedback_date }}</div>
      </div>
      <div :id="`feedback_text-${number}`" class="feedbackText font-montserratRegular text-[16px] leading-[22px]">
        {{ data.feedback_text }}
      </div>
      <div @click="$emit('openFeedbackModal', data)" v-if="rowCount === 88" class="readMore mt-[8px] cursor-pointer font-montserratMedium text-[16px] flex items-center gap-[7px]">
        <div>Читать отзыв</div><img src="@/assets/icons/arrow-right_blue.svg" alt="arrow-right_blue">
      </div>
    </div>
    <a v-else href="https://yandex.ru/maps/org/liliya/180430998084/reviews/?ll=40.626525%2C43.097830&z=17" target="_blank" class="readMore h-full flex items-center justify-between mx-[55px] cursor-pointer">
      <div class="flex">
        <div class="font-montserratMedium text-[16px] text-blueMain pr-[8px]">
          Читать больше отзывов об отеле “Лилия”
        </div>
        <img src="@/assets/icons/arrow-right_blue.svg" alt="arrow-right_blue">
      </div>

      <div>
        <img src="@/assets/images/yandex_logo.png" alt="yandex_logo">
      </div>
    </a>
  </div>
</template>

<style scoped>
.card{
  width: 682px;
  height: 310px;
  background-color: #FFFFFF;
}
.feedbackText{
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  -ms-line-clamp: 4;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  box-orient: vertical;
}
.readMore img {
  transition-duration: 500ms;
  transition-property: margin-left;
}
.readMore:hover img {
  margin-left: 7px;
}
.shadow {
  box-shadow: -4px 2px 10px 0px #A5873B14;
}
</style>
