<template>
  <div>
    <HeaderComponent />
    <NavBar class="navBar" />
    <router-view></router-view>
    <Player class="musicPlayerComponent" />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import NavBar from "./components/NavBar.vue";
import Player from "./components/Player.vue";
//import FooterComponent from "./components/FotterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    NavBar,
    Player,
    //FooterComponent,
  },
};
</script>

<style>
.pageBody {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.searchResults-musicPlayer {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.searchResults {
  width: 70%;
}
.navBar {
  width: 100%;
  height: auto;
}
.musicPlayerComponent {
  width: 30%;
  height: 50%;
  margin-top: 1em;
}
</style>
