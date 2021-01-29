import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        id: 0
    },
    mutations: {
        setId(state, payload){
            state.id = payload
        }
    }
});
export default store;