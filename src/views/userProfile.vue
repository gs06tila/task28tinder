<template>
  <div class="profileView">
    <navbar />
    <div class="singleUser">
      <userProfileView
        :user = "visableUser"
      />
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers'
import Navbar from '../components/Navbar'
import userProfileView from '../components/userProfileView'
export default {
  name: 'userProfile',
  components: {
    Navbar,
    userProfileView
  },
  data () {
    return {
      visableUser: null
    }
  },
  async mounted () {
    this.visableUser = await api.getProfile(1)
  }
}
</script>

<style scoped>
  .profileView {
    background-image: url('https://i.imgur.com/Gu7GuiH.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
  }
</style>
