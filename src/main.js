// import './assets/main.css'
import '@/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Begine of firebase initialize related
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBVk3e4a-s8vGQfISAgrHdBSnZ9W7Hb0j8',
  authDomain: 'feinplay-628e9.firebaseapp.com',
  projectId: 'feinplay-628e9',
  storageBucket: 'feinplay-628e9.appspot.com',
  messagingSenderId: '541922908434',
  appId: '1:541922908434:web:436ad174f9036f0c847bcb'
}

// Initialize Firebase
initializeApp(firebaseConfig)
// end of firebase initialize related

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
