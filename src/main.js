import Vue from "vue";
import App from "./App.vue";
import feathersClient from "./feathers-client";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
