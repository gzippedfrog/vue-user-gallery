<template>
  <b-card header="Custom links" class="links-card">
    <ul class="list-unstyled">
      <li v-for="link in links" :key="link">
        <router-link :to="link">
          {{ link }}
        </router-link>
      </li>
    </ul>
  </b-card>
</template>

<script>
export default {
  name: "LinkList",
  computed: {
    links() {
      return this.$store.state.links;
    },
  },
};
</script>

<style scoped>
.links-card {
  min-width: 300px;
}
</style>
