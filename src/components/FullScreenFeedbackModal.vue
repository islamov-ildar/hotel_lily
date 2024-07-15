<script lang="ts">

export default {
  props: ['feedback'],
  emits: ['close'],

  setup(props, { emit }){
    const clickIntoCarousel = (some: any) => {
      const classes = Array.from(some.srcElement.classList);
      if(classes.includes('carousel') || classes.includes('cross')){
        console.log('click on blackout')
        emit('close')
      }
    }

    console.log('fullscreenModal props', props);

    return {
      clickIntoCarousel
    }
  }
}
</script>

<template>
<div @click="clickIntoCarousel" class="fixed top-0 left-0 z-10 w-[100vw] h-[100vh] bg-[#040404D9]">
  <div class="cross h-full flex flex-col justify-center">

    <div class="flex justify-center">
      <div class="card relative">
        <div class="cross cursor-pointer absolute top-[-35px] right-[-35px] w-[35px] h-[35px]">
          <img class="cross" src="@/assets/icons/cross.svg" alt="cross">
        </div>
        <div v-if="feedback.user_name !=='link_to_yandex'" class="absolute top-[-60px] left-[55px] w-[132px] h-[132px] rounded-t-full bg-[#FFFFFF] flex items-center justify-center">
          <div v-if="feedback.user_photo !== 'default'" class="w-[90px] h-[90px] rounded-full overflow-hidden">
            <img :src="`src/assets/images/users/${feedback.user_photo}`" alt="person_elips">
          </div>
          <img v-else src="@/assets/icons/person_elips.svg" alt="person_elips">
        </div>
        <div class="w-full text-left pt-[30px] pb-[30px] px-[30px] text-blueMain">
          <div class="pb-[12px] w-full flex justify-end">
            <img src="@/assets/images/yandex_logo.png" alt="yandex_logo">
          </div>
          <div class="font-montserratMedium text-[24px]">{{ feedback.user_name }}</div>
          <div class="font-montserratRegular text-[17px] flex gap-[16px] mt-[16px] mb-[25px] items-center">
            <div class="flex">
              <div v-for="idx in 5" :key="idx">
                <img src="@/assets/icons/star.svg" alt="star">
              </div>
            </div>
            <div>{{ feedback.feedback_date }}</div>
          </div>
          <div class="feedbackText font-montserratRegular text-[16px] leading-[22px]">
            {{ feedback.feedback_text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.card{
  width: 80%;
  background-color: #FFFFFF;
}
</style>
