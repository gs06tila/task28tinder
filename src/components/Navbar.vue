<template>
  <b-navbar class="navbar" toggleable="lg" type="dark" variant="danger">
    <b-navbar-brand href="/userProfile">
      User Profile
    </b-navbar-brand>
    <b-navbar-brand class="nav" href="/profile">
        <div id="nav-container">
          <div class="navImg">
            <img src="../assets/hammer.png" width="50px" height="50px" alt="hammer">
          </div>
          <div id="textNav">
            <p>Komrad, this is your Hinder profile!<br>
            A great plattform where you kan meet other komrads!</p>
          </div>
        </div>
        </b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {
}
</script>

<style scoped>
  #nav-container {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 25px;
    color: yellow;
    width: 100%;
    height: 100%;
    margin-left: 75%;
    transform: translateX(25%);
  }
  #textNav {
    text-align: center;
  }
  .navImg {
    text-align: center;
  }
  .navbar {
    background: linear-gradient(46.14deg, #F5734C 36.18%, #E5C380 93.64%), #E4CE9D;
  }
</style>
