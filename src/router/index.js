import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HourView from '../views/snaphotViews/HourOverviewView.vue'
import DetailsView from '../views/snaphotViews/ItemDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/snapshot',
      name: 'itemSnapshot',
      component: () => import('../views/ItemSnapshotView.vue'),
      children: [
        {path: '', component: HourView},
        {path: '/details', component: DetailsView}
      ]
    }
  ]
})

export default router
