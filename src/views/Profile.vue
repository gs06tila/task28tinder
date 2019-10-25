<template>
  <div class="profile">
    <navbar />
    <div class="centerit">
      <b-container>
        <b-row>
          <b-col lg="4" md="3"></b-col>
          <b-col lg="4" md="6">
            <ProfileStack
              :cards="visableCards"
              @cardAccepted="handleCardAccepted"
              @cardRejected="handleCardRejected"
            />
            <flash-message class="myFlash"></flash-message>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers'
import ProfileStack from '../components/ProfileStack'
import Navbar from '../components/Navbar'

export default {
  name: 'Profile',
  components: {
    ProfileStack,
    Navbar
  },
  data () {
    return {
      visableCards: [],
      users: []
    }
  },
  methods: {
    handleCardAccepted () {
      this.flash('Komrad Accepted', 'success')
      console.log('handleCardAccepted')
    },
    handleCardRejected () {
      this.flash('Komrad Rejected', 'error')
      console.log('handleCardRejected')
    }
  },
  async mounted () {
    this.visableCards = await api.getProfiles()
  }
}
</script>

<style scoped>
  .centerit {
    margin-top: 25%;
    transform: translateY(-60%);
  }
  .profile {
    background-image: url('https://i.imgur.com/Gu7GuiH.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
  }
</style>
