<template>
  <div>
    <ProfileStack
      :cards="visableCards"
      />
  </div>
</template>

<script>
import ProfileStack from '../components/ProfileStack'
export default {
  name: 'Profile',
  components: {
    ProfileStack
  },
  data () {
    return {
      visableCards: ['Test1']
    }
  }
}
</script>

<style scoped>

</style>
