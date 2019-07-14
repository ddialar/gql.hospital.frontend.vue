import Vue                 from 'vue'
import VueRouter           from 'vue-router';
import App                 from './App.vue';
import { library }         from '@fortawesome/fontawesome-svg-core'
import { fas }    from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { routes } from './routes';

Vue.use(VueRouter);

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const router = new VueRouter({ routes });

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
