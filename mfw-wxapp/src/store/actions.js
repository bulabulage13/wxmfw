export default {
    getLoction({ commit }, location) {
        commit('GET_LOCATION', location);
    },
    getNearby({ commit }, pois) {
        commit('GET_NEARBY', pois);
    },
    getCity({commit}, city){
        commit('GET_CITY', city)
    },
    setCoords({commit},coords){
        commit('SET_COORDS', coords);
    }
}