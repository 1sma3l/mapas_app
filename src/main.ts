import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiMXNtYTNsIiwiYSI6ImNsMHR4MW00dzBycnEza3FvdnV0YmJtZ3MifQ.oNKrIbxmILlyAcb4gyx8Og';

if(!navigator.geolocation){
    alert('El navegador no soporta el Geolocation')
    throw new Error('El navegador no soporta el Geolocation')
}

createApp(App).use(store).use(router).mount('#app')
