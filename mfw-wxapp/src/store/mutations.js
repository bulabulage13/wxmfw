
import * as types from './mutation-types'
export default {
    [types.GET_LOCATION](state, location) {
        state.address = location;
    },
    [types.GET_NEARBY](state, pois) {
        state.nearby = pois;
    },
    [types.GET_CITY](state, city) {
        state.city = city
    },
    [types.SET_COORDS](state, coords) {
        state.coords = coords;
    }

}