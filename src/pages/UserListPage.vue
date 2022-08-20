<template>
  <ul class="users">
    <router-link
      class="user"
      v-for="user in getUsers"
      :key="user.id"
      :to="`/user/${user.id}`"
      tag="li"
    >
      <div>{{ user.name }}</div>
      <div class="username">{{ user.username }}</div>
    </router-link>
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

<style scoped>
.users {
  width: 400px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.user {
  border: solid #ccc 1px;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
}

.username {
  color: mediumpurple;
}

.username::before {
  content: "@";
}
</style>
