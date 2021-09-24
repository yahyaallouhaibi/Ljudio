<template>
  <div class="pageBody">
    <HeaderComponent />
    <NavBar class="navBar" />
    <Player class="musicPlayerComponent" />
    <router-view></router-view>
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

.musicPlayerComponent {
  width: 100%;
  height: 5%vh;
  margin-top: 1em;
}
</style>
