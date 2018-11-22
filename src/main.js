import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios';
import VueFilterDateFormat from 'vue-filter-date-format'


import App from './App.vue'
import Login from './components/Login.vue';
import Logout from './components/Logout.vue'
import ADMDashboard from './components/DashADM.vue';
import COORDashboard from './components/DashCOOR.vue';
import SUPERDashboard from './components/DashSUPER.vue';
import ALUDashboard from './components/DashALU.vue';
//ADMIN
import Logs from './components/Logs.vue';
//CADASTROS
import NovaInstituicao from './components/NovaInst.vue';
import NovoCurso from './components/NovoCurso.vue';
import NovaEmpresa from './components/NovaEmp.vue';
import NovoCoordenador from './components/NovoCoor.vue';
import NovoSupervisor from './components/NovoSuper.vue';
import NovoAluno from './components/NovoAluno.vue';
import NovaVaga from './components/NovaVaga.vue';
//INSTITUIÇÕES
import Instituicoes from './components/Instituicoes.vue';
import Instituicao from './components/ID-Inst.vue';
import EditarInstituicao from './components/EditarInst.vue';
//EMPRESAS
import Empresas from './components/Empresas.vue';
import Empresa from './components/ID-Emp.vue';
import EditarEmpresa from './components/EditarEmp.vue';
//COORDENADORES
import Coordenadores from './components/Coordenadores.vue';
import Coordenador from './components/ID-Coor.vue';
import EditarCoordenador from './components/EditarCoor.vue';
//SUPERVISORES
import Supervisores from './components/Supervisores.vue';
import Supervisor from './components/ID-Super.vue';
import EditarSupervisor from './components/EditarSuper.vue';
//ALUNOS
import Alunos from './components/Alunos.vue';
import Aluno from './components/ID-Aluno.vue';
import EditarAluno from './components/EditarAluno.vue';

import DeuRuim from './components/DeuRuim.vue';

Vue.use(VueFilterDateFormat)
Vue.use(VueRouter);
const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = token;


const routes = [
    {path: '', component: Login},
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
    //ADMIN
    {path: '/logs', component: Logs},
    //CADASTROS
    {path: '/nova-instituicao', component: NovaInstituicao},
    {path: '/novo-curso', component: NovoCurso},
    {path: '/nova-empresa', component: NovaEmpresa},
    {path: '/novo-coordenador', component: NovoCoordenador},
    {path: '/novo-supervisor', component: NovoSupervisor},
    {path: '/novo-aluno', component: NovoAluno},
    {path: '/nova-vaga', component: NovaVaga},
    //INSTITUIÇÕES
    {path: '/instituicoes', component: Instituicoes},
    {path: '/instituicao/:id', component: Instituicao, props: true},
    {path: '/instituicao/edit/:id', component: EditarInstituicao, props: true},
    //EMPRESAS
    {path: '/empresas', component: Empresas},
    {path: '/empresa/:id', component: Empresa, props: true},
    {path: '/empresa/edit/:id', component: EditarEmpresa, props: true},
    ///COORDENADORES
    {path: '/coordenadores', component: Coordenadores},
    {path: '/coordenador/:id', component: Coordenador, props: true},
    {path: '/coordenador/edit/:id', component: EditarCoordenador, props: true},
    ///SUPERVISORES
    {path: '/supervisores', component: Supervisores},
    {path: '/supervisor/:id', component: Supervisor, props: true},
    {path: '/supervisor/edit/:id', component: EditarSupervisor, props: true},
    //////ALUNOS
    {path: '/alunos', component: Alunos},
    {path: '/aluno/:id', component: Aluno, props: true},
    {path: '/aluno/edit/:id', component: EditarAluno, props: true},
 

    {path: '*', component: DeuRuim}
];

const router = new VueRouter({mode: 'history', routes: routes});


/*router.beforeEach((to, from, next) => {
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
