<template>
  <b-navbar class="navbar" toggleable="lg" type="dark" variant="danger">
    <b-navbar-brand class="nav" href="#">
        <div id="nav-container">
          <div class="navImg">
            <img src="../assets/hammer.png" width="40px" height="40px" alt="hammer">
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
    color: yellow;
    width: 100%;
    height: 100%;
    margin-left: 100%;
    transform: translateX(50%);
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
