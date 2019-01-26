import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Vue2Filters from "vue2-filters";
import SearchPage from "@/components/SearchPage";

Vue.use(Vue2Filters);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/search",
      name: "SearchPage",
      component: SearchPage
    }
  ]
});
