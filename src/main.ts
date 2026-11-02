import './assets/main.css'
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { ref } from 'vue'
import App from './App.vue'
import { routes } from './router'
import { hotelDataKey, fetchHotelData } from './common/hotelData'

export const createApp = ViteSSG(App, { routes }, async ({ app, initialState, routePath }) => {
  app.use(createPinia())
  if (import.meta.env.SSR && routePath === '/') {
    initialState.hotelData = await fetchHotelData()
  }
  app.provide(hotelDataKey, ref(initialState.hotelData))
})
