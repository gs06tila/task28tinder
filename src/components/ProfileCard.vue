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
      type: String,
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
