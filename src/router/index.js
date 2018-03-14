import Vue from 'vue'
import VueRouter from 'vue-router'

import Food from '../pages/Food/Food.vue'
import Dress from '../pages/Dress/Dress.vue'
import Hospital from '../pages/Hospital/Hospital.vue'
import ShouYe from '../pages/ShouYe/ShouYe.vue'
import Toy from '../pages/Toy/Toy.vue'
import Classify from '../pages/Classify/Classify.vue'
import Car from '../pages/Car/Car.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter)

export default new VueRouter({
   routes:[
     {
       path:'/',
       redirect:'/shouye'
     },
     {
       path:'/shouye',
       component:ShouYe,
       children:[
         {
           path:'/hospital',
           component:Hospital
         },
         {
           path:'/food',
           component:Food
         },
         {
           path:'/toy',
           component:Toy
         },
         {
           path:'/classify',
           component:Classify
         },
         {
           path:'/car',
           component:Car
         },
         {
           path:'/profile',
           component:Profile
         },
         {
           path:'/dress',
           component:Dress
         },
       ]
     },


   ]
})
