<template>
  <nav>
    <div class="nav-container">
      <h2>MyNetWork</h2>
      <div id="logo">
        <router-link to="/"> </router-link>
      </div>

      <ul id="icons">
        <li>
          <router-link to="/">
            <i class="fas fa-home"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/user-settings">
            <i class="fas fa-user"></i>
            <span id="nav-notif"></span>
          </router-link>
        </li>
        <li>
          <router-link to="/login">
            <i class="fas fa-network-wired"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
import Home from "./components/HomePage.vue";
import Posts from "./components/AllPosts.vue";
import Post from "./components/SinglePost.vue";
import CreatePost from "./components/CreatePost.vue";

export default {
  components: [Home, Posts, Post, CreatePost],
};
</script>
