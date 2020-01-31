import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

import currencyFilter from './shared/currency-filter';

import pinDirective from './shared/pin-directive';

Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);
Vue.filter('currency', currencyFilter);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
