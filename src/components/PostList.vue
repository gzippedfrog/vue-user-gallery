<template>
  <b-spinner
    v-if="loading"
    class="mt-5 d-block mx-auto"
    variant="primary"
  ></b-spinner>

  <div v-else>
    <b-card
      v-for="post in posts"
      :title="post.title"
      tag="li"
      class="mt-3"
      :key="post.id"
    >
      <b-card-text>
        {{ post.body }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
const endpoint = "https://jsonplaceholder.typicode.com";

export default {
  name: "PostList",
  data() {
    return {
      posts: [],
      loading: false,
    };
  },
  computed: {
    links() {
      return this.$store.state.links;
    },
  },
  methods: {
    async fetchPosts() {
      const userId = this.$route.params.id;
      this.loading = true;

      return fetch(`${endpoint}/users/${userId}/posts`)
        .then((res) => res.json())
        .then((data) => {
          this.posts = data;
        })
        .catch(console.log)
        .finally(() => {
          this.loading = false;
        });
    },
  },
  async mounted() {
    await this.fetchPosts();
  },
};
</script>
