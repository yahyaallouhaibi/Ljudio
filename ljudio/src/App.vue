<template>
  <HeaderComponent />
  <SearchBar />
  <NavBar />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import SearchBar from "./components/SearchBar.vue";
import NavBar from "./components/NavBar.vue";
//import MusicPlayer from "./components/MusicPlayer.vue";
//import FooterComponent from "./components/FotterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    SearchBar,
    NavBar,
    // MusicPlayer,
    //FooterComponent,
  },
};
</script>

<style>
</style>
