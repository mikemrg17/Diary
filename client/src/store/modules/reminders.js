import axios from 'axios';

const state = {
    reminders: []
};

const getters = {
    /*lastReminderId() {
        let length = state.reminders.length;
        let lastId = state.reminders.id[length-1];
        return lastId;
    },*/
    allReminders: (state) => state.reminders
};

const actions = {
    //Aquí irán las peticiones http al servidor
    async fetchReminders({commit}){
        const response = await axios.get('http://localhost:3000/getReminders');
        commit('setReminders', response.data);
    },
    async addReminder({commit}, title, date, priority, description){
        const response = await axios.post('http://localhost:3000/addReminder', {title,date,priority,description});
        commit('newReminder', response.data);
    }
};

const mutations = {
    //Aquí irán los mutadores del estado
    setReminders: (state, reminders)=> (state.reminders = reminders),
    newReminder: (state, reminder) => state.reminders.unshift(reminder)
};

export default {
    state,
    getters,
    actions,
    mutations
}