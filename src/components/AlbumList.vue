<template>
  <div>
    <h2>Albums</h2>
    <div class="album" v-for="album in Object.values(albums)" :key="album.id">
      <h3 class="title">{{ album.title }}</h3>
      <Carousel :perPage="3" :paginationEnabled="false">
        <Slide v-for="photo in album.photos" :key="photo">
          <img :src="photo" />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

const endpoint = "https://jsonplaceholder.typicode.com";

export default {
  name: "AlbumList",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      userId: this.$route.params.id,
      albums: {},
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
      this.loading = true;
      return fetch(`${endpoint}/users/${this.userId}/albums?_limit=2`)
        .then((res) => res.json())
        .then(async (albums) => {
          for (const album of albums) {
            const photos = await this.fetchPhotos(album.id);
            this.$set(this.albums, album.id, { title: album.title, photos });
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
h2 {
  text-align: center;
}
</style>
