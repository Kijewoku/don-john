import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const bus = new Vue();
export default bus;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
