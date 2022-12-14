<template>
  <div>
    <h1>Postes</h1>
    <div class="p-5 text-center">
      <router-link to="/create" class="btn btn-success"
        >Ajouter un poste</router-link
      >
    </div>
  </div>
  <div
    v-for="(post, index) in posts"
    :id="post.id"
    :key="post.id"
    class="container border border-3 rounded mt-3"
  >
    <p class="mt-2">Poste N{{ post.id }}</p>
    <h3 class="d-flex justify-content-center mt-3">{{ post.title }}</h3>
    <p class="mt-4">{{ post.body }}</p>
    <div class="btn-wrapper d-flex justify-content-around mb-3 mt-3">
      <router-link :to="'/posts/' + post.id" class="btn btn-primary"
        >Voir</router-link
      >
      <button class="btn btn-danger" @click="deletePost(index)">
        Supprimer
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "body"],
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        this.posts = posts;
      });
  },
  methods: {
    deletePost(idx) {
      this.posts.splice(idx, 1);
    },
  },
  provide() {
    return {
      posts: this.posts,
    };
  },
};
</script>
