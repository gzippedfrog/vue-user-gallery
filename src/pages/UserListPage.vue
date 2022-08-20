<template>
  <div>
    <h2>Users</h2>
    <ul class="users">
      <router-link
        class="user"
        v-for="user in users"
        :key="user.id"
        :to="`/user/${user.id}`"
        tag="li"
      >
        <div>{{ user.name }}</div>
        <div class="username">{{ user.username }}</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserListPage",
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
  },
};
</script>

<style scoped>
.users {
  list-style: none;
  padding: 0;
  margin: 0;
}

.user {
  border: solid #ccc 1px;
  border-radius: 5px;
  margin-bottom: 10px;
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
