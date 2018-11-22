<template>
  <div id="app">
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
            <router-view></router-view>
          </div>
        </div>
    </div>
  </div>
</template>


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

