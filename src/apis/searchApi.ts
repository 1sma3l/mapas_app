import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        //types: 'place%2Cpostcode%2Caddress',
        language: 'es',
        access_token: 'pk.eyJ1IjoiMXNtYTNsIiwiYSI6ImNsMHR4MW00dzBycnEza3FvdnV0YmJtZ3MifQ.oNKrIbxmILlyAcb4gyx8Og'
    }
})

export default searchApi