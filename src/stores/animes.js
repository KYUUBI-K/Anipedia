import { defineStore } from "pinia";
const url = "https://api.jikan.moe/v4/anime";
const url2 = "https://api.jikan.moe/v4/top/anime";
const url3 = "https://api.jikan.moe/v4/characters";
const url4 = "https://api.jikan.moe/v4/random/anime";

export const useAnimeStore = defineStore("animeStore", {
  state: () => ({
    animes: [],
    anime: [],
    characters: [],
    character: [],
    page: 1,
  }),
  getters: {},
  actions: {
    async getAnimes() {
      this.animes = [];
      const res = await fetch(`${url}?page=${this.page}&limit=24`);
      const data = await res.json();
      this.animes = data.data;
    },
    async getAnime(id) {
      this.anime = [];
      const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
      const data = await res.json();
      console.log(data);
      this.anime = data.data;
    },
    async getPopularAnimes() {
      this.animes = [];
      const res = await fetch(`${url2}?limit=12`);
      const data = await res.json();
      this.animes = data.data;
    },
    async getRandomAnime() {
      this.anime = [];
      const res = await fetch(`${url4}`);
      const data = await res.json();
      this.anime = data.data;
    },
    async getCharacters() {
      this.characters = [];
      const res = await fetch(`${url3}?limit=24`);
      const data = await res.json();
      this.characters = data.data;
    },
    async getCharacter(id) {
      this.character = [];
      const res = await fetch(`${url3}/${id}/full`);
      const data = await res.json();
      console.log(data);
      this.character = data.data;
    },
    async getSearchedAnime(query) {
      this.animes = [];
      const res = await fetch(`${url}?q=${query}&limit=24`);
      const data = await res.json();
      this.animes = data.data;
    },
    async getSearchedCharacter(query) {
      this.characters = [];
      const res = await fetch(`${url3}?q=${query}&limit=24`);
      const data = await res.json();
      this.characters = data.data;
    },
  },
});
