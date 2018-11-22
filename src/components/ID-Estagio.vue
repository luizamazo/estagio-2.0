<template>
    <div class="panel panel-default">
        <div class="panel-heading"><h2>Estágios</h2></div>
        <div class="panel-body">
            <div v-if="estagio.length == 0" class="text-center">
                    <h4> Você ainda não possui estágio :/ </h4>
            </div>
            <div v-else>
                <div v-for="est in estagio" :key="est.id"> 
                    <h1>Estágio: {{est.titulo}}</h1>
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
            </div>  
             <hr>
    </div>
</div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment'
    export default {
        data(){
            return{
                estagio: [],
            }
        },
        methods: {

         /*   loadEstagio(){
                const token = localStorage.getItem('token');
                const aluno_id = localStorage.getItem('aluno_id');
                axios
                    .get('http://localhost:8000/api/estagio/' + aluno_id + '?token=' + token)
                    .then(response => {
                        this.estagio = response.data.estagio
                        console.log(response);
                    })
                    .catch(
                        error => console.log(error)
                    );
            }
            */
        },

         filters:{
           
            dateFormat: function(value){
                if (value) {
                    return moment(String(value)).format('DD/MM/YYYY')
                }
            }
        }, 

        created(){
            this.loadEstagio();
        }
       
    }
</script>

