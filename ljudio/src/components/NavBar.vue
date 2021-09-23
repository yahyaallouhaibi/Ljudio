<template>
  <div class="navBar">
    <link
      href="https://fonts.googleapis.com/css?family=Orbitron:regular,500,600,700,800,900"
      rel="stylesheet"
    />
    <nav>
      <router-link to="/" @click="searchForSongs(this.$store.state.searchedTerm)" >Songs</router-link>
      <router-link to="/Artists" @click="searchForArtists(this.$store.state.searchedTerm)">Artist</router-link>
      <router-link to="/Playlists" @click="searchForPlaylists()">Playlists</router-link>
      <SearchBar/>
    </nav>
  </div>
</template>

<script>
  import SearchBar from './SearchBar.vue'
  import {mapActions} from 'vuex'

  export default {
    data(){
      return{
        searchedSongs:[],
        searchedArtists:[],
        searchedPlayLists:[]
      }
    },

    components:{
      SearchBar
    },
    methods:{
      ...mapActions(["fetchSongs","fetchArtists","fetchPlayLists"]),
      
      searchForSongs(searchTerm){
        this.fetchSongs(searchTerm)
      },
      searchForArtists(searchTerm){
        this.fetchArtists(searchTerm)
      },
      searchForPlaylists(searchTerm){
        this.fetchPlayLists(searchTerm)
      }

  },
  }

</script>

<style scoped>

  @import url(https://fonts.googleapis.com/css?family=Orbitron:regular,500,600,700,800,900);
  nav {
    display: flex;
    flex-direction: row;
    margin-left: 2vw;
  }
  a {
    margin-right: 5vw;
    font-size: 30px;
    font-family: Orbitron;
    color: #00adb5;
    text-decoration: underline;
  }
</style>