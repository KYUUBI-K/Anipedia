<template>
  <div class="anime-box">
    <div>
      <img
        class="anime-img"
        :src="animeStore.anime.images?.jpg?.large_image_url"
        alt="err"
      />
    </div>
    <div class="anime-info-box">
      <div class="anime-title">{{ animeStore.anime.title }}</div>
      <div class="anime_info">
        <div class="anime-year">Release year: {{ animeStore.anime.year }}</div>
        <div class="anime-type">Type :{{ animeStore.anime.type }}</div>
        <div class="anime-status">Status :{{ animeStore.anime.status }}</div>
        <div class="anime-score">Score :{{ animeStore.anime.score }}</div>
        <div class="anime-rating">Rating :{{ animeStore.anime.rating }}</div>
        <div class="anime-duration">
          Duration : {{ animeStore.anime.duration }}
        </div>
        <div class="anime-episodes">
          Episodes :{{ animeStore.anime.episodes }}
        </div>
      </div>
    </div>
  </div>
  <div class="description">Description of the cartoon:</div>
  <div class="anime-synopsis">{{ animeStore.anime.synopsis }}</div>
</template>

<script>
import { useAnimeStore } from "@/stores/animes";
import { onMounted } from "vue";
export default {
  setup() {
    const animeStore = useAnimeStore();
    onMounted(() => {
      animeStore.getRandomAnime();
    });
    return { animeStore };
  },
};
</script>

<style lang="css" scoped>
.anime-box {
  display: flex;
}

.anime-info-box {
  color: #aca9a9ab;
  margin: 0 4rem;
  line-height: 2rem;
}
.anime-img {
  width: 312px;
  height: 450px;
}
.anime-title {
  font-size: 1.4rem;
  margin: 1rem 0;
  color: white;
}
.anime-synopsis {
  font-size: 1.6rem;
  margin-bottom: 5rem;
  color: #e6d9d9;
}
.description {
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
