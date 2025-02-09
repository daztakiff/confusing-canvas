import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

function getWindowDimensions() {
  return {
    width: window.innerWidth,
    height: window.innerHeight - 50,
  };
}

const { width, height} = getWindowDimensions()

const app = createApp(App, {
  width: width,
  height: height,
})

app.use(createPinia())

app.mount('#app')
