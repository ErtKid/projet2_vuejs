<template>
  <h1>Poster quelque chose</h1>
  <div class="d-flex flex-column align-items-center">
    <div class="form-group w-25">
      <input
        type="text"
        id="title"
        class="form-control mb-3"
        placeholder="Titre"
        v-model="titleInputValue"
      />
      <textarea
        id="body"
        class="form-control mt-3"
        placeholder="Veuillez-saisir votre texte"
        v-model="bodyInputValue"
      ></textarea>
    </div>
  </div>

  <div class="popup-wrapper invisible" id="popup">
    <div class="popup">
      <h1 class="header">Le post a été enregistré</h1>
      <div class="popup-btn-wrapper">
        <router-link class="btn btn-primary" to="/posts"
          >Page d'accueil</router-link
        >
        <button class="btn btn-danger" @click="togglePopup">Cancel</button>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-center p-5">
    <button @click="submitForm()" class="btn btn-primary mr-5">Creer</button>
    <router-link to="/posts" class="btn btn-danger"> Retour </router-link>
  </div>
</template>

<!-- Under construction -->
<script>
export default {
  data() {
    return {
      titleInputValue: "",
      bodyInputValue: "",
    };
  },

  methods: {
    submitForm() {
      const data = {
        title: this.titleInputValue,
        body: this.bodyInputValue,
      };
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
      }).then((response) => {
        response.json();
        console.log(response);
        if (response.ok) {
          const popup = document.getElementById("popup");
          popup.classList.remove("invisible");
          popup.classList.add("visible");
        }
      });
    },
    togglePopup() {
      const popup = document.getElementById("popup");
      popup.classList.remove("visible");
      popup.classList.add("invisible");
    },
  },
};
</script>

<style>
.popup {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border: 3px #2d545e solid;
  background-color: #12343b;
  height: 200px;
  width: 500px;
}
.popup-btn-wrapper {
  display: flex;
  justify-content: space-evenly;
}
.header {
  display: flex;
  justify-content: center;
  color: white;
}
.invisible {
  display: none;
}
.visible {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
}
</style>
