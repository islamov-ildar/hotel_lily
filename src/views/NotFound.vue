<script setup lang="ts">
import { useHead } from '@unhead/vue'
useHead({ title: 'Страница не найдена — Отель «Лилия»', meta: [{ name: 'robots', content: 'noindex, follow' }] })
</script>
<template>
  <main class="min-h-screen flex flex-col items-center justify-center bg-whiteMain text-blueMain gap-6 px-6 text-center">
    <h1 class="text-4xl">Страница не найдена</h1>
    <p>Возможно, адрес изменился или был указан неверно.</p>
    <a href="/" class="underline">На главную страницу отеля</a>
  </main>
</template>
