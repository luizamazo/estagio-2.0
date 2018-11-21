<template>
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
                                <input v-model="task.name" type="text" id="name" class="form-control">
                            </div>

                            <div class="form-group">
                                <label for="body">Description</label>
                                <input v-model="task.body" type="text" id="body" class="form-control">
                            </div>
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button v-on:click="createTasks" type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
</template>


<script>
    export default {
        
        data(){
            
            return {

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
                ////
                cursos: [],
                instituicoes: [],
                campuses: [],
                editAluno: [],
                errors: []
            }
        },

        methods: {

            loadCreateModal(){
                //usa jquery aqui, acessa o id lá do modal create-modal
                //isso aqui tem lá na pagina do bootstrap modal
                $("#create-modal").modal("show");
            },

            loadUpdateModal(){
                //usa jquery aqui, acessa o id lá do modal create-modal
                //isso aqui tem lá na pagina do bootstrap modal
                $("#create-modal").modal("show");
            },
        }
    }
</script>