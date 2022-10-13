import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
export const eventBus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
