import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: '#1a1a2e',
          surface: '#232340',
          'surface-variant': '#2d2d4a',
          primary: '#a78bfa',
          secondary: '#7c3aed',
        },
      },
      light: {
        colors: {
          background: '#faf9ff',
          surface: '#ffffff',
          'surface-variant': '#f0edff',
          primary: '#7c3aed',
          secondary: '#a78bfa',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
