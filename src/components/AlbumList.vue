<template>
  <b-spinner
    v-if="loading"
    class="mt-5 d-block mx-auto"
    variant="primary"
  ></b-spinner>

  <div v-else>
    <div v-for="album in albums" :key="album.id" class="mt-3 album-container">
      <h5>{{ album.title }}</h5>
      <Carousel
        :paginationEnabled="false"
        :perPageCustom="[
          [0, 2],
          [480, 3],
        ]"
      >
        <Slide v-for="photoUrl in album.photoUrls" :key="photoUrl">
          <img :src="photoUrl" />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

const endpoint = "https://jsonplaceholder.typicode.com";

export default {
  name: "AlbumsList",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      albums: [],
      loading: false,
    };
  },
  methods: {
    async fetchPhotos(albumId) {
      return fetch(`${endpoint}/albums/${albumId}/photos?_limit=5`)
        .then((res) => res.json())
        .then((photos) => photos.map((photo) => photo.thumbnailUrl))
        .catch(console.log);
    },
    async fetchAlbums() {
      const userId = this.$route.params.id;
      this.loading = true;

      return fetch(`${endpoint}/users/${userId}/albums`)
        .then((res) => res.json())
        .then(async (albums) => {
          for (const album of albums) {
            album.photoUrls = await this.fetchPhotos(album.id);
            this.albums.push(album);
          }
        })
        .catch(console.log)
        .finally(() => {
          this.loading = false;
        });
    },
  },
  async mounted() {
    await this.fetchAlbums();
  },
};
</script>

<style scoped>
.album-container {
  max-width: 500px;
}
</style>
