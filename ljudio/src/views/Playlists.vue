<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
      rel="stylesheet"
    />
    <div
      @click="playPlaylist(searchedPlaylist.browseId)"
      class="playlistResults"
      v-for="searchedPlaylist in this.$store.state.searchedPlaylists"
      :key="searchedPlaylist.browseId"
    >
      <div>
        <img :src="searchedPlaylist.thumbnails[0].url" alt="thumbnail" />
      </div>
      <div class="playlistDetails">
        <h3>{{ searchedPlaylist.title }}</h3>
        <p>{{ searchedPlaylist.author }}</p>
        <p>{{ searchedPlaylist.trackCount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      chosenPlaylist: {},
    };
  },
  methods: {
    ...mapActions(["fetchChosenPlaylist"]),

    playPlaylist(browseId) {
      this.fetchChosenPlaylist(browseId);
      console.log(Object.assign({}, this.$store.state.chosenPlaylist));
      window.player.loadPlaylist(
        JSON.parse(JSON.stringify(this.$store.state.chosenPlaylist)).map(
          (p) => p.videoId
        )
      );
      //window.player.loadPlaylist(
      //  Object.assign({}, this.$store.state.chosenPlaylist).map(
      //   (p) => p.videoId
      // )
      //);
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

.playlistResults {
  display: flex;
  flex-direction: row;
  margin: 1em;
  border: solid 3px #aaaaaa;
  padding: 1em;
  background: linear-gradient(to right, #393e46, #aaaaaa);
  align-items: center;
  cursor: pointer;
}
.playlistDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 4em;
  color: whitesmoke;
  font-family: Raleway;
}
.playlistDetails p {
  font-size: 20px;
  margin: 0.5vh;
}
.playlistDetails h3 {
  font-size: 32px;
  margin: 0.5vh;
}
img {
  max-width: 200px;
}
</style>