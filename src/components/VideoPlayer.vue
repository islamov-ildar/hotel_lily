<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { videoSourceForPlayback } from '@/common/videoWarmup'

const props = defineProps<{ src: string; poster?: string }>()
const playbackSource = ref(import.meta.env.SSR ? props.src : videoSourceForPlayback(props.src))
const player = ref<HTMLVideoElement>()
let observer: IntersectionObserver | undefined
let visible = false
let active = true

function shouldPlay() {
  return active && visible && document.visibilityState === 'visible'
}

function syncPlayback() {
  const video = player.value
  if (!video) return
  if (!shouldPlay()) {
    video.pause()
    return
  }
  if (video.paused && !video.ended) {
    void video.play().then(() => {
      // Visibility may have changed while playback was waiting for media data.
      if (!shouldPlay()) video.pause()
    }).catch(() => {
      // If the browser blocks autoplay, native controls remain available.
    })
  }
}

watch(() => props.src, (src) => { playbackSource.value = videoSourceForPlayback(src) })

onMounted(() => {
  if (!player.value) return
  observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting && entry.intersectionRatio >= 0.25
    syncPlayback()
  }, { threshold: [0, 0.25] })
  observer.observe(player.value)
  document.addEventListener('visibilitychange', syncPlayback)
})

onBeforeUnmount(() => {
  active = false
  observer?.disconnect()
  document.removeEventListener('visibilitychange', syncPlayback)
  player.value?.pause()
})
</script>

<template>
  <video ref="player" :src="playbackSource" :poster="poster" controls muted playsinline preload="metadata">
    Простите, но ваш браузер не поддерживает встроенные видео.
  </video>
</template>
