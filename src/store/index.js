import Vue from "vue";
import Vuex from "vuex";

const endpoint = "https://jsonplaceholder.typicode.com";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    links: ["/user/5/albums", "/user/6/posts", "/user/7/posts"],
  },
  actions: {
    fetchUsers({ commit }) {
      return fetch(`${endpoint}/users`)
        .then((res) => res.json())
        .then((data) => commit("SET_USERS", data))
        .catch(console.log);
    },
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    ADD_LINK(state, link) {
      state.links.push(link);
    },
  },
});
