import { createStore } from "vuex"
import axios from 'axios'

const store = createStore({

   state:{

      searchedTerm:"",
      searchedSongs:[],
      searchedArtists:[],
      searchedPlaylists:[],
      chosenSong:{
         videoId:'',
         name: "Song name",
         artist: {name:"Artist name"},
         album: {name:"Album name"},
         },
      chosenPlaylist:{},
      chosenPlaylistBrowseId:""
      
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
      setSearchedPlaylists(state,data){
         state.searchedPlaylists = data
      },
      setChosenSong(state,data){
         state.chosenSong = data
      },
      setChosenPlaylist(state,data){
         state.chosenPlaylist = data
      },
      setChosenPlaylistBrowseId(state,data){
       state.chosenPlaylistBrowseId = data
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
      async fetchPlaylists(context,searchTerm){
         let data = await axios.get(`https://yt-music-api.herokuapp.com/api/yt/playlists/${searchTerm}`)
         context.commit("setSearchedPlaylists",data.data.content)
      },
      async fetchChosenPlaylist(context,browseId){
         let data = await axios.get(`https://yt-music-api.herokuapp.com/api/yt/playlist/${browseId}`)
         context.commit("setChosenPlaylist",data.data.content)
      }
   }
})

export default store