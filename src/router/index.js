import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'
import Categolies from '../views/Categolies.vue'
import Student from '../views/Student.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/student',
    name: 'Student',
    component: Student
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/categoly',
    name: 'Categolies',
    component: Categolies
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
