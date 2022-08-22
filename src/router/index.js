import Vue from "vue";
import VueRouter from "vue-router";

import UserListPage from "../pages/UserListPage";
import UserPage from "../pages/UserPage";
import AlbumList from "../components/AlbumList";
import PostList from "../components/PostList";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: UserListPage },
    { path: "/user/:id", component: UserPage },
    { path: "/user/:id/albums", component: AlbumList },
    { path: "/user/:id/posts", component: PostList },
  ],
});
