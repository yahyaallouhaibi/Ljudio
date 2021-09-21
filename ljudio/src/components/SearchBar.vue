<template>
  <div class="wrap">
    <form @submit.prevent class="search">
      <input
        v-model="searchedTerm"
        type="text"
        class="searchTerm"
        placeholder="What are you looking for?"
      />
      <button @click="search(searchedTerm)" type="submit" class="searchButton">
        <img src="../assets/magnifying-glass.png" alt="search" />
      </button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "SearchBar",

  data(){
    return{
      searchedTerm:""
      
    }
  },

  computed:{
    

  },

  methods:{
    ...mapActions(["fetchSongs"]),


     search(searchTerm){
       this.searchedTerm = searchTerm;
       this.fetchSongs(searchTerm)
     }

  }
};
</script>

<style>
body {
  background: #f2f2f2;
}

.search {
  width: 100%;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  
}



.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!*/
.wrap {
  color: #eeeeee;
  margin: 2em;
  display: flex;
  width: 30%;
  position: relative;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>