<template>
  <div class="navBar">
    <link
      href="https://fonts.googleapis.com/css?family=Orbitron:regular,500,600,700,800,900"
      rel="stylesheet"
    />
    <nav>
      <!-- change to router-link -->
      <a href="">Songs</a>
      <a href="">Artist</a>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Orbitron:regular,500,600,700,800,900);
nav {
  display: flex;
  flex-direction: row;
  margin-left: 2vw;
}
a {
  margin-right: 5vw;
  font-size: 30px;
  font-family: Orbitron;
  color: #00adb5;
  text-decoration: underline;
}
</style>