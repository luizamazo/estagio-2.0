import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios';


import App from './App.vue'
import Quotes from './components/Quotes.vue';
import NewQuote from './components/NewQuote.vue';
import Register from './components/RegisterAluno.vue';
import Login from './components/Login.vue';
import Logout from './components/Logout.vue'
import Dashboard from './components/DashboardAdmin.vue';
import DeuRuim from './components/DeuRuim.vue';
import Logs from './components/Logs.vue';
import Alunos from './components/Alunos.vue';
import Aluno from './components/Aluno.vue';


Vue.use(VueRouter);
const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = token;


const routes = [
    {path: '', component: Quotes},
    {path: '/new-quote', component: NewQuote},
    {path: '/registerAluno', component: Register},
    {path: '/login', name: 'login', component: Login},
    {path: '/logout', component: Logout},
    {path: '/dashboard', name: 'dashboard', component: Dashboard},
    {path: '/logs', component: Logs},
    {path: '/alunos', component: Alunos},
    {path: '/aluno/:id', component: Aluno, props: true},
 

    {path: '*', component: DeuRuim}
];

const router = new VueRouter({
  mode: 'history',
    routes: routes
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
