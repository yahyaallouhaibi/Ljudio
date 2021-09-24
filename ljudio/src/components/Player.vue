<template>
  <div class="musicPlayer">
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
      rel="stylesheet"
    />

    <div class="songDetails">
      <h2>
        <img src="../assets/musicalNote.png" alt="musical note" />
        {{ $store.state.chosenSong.name }}
      </h2>
      <h3>
        <img src="../assets/singer.png" alt="singer" />
        {{ $store.state.chosenSong.artist.name }}
      </h3>
      <h3>
        <img src="../assets/album.png" alt="album" />
        {{ $store.state.chosenSong.album.name }}
      </h3>
    </div>

    <div class="playerButtons">
      <button @click="PreviousSong()" id="previousSong">
        <i class="fas fa-step-backward"></i>
      </button>
      <button class="playSong" @click="PlaySong()">
        <i class="fas fa-play"></i>
      </button>
      <button class="playSong" @click="pauseSong()">
        <i class="fas fa-pause"></i>
      </button>
      <button id="nextSong" @click="NextSong()">
        <i class="fas fa-step-forward"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    PlaySong() {
      window.player.playVideo();
    },
    pauseSong() {
      window.player.pauseVideo();
    },
    NextSong() {
      window.player.nextVideo();
    },
    previousSong() {
      window.player.previousVideo();
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);
.musicPlayer {
  background: #aad8d3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.songDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #393e46;
  font-family: Raleway;
  width: 50%;
}
.songDetails,
h2,
h3 {
  margin: 0.5vh;
}
.playerButtons {
  width: 50%;
}
button {
  background-color: #00b4cc;
  color: #aad8d3;
  border: none;
  border-radius: 50%;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 1em 0.5em;
  cursor: pointer;
}
.playSong {
  font-size: 32px;
}

.progressBar {
  width: 20%;
}
</style>