<template>
  <div id="app">
  

    <home/>


  </div>
</template>

<script>
import home from './components/home.vue'

export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style>
html {
  margin: 0;
  background-image: url("../public/images/background.png");
  background-size: 100%;
  background-position-y: -60px;
}

</style>
