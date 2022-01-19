<template>
  <div class="pageBody">
    <HeaderComponent class="pageHeader" />
    <NavBar class="navBar" />
    <MusicPlayer class="musicPlayerComponent" />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import NavBar from "./components/NavBar.vue";
import MusicPlayer from "./components/MusicPlayer.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    NavBar,
    MusicPlayer,
  },
};
</script>

<style>
.pageHeader {
  margin: 0;
}
.pageBody {
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.musicPlayerComponent {
  width: 100%;
  height: 15vh;
  margin-top: 1em;
}
</style>
