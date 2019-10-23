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
  async mounted () {
    this.users = await api.getProfiles()
  }
}
</script>

<style scoped>

</style>
