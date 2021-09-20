<template>
  <HeaderComponent />
  <SearchBar />
  <div class="pageBody">
    <div class="searchResults">
        <NavBar class="navBar" />
      <SongSearchResult/>
    </div>
    <MusicPlayer class="musicPlayerComponent"/>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import SearchBar from "./components/SearchBar.vue";
import NavBar from "./components/NavBar.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import SongSearchResult from "./components/SongSearchResult.vue"
//import FooterComponent from "./components/FotterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    SearchBar,
    NavBar,
     MusicPlayer,
     SongSearchResult
    //FooterComponent,
  },
};
</script>

<style>
  
  .pageBody{
    display: flex;
    flex-direction: row;
  }
  .searchResults{
    width: 70%;
  }
  .navBar{
    width: 100%;
    height: auto;
  }
  .musicPlayerComponent{
    width: 30%;
    height: auto;
  }
</style>
