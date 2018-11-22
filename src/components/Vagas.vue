<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <h3>Vagas de Estágio</h3>

              <div v-for="vaga in vagas" :key="vaga.id" :id="vaga.id" @vagaDeleted="onVagaDeleted($event)">>
                <h2>Título: {{vaga.titulo}}</h2>
                <h3>ID: {{vaga.id}}</h3>
                <hr>
                <p>Responsável:{{vaga.coordenador.pessoa.nome}}</p>
                <p>Área: {{vaga.area}}</p>
                <p>Empresa: {{vaga.empresa.nome}}</p>
                <p>Requisitos: {{vaga.requisitos}}</p>
               <button @click="onRequest(vaga.id)" class="btn btn-sm btn-warning">Solicitar</button>
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
                curso: '',
                instituicao: '',
                campus: '',
         
                ////
                vagas: [],

                errors: [],
            }
        },
        methods: {
            loadVagas(){
                const token = localStorage.getItem('token');
                axios
                    .get('http://localhost:8000/api/vaga?token=' + token)
                    .then(response => {
                        this.vagas = response.data.vagas
                        console.log(response);
                    })
                    .catch(
                        error => console.log(error)
                    );
            },
            onDelete(id){
                console.log(this.id)
                const token = localStorage.getItem('token');
                this.$emit('vagaDeleted', id);
                axios.delete('http://localhost:8000/api/vaga/' + id + '?token=' + token)
                    .then(
                        response => console.log(response)
                    )
                    .catch(
                        error => console.log(error)
                    )
            },
            onVagaDeleted(id){
                const position = this.vagas.findIndex((element) => {
                    return element.id == id;
                });

                this.vagas.splice(position, 1);
            }
        },
        mounted(){
            this.loadVagas();
        }
    }
</script>

