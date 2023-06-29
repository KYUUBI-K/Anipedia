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
    <div
      class="top_animes"
      v-for="character in animeStore.characters"
      :key="character.mal_id"
    >
      <div @click="ToCard(character.mal_id)" class="anime_item">
        <img
          class="anime_img"
          :src="character.images.jpg.image_url"
          alt="err"
        />
        <div class="anime_title">{{ character.name }}</div>
      </div>
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
      animeStore.getSearchedCharacter(search_q.value);
      search_q.value = "";
    };
    const ToCard = (itemId) => {
      router.push({
        name: "character",
        params: { id: itemId },
      });
      console.log(itemId);
    };
    onMounted(() => {
      animeStore.getCharacters();
    });
    return { animeStore, GetSearched, ToCard, search_q };
  },
};
</script>

<style lang="css" scoped>
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
</style>
