<template>
  <div>
    <b-container>
      <b-row>
        <b-col lg="4" md="3"></b-col>
        <b-col lg="4" md="6">
          <ProfileStack
            :cards="visableCards"
          />
        </b-col>
      </b-row>
    </b-container>
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

</style>
