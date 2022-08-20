import Vue from "vue";
import Vuex from "vuex";

const endpoint = "https://jsonplaceholder.typicode.com";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    links: ["/user/1/albums", "/user/2/posts"],
  },
  getters: {
    getUsers: (state) => state.users,
    getLinks: (state) => state.links,
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
      if (["albums", "posts"].includes(link.split("/").at(-2))) return;
      if (state.links.includes(link)) return;
      state.links.push(link);
    },
  },
});
