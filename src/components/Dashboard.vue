<template>
  <div class="Home">
    <div class="Home__Dashboard">
      <h1>Trade or View your portafolio</h1>
      <p>You may Save & Load your Data</p>
      <p>Click on 'End day' to begin a new day</p>
      <hr />
      <h3>Your funds: € {{funds}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.getFunds;
    },
  },
};
</script>


<style scoped>
.Home {
  grid-area: content;
}
.Home__Dashboard {
  padding: 20px;
}
</style>