import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import DashBoard from '../views/DashboardPage.vue'
import Produtos from '../views/ProdutoPage.vue'
import Produto from '../views/ProdutoInfo.vue'
import Categoria from '../views/CategoriaPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },

  {
    path: '/DashBoard',
    name: 'dashboard',
    component: DashBoard
  },

  {
    path: '/produtos',
    name: 'produtos',
    component: Produtos
  },
  {
    path: '/produto/:index',
    name: 'produto',
    component: Produto
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: Categoria
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
