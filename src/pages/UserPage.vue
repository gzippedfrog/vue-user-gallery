<template>
  <div>
    <b-tabs>
      <b-tab title="Posts" active>
        <b-button
          class="mt-3 d-flex align-items-center"
          @click="createLink('posts')"
          variant="outline-primary"
        >
          <b-icon-link45deg></b-icon-link45deg>
          Add link
        </b-button>
        <PostList />
      </b-tab>
      <b-tab title="Albums">
        <b-button
          class="mt-3 d-flex align-items-center"
          @click="createLink('albums')"
          variant="outline-primary"
        >
          <b-icon-link45deg></b-icon-link45deg>
          Add link
        </b-button>
        <AlbumList />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import AlbumList from "../components/AlbumList";
import PostList from "../components/PostList";

export default {
  name: "UserPage",
  components: {
    AlbumList,
    PostList,
  },
  computed: {
    links() {
      return this.$store.state.links;
    },
  },
  methods: {
    createLink(to) {
      const link = `${this.$route.fullPath}/${to}`;
      if (this.links.includes(link)) return;
      this.$store.commit("ADD_LINK", link);
    },
  },
};
</script>
