import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import searchApi from '../../apis/searchApi';
import { Feature, PlacesResponse } from '../../interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation( { commit } ) {
        navigator.geolocation.getCurrentPosition(
            //({ coords }) => commit('setLngLat', coords),
            ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
            ( err ) => {
                console.error(err)
                throw new Error('No geolocation')
            }
        )
    },

    async searchPlacesByTerm( { commit, state }, query: string ) : Promise<Feature[]> {
        
        if( query.length === 0 ){
            commit('setPlaces', []);
            return [];
        }

        if( !state.userLocation ){
            throw new Error('No hay ubicación del usuario');
        }

        commit('setIsLoadingPlaces')

        const resp = await searchApi.get<PlacesResponse>(`/${ query }.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        });

        //console.log(resp.data.features)
        commit('setPlaces', resp.data.features );
        return resp.data.features;
    }
}



export default actions;