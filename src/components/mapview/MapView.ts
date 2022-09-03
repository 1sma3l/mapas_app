import Mapboxgl from 'mapbox-gl';
import { defineComponent, ref, onMounted, watch } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';
import { useMapStore } from '../../composables/useMapStore';

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>()
        const { userLocation, isUserlocationReady } = usePlacesStore()
        const { setMap } = useMapStore()

        const initMap = async () => {

            if(!mapElement.value) return;
            if(!userLocation.value) return;

            await Promise.resolve()

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15 // starting zoom
            });

            const myLocationPopup = new Mapboxgl.Popup({ offset: [0, -25]})
            .setLngLat( userLocation.value )
            .setHTML(`<h4>Aqui estoy</h4> <p>Actualmente en mi ubicación</p> <p>${ userLocation.value }</p>`)

            const myLocationMarker = new Mapboxgl.Marker()
            .setLngLat( userLocation.value )
            .setPopup(myLocationPopup)
            .addTo( map )

            //Establecer el mapa en Vuex
            setMap( map );

        }

        onMounted(() => {
            if( isUserlocationReady.value ){
                return initMap()
            }
        })

        watch(isUserlocationReady, ( newval ) => {
            if(isUserlocationReady.value){
                initMap()
            }
        })

        return {
            isUserlocationReady,
            mapElement
        }
    }
})