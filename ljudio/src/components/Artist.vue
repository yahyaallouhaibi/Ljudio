<template>
  <div class="artist">
    <img
      :src="this.$store.state.searchedArtist.thumbnails[0].url"
      alt="thumbnail"
    />
    <div class="ArtistDetails">
      <h3>{{ this.$store.state.searchedArtist.name }}</h3>
    </div>
  </div>
  <div
    v-for="song in this.$store.state.searchedArtist.products.songs.content"
    :key="song.videoId"
    class="songResults"
    @click="playSong(song.videoId)"
  >
    <div class="songDetails">
      <h3>{{ song.name }}</h3>
      <p>{{ song.album.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.fetchArtist();
  },
  methods: {
    async fetchArtist() {
      if (
        !this.$store.state.searchedArtist.browseId &&
        this.$route.params.artistId.length
      ) {
        await this.$store.dispatch(
          "fetchArtistById",
          this.$route.params.artistId
        );
      }
    },
    async playSong(id) {
      await this.$store.dispatch("fetchSongById", id);
      window.player.loadVideoById(this.$store.state.chosenSong.videoId);
      this.$router.push(`/songs/${this.$store.state.chosenSong.videoId}`);
    },
  },
};
</script>

<style>
.artist {
  display: flex;
  flex-direction: row;
  margin: 1em;
  border: solid 3px #aaaaaa;
  padding: 1em;
  background: linear-gradient(to right, #393e46, #aaaaaa);
  align-items: center;
}
.artist img {
  float: left;
}
.ArtistDetails {
  font-size: 32px;
  margin-left: 2em;
  color: whitesmoke;
  font-family: Raleway;
}

.songResults {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1em;
  border: solid 3px #aaaaaa;
  padding: 1em;
  background: linear-gradient(to right, #393e46, #aaaaaa);
  align-items: center;
  cursor: pointer;
}
.songDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 4em;
  color: whitesmoke;
  font-family: Raleway;
}
.songDetails p {
  font-size: 20px;
  margin: 0.5vh;
}
.songDetails h3 {
  font-size: 32px;
  margin: 0.5vh;
}
</style>