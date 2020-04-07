import Vue from "vue";
import App from "@/App.vue";
import router from "./router";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;
Vue.use(VueLazyload);

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
