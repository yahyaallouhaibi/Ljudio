<template>
  <div class="Header">
    <div class="logo">
      <link
        href="https://fonts.googleapis.com/css?family=Monoton:regular"
        rel="stylesheet"
      />
      <h1>Ljudio</h1>
      <img class="headset" src="../assets/headset.png" alt="headset" />
      <div>
        <h1>Music</h1>
        <h1>Player</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Monoton:regular);

.logo {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #393e46;
}
.logo h1 {
  margin: 0;
  font-size: 5em;
  font-family: Monoton;
  color: #aad8d3;
}

.headset {
  max-width: 40%;
  height: auto;
  margin: 1em;
  padding: 0%;
}
body {
  margin: 0;
}
</style>