import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import AuthHeader from "./layout/AuthHeader";
import AuthFooter from "./layout/AuthFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Profile from "./views/Profile.vue";

import { getToken } from "@/utils/auth";

Vue.use(Router);

const router = new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: () => import('@/views/jobs/FindJobs.vue'),
        footer: AppFooter
      }
    },
    {
      path: "/resume",
      name: "resume",
      components: {
        header: AppHeader,
        default: () => import('@/views/resume/Resume.vue'),
        footer: AppFooter
      }
    },
    {
      path: '/company',
      name: 'company',
      components: {
        header: AppHeader,
        default: () => import('@/views/company/CompanyProfile.vue'),
        footer: AppFooter
      }
    },
    {
      path: '/company/edit',
      name: 'company.edit',
      components: {
        header: AppHeader,
        default: () => import('@/views/company/CompanyProfileEdit.vue'),
        footer: AppFooter
      }
    },
    {
      path: '/post-job',
      name: 'post-job',
      components: {
        header: AppHeader,
        default: () => import('@/views/jobs/PostJob.vue'),
        footer: AppFooter
      }
    },
    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AuthHeader,
        default: () => import('@/views/Login.vue'),
        footer: AuthFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AuthHeader,
        default: () => import('@/views/Register.vue'),
        footer: AuthFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  console.log(getToken())
  if (getToken() && ['login', 'register'].includes(to.name)) {
    if (from.name != to.name) {
      next({ name: from.name })
    }
    next({ name: 'home' })
  }
  next()
})

export default router