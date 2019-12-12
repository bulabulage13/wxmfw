import * as types from './mutation-types'
export default {
    getLoction({ commit }, location) {
        commit(types.GET_LOCATION, location);
    },
    getNearby({ commit }, pois) {
        commit(types.GET_NEARBY, pois);
    },
    getCity({commit}, city){
        commit(types.GET_CITY, city)
    },
    setCoords({commit},coords){
        commit(types.SET_COORDS, coords);
    }
}