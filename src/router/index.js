import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import("../views/BlogList.vue");
const About = () => import("../views/AboutView.vue");
const Service = () => import("../views/ServiceView.vue");
const Contact = () => import("../views/ContactView.vue");
const BlogDetails=()=>import("../views/BlogDetails.vue")


const NotFound = () => import("../views/NotFound.vue")

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',  
      component:About
    },
    {
      path: '/service',
      name: 'Service',
      component:Service

    },
    {
      path: '/contact',
      name: 'Contact',
      component:Contact

    },
    {
      path: '/post-list/:id',
      name:'BlogDetails',
      component: BlogDetails,
      props:true
    },

    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component:NotFound
    }
   
  ]
})

export default router