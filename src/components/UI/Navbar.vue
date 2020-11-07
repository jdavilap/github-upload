<template>
  <div class="Header">
    <nav>
      <div class="content">
        <div class="brand">
          <div class="brand-logo">
            <router-link to="/" tag="span" active-class="active" style="cursor: pointer;" exact>Home</router-link>
          </div>
          <ul class="Option__left">
            <router-link
              to="/portafolio"
              tag="li"
              class="Option__left-item"
              active-class="active"
            >Portafolio</router-link>
            <router-link to="/stock" tag="li" class="Option__left-item" active-class="active">Stock</router-link>
          </ul>
        </div>
        <div class="menu">
          <ul class="Option__rigth">
            <li class="Option__rigth-item">
              <p>End day</p>
            </li>
            <li class="Option__rigth-item">
              <div class="dropdown">
                <span>Mouse over me</span>
                <div class="dropdown-content">
                  <p>Hello World!</p>
                  <p>Hello World!</p>
                </div>
              </div>
            </li>
            <li class="Option__rigth-item">
              <p>Found: {{funds}} €</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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

<style>
.Header {
  grid-area: header;
  background-color: #202020;
  color: #504f4f;
  width: 100%;
  font-weight: bold;
}
nav {
  height: 100%;
}

.content {
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 80px;
  padding: 0 50px;
}

.brand {
  display: flex;
  align-items: center;
}
.Option__left {
  list-style: none;
  display: flex;
  margin: 0;
}

.Option__left-item {
  margin: 0 10px;
  padding: 0 5px;
  cursor: pointer;
}
.Option__left-item:hover,
.Option__left-item:active,
.active {
  color: #fff;
}

.menu {
  display: flex;
  align-items: center;
}

.Option__rigth {
  list-style: none;
  display: flex;
  margin: 0;
}

.Option__rigth-item {
  padding: 0 20px;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #202020;
  color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>