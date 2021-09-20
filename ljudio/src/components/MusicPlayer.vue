<template>
    <div class="musicPlayer">
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
        
            <div class="thumbnail">
                <img src="../assets/headset.png" alt="thumbnail">
            </div>
            <div class="songDetails">
                <h2><img src="../assets/musicalNote.png" alt="musical note"> Song Name</h2>
                <h3><img src="../assets/singer.png" alt="singer"> Artist</h3>
                <h3><img src="../assets/album.png" alt="album"> Album</h3>
            </div>
            <div class="playerButtons">
                <button id="previousSong"><i class="fas fa-step-backward"></i></button>
                <button id="playSong"><i class="fas fa-play"></i></button> <!--change to pause when playing a song-->
                <button id="nextSong"><i class="fas fa-step-forward"></i></button>
            </div>
            
      
        
        <div class="progressBar">
            <input type="range" min="0" max="100" value="0" id="durationSlider" @change="changeDuration()">
        </div>
        
    </div>


</template>

<script>
    export default{
        
    }
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);
    .musicPlayer{
        background: linear-gradient(to right,#393e46,#AAAAAA);
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    
    .thumbnail{
        margin: 5vh 2vw 2vh;
        max-width: 60%;
        max-height: 60%;
    }
    .songDetails{
        display: flex;
        flex-direction: column;
        align-items: center;
        color:whitesmoke;
        font-family: Raleway;
        
    }
    .songDetails, h2 , h3{
        margin:0.5vh ;
    }
    button{
        background-color: #aad8d3;
        color: #00b4cc;
        border: none;
        border-radius: 50%;
        padding: 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 1em 0.5em;
    }
    #playSong{
        font-size: 32px;
    }

    
    #durationSlider{
        -webkit-appearance: none;
        width: 100%;
        outline: none;
        height: 2px;
       margin: 2em 2em;
    }

    #durationSlider::-webkit-slider-thumb{
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        background: #00b4cc;
        border-radius: 50%;
    }
    .playerButtons{

    }
    .progressBar{
        width: 60%;
        
    }

</style>