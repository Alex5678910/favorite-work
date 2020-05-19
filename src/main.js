import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import 'material-design-icons-iconfont'


Vue.use(Vuelidate)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
