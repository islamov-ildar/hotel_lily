<script setup lang="ts">
const props = defineProps({
  label: {type: String, required: true}
});

</script>

<template>
<div>
  <button class="px-[70px] py-[30px] text-[28px]">
    {{ label }}
  </button>
</div>
</template>

<style scoped>
button {
  background-color: #F2C452;
  color: #FFFFFF;
}
</style>
