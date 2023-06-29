<template>
  <div>
    <div>
      <form class="header_search" @submit.prevent="GetSearched()">
        <input
          type="search"
          placeholder="Type..."
          required
          v-model="search_q"
        />
      </form>
    </div>
    <div
      class="searched_animes"
      v-for="anime in animeStore.animes"
      :key="anime.mal_id"
    >
      <div class="anime_item">
        <img class="anime_img" :src="anime.images.jpg.image_url" alt="err" />
        <div class="anime_title">{{ anime.title_english }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAnimeStore } from "@/stores/animes";
import { ref } from "vue";
export default {
  setup() {
    const animeStore = useAnimeStore();
    const search_q = ref(animeStore.query);
    const GetSearched = () => {
      animeStore.query = search_q.value;
      animeStore.getSearchedAnime();
      animeStore.query = "";
      search_q.value = "";
    };
    return { animeStore, search_q, GetSearched };
  },
};
</script>

<style lang="css" scoped>
.header_search {
  width: 250px;
  border-radius: 2px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  color: #495057;
  background-color: #fff;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.searched_animes {
  display: inline-block;
  width: 150px;
  max-height: 100%;
  margin-bottom: 20px;
  margin-right: 30px;
}
.anime_title {
  display: flex;
  max-width: 250px;
}
.anime_img {
  width: 150px;
  height: 250px;
}
</style>
