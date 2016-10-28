import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Users from './components/Users'
import Foo from './components/Foo'
import Bar from './components/Bar'

Vue.use(VueRouter)

// Example routes && router setup
const routes = [
	{ path: '/users', component: Users  },
	{ path: '/foo', component: Foo  },
	{ path: '/bar', component: Bar  }
]

const router = new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
	router,
	el: '#app',
	template: '<App/>',
	components: { App }
})
