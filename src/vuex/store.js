import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getter';
import actions from './action';
import state from './state';
import mutations from './mutation';

Vue.use(Vuex);

//创建一个 vuex 的 store
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

