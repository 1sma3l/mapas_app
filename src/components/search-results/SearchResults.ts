import { Feature } from '@/interfaces/places';
import { defineComponent, ref, watch } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';
import { useMapStore } from '../../composables/useMapStore';

export default defineComponent({
    name: 'SearchResults',
    setup() {

        const { isLoadingPlaces, places, userLocation } = usePlacesStore();
        const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore();
        const activePlace = ref('');

        watch( places, (newPlaces) => {
            activePlace.value = '';
            setPlaceMarkers(newPlaces);
            
        });

        return {

            isLoadingPlaces,
            places,
            activePlace,

            onPlaceClicked: ( place: Feature ) => {

                activePlace.value = place.id;
                const [ Lng, lat ] = place.center;

                map.value?.flyTo({
                    center: [ Lng, lat ],
                    zoom: 14
                });

            },

            getRouteDirections: (place: Feature) => {

                if( !userLocation.value ) return;
                
                const [ Lng, lat ] = place.center;

                const [ startLng, startLat ] = userLocation.value;

                const start: [number, number] = [startLng, startLat];
                const end: [number, number] = [ Lng, lat ];

                getRouteBetweenPoints(start, end);
                
            }

        }
    }
})