import Vue from 'vue';
import Vuex from 'vuex';

import patients from '../patients/vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        patients
    }
});