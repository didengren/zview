import Vue, { AsyncComponent } from "vue";
import Router from "vue-router";
import { routerDir } from "@/constants";
import Home from "./views/Home.vue";

Vue.use(Router);

interface Route {
  path: string;
  name: string;
  component: AsyncComponent;
}

const composeRoute = (name: string): Route => ({
  path: `/${name}`,
  name: `/${name}`,
  component: () => import(`@@/${name}/demo/index.vue`)
});

const routes: Route[] = [];
for (let i = 0; i < routerDir.length; i++) {
  let items = routerDir[i].items;
  for (let j = 0; j < items.length; j++) {
    routes.push(composeRoute(items[j].name));
  }
}

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    ...routes
  ]
});
