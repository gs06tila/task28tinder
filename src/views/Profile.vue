<template>
  <div>
    <ProfileStack
      :cards="visableCards"
      />
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
  async mounted () {
    this.visableCards = await api.getProfiles()
  }
}
</script>

<style scoped>

</style>
