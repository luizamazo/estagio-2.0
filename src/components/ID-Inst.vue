<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <h1>Perfil do Instituição</h1>
              <div v-for="inst in instituicao" :key="inst.id">
                <h1>Nome: {{inst.nome}}</h1>
                <hr>
                <p>CNPJ: {{inst.cnpj}}</p>
                <p>Telefone: {{inst.telefone}}</p>
                <p>Email: {{inst.email}}</p>
                <p>Site: {{inst.site}}</p>
                <p>Tipo: {{inst.tipo}}</p>
                <p>Endereço: Rua {{inst.endereco.rua}}, Bairro {{inst.endereco.bairro}}</p>
                <p>Cidade: {{inst.endereco.cidade}}</p>
                <p>CEP: {{inst.endereco.cep}}</p>
            </div>  
             <hr>
        </div>
        <div class="panel-footer">
                    <router-link to="/instituicoes" 
                        tag="button" class="btn btn-sm btn-danger btn-block">Voltar</router-link>
        </div>   
        
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                instituicao: [],
            }
        },
        methods: {

            loadInstituicao(){
                const token = localStorage.getItem('token');
                axios
                    .get('http://localhost:8000/api/instituicao/' + this.$route.params.id + '?token=' + token)
                    .then(response => {
                        this.instituicao = response.data.instituicao
                        console.log(response);
                    })
                    .catch(
                        error => console.log(error)
                    );
            }
        },
        created(){
            this.loadInstituicao();
        }
       
    }
</script>

