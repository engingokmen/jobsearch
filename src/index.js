import Vue from "vue";
import App from "./App.vue";
import router from "./router/routes";
import "./Assets/style.scss";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  el: "#app",
  render: h => h(App)
});
