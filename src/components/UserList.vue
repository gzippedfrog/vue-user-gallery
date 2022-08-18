<template>
  <ul class="user-list">
    <li class="user-item" v-for="user in getUsers" :key="user.id">
      <div>{{ user.name }}</div>
      <div class="username">{{ user.username }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "UserList",
  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-list {
  margin: 60px auto;
  width: 400px;
  list-style: none;
}
.user-item {
  border: solid #ccc 1px;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
.username {
  color: blueviolet;
}
.username::before {
  content: "@";
}
</style>
