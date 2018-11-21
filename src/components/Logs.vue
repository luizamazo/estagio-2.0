<template>
    <div class="table-responsive-md">
        <table class="table text-center" v-if="logs.length > 0">
            <thead>
                <tr>
                <th>#</th>
                <th class="text-center">Nome</th>
                <th class="text-center">Ação</th>
                <th class="text-center">Tipo</th>
                <th class="text-center">Alvo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="log in logs" :key="log.id">
                    <td>{{log.id}}</td>
                    <td>{{log.autor}}</td>
                    <td>{{log.acao}}</td>
                    <td>{{log.tipo}}</td>
                    <td>{{log.alvo}}</td>
                </tr>
            </tbody>
            </table>
            <button @click="deleteLogs" class="btn btn-danger btn-block">Limpar Tudo</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        
        data(){
            
            return {

                log: {
                    autor: '',
                    acao: '',
                    tipo: '',
                    alvo: ''
                },
                logs: []
            }
        }, 

        methods: {

            loadLogs(){
                const token = localStorage.getItem('token');
                axios
                    .get('http://localhost:8000/api/logs?token=' + token)
                    .then(response => {
                        this.logs = response.data.logs
                        console.log(response);
                    })
                    .catch(
                        error => console.log(error)
                    );
            },
            deleteLogs(){
                const token = localStorage.getItem('token');
    
                axios.delete('http://localhost:8000/api/logs?token=' + token)
                    .then(
                        response => console.log(response)
                    )
                    .catch(
                        error => console.log(error)
                    )
            }
        },

        mounted() {
            this.loadLogs();
        }
    }
</script>
