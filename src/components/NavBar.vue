<template>

    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
              <router-link to="/" class="navbar-brand">Estágio</router-link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ">
                  <router-link class="nav-item nav-link" to="/login">Login</router-link>
                  <router-link class="nav-item nav-link" to="/novo-aluno">Register</router-link>
                  <router-link class="nav-item nav-link" to="/logout">Logout</router-link> 
                                 
                </div>
              </div>
            </nav>

</template>
<script>
    module.exports = {
        data(){
            return {
              
            }
        },
        methods: {

        }
    }
</script>
