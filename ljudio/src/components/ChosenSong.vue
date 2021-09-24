<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
      rel="stylesheet"
    />
    <div
      @click="playSongbyId($store.state.chosenSong.videoId)"
      class="songResults"
    >
      <div>
        <img :src="$store.state.chosenSong.thumbnails[0].url" alt="thumbnail" />
      </div>
      <div class="songDetails">
        <h3>{{ $store.state.chosenSong.name }}</h3>
        <p>{{ $store.state.chosenSong.artist.name }}</p>
        <p>{{ $store.state.chosenSong.album.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async playSong(chosenSong) {
      window.player.loadVideoById(chosenSong);
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

.songResults {
  display: flex;
  flex-direction: row;
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