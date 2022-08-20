<template>
  <div id="app">
    <router-link to="/" tag="h2">Return to home</router-link>
    <router-view class="left"></router-view>
    <div class="right">
      <h2>Custom Links</h2>
      <ul class="links">
        <li v-for="link in links" :key="link">
          <router-link :to="link">
            {{ link }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    links() {
      return this.$store.getters.getLinks;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  /* justify-content: center; */
  column-gap: 20px;
  padding: 0 20px;
  margin: auto;
}

.links {
  height: 290px;
  border: solid #ccc 1px;
  border-radius: 5px;
  list-style: none;
  margin: 0;
  padding: 15px;
}

.left,
.right {
  min-width: 0;
}

li {
  margin-bottom: 10px;
}

a {
  color: inherit;
}

h2 {
  cursor: pointer;
  grid-column: 1/3;
}
</style>
