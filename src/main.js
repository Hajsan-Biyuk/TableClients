// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'

const app = createApp(App)

app.use(store)

app.mount('#app')

//Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
//   store
// }).$mount('#app')
