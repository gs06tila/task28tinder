<template>
  <div class="register">
    <b-container>
      <b-row>
        <b-col lg="4" md="3"></b-col>
        <b-col lg="4" md="6">
          <RegisterForm @createProfile="createProfile" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'
import { api } from '../helpers/helpers'
export default {
  name: 'Register',
  components: {
    RegisterForm
  },
  methods: {
    createProfile: async function (profile) {
      console.log(profile)
      await api.createProfile(profile)
      this.flash('Profile created', 'success')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .register {
    background-image: url('https://i.imgur.com/Gu7GuiH.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    font-family: 'Source Sans Pro', sans-serif;
    color: darkred;
  }
</style>
