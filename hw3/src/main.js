import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import Browse from './components/Browse.vue'
import Index from './components/Index.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
const routes = [
    { path: '/', name: 'login', component: Login },
    { path: '/browse/', name: 'browse', component: Browse },
    { path: '/main/', name: 'main', component: Index }
];

const router = new VueRouter({ routes });

const store = new Vuex.Store({
    state: {
        posts: [],
        profiles: [],
        user: ''
    },
    mutations: {
        addAllPosts: (state, postsArray) => {
            state.posts = postsArray
        },
        addAllProfiles: (state, profilesArray) => {
            state.profiles = profilesArray
        },
        addUser: (state, user) => {
            state.user = user
        }
    },
    getters: {
        getPost: (state) => (id) => {
            return state.posts[id]
        },
        getProfile: (state) => (id) => {
            return state.profiles[id]
        },
        itemSelected: (state) => (id) => {
            return state.posts.indexOf(id) > -1
        }
    }
})


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')