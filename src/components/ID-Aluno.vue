<template>
    <div class="panel panel-default">
        <div class="panel-body">
              <div v-for="alu in aluno" :key="alu.id">
                <h1>Nome: {{alu.pessoa.nome}}</h1>
                <hr>
                <p>Data de Nascimento: {{alu.pessoa.nascimento | dateFormat}}</p>
                <p>CPF: {{alu.pessoa.cpf}}</p>
                <p>RG: {{alu.pessoa.rg}}</p>
                <p>Rua: {{alu.endereco.rua}}</p>
                <p>Bairro: {{alu.endereco.bairro}}</p>
                <p>Cidade: {{alu.endereco.cidade}}</p>
                <p>CEP: {{alu.endereco.cep}}</p>
                <p>Telefone Fixo: {{alu.telefone.fixo}}</p>
                <p>Telefone Celular: {{alu.telefone.celular}}</p>
                <p>RGA: {{alu.rga}}</p>
                <p>Instituição: {{alu.instituicao.nome}}</p>
                <p>Campus: {{alu.campus.nome}}</p>
                <p>Curso: {{alu.curso.nome}}</p>
                <p>Semestre: {{alu.semestre}}</p>
            </div>  
             <hr>
        </div>
        <div class="panel-footer">
                    <router-link to="/alunos" 
                        tag="button" class="btn btn-sm btn-danger btn-block">Voltar</router-link>
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

