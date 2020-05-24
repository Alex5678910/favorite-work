import VueRouter from 'vue-router'
import vContacts from './components/v-contacts'
import vMainWrapper from './components/v-main-wrapper'
import vValidate from './components/v-vuelidate'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: vMainWrapper
        },
        {
            path: '/contacts',
            component: vContacts
        },
        {
            path: '/validate',
            component: vValidate
        },
           ],
    mode: 'history'
})
