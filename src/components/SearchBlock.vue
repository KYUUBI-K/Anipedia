<template>
  <div>
    <!-- @submit.prevent="useAnimeStore.getAnimes" -->

    <form class="header_search" @submit.prevent="MoveToSearched()">
      <input type="search" placeholder="Type..." required v-model="search_q" />
    </form>
  </div>
</template>

<script>
import { useAnimeStore } from "@/stores/animes";
import { ref } from "vue";
import router from "@/router";

export default {
  setup() {
    const animeStore = useAnimeStore();
    const search_q = ref(animeStore.query);
    const MoveToSearched = () => {
      animeStore.query = search_q.value;
      router.push("/searched");
      search_q.value = "";
    };
    return { animeStore, search_q, MoveToSearched };
  },
  // methods: {
  //   MoveToSearched() {
  //     router.push("/searched");
  //   },
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
</style>
