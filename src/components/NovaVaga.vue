<template>
 <div class="row justify-content-center">
    <div class="col-sm-6">
        <form>
            <h1>Cadastro de Vaga</h1>
            <!--
            <div class="form-group">
                <label for="username">Nome de Usuário</label>
                <input type="text" id="username" name="username" 
                class="form-control" v-model="username" placeholder="Ex. nome.sobrenome">
            </div> 
            -->
            <div class="form-group">
                <label for="titulo">Título</label>
                <input type="titulo" id="titulo" name="titulo" 
                class="form-control" v-model="titulo">
            </div>
            <div class="form-group">
                <label for="area">Área</label>
                <input type="text" class="form-control" name="area" v-model="area">
            </div>
         
            <div class="form-group"> 
                <label for="empresa">Empresa</label>
                    <select class="custom-select" name="empresa" v-model="empresa">
                        <option value="" disabled selected>Selecione uma empresa</option>
                        <option v-for="emp in empresas" :key="emp.id" :value="emp.id">
                            {{emp.nome}}
                        </option>
                    </select>
            </div>
            <div class="form-group"> 
                <label for="supervisor">Supervisor</label>
                    <select class="custom-select" name="supervisor" v-model="supervisor">
                        <option value="" disabled selected>Selecione um supervisor</option>
                        <option v-for="sup in supervisores" :key="sup.id" :value="sup.id">
                            {{sup.nome}}
                        </option>
                    </select>
            </div>
            <button @click.prevent="register" type="submit" class="btn btn-primary">Cadastrar</button>
            <router-link to="/dashboard" class="btn btn-danger">Cancelar</router-link>
        </form>
    </div>
</div>
</template>

<script>
  import axios from 'axios';

    export default {
    
        data(){
            return{

                titulo: '',
                area: '',
                empresa: '',
                supervisor: '',
                ////
                supervisores: [],
                empresas: [],
                ///
                user_id: localStorage.getItem('user_id'),
                auth: localStorage.getItem('role')
                
            }
        },
        methods: {
            register(){
                const token = localStorage.getItem('token');
                axios.post('http://localhost:8000/api/vaga?token=' + token, 
                    {
                        titulo: this.titulo,
                        area: this.area,
                        empresa: this.empresa,
                        supervisor: this.supervisor,
                        user_id: this.user_id
                    },
                    {headers: {'X-Requested-With': 'XMLHttpRequest'}})
                    .then(
                        (response) => console.log(response),
                        alert("Cadastrado com sucesso"),
                    )
                    .catch(
                        (error) => console.log(this.role)
                    );

                    if(this.auth === 'ADMIN'){
                        this.$router.push({ name: 'ADMDash' })
                    }else if(auth === 'COORDENADOR'){
                        this.$router.push({ name: 'COORDash' })
                    }
            },
         
            loadES(){
                const token = localStorage.getItem('token');
                axios.get('http://localhost:8000/api/vaga/create?token=' + token)
                    .then(response => {
                        this.empresas = response.data.empresas
                        this.supervisores = response.data.supervisores
                        console.log(response)
                    })
                    .catch(
                        error => console.log(error)
                    );
            }
        },
        
        mounted(){
            this.loadES();
        }
        
    }
</script>
