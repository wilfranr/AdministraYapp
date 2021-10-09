import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import Comunicados from '@/views/Comunicados'
import Clasificados from '@/views/Clasificados'
import Contacto from '@/views/Contacto'
import EstadoCuenta from '@/views/EstadoCuenta'
import Emprendimientos from '@/views/Emprendimientos'
import NuevoClasificado from '@/views/NuevoClasificado'
import NuevoComunicado from '@/views/NuevoComunicado'
import NuevoEmprendimiento from '@/views/NuevoEmprendimiento'
import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'

Vue.use(Router)


export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/Register',
      name: 'register',
      component: Register
    },
    {
      path: '/Comunicados',
      name: 'comunicados',
      component: Comunicados
    },
    {
      path: '/Clasificados',
      name: 'clasificados',
      component: Clasificados
    },
    {
      path: '/Contacto',
      name: 'contacto',
      component: Contacto
    },
    {
      path: '/EstadoCuenta',
      name: 'estadocuenta',
      component: EstadoCuenta
    },
    {
      path: '/Emprendimientos',
      name: 'emprendimientos',
      component: Emprendimientos
    },
    {
      path: '/NuevoClasificado',
      name: 'nuevoclasificado',
      component: NuevoClasificado
    },
    {
      path: '/NuevoComunicado',
      name: 'nuevocomunicado',
      component: NuevoComunicado
    },
    {
      path: '/NuevoEmprendimiento',
      name: 'nuevoemprendimiento',
      component: NuevoEmprendimiento
    }
  ]
})

