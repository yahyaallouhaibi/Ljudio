
  <template>
    <div  >
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
        <div class="ArtistResults" v-for="searchedArtist in this.$store.state.searchedArtists" :key="searchedArtist.browseId">
            <img src:`searchedArtist.thumbnails[0].url` alt="thumbnail">
            <div class="ArtistDetails">
                <h3>{{searchedArtist.name}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

    .ArtistResults{
        display: flex;
        flex-direction: row;
        margin: 1em;
        border: solid 3px #AAAAAA;
        padding: 1em;
        background: linear-gradient(to right,#393e46,#AAAAAA);
    }
    .ArtistDetails{
        font-size: 32px;
        margin-left: 2em;
        color: whitesmoke;
        font-family: Raleway;
    }
    

</style>
