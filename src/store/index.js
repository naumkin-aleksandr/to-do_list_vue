import Vue from 'vue';
import Vuex from 'vuex';
import waybills from './modules/waybills';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { waybills },
});
