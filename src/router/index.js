import VueRouter from "vue-router";
import UserListPage from "../pages/UserListPage";
import UserPage from "../pages/UserPage";

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: UserListPage },
    { path: "/user/:id", component: UserPage },
  ],
});
