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
          'name': 'Name',
          'password': 'test123',
          'email': 'test@example.se',
          'age': 26,
          'description': 'test datatest test data test test data test test data test test data',
          'image': 'imgURL'
        }
      ]
    }
  } 
}
</script>

<style scoped>

</style>
