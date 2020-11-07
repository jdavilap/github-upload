<template>
  <div class="Stock">
    <div class="Stock__Panel">
      <div class="Stock__Panel-header">
        <h1>{{stock.name}}</h1>
        <p>(Price: {{stock.price}})</p>
      </div>
      <div class="Stock__Panel-body">
        <form>
          <input type="text" placeholder="Quantity" v-model="quantity" />
          <button
            type="submit"
            class="btn-buy"
            @click.prevent="buy({quantity: quantity, name: stock.name})"
          >BUY STOCK</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      quantity: 0,
    };
  },
  props: ["stock"],
  methods: {
    ...mapActions({
      buy: "buystock",
    }),
  },
};
</script>

<style>
.Stock__Panel {
  width: 600px;
  border: 1px solid #253f1e;
  box-shadow: 1px 1px 3px #253f1e;
  margin: 20px;
}
.Stock__Panel-header {
  background-color: #9fda9f;
  color: #082008;
  display: flex;
  align-items: baseline;
  padding: 10px;
}

.Stock__Panel-header h1,
.Stock__Panel-header p {
  margin: 0;
}

.Stock__Panel-body {
  padding: 20px;
  background-color: #fff;
}
.Stock__Panel-body form {
  display: flex;
  justify-content: space-between;
}

.Stock__Panel-body button {
  border: 1px solid #082008;
  color: #082008;
  cursor: pointer;
  padding: 2px 10px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
}
.Stock__Panel-body button:hover {
  border: #082008 1px solid;
  color: #ffff;
  background-color: #082008;
}
</style>