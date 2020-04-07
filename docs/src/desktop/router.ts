import Vue from "vue";
import Router from "vue-router";
import Home from "@/desktop/views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/:name",
      name: "mark-docs",
      component: () => import(`@/desktop/views/MarkdownTransfer.vue`)
    }
  ]
});
