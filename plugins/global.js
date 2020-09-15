import Vue from 'vue'

Vue.component('w-link', () => import('@/components/global/Link' /* webpackChunkName: "btn" */))
Vue.component('w-button', () => import('@/components/global/Button' /* webpackChunkName: "btn" */))
