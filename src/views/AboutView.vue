<script lang="ts">

import {useCounterStore} from "@/stores/counter";

export default {
  setup() {

    const store = useCounterStore();

    return {
      store,
    }
  }
}


</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4HYg8DhE_OyFTo8uByGc7cf7O9bKdnfIIv4eg0foJw&s" alt="">
  </div>
  <div class="p-2 bg-amber-800 m-1">
    {{ store.count }}
  </div>
  <button @click="store.increment()" class="bg-amber-200">Increment</button>
</template>

<style>
</style>
