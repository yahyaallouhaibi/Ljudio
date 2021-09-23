import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({

   state:{

      searchedTerm:"",
      searchedSongs:[],
      searchedArtists:[],
      chosenSong:{
         videoId:'',
         name: "Song name",
         artist: {name:"Artist name"},
         album: {name:"Album name"},
         }
      
   },

   mutations:{

      search(state,data){
         state.searchedTerm = data
      },
      setSearchedSongs(state,data){
         state.searchedSongs = data
      },
      setSearchedArtists(state,data){
         state.searchedArtists = data
      },
      setChosenSong(state,data){
         state.chosenSong = data
      }
   },

   actions:{

      async fetchSongs(context,searchTerm){
         let data = await axios.get(`https://yt-music-api.herokuapp.com/api/yt/songs/${searchTerm}`)
         context.commit("setSearchedSongs",data.data.content)
      },
      async fetchArtists(context,searchTerm){
         let data = await axios.get(`https://yt-music-api.herokuapp.com/api/yt/artists/${searchTerm}`)
         context.commit("setSearchedArtists",data.data.content)
      },
   }
})

export default store