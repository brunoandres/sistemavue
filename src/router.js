import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Categoria from './components/Categoria.vue'
import Articulo from './components/Articulo.vue'
import Ingreso from './components/Ingreso.vue'
import Proveedor from './components/Proveedor.vue'
import Venta from './components/Venta.vue'
import Cliente from './components/Cliente.vue'
import Usuario from './components/Usuario.vue'
import ConsultaCompra from './components/ConsultaCompra.vue'
import ConsultaVenta from './components/ConsultaVenta.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/categoria',
      name: 'categoria',
      component: Categoria
    },
    {
      path: '/articulo',
      name: 'articulo',
      component: Articulo
    },
    {
      path: '/ingreso',
      name: 'ingreso',
      component: Ingreso
    },
    {
      path: '/proveedor',
      name: 'proveedor',
      component: Proveedor
    },
    {
      path: '/venta',
      name: 'venta',
      component: Venta
    },
    {
      path: '/cliente',
      name: 'cliente',
      component: Cliente
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: Usuario
    },
    {
      path: '/consulta-compra',
      name: 'consulta-compra',
      component: ConsultaCompra
    },
    {
      path: '/consuta-venta',
      name: 'consulta-venta',
      component: ConsultaVenta
    }
  ]
})
