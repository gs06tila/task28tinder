<template>
  <div class="login-form">
    <div class="text-center">
      <img src="../assets/fly.png" width="172" height="172">
    </div>
    <hr>
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="userInputGroup">
        <b-form-input id="userInput"
                      type="text"
                      placeholder="Enter user name"
                      v-model="userId"
                      autocomplete="off"
                      required>
        </b-form-input>
        <b-form-input id="userPassword"
                      type="password"
                      placeholder="Enter password"
                      v-model="userPass"
                      autocomplete="off"
                      required>
        </b-form-input>
      </b-form-group>

      <b-button type="submit"
                variant="primary"
                class="ld-ext-right"
                :disabled="isValid">
        Login <div class="ld ld-ring ld-spin"></div>
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      userId: '',
      userPass: ''
    }
  },
  computed: {
    isValid: function () {
      const result = this.userId.length < 3 && this.userPass < 3
      return result || this.loading
    }
  },
  methods: {
    async onSubmit () {
      const result = true
      if (result) {
        this.$router.push('profile')
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
