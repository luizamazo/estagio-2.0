<template>
    <div class="panel panel-default">
        <div class="panel-heading"><h2>Solicitação de estágio</h2></div>
        <div class="panel-body">
              <div class="row justify-content-center">
    <div class="col-sm-6">
        <form>
            <p style="color: red;"><strong>Obs: Só faça a solicitação caso todos os termos tenham sido previamente acordados.</strong></p>
          
            <div class="form-group">
                <label for="nome">Nome Completo</label>
                <input type="nome" id="nome" name="nome" 
                class="form-control" v-model="nome">
            </div>
        
            <div class="form-group"> 
                <label for="nascimento">Data de Nascimento</label>
                <input type="date" class="form-control" name="nascimento" v-model="nascimento">
            </div>
            <div class="form-group"> 
                <label for="cpf">CPF</label>
                <input type="text" class="form-control" name="cpf" placeholder="Ex. 999.999.999-99" v-model="cpf">
            </div>
            <div class="form-group">
                <label for="rg">RGA</label>
                <input type="text" class="form-control" name="rg" placeholder="RG" v-model="rg">
            </div>
            <div class="form-group"> 
                <label for="telefone">Telefone</label>
                <div class="form-row">
                    <div class="col-6">
                        <input type="text" class="form-control" name="fixo" placeholder="Fixo" v-model="fixo">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" name="celular" placeholder="Celular" v-model="celular"> 
                    </div>
                </div>
            </div>
            <hr>
            <div class="form-group"> 
                <label for="estagioInicio">Data de Início do Estágio</label>
                <input type="date" class="form-control" name="estagioInicio" v-model="estagioInicio">
            </div>
            <div class="form-group"> 
                <label for="estagioFinal">Data de Encerramento</label>
                <input type="date" class="form-control" name="estagioFinal" v-model="estagioFinal">
            </div>
             <div class="form-group">
                <label for="tarefas">Planejamento de tarefas</label>
                <textarea class="form-control" id="tarefas" rows="5" v-model="tarefas"></textarea>
            </div>
            <label for="termo">Termo de Compromisso</label>
             <div class="form-group">
                 <div class="custom-file">
                    <input type="file" class="custom-file-input" id="file">
                    <label class="custom-file-label" for="customFile">Selecione seu documento</label>
                 </div>
            </div>
           
            <button @click.prevent="register" type="submit" class="btn btn-warning">Enviar Solicitação</button>
            <router-link to="/dashboard/aluno" class="btn btn-danger">Cancelar</router-link>
        </form>
    </div>
</div>
        </div>        
    </div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment'
    export default {
        data(){
            return{
                aluno: [],
            }
        },
        methods: {

            loadAluno(){
                const token = localStorage.getItem('token');
                axios
                    .get('http://localhost:8000/api/aluno/' + this.$route.params.id + '?token=' + token)
                    .then(response => {
                        this.aluno = response.data.aluno
                        console.log(response);
                    })
                    .catch(
                        error => console.log(error)
                    );
            }
        },

         filters:{
           
            dateFormat: function(value){
                if (value) {
                    return moment(String(value)).format('DD/MM/YYYY')
                }
            }
        }, 

        created(){
            this.loadAluno();
        }
       
    }
</script>

