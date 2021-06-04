<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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
* {
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
