import Vue, { AsyncComponent } from "vue";
import Router from "vue-router";
import { routerDir } from "@/constants";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
    // ...routes
  ]
});
