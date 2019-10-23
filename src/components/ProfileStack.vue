<template>
  <div class="cards">
    <ProfileCard
      v-for="(card, index) in cards"
      :key="card.id"
      :card="card"
      :is-current="index === 0"
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
  }
}
</script>

<style scoped>

</style>
