<template>
  <div
    class="card"
    :class="{ isCurrent: isCurrent }">
    <div class="cardcontainer" style="width: 22rem;">
      <img src="../assets/logo.png">
      <div class="card-body">
        <h3 class="card-title">{{ card.name }} {{ card.age }} </h3>
        <p class="cardDescription"> {{ card.description }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
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
.card {
  background: whitesmoke;
  border-style: 10px;
  border-color: yellowgreen;
}

.card-body {
  text-align: center;
}

</style>
