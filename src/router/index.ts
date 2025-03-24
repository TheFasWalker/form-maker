import { createRouter, createWebHistory } from "vue-router";

import ExamplePage from "../pages/ExamplePage.vue";
import HomePage from "../pages/HomePage.vue";
import Error404 from "../pages/Error404.vue";
import ExamplePageSecond from "../pages/ExamplePageSecond.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomePage
        },
        {
            path: '/first',
            name: 'example',
            component: ExamplePage,
            meta:{requireAuth:true}
        },
        {
            path: '/second',
            name: 'secondExample',
            component: ExamplePageSecond,
            meta:{requireAuth:true}
        },
        {
            path: '/third',
            name: 'thirdExample',
            component: ExamplePage,
            meta:{requireAuth:true}
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'error404',
            component: Error404,
            
        }
    ]
})
export default router;