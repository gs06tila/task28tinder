<template>
  <div
    v-if="isCurrent"
    class="card"
    :class="{ isCurrent: isCurrent }">
    <div class="cardcontainer" style="width: 100%;">
      <img :src="image" width="100%" height="464px">
      <div class="card-body">
        <h3 class="card-title"> {{ title }} </h3>
        <p class="cardDescription"> {{ description }} </p>
        <b-button v-on:click="accepted()"
                  variant="success"
                  class="ld-ext-right"
        >
          да <font-awesome-icon icon="check-circle" /><div class="ld ld-ring ld-spin"></div>
        </b-button>
        <b-button v-on:click="rejected()"
                  variant="danger"
                  class="ld-ext-right"
        >
          нет <font-awesome-icon icon="ambulance" /> <div class="ld ld-ring ld-spin"></div>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
const ACCEPT_CARD = 'cardAccepted'
const REJECT_CARD = 'cardRejected'

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
    async accepted () {
      const result = true
      if (result) {
        this.$emit(ACCEPT_CARD)
        this.$emit('updateProfile')
      }
    },
    async rejected () {
      const result = true
      if (result) {
        this.$emit(REJECT_CARD)
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
  border-color: maroon;
}

.card-body {
  text-align: center;
}

</style>
