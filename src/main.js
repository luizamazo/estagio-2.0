import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios';
import VueFilterDateFormat from 'vue-filter-date-format'


import App from './App.vue'
import Quotes from './components/Quotes.vue';
import NewQuote from './components/NewQuote.vue';
import NovoAluno from './components/NovoAluno.vue';
import Login from './components/Login.vue';
import Logout from './components/Logout.vue'
import ADMDashboard from './components/DashADM.vue';
import COORDashboard from './components/DashCOOR.vue';
import SUPERDashboard from './components/DashSUPER.vue';
import ALUDashboard from './components/DashALU.vue';
import DeuRuim from './components/DeuRuim.vue';
import Logs from './components/Logs.vue';
import Alunos from './components/Alunos.vue';
import Aluno from './components/Aluno.vue';
import EditarAluno from './components/EditarAluno.vue';

Vue.use(VueFilterDateFormat)
Vue.use(VueRouter);
const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = token;


const routes = [
    {path: '', component: Login},
    {path: '/new-quote', component: NewQuote},
    {path: '/novo-aluno', component: NovoAluno},
    {path: '/login', name: 'login', component: Login},
    {path: '/logout', component: Logout},
    {
      path: '/dashboard', name: 'ADMDash', component: ADMDashboard, // ADMIN 
      meta: 
      {
        requiresAuth: true, adminAuth: true, coorAuth: true, 
        superAuth: true, aluAuth: false
      }
    },
    {
      path: '/dashboard', name: 'COORDash', component: COORDashboard, //COORDENADOR
      meta: 
      {
        requiresAuth: true, adminAuth: false, coorAuth: true, 
        superAuth: false, aluAuth: false
      }
    },
    {
      path: '/dashboard', name: 'SUPERDash', component: SUPERDashboard, //SUPER
      meta:
      {
        requiresAuth: true, adminAuth: false, coorAuth: false,
        superAuth: true, aluAuth: false
      }
    },
    {
      path: '/dashboard', name: 'ALUDash', component: ALUDashboard, //ALUNO
      meta:
      {
        requiresAuth: true, adminAuth: false, coorAuth: false,
        superAuth: false, aluAuth: true
      }
    },
    {path: '/logs', component: Logs},
    {path: '/alunos', component: Alunos},
    {path: '/aluno/:id', component: Aluno, props: true},
    {path: '/aluno/edit/:id', component: EditarAluno, props: true},
 

    {path: '*', component: DeuRuim}
];

const router = new VueRouter({mode: 'history', routes: routes});

/*
router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth){
      const authUser = localStorage.getItem('role')
      if(!authUser || !authUser.token){
        next({name: 'login'})
      }else if(to.meta.adminAuth){
        const authUser = localStorage.getItem('role')
        if(authUser.data.role === 'ADMIN'){
          next()
        }else{
          next({name: 'login'})
        }
      }else if(to.meta.coorAuth){
        const authUser = localStorage.getItem('role')
        if(authUser.data.role === 'COORDENADOR'){
          next()
        }else{
          next({name: 'login'})
        }
      }else if(to.meta.superAuth){
        const authUser = localStorage.getItem('role')
        if(authUser.data.role === 'SUPERVISOR'){
          next()
        }else{
          next({name: 'login'})
        }
      }else if(to.meta.aluAuth){
        const authUser = localStorage.getItem('role')
        if(authUser.data.role === 'ALUNO'){
          next()
        }else{
          next({name: 'login'})
        }
      }
    }else{
      next()
    }
})
*/

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
