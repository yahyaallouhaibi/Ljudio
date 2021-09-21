<template>
    <div @click="playChosenSong" class="songResults">
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
        <img src="../assets/headset.png" alt="thumbnail">
        <div class="songDetails">
            <h3>Song</h3>
            <p>artist</p>
            <p>album</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

    .songResults{
        display: flex;
        flex-direction: row;
        margin: 1em;
        border: solid 3px #AAAAAA;
        padding: 1em;
        background: linear-gradient(to right,#393e46,#AAAAAA);
    }
    .songDetails{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 4em;
        color: whitesmoke;
        font-family: Raleway;
        

    }
    .songDetails p{
        font-size: 20px;
        margin:0.5vh;
    }
    .songDetails h3{
        font-size: 32px;
        margin:0.5vh;
    }

</style>