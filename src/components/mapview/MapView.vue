<script lang="ts" src="./MapView.ts"></script>

<template>
   <div v-if="!isUserlocationReady" class="loading-map d-flex justify-content-center align-items-center">
       <div class="text-center">
           <h3>Espre por favor</h3>
           <span>Localizando...</span>
       </div>
   </div>

    <div v-show="isUserlocationReady" class="map-container" ref="mapElement">

    </div>
</template>


<style scoped>
.loading-map {
    color: white;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.8);
}

.map-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
}
</style>