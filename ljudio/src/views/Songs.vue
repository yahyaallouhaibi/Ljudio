<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
      rel="stylesheet"
    />
    <div
      @click="playSong(searchedSong)"
      class="songResults"
      v-for="searchedSong in this.$store.state.searchedSongs"
      :key="searchedSong.videoId"
    >
      <div>
        <img :src="searchedSong.thumbnails[0].url" alt="thumbnail" />
      </div>
      <div class="songDetails">
        <h3>{{ searchedSong.name }}</h3>
        <p>{{ searchedSong.artist.name }}</p>
        <p>{{ searchedSong.album.name }}</p>
      </div>
      <div class="shareBtn">
        <button @click="shareSong(searchedSong.videoId)">share</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenSong: {},
    };
  },
  created() {
    this.loadSongOnCreate();
  },

  methods: {
    playSong(chosenSong) {
      this.$store.state.chosenSong = chosenSong;
      window.player.loadVideoById(chosenSong.videoId);
      this.$router.push(`/songs/${chosenSong.videoId}`);
    },
    shareSong(videoId) {
      try {
        navigator.clipboard.writeText("localhost:8080/songs/" + videoId);
        alert("Copied");
      } catch ($e) {
        alert("Cannot copy");
      }
    },
    async loadSongOnCreate() {
      if (
        !this.$store.state.chosenSong.videoId &&
        this.$route.params.videoId.length
      ) {
        await this.$store.dispatch("fetchSongById", this.$route.params.videoId);
      }
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

.songResults {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 1em;
  border: solid 3px #aaaaaa;
  padding: 1em;
  background: linear-gradient(to right, #393e46, #aaaaaa);
  align-items: center;
  cursor: pointer;
}
.songDetails {
  width: 60%;
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
.shareBtn {
  width: 20%;
}
.shareBtn button {
  float: right;
  width: 70%;
  background-color: #393e46;
  color: whitesmoke;
  border: none;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 26px;
  cursor: pointer;
}
</style>