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
        <img
          v-if="searchedPlaylist.thumbnails.length"
          :src="searchedPlaylist.thumbnails[0].url"
          alt="thumbnail"
        />
        <img
          v-else
          :src="searchedPlaylist.thumbnails.url"
          alt="../assets/album.png"
        />
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
    return {};
  },
  methods: {
    ...mapActions(["fetchChosenPlaylist"]),

    async playPlaylist(browseId) {
      await this.fetchChosenPlaylist(browseId);

      if (this.$store.state.chosenPlaylist.length) {
        this.$store.state.currentPlaylist = this.$store.state.chosenPlaylist;
        this.$store.state.songIndex = 0;
        window.player.loadPlaylist(
          JSON.parse(JSON.stringify(this.$store.state.currentPlaylist)).map(
            (p) => p.videoId
          )
        );
        this.$store.state.chosenSong = this.$store.state.currentPlaylist[0];
      }
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