<template>
  <div>
    <h2>Users</h2>
    <ul class="list-unstyled">
      <router-link
        v-for="user in users"
        :key="user.id"
        :to="`/user/${user.id}`"
        tag="li"
        role="button"
      >
        <b-card class="mt-3">
          <b-card-text>
            <div>{{ user.name }}</div>
            <div class="text-primary">@{{ user.username }}</div>
          </b-card-text>
        </b-card>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserListPage",
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
};
</script>
