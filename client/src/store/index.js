import Vuex from 'vuex';
import Vue from 'vue';
import reminders from './modules/reminders';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        reminders
    }
});