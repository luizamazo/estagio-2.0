<template>
  <div id="app">
    
          <nav-bar></nav-bar>
          <hr>   
            <router-view></router-view>
            <footer></footer>
  </div>

</template>
<script>
    import Footer from './components/Footer.vue';   
    import NavBar from './components/NavBar.vue';
    export default {
        name: 'app',
        components: {NavBar,Footer}
    }
</script>

<style>
  #app{
    margin: 30px;
  }
</style>

