<template>
  <div>
    <a @click="$router.go(-1)" class="go-back">GO BACK</a>

    <div class="container">
      <AlbumList />
      <PostList />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import AlbumList from "../components/AlbumList.vue";

export default {
  name: "UserPage",
  components: { PostList, AlbumList },
};
</script>

<style scoped>
.go-back {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  cursor: pointer;
}

.container {
  width: 500px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
