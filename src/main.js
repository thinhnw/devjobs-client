/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import i18n from "@/lang";
import CKEditor from '@ckeditor/ckeditor5-vue2';
import { BootstrapVue } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Argon from "./plugins/argon-kit";
import './registerServiceWorker'


Vue.config.productionTip = false;

Vue.use(CKEditor)
Vue.use(BootstrapVue)
Vue.use(Argon);
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
