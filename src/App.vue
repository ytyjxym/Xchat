<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
#app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(./assets/img/bc.jpg);
  // background-image: url(https://api.dujin.org/bing/1920.php);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
