<template>

    <div class="row">
        <div class="col-md-12">
                <div class="panel panel-default">
                <div class="panel-body">
                   <div class="table-responsive-md">
                        <table class="table text-center" v-if="alunos.length > 0">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th class="text-center">RGA</th>
                            <th class="text-center">Nome</th>
                            <th class="text-center">Instituição</th>
                            <th class="text-center">Campus</th>
                            <th class="text-center">Curso</th>
                            <th class="text-center">Semestre</th>
                            <th class="text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="alu in alunos" :key="alu.id" :id="alu.id">
                                <td>{{alu.id}}</td>
                                <td>{{alu.rga}}</td>
                                <td>{{alu.pessoa.nome}}</td>
                                <td>{{alu.instituicao.nome}}</td>
                                <td>{{alu.campus.nome}}</td>
                                <td>{{alu.curso.nome}}</td>
                                <td>{{alu.semestre}}</td>
                                <td>
                                <router-link v-bind:to="'/aluno/' + alu.id" tag="button" class="btn btn-sm btn-primary">Ver</router-link>
                                <router-link v-bind:to="'/aluno/edit/' + alu.id" tag="button" class="btn btn-sm btn-warning">Editar</router-link>
                                <button @click="onDelete" class="btn btn-sm btn-danger">Apagar</button>
                                </td>
                            </tr>
                        </tbody>
                        </table>

                        <!--edit modal
                        <div class="modal fade" id="create-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Criar Modal</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">

                                    <div class="alert alert-danger" v-if="errors.length > 0">
                                        <ul>
                                            <li v-for="error in errors" :key = "error.id">{{error}}</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input v-model="nome" type="text" id="name" class="form-control">
                                    </div>

                                    <div class="form-group">
                                        <label for="body">Description</label>
                                        <input v-model="nascimento" type="text" id="body" class="form-control">
                                    </div>
                                    
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                   fim modal
                   NÃOTÁ DNDO CERTO ESA MERDA -->

                   </div>
                </div>
                <div class="panel-footer">
                    <router-link to="/novo-aluno" 
                        tag="button" class="btn btn-sm btn-success btn-block">Adicionar Novo Aluno</router-link>
                </div>               
            </div>
        </div>
    </div>


    
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                alunos: [],
                /////modal -> edit
                nome: '',
                nascimento: '',
                cpf: '',
                rg: '',
                rua: '',
                bairro: '',
                cidade: '',
                cep: '',
                celular: '',
                fixo: '',
                rga: '',
                semestre: '',
                curso: '',
                instituicao: '',
                campus: '',
                id: '',
                ////
                cursos: [],
                instituicoes: [],
                campuses: [],
                editAluno: [],
                errors: [],
                id: null
            }
        },
        methods: {
            loadAlunos(){
                const token = localStorage.getItem('token');
                axios
                    .get('http://localhost:8000/api/aluno?token=' + token)
                    .then(response => {
                        this.alunos = response.data.alunos
                        console.log(response);
                    })
                    .catch(
                        error => console.log(error)
                    );
            },
            onDelete(){
                console.log(this.id)
                const token = localStorage.getItem('token');
                //deletar a quote q eu deletei da tela
                //emit method to emit my own event, é tipo uma verificaçao
               // this.$emit('quoteDeleted', this.qt.id); //esse vento será colocado lá no loop do for
                //esse qt é o vetor q to recebendo lá do quotes
                axios.delete('http://localhost:8000/api/aluno/' + this.id + '?token=' + token)
                    .then(
                        response => console.log(response)
                    )
                    .catch(
                        error => console.log(error)
                    )
            }
        },
        mounted(){
            this.loadAlunos();
        }
    }
</script>

