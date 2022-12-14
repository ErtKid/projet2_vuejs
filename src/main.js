import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "./components/HomePage.vue";
import Posts from "./components/AllPosts.vue";
import Post from "./components/SinglePost.vue";
import CreatePost from "./components/CreatePost.vue";
import UserSettings from "./components/UserSettings.vue";
import login from "./components/LoginLogOff.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/posts", component: Posts },
    { path: "/posts/:id", component: Post },
    { path: "/create", component: CreatePost },
    { path: "/user-settings", component: UserSettings },
    { path: "/login", component: login },
  ],
});

const app = createApp(App);

app.use(router);
app.mount("#app");
