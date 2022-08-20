<template>
  <div>
    <!-- <a @click="$router.go(-1)" class="go-back">GO BACK</a> -->

    <AlbumList />
    <PostList />
  </div>
</template>

<script>
import AlbumList from "../components/AlbumList";
import PostList from "../components/PostList";

export default {
  name: "UserPage",
  components: { AlbumList, PostList },
};
</script>

<style scoped>
.go-back {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  cursor: pointer;
}

/* .container {
  display: flex;
  flex-direction: column;
} */
</style>
