<template>
  <div
    class="card"
    :class="{ isCurrent: isCurrent }"
  >
    <h3 class="cardTitle">{{ card }}</h3>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>
</style>
