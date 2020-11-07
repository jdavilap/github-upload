<template>
  <div class="Stocks">
    <div v-for="(stock, key) in stocks " :key="stock.id">
      <app-stock :stock="stock[key]">{{key}}</app-stock>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock";
export default {
  components: {
    appStock: Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.getStocks;
    },
  },
};
</script>


<style scoped>
.Stocks {
  grid-area: content;
  display: flex;
  flex-wrap: wrap;
}
</style>