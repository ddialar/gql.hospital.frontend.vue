import Vue                 from 'vue'
import VueRouter           from 'vue-router';
import App                 from './App.vue';
import store               from './modules/vuex/store';
import { library }         from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas }             from '@fortawesome/free-solid-svg-icons'
// import { far }             from '@fortawesome/free-regular-svg-icons'
// import { 
//     faSearch,
//     faHeartbeat,
//     faArrowsAltV,
//     faMapMarkedAlt
//  } from '@fortawesome/free-solid-svg-icons'
// import { 
//     faFolderOpen
//  } from '@fortawesome/free-regular-svg-icons'

import toastr             from './core/utils/toastr';

import { routes }         from './routes';

import { apolloProvider } from './graphql';

Vue.use(VueRouter);
Vue.prototype.$toastr = toastr;

library.add(fas);
// library.add(
//     faSearch,
//     faHeartbeat,
//     faArrowsAltV,
//     faMapMarkedAlt,
//     faFolderOpen
// )
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const router = new VueRouter({ routes });

new Vue({
    el: '#app',
    store,
    router,
    apolloProvider,
    render: h => h(App),
});
