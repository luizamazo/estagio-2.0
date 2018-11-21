<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>Dashboard</h1>

                <div class="panel panel-default">
                    <div class="panel-heading">Dashboard - COOR</div>
                    <div class="panel-body">
                        <router-link to="/">Cadastrar Novo Usuário</router-link>
                        <router-link to="/">Instituições</router-link>
                        <router-link to="/">Empresas</router-link>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                data: 'nothing'
            }
        },
        mounted() {
            axios.get('http://localhost:8000/api/dashboard', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                this.data = response.data.data
            }).catch(error => {

            })
        }
    }
</script>