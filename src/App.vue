<template>
  <nav>
    <router-link to="/">Lists</router-link> |
    <router-link to="/about">Props</router-link> |
    <router-link to="/conditional">Conditional</router-link> |
    <router-link to="/forms">Forms</router-link> |
    <router-link to="/simple-api">API</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
