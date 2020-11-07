<template>
  <div class="App">
    <h1>Mi esposa quiere saber que es un pull request </h1>
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/UI/Navbar";
/*import Dashboard from "./components/Dashboard";
import Portafolio from "./components/Portafolio";
import Stock from "./components/Stock";*/
export default {
  components: {
    appNavbar: Navbar,
    /*appDashboard: Dashboard,
    appPortafolio: Portafolio,
    appStock: Stock,*/
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap');
.App {
  width: 100%;
  height: 100%;
  background-color: #e4e4e4;
  font-family: 'Open Sans', sans-serif;
  display: grid;
  grid-template-rows: [sr-1] 5rem [er-1 sr-2] 1fr;
  grid-template-areas:
    "header"
    "content";
}
</style>
