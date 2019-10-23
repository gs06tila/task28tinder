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
      visableCards: [
        {
          'id': 1,
          'name': 'test1',
          'password': 'test123',
          'email': 'test@example.se',
          'age': 26,
          'description': 'est test datatest test data test test data test test data test test data',
          'image': 'imageURL'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
