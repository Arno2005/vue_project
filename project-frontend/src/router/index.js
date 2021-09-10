import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld';
import NewComponent from "../components/ParentComponent";
import UsersList from "../components/UsersList";
import NotFound from "../components/NotFound";
import userRoutes from "../components/user/userRoutes";
import Verify from "../components/Verify";
import Login from "../components/Login";
import Register from "../components/Register";
import ProductRoutes from "../components/Products/ProductRoutes";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { path: '*', component: NotFound},
    { path: '/hello', name: 'HelloWorld', component: HelloWorld },
    { path: '/new', name: 'NewComponent', component: NewComponent },
    { path: '/users', name: 'UserList', component: UsersList },
    ...userRoutes,
    { path: '/login', name: 'Login', component: Login },
    { path: '/verify/:email/:token', name: 'verify', component: Verify },
    { path: '/register', name: 'Register', component: Register},
    ...ProductRoutes,
  ]
})
