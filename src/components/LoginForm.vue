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
    </b-form>
    <b-button v-on:click="onSubmit"
              type="submit"
              variant="danger"
              class="ld-ext-right"
              :disabled="isValid">
      Login <div class="ld ld-ring ld-spin"></div>
    </b-button>
    <b-button v-on:click="registerBtn()"
              type="submit"
              variant="danger"
              class="ld-ext-left">
      Register <div class="ld ld-ring ld-spin"></div>
    </b-button>
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
      const result = this.userId.length && this.userPass < 3
      return result
    }
  },
  methods: {
    async onSubmit () {
      const result = true
      if (result) {
        this.$router.push('profile')
      }
    },
    registerBtn () {
      this.$router.push('register')
    }
  }
}
</script>

<style scoped>
  .login-form {
    margin-top: 100%;
    transform: translateY(-50%);
  }
  .btnlogin {
    margin-left: 0px;
  }
</style>
