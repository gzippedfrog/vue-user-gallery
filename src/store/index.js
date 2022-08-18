import Vue from "vue";
import Vuex from "vuex";

const endpoint = "https://jsonplaceholder.typicode.com";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  getters: {
    getUsers: (state) => state.users,
  },
  actions: {
    fetchUsers({ commit }) {
      fetch(`${endpoint}/users`)
        .then((res) => res.json())
        .then((data) => commit("SET_USERS", data))
        .catch(console.log);
    },
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
});
