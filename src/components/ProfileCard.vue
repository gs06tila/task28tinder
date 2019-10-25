<template>
  <div
    v-if="isCurrent"
    class="card"
    :class="{ isCurrent: isCurrent }">
    <div class="cardcontainer" style="width: 100%;">
      <img :src="image" width="100%">
      <div class="card-body">
        <h3 class="card-title"> {{ title }} </h3>
        <p class="cardDescription"> {{ description }} </p>
        <b-button v-on:click="onSubmit()"
                  variant="primary"
                  class="ld-ext-right"
        >
          GoGOGO <div class="ld ld-ring ld-spin"></div>
        </b-button>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
// import Navbar from '../components/Navbar'

export default {
  name: 'profile',
  props: {
    card: {
      type: Object,
      required: true
    },
    isCurrent: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    async onSubmit () {
      const result = true
      if (result) {
        this.img = 'image'
        this.$emit('updateProfile')
      }
    }
  },
  computed: {
    title () {
      return this.card.name + ' ' + this.card.age
    },
    description () {
      return this.card.description
    },
    image () {
      return this.card.image
    }
  }
}
</script>

<style scoped>
.card {
  background: whitesmoke;
  border-style: 10px;
  border-color: yellowgreen;
}

.card-body {
  text-align: center;
}

</style>
