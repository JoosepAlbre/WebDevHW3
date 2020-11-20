import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Browse from './components/Browse.vue'
import Index from './components/Index.vue'

Vue.use(VueRouter)
const routes = [
    { path: '/', name: 'login', component: Login },
    { path: '/browse/', name: 'browse', component: Browse },
    { path: '/index/', name: 'index', component: Index }
];

const router = new VueRouter({ routes });


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')