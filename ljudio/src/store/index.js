import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
   state:{
      searchedTerm:"",
      searchedSongs:[],
      searchedArtists:[],
      chosenSong:{}
        
   },
   mutations:{
      search(state,data){
         state.searchedTerm = data
      },
      setSearchedSongs(state,data){
         state.searchedSongs = data
      }
   },
   actions:{
      async fetchSongs(context,searchTerm){
         let data = await axios.get(`https://yt-music-api.herokuapp.com/api/yt/search/${searchTerm}`)
         console.log(data)
         context.commit("setSearchedSongs",data)
         
      }  
   }
})

export default store