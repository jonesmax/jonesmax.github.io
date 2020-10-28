import Vue from 'vue'
import App from './App.vue'
import AnimateCSS from 'animate.css';

Vue.use(AnimateCSS);
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
