<template>
  <div>
    <h2>Posts</h2>
    <ul class="posts">
      <li class="post" v-for="post in posts" :key="post.id">
        <div class="title">{{ post.title }}</div>
        <div class="body">{{ post.body }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
const endpoint = "https://jsonplaceholder.typicode.com";

export default {
  name: "PostList",
  data() {
    return {
      userId: this.$route.params.id,
      posts: [],
      postsLoading: false,
    };
  },
  methods: {
    async fetchPosts() {
      this.postsLoading = true;
      return fetch(`${endpoint}/users/${this.userId}/posts?_limit=2`)
        .then((res) => res.json())
        .then((data) => {
          this.posts = data;
        })
        .catch(console.log)
        .finally(() => {
          this.postsLoading = false;
        });
    },
  },
  async mounted() {
    await this.fetchPosts();
    console.log(this.$route.params);
  },
};
</script>

<style scoped>
.posts {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post {
  border: solid #ccc 1px;
  border-radius: 5px;
  margin: 20px 0;
  padding: 10px;
}

.title {
  margin-bottom: 15px;
  font-weight: bold;
}

.title::first-letter,
.body::first-letter {
  text-transform: capitalize;
}

h2 {
  text-align: center;
}
</style>
