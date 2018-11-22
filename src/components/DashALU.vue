<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>Dashboard</h1>

                <div class="panel panel-default">
                    <div class="panel-heading">Painel - Aluno</div>
                    <div class="panel-body">
                        <router-link class="btn btn-secondary btn-lg active" to="/vagas">Ver Vagas de Estágio</router-link>
                        <router-link class="btn btn-secondary btn-lg active" to="/solicitacao">Ver Solicitações Feitas</router-link>
                        <router-link class="btn btn-secondary btn-lg active" to="/">Ver Estágios</router-link>

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
    }
</script>