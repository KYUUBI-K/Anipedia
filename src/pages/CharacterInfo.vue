<template>
  <div class="character-box">
    <div>
      <img
        class="character-img"
        :src="animeStore.character.images?.jpg?.image_url"
        alt="err"
      />
    </div>
    <div class="character-info-box">
      <div class="character-name">
        {{ animeStore.character.name }}({{ animeStore.character.name_kanji }})
      </div>
      <div class="character">
        <div class="description">Description about character:</div>
        <div class="character-about">{{ animeStore.character.about }}</div>
      </div>
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
    onMounted(async () => {
      await animeStore.getCharacter(router.currentRoute.value.params.id);
    });
    return { animeStore };
  },
};
</script>

<style lang="css" scoped>
.character-box {
  display: flex;
}

.character-info-box {
  color: #e6d9d9;

  margin: 0 4rem;
  line-height: 2rem;
}
.character-img {
  width: 312px;
  height: 450px;
}
.character-name {
  font-size: 1.4rem;
  margin: 1rem 0;
  color: #9e1a1a;
}
.description {
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
