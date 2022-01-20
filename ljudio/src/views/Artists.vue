<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
      rel="stylesheet"
    />
    <div
      class="ArtistResults"
      v-for="searchedArtist in this.$store.state.searchedArtists"
      :key="searchedArtist.browseId"
      @click="goToArtist(searchedArtist.browseId)"
    >
      <img :src="searchedArtist.thumbnails[0].url" alt="thumbnail" />
      <div class="ArtistDetails">
        <h3>{{ searchedArtist.name }}</h3>
      </div>
      <div class="shareBtn">
        <button @click="shareArtist(searchedArtist)">share</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    shareArtist(artist) {
      try {
        navigator.clipboard.writeText(
          "localhost:8080/Artists/" + artist.browseId
        );
        alert("Copied");
      } catch ($e) {
        alert("Cannot copy");
      }
    },
    goToArtist(id) {
      this.$router.push(`/Artists/${id}`);
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

.ArtistResults {
  display: flex;
  flex-direction: row;
  margin: 1em;
  border: solid 3px #aaaaaa;
  padding: 1em;
  background: linear-gradient(to right, #393e46, #aaaaaa);
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.ArtistDetails {
  font-size: 32px;
  margin-left: 2em;
  color: whitesmoke;
  font-family: Raleway;
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