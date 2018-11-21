<template>
  <div id="app">
    <div class="container ">
        <div class="row">
          <div class="col-sm-12">
            <router-link to="/">Quotes</router-link> |
            <router-link to="/new-quote">New Quote</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/register">Register</router-link> |
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
//componentes locais
 // import NewQuote from './components/NewQuote.vue';

export default {

  data () {
    return {
     
    }
  }, 
  //registra os componentes locais
 // components: {
      //isso aqui é a tag
     //   'new-quote': NewQuote
  //  }
  
}

</script>

<style>
  #app{
    margin: 30px;
  }
</style>

