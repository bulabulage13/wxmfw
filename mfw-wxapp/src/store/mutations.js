export default {
    'GET_LOCATION'(state, location){
        state.address = location;
    },
    'GET_NEARBY'(state, pois){
        state.nearby = pois;
    },
    'GET_CITY'(state, city){
        state.city = city
    },
    'SET_COORDS'(state, coords){
        state.coords = coords;
    }
    
}