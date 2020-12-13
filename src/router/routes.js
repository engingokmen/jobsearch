import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import JobPost from "../views/JobPost.vue";
import Joblist from "../views/Joblist.vue";
import JobDetail from "../views/JobDetail.vue";

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/joblist"
    },
    {
      path: "/joblist",
      component: Joblist
    },
    {
      path: "/jobpost",
      component: JobPost
    },
    {
      path: "/jobdetail/:id",
      name: "jobdetail",
      component: JobDetail
    },
    {
      path: "*",
      component: { template: "<div>Aradığınız sayfa bulunamadı</div>" }
    }
  ]
});

export default router;
