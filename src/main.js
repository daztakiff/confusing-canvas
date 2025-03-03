import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'

function getWindowDimensions() {
  return {
    width: window.innerWidth,
    height: window.innerHeight - 8,
  };
}

const { width, height} = getWindowDimensions()

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App, {
  width: width,
  height: height,
});

app.use(createPinia())
app.use(vuetify)
app.mount('#app')