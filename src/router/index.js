import { createRouter, createWebHistory } from 'vue-router'
import Category from '@/pages/category'
import Slug from '@/pages/slug'
import Products from '@/pages/slug/products'

const routes = [
  {
    path: '/',
    redirect: '/category'
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/category/:slug',
    component: Slug,
    children: [
      {
        path: '/category/:slug/',
        component: Products,
      },
      {
        path: '/category/:slug/:subSlug',
        component: Products,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
