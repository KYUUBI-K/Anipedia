<template>
  <div class="popular">
    <div class="about_anime">
      <p>
        Anime - Japanese animation style that is produced or influenced by it.
        It is the Japanese term for cartoon or animation where the Japanese use
        the word to describe all cartoons irrespective of the nation. However,
        outside Japan, anime denotes animation movies that come exclusively from
        Japan, distinguished by blazing graphics, energetic characters, and
        attractive themes such as sci-fi, romance, and supernatural forces.
        Therefore, consider this syllogism: all anime shows are cartoons, but
        not all cartoons are anime.
      </p>
    </div>
    <div class="text_anim">
      <h5>Top Animes</h5>
      <router-link class="to_anime" to="/animes">Animes</router-link>
    </div>
    <div
      class="top_animes"
      v-for="anime in animeStore.animes"
      :key="anime.mal_id"
    >
      <div @click="ToCard(anime.mal_id)" class="anime_item">
        <img class="anime_img" :src="anime.images.jpg.image_url" alt="err" />
      </div>
      <div class="anime_item anime_title">{{ anime.title_english }}</div>
    </div>
  </div>
</template>
<script>
import { useAnimeStore } from "@/stores/animes";
import { onMounted } from "vue";
import router from "@/router";
export default {
  setup() {
    const animeStore = useAnimeStore();
    onMounted(() => {
      // animeStore.getAnimes();
      animeStore.getPopularAnimes();
    });
    const ToCard = (itemId) => {
      router.push({
        name: "anime",
        params: { id: itemId },
      });
      console.log(itemId);
    };
    return { animeStore, ToCard };
  },
};
</script>
<style>
.about_anime {
  display: flex;
  margin-bottom: 2rem;
  color: #c8c8c8;
  line-height: 1.6;
  padding-bottom: 1rem;
  border-bottom: 1px solid #9e1a1a;
}
.text_anim {
  color: #7c7a7a;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
}
.to_anime {
  color: #9e1a1a;
  border-bottom: 1px dotted #9e1a1a;
  text-decoration: none;
}
.to_anime:hover {
  color: #d42323;
  border-bottom: 1px dotted #d42323;
}
.top_animes {
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
