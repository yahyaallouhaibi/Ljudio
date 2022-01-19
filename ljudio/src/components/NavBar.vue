<template>
  <div class="navBar">
    <link
      href="https://fonts.googleapis.com/css?family=Orbitron:regular,500,600,700,800,900"
      rel="stylesheet"
    />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link
        to="/Songs"
        @click="searchForSongs(this.$store.state.searchedTerm)"
        >Songs</router-link
      >
      <router-link
        to="/Artists"
        @click="searchForArtists(this.$store.state.searchedTerm)"
        >Artist</router-link
      >
      <router-link
        to="/Playlists"
        @click="searchForPlaylists(this.$store.state.searchedTerm)"
        >Playlists</router-link
      >
      <SearchBar class="searchBar" />
    </nav>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      searchedSongs: [],
      searchedArtists: [],
      searchedPlaylists: [],
    };
  },

  components: {
    SearchBar,
  },
  methods: {
    ...mapActions(["fetchSongs", "fetchArtists", "fetchPlaylists"]),

    searchForSongs(searchTerm) {
      this.fetchSongs(searchTerm);
    },
    searchForArtists(searchTerm) {
      this.fetchArtists(searchTerm);
    },
    searchForPlaylists(searchTerm) {
      this.fetchPlaylists(searchTerm);
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Orbitron:regular,500,600,700,800,900);
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.searchBar {
  width: 20%;
}

a {
  font-size: 30px;
  font-family: Orbitron;
  color: #00adb5;
  text-decoration: underline;
}
</style>