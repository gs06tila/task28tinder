<template>
  <div>
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
          </b-col>
        </b-row>
      </b-container>
    </div>

  </div>
</template>

<script>
import { api } from '../helpers/helpers'
import ProfileStack from '../components/ProfileStack'
export default {
  name: 'Profile',
  components: {
    ProfileStack
  },
  data () {
    return {
      visableCards: [],
      users: []
    }
  },
  methods: {
    handleCardAccepted () {
      console.log('handleCardAccepted')
    },
    handleCardRejected () {
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
    transform: translateY(-50%);
  }
</style>
