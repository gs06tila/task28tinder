<template>
  <div class="singleUser">
    <h4>{{ this.user }}</h4>
  </div>
</template>

<script>
export default {
  name: 'userProfileView',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
