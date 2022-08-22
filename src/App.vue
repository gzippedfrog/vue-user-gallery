<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
    <aside>
      <LinkList />
    </aside>
  </div>
</template>

<script>
import LinkList from "./components/LinkList";

export default {
  name: "App",
  components: { LinkList },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  max-width: 900px;
  margin: auto;
  padding: 20px;
  display: flex;
  gap: 20px;
}

main {
  flex-grow: 1;
}

@media screen and (max-width: 768px) {
  #app {
    flex-direction: column-reverse;
    max-width: 500px;
  }
}
</style>
