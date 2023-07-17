<template>
  <div>
    <div class="genre">
      <div
        class="genre_animes"
        v-for="genre in animeStore.genres"
        :key="genre.mal_id"
      >
        <div>
          <div class="genre_name" @click="getAnim(genre.mal_id, genre.name)">
            {{ genre.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="name_ganre">{{ itemGanre }} Animes</div>
    <div class="animes" v-for="anime in animeStore.animes" :key="anime.mal_id">
      <div @click="ToCard(anime.mal_id)" class="anime_item">
        <div class="anime_item">
          <img class="anime_img" :src="anime.images.jpg.image_url" alt="err" />
        </div>
        <div class="anime_item anime_title">{{ anime.title }}</div>
      </div>
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
import { onMounted, ref } from "vue";
import router from "@/router";
export default {
  setup() {
    const page = ref(1);
    const itemGanre = ref("");
    const animeStore = useAnimeStore();
    const getAnim = (itemId, itemName) => {
      page.value = 1;
      animeStore.genre = itemId;
      animeStore.getAnimeByGenre();
      itemGanre.value = itemName;
    };
    const NextPage = () => {
      page.value += 1;
      animeStore.getSearchedAnimeByGanre(page.value);
    };
    const PreviousPage = () => {
      page.value -= 1;
      animeStore.getSearchedAnimeByGanre(page.value);
    };
    onMounted(() => {
      animeStore.genre = "";
      // animeStore.getAnimes();
      animeStore.getGenres();
      animeStore.getAnimeByGenre();
    });
    const ToCard = (itemId) => {
      router.push({
        name: "anime",
        params: { id: itemId },
      });
    };
    return {
      animeStore,
      getAnim,
      ToCard,
      itemGanre,
      NextPage,
      PreviousPage,
      page,
    };
  },
};
</script>

<style lang="css" scoped>
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
.genre {
  /* margin-left: 60px; */
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px dotted #9e1a1a;
  margin-bottom: 30px;
}
.name_ganre {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.genre_animes {
  display: inline-block;
  width: 150px;
  margin-left: 90px;
  margin-bottom: 20px;
  margin-right: 10px;
}
.genre_name:hover {
  color: #d42323;
}
.genre_name {
  cursor: pointer;
}
.animes {
  display: inline-block;
  width: 150px;
  max-height: 100%;
  margin-bottom: 20px;
  margin-left: 80px;
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
