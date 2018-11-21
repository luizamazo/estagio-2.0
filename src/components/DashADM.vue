<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>Welcome, {{username}}</h1>

                <div class="panel panel-default">
                    <div class="panel-heading">Dashboard</div>
                    <div class="panel-body">
                        <router-link to="/novo-aluno">Cadastrar Novo Aluno</router-link>
                         <router-link to="/alunos">Alunos</router-link>
                        <router-link to="/">Instituições</router-link>
                        <router-link to="/">Empresas</router-link>
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