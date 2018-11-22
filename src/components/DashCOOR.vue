<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>Dashboard</h1>
                <div class="panel panel-default">
                    <div class="panel-heading">Painel - Coordenador</div>
                    <div class="panel-body con">
                        <h2>Cadastros</h2>
                            <router-link class="btn btn-secondary btn-lg active" to="/novo-aluno">Cadastrar Novo Usuário</router-link>
                            <router-link class="btn btn-secondary btn-lg active" to="/nova-empresa">Cadastrar Nova Empresa</router-link>
                            <router-link class="btn btn-secondary btn-lg active" to="/novo-supervisor">Cadastrar Novo Supervisor</router-link>
                        <div>
                            <h2>Gerenciamento</h2>
                            <router-link class="btn btn-secondary btn-lg active" to="/solicitacoes">Solicitações de Estágio</router-link>
                        </div>
                        
              
                      
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
               
            }
        },
        mounted() {
           
        }
    }
</script>