<template>
  <div>
    <div>
      <form class="header_search" @submit.prevent="GetSearched()">
        <input
          class="input"
          type="search"
          placeholder="Search..."
          required
          v-model="search_q"
        />
      </form>
    </div>
    <div class="animes" v-for="anime in animeStore.animes" :key="anime.mal_id">
      <div @click="ToCard(anime.mal_id)" class="anime_item">
        <img class="anime_img" :src="anime.images.jpg.image_url" alt="err" />
      </div>
      <div class="anime_item anime_title">{{ anime.title }}</div>
    </div>
  </div>
</template>

<script>
import { useAnimeStore } from "@/stores/animes";
import { onMounted, ref } from "vue";
import router from "@/router";
export default {
  setup() {
    const animeStore = useAnimeStore();
    const search_q = ref("");
    const GetSearched = () => {
      animeStore.getSearchedAnime(search_q.value);
      search_q.value = "";
    };
    const ToCard = (itemId) => {
      router.push({
        name: "anime",
        params: { id: itemId },
      });
      console.log(itemId);
    };
    onMounted(() => {
      animeStore.getAnimes();
    });

    return { animeStore, ToCard, search_q, GetSearched };
  },
};
</script>

<style scoped>
.header_search {
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 30px;
}

.input {
  color: white;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  font-size: 30px;
  padding-left: 20px;
  background-color: #1f1f1f;
}
.input:focus {
  border-color: white;
}

.animes {
  display: inline-block;
  width: 150px;
  max-height: 100%;
  margin-bottom: 20px;
  margin-left: 75px;
}
.anime_item {
  text-decoration: none;
}
.anime_title {
  display: flex;
  max-width: 150px;
}
.anime_img {
  width: 200px;
  height: 250px;
}
.anime_img:hover {
  padding: 10px;
}
</style>
