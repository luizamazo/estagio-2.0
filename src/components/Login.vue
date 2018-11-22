<template>

<div class="row justify-content-center" >
    <img src="/img/images.png" alt="Usuario">
    <div class="col-sm-3">
        <form>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" class="form-control" v-model="email">
            </div>

            <div class="form-group">
                <label for="password">Senha</label>
                <input type="password" id="password" name="password" 
                class="form-control" v-model="password">
            </div>
            <button @click.prevent="login" type="submit" class="btn btn-lg btn-primary btn-block">Login</button>
            
        </form>
    </div>
</div>    
</template>

<script>
  import axios from 'axios';
  import store from '../store';

    export default {
    
        data(){
            return{
                email: '',
                password: '',
                loginError: false,
            }
        },
        methods: {
            login(){
                this.loginError = false;
                axios.post('http://localhost:8000/api/user/login', 
                //pra autenticar, precisa de mais uma header
                //essa header só vai dizer pro beck q isso é uma chamada ajax
                    {email: this.email, password: this.password},
                    {headers: {'X-Requested-With': 'XMLHttpRequest'}})
                    .then(
                        (response) => {
                            //muda o estado com vuex, loginUser() põe isLoggedIn como true
                            store.commit('loginUser')
                            const token = response.data.token;
                            const username = response.data.user.name;
                            const role = response.data.user.role;
                            const user_id = response.data.user.id;
                            localStorage.setItem('token', token)
                            localStorage.setItem('username',  response.data.user.name),
                            localStorage.setItem('user_id', response.data.user.id)
                            localStorage.setItem('role', response.data.user.role)

                            if(role === 'ADMIN'){
                                //redireciona pra dash do admin
                                this.$router.push({ name: 'ADMDash' })
                            }else if(role === 'COORDENADOR'){
                                this.$router.push({ name: 'COORDash' })
                            }else if(role === 'SUPERVISOR'){
                                this.$router.push({ name: 'SUPERDash' })
                            }else if(role === 'ALUNO'){
                                this.$router.push({ name: 'ALUDash' })
                            }
                           
                        }
                    )
                    .catch(error => {
                        this.loginError = true
                        console.log(error)
                        alert('Algo deu ruim')
                    }
                    );
            }
        }
    }

/*ISSO DAQUI É PRA OLHAR NO TOKEN E PEGAR ALGO DELE, PRA DECRYPT -> quero pegar o token
const token = response.data.token;
//decrypt token
const base64Url = token.split('.')[1];
const base64 = base64Url.replace('-', '+').replace('_', '/');
//passo um base64 e me volta uma string
console.log(JSON.parse(window.atob(base64))); 
//quero store o token pra mandar com requests futuras
localStorage.setItem('token', token);
//não é o decrypted é o raw mesmo
*/
</script>


