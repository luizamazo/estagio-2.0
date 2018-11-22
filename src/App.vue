<template>
  <div id="app">
<<<<<<< HEAD
    
          <nav-bar></nav-bar>
          <hr>   
=======
    <div class="container ">
        <div class="row">
          <div class="col-sm-12">
           <h1> {{auth}} | {{role}}</h1>
            <router-link to="/login">Login</router-link> |
            <router-link to="/novo-aluno">Register</router-link> |
            <router-link to="/logout">Logout</router-link> 
          </div>
        </div>
          <hr>
        <div class="row">
          <div class="col-sm-12">
>>>>>>> 9837a04dc082fdce04f671644d73d29fceb5c47e
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

<script>
export default {
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

