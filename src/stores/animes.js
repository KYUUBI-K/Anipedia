import { defineStore } from "pinia";
const API_BASE_URL = "https://api.jikan.moe/v4";

export const useAnimeStore = defineStore("animeStore", {
  state: () => ({
    animes: [],
    anime: [],
    characters: [],
    character: [],
    pagin: [],
    query: "",
    genre: "",
  }),
  getters: {},
  actions: {
    // async getAnimes(page) {
    //   this.animes = [];
    //   const res = await fetch(`${API_BASE_URL}/anime?&page=${page}&limit=24&`);
    //   const data = await res.json();
    //   this.animes = data.data;
    //   // console.log(this.animes);
    //   this.pagin = data.pagination;
    //   // console.log(this.total);
    // },
    async getAnime(id) {
      this.anime = [];
      const res = await fetch(`${API_BASE_URL}/anime/${id}/full`);
      const data = await res.json();
      // console.log(data);
      this.anime = data.data;
    },
    async getPopularAnimes() {
      this.animes = [];
      const res = await fetch(`${API_BASE_URL}/top/anime?limit=12`);
      const data = await res.json();
      this.animes = data.data;
    },
    async getRandomAnime() {
      this.anime = [];
      const res = await fetch(`${API_BASE_URL}/random/anime`);
      const data = await res.json();
      this.anime = data.data;
    },
    // async getCharacters() {
    //   this.characters = [];
    //   const res = await fetch(`${API_BASE_URL}/characters?limit=24`);
    //   const data = await res.json();
    //   this.characters = data.data;
    // },
    async getCharacter(id) {
      this.character = [];
      const res = await fetch(`${API_BASE_URL}/characters/${id}/full`);
      const data = await res.json();
      // console.log(data);
      this.character = data.data;
    },
    async getSearchedAnime(page) {
      this.animes = [];
      this.pagin = [];
      const res = await fetch(
        `${API_BASE_URL}/anime?q=${this.query}&page=${page}&limit=24`
      );
      const data = await res.json();
      this.animes = data.data;
      this.pagin = data.pagination;
    },
    async getSearchedCharacter(page) {
      this.characters = [];
      this.pagin = [];
      const res = await fetch(
        `${API_BASE_URL}/characters?q=${this.query}&limit=24&page=${page}`
      );
      const data = await res.json();
      this.characters = data.data;
      this.pagin = data.pagination;
    },
    async getAnimeByGenre() {
      this.animes = [];
      const res = await fetch(
        `${API_BASE_URL}/anime?limit=24&genres=${this.genre}`
      );
      const data = await res.json();
      this.animes = data.data;
      this.pagin = data.pagination;
    },
    async getSearchedAnimeByGanre(page) {
      this.animes = [];
      this.pagin = [];
      const res = await fetch(
        `${API_BASE_URL}/anime?genres=${this.genre}&page=${page}&limit=24`
      );
      const data = await res.json();
      this.animes = data.data;
      this.pagin = data.pagination;
    },
    async getGenres() {
      this.animes = [];
      this.genres = [];
      const res = await fetch(`${API_BASE_URL}/genres/anime?filter=genres`);
      const data = await res.json();
      this.genres = data.data;
    },
  },
});
