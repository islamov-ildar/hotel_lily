<script lang="ts">
export default {
  props: ['roomDescription']
}
</script>

<template>
  <div class="text-whiteMain text-[18px] font-montserratRegular">
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
</template>
