<template>
  <div class="login-form">
    <div class="text-center">
      <img src="../assets/fly.png" width="172" height="172">
    </div>
    <hr>
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="userNameGroup"
                    label="User Name"
                    label-for="userInput"
      >
        <b-form-input id="userInput"
                      type="text"
                      placeholder="Enter user name"
                      v-model="profile.name"
                      autocomplete="off"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="userPassword"
                    label="Password"
                    label-for="userPassword"
      >
        <b-form-input id="userPassword"
                      type="password"
                      placeholder="Enter password"
                      v-model="profile.password"
                      autocomplete="off"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="userEmailGroup"
                    label="Email"
                    label-for="userEmail"
      >
        <b-form-input id="userEmail"
                      type="text"
                      placeholder="Enter Email"
                      v-model="profile.email"
                      autocomplete="off"
                      required>
        </b-form-input>
      </b-form-group>

      <b-button type="submit"
                variant="primary"
                class="ld-ext-right"
      >
        Register <div class="ld ld-ring ld-spin"></div>
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  props: {
    profile: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: '',
          password: '',
          email: ''
        }
      }
    }
  },
  methods: {
    async onSubmit () {
      const result = true
      if (result) {
        console.log(this.profile)
        this.$emit('createProfile', this.profile)
      }
    }
  }
}
</script>

<style scoped>
  .login-form {
    margin-top: 100%;
    transform: translateY(-50%);
  }
</style>
