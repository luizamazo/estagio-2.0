<template>
  <div id="app">
    
          <nav-bar></nav-bar>
          <h1> {{auth}} | {{role}}</h1>
          <hr>   
          <router-view></router-view>
          <app-footer></app-footer>
  </div>

</template>
<script>
    import Footer from './components/Footer.vue'   
    import NavBar from './components/NavBar.vue'
    export default {
        name: 'app',
        components: {NavBar,Footer},
        data(){
          return{
            auth: localStorage.getItem('username'),
            role: localStorage.getItem('role')
          }
        }
    }
</script>




<style>
  #app{
    margin: 30px;
  }
</style>

