<template>
    <div class="panel panel-default">
        <div class="panel-body">
              <div v-for="alu in aluno" :key="alu.id">
                <h1>Nome: {{alu.pessoa.nome}}</h1>
                <hr>
                <p>{{alu.pessoa.nascimento}}</p>
                <p>{{alu.pessoa.cpf}}</p>
                <p>{{alu.pessoa.rg}}</p>
                <p>{{alu.endereco.rua}}</p>
                <p>{{alu.endereco.bairro}}</p>
                <p>{{alu.endereco.cidade}}</p>
                <p>{{alu.endereco.cep}}</p>
                <p>{{alu.telefone.fixo}}</p>
                <p>{{alu.telefone.celular}}</p>
                <p>{{alu.rga}}</p>
                <p>{{alu.instituicao.nome}}</p>
                <p>{{alu.campus.nome}}</p>
                <p>{{alu.curso.nome}}</p>
                <p>{{alu.semestre}}</p>
            </div>  
             <hr>
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios';
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
                    .get('http://localhost:8000/api/aluno/' + this.$route.params.id+ '?token=' + token)
                    .then(response => {
                        this.aluno = response.data.aluno
                        console.log(response);
                    })
                    .catch(
                        error => console.log(error)
                    );
            }
        },
        created(){
            this.loadAluno();
        }
       
    }
</script>

