import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Productos from "../views/Productos.vue";
import Personal from "../views/HomePersonal.vue";
import Cursos from "../views/Cursos.vue";
import LayoutsClass from "../layouts/ClaseLayouts.vue";
import LayoutsPerson from "../layouts/PersonalLayouts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { layout: LayoutsClass },
  },
  {
    path: "/productos",
    name: "productos",
    component: Productos,
    meta: { layout: LayoutsClass },
  },
  {
    path: "/inicio-personal",
    name: "Personal",
    component: Personal,
    meta: { layout: LayoutsPerson },
  },
  {
    path: "/cursos",
    name: "Cursos",
    component: Cursos,
    meta: { layout: LayoutsPerson },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
