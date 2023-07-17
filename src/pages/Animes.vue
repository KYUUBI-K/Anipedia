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
    <div>Searched:{{ animeStore.query }}</div>
    <div class="animes" v-for="anime in animeStore.animes" :key="anime.mal_id">
      <div @click="ToCard(anime.mal_id)" class="anime_item">
        <img class="anime_img" :src="anime.images.jpg.image_url" alt="err" />
      </div>
      <div class="anime_item anime_title">{{ anime.title }}</div>
    </div>
    <div
      v-if="(page === 1) & animeStore.pagin.has_next_page"
      class="pagination"
    >
      <div class="page">{{ page }}</div>
      <button @click="NextPage()" class="next_page">
        <span>next page</span>
      </button>
    </div>
    <div v-else-if="(page === 1) & !animeStore.pagin.has_next_page"></div>
    <div class="pagination" v-else-if="!animeStore.pagin.has_next_page">
      <button @click="PreviousPage()" class="previous_page">
        <span>previous page</span>
      </button>
      <div class="page">{{ page }}</div>
    </div>
    <div class="pagination" v-else>
      <button @click="PreviousPage()" class="previous_page">
        <span>previous page</span>
      </button>
      <div class="page">{{ page }}</div>
      <button @click="NextPage()" class="next_page">
        <span>next page</span>
      </button>
    </div>
  </div>
</template>

<script>
import { useAnimeStore } from "@/stores/animes";
import { onMounted, ref, computed } from "vue";
import router from "@/router";

export default {
  setup() {
    const page = ref(1);
    const animeStore = useAnimeStore();
    const search_q = ref("");
    const NextPage = () => {
      page.value += 1;
      animeStore.getSearchedAnime(page.value);
    };
    const PreviousPage = () => {
      page.value -= 1;
      animeStore.getSearchedAnime(page.value);
    };
    const GetSearched = () => {
      page.value = 1;
      animeStore.query = search_q.value;
      animeStore.getSearchedAnime(page.value);
      search_q.value = "";
    };
    const ToCard = (itemId) => {
      router.push({
        name: "anime",
        params: { id: itemId },
      });
    };
    onMounted(() => {
      animeStore.getSearchedAnime(page.value);
    });

    return {
      animeStore,
      ToCard,
      search_q,
      GetSearched,
      page,
      NextPage,
      PreviousPage,
    };
  },
};
</script>

<style scoped>
.page {
  color: #7c7a7ab2;
  margin-top: 10px;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-right: 10px;
}
.next_page {
  margin-left: 10px;
  padding: 15px;
  position: relative;
  background: #7c7a7a;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.75);
}
.next_page span {
  position: relative;
  z-index: 1;
}
.next_page::after,
.next_page::before {
  content: "";
  position: absolute;
  right: -15px;
  top: 50%;
  background: #7c7a7a;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.75);
  z-index: -1;
  transform: rotate(45deg);
}
.next_page::before {
  z-index: 1;
  box-shadow: none;
}
.previous_page {
  margin-right: 10px;
  position: relative;
  background: #7c7a7a;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.75);
}
.previous_page span {
  position: relative;
  z-index: 1;
}
.previous_page::after,
.previous_page::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 50%;
  background: #7c7a7a;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.75);
  z-index: -1;
  transform: rotate(45deg);
}

.previous_page::before {
  z-index: 1;
  box-shadow: none;
}
.previous_page:hover,
.previous_page:hover:after,
.previous_page:hover:before {
  background: #d42323;
}
.next_page:hover,
.next_page:hover:after,
.next_page:hover:before {
  background: #d42323;
}
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
  margin-left: 85px;
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
