<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>Dashboard</h1>

                <div class="panel panel-default">
                    <div class="panel-heading">Dashboard - ALU</div>
                    <div class="panel-body">
                        <router-link to="/">Ver Vagas de Estágio</router-link>
                        <router-link to="/">Ver Estágios</router-link>
                        <router-link to="/">Ver notificações sei lá q porra eh essa</router-link>

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