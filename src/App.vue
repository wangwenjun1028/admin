<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
import Login from "./views/login/index";
export default {
  name: "App",
  components: {
    Login,
  },
};
</script>

<style>
body,
html {
  height: 100%;
}
body,
html,
p,
ul,
li {
  padding: 0;
  margin: 0;
}
.lf {
  float: left;
}
.rl {
  float: right;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
