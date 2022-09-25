
const routes = [
  {
    path: '/',
    component: () => import('layouts/CurrencyLayout.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
