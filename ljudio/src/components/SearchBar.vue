<template>
  <div class="wrap">
    <form @submit.prevent class="search">
      <input
        v-model="searchedTerm"
        type="text"
        class="searchTerm"
        placeholder="What are you looking for?"
      />
      <button
        @click="searchForSongs(searchedTerm)"
        type="submit"
        class="searchButton"
      >
        <img src="../assets/magnifying-glass.png" alt="search" />
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import router from "../router/index";

export default {
  name: "SearchBar",

  data() {
    return {
      searchedTerm: "",
      searchedSongs: [],
    };
  },

  methods: {
    ...mapActions(["fetchSongs"]),

    searchForSongs(searchTerm) {
      this.$store.state.searchedTerm = searchTerm;
      this.fetchSongs(searchTerm);
      router.push("/Songs");
    },
  },
};
</script>

<style>
body {
  background: #f2f2f2;
}

.search {
  width: 150%;
  display: flex;
}

.searchTerm {
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
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}
</style>