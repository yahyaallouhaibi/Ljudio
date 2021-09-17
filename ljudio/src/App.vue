<template>
  <HeaderComponent />
  <SearchBar />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import SearchBar from "./components/SearchBar.vue";
//import MusicPlayer from "./components/MusicPlayer.vue";
//import FooterComponent from "./components/FotterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    SearchBar,
    // MusicPlayer,
    //FooterComponent,
  },
};
</script>

<style>
</style>
