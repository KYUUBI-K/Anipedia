<template>
  <div>
    <div v-for="page in pages" :key="page.index" class="page">
      {{ page }}lol
    </div>
  </div>
</template>

<script>
import { useAnimeStore } from "@/stores/animes";
import { onMounted } from "vue";

export default {
  setup() {
    const animeStore = useAnimeStore();
    onMounted(() => {
      animeStore.getAnimes();
    });
    return { animeStore };
  },
  computed: {
    pages() {
      return Math.ceil(useAnimeStore.pagin.items.total.lenght() / 24);
    },
  },
};
</script>

<style lang="css" scoped></style>
