<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
  }
</style>
