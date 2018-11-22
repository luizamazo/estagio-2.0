<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>Bem Vindo, {{username}}</h1>

                <div class="panel panel-default">
                    <div class="panel-heading">Painel - Administrador</div>
                    <div class="panel-body">
                        
                        <router-link class="btn btn-secondary btn-lg active" to="/novo-coordenador">Cadastrar Novo Coordenador</router-link>
                        <router-link class="btn btn-secondary btn-lg active" to="/novo-supervisor">Cadastrar Novo Supervisor</router-link>
                        <router-link class="btn btn-secondary btn-lg active" to="/novo-aluno">Cadastrar Novo Aluno</router-link>
                        <router-link class="btn btn-secondary btn-lg active" to="/instituicoes">Instituições</router-link>
                        <router-link class="btn btn-secondary btn-lg active" to="/empresas">Empresas</router-link>
                        <router-link class="btn btn-secondary btn-lg active" to="/coordenadores">Coordenadores</router-link>
                        <router-link class="btn btn-secondary btn-lg active" to="/supervisores">Supervisores</router-link>
                        <router-link class="btn btn-secondary btn-lg active" to="/alunos">Alunos</router-link>
              
                        
                        <hr>
                        <logs-table></logs-table>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Logs from './Logs.vue';
    import axios from 'axios';

    export default {
        data() {
            return {
                username: localStorage.getItem('username')
            }
        },
        components: {
            'logs-table': Logs
        },
        mounted() {
           /* const token = localStorage.getItem('token');
            axios.get('http://localhost:8000/api/dashboard?token=' + token)
            .then(response => {
                this.data = response.data.data
            }).catch(error => {

            });  */
        }
    }
</script>