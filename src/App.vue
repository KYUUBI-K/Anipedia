<template>
  <div class="app">
    <div class="wrapper">
      <header class="header">
        <div class="header_inner">
          <router-link to="/">
            <img class="logo" src="@/assets/Logo_Header.jpg" alt="err"
          /></router-link>
          <div class="header_menu">
            <ul class="header_navbar">
              <li>
                <router-link class="nav_link" to="/animes">Animes</router-link>
              </li>

              <li>
                <router-link class="nav_link" to="/characters"
                  >Characters</router-link
                >
              </li>
              <li>
                <router-link
                  @click="RandomAnime()"
                  class="nav_link"
                  to="/randomAnime"
                  >Random</router-link
                >
              </li>
              <li>
                <router-link class="nav_link" to="/genres">Genres</router-link>
              </li>
            </ul>
            <!-- <search-block /> -->
          </div>
        </div>
      </header>
      <div class="content">
        <router-view></router-view>
      </div>

      <footer class="footer">
        <div class="about">
          <router-link class="nav_about" to="/about">About us</router-link>
        </div>
        <div class="footer_anipedia">anipedia 2023</div>
      </footer>
    </div>
  </div>
</template>
<script>
import SearchBlock from "@/components/SearchBlock";
import { useAnimeStore } from "@/stores/animes";

export default {
  components: {
    SearchBlock,
  },
  setup() {
    const animeStore = useAnimeStore();
    const RandomAnime = () => {
      animeStore.getRandomAnime();
    };
    return { animeStore, RandomAnime };
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  outline: none;
  border: 0;
  box-sizing: border-box;
}
body {
  font: 1.3rem "Roboto", sans-serif;

  padding-top: 200px;
  position: relative;
  background: #444
    url(https://img.freepik.com/premium-photo/fantasy-night-city-japanese-landscape-neon-light-residential-buildings-big-sakura-tree_742252-3397.jpg?w=2000)
    center top fixed;
  background-size: 100% auto;
  padding-top: 200px;
  padding-bottom: 200px;
  color: #fff;
}
.wrapper {
  max-width: 1600px;
  margin: 0 auto;
  background: #141414;
  padding: 0 30px;
}
.header {
  font: 1.6rem "Roboto", sans-serif;
  background-color: #1f1f1f;
  color: #fff;
  margin: 0 -30px;
  padding: 15px 30px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
}
.header_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 20;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  color: #fff;
}
.logo {
  height: 35px;
  margin-right: 30px;
}
.header_menu {
  text-transform: uppercase;
  display: flex;
}
a {
  color: #fff;
}
.nav_link {
  padding: 0.6rem 1rem;
  text-decoration: none;
}
.nav_link:hover {
  color: #9e1a1a;
}
.header_navbar {
  margin-right: 150px;
  display: flex;
}

li {
  list-style-type: none;
}
.content {
  margin-top: 20px;
  padding: 1rem;
  min-height: 500px;
}
.footer {
  color: #7c7a7a;
  font: 1.6rem "Roboto", sans-serif;

  background-color: #1f1f1f;
  margin: 0 -30px;
  padding: 15px 30px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
}
.footer_anipedia {
  /* color: #7c7a7a; */
}
.nav_about {
  color: #7c7a7a;
  text-decoration: none;
}
.nav_about:hover {
  color: #fff;
}
</style>
