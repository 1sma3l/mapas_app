import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiMXNtYTNsIiwiYSI6ImNsMHR4MW00dzBycnEza3FvdnV0YmJtZ3MifQ.oNKrIbxmILlyAcb4gyx8Og'
    }
})

export default directionsApi