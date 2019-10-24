<template>
  <div class="cards">
      <ProfileCard
        v-for="(card, index) in cards"
        :key="card.id"
        :card="card"
        :is-current="index === currentProfile"
        @cardAccepted="$emit('cardAccepted')"
        @cardRejected="$emit('cardRejected')"
        @updateProfile="updateProfile"
      />
  </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard'
export default {
  name: 'profileStack',
  components: {
    ProfileCard
  },
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      currentProfile: 0
    }
  },
  methods: {
    updateProfile () {
      // this.currentProfile = index
      this.cards.shift()
    }
  }
}
</script>

<style scoped>

</style>
