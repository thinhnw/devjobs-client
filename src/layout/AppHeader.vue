<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/white.png" alt="logo" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a
            href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
          >
            <img src="img/brand/blue.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-ui-04 d-lg-none"></i>
            <span class="nav-link-inner--text">Components</span>
          </a>
          <div class="dropdown-menu-inner">
            <a
              href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
              class="media d-flex align-items-center"
            >
              <div
                class="
                  icon icon-shape
                  bg-gradient-primary
                  rounded-circle
                  text-white
                "
              >
                <i class="ni ni-spaceship"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">Getting started</h6>
                <p class="description d-none d-md-inline-block mb-0">
                  Get started with Bootstrap, the world's most popular framework
                  for building responsive sites.
                </p>
              </div>
            </a>
            <a
              href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
              class="media d-flex align-items-center"
            >
              <div
                class="
                  icon icon-shape
                  bg-gradient-warning
                  rounded-circle
                  text-white
                "
              >
                <i class="ni ni-ui-04"></i>
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-warning mb-md-1">Components</h5>
                <p class="description d-none d-md-inline-block mb-0">
                  Learn how to use Argon compiling Scss, change brand colors and
                  more.
                </p>
              </div>
            </a>
          </div>
        </base-dropdown>
        <base-dropdown tag="li" class="nav-item">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">Examples</span>
          </a>
          <router-link to="/" class="dropdown-item">Home</router-link>
          <router-link to="/resume" class="dropdown-item">Resume</router-link>
          <router-link to="/company" class="dropdown-item">Company</router-link>
          <router-link to="/post-job" class="dropdown-item">Post Job</router-link>
          <router-link to="/landing" class="dropdown-item">Landing</router-link>
          <router-link to="/profile" class="dropdown-item">Profile</router-link>
          <router-link to="/login" class="dropdown-item">Login</router-link>
          <router-link to="/register" class="dropdown-item"
            >Register</router-link
          >
        </base-dropdown>
      </ul>
      <ul v-if="!token"
        class="navbar-nav align-items-lg-center ml-lg-auto mx-0"
      >
        <li class="nav-item d-none d-lg-block mr-0">
          <router-link to="/login" class="btn btn-neutral btn-icon">
            <span class="nav-link-inner--text">Sign In</span>
          </router-link>
        </li>
      </ul>
      <ul v-else
        class="navbar-nav align-items-lg-center ml-lg-auto mx-0">
        <li class="nav-item dropdown">
          <base-dropdown class="nav-link pr-0" role="button" position="right">
            <template v-slot:title>
              <div class="media align-items-center mb-0">
                <div class="media-body mr-2 d-none d-lg-block">
                  <span class="mb-0 text-sm font-weight-bold">Jessica Jones</span>
                </div>
                <span class="avatar avatar-sm rounded-circle">
                  <img
                    alt="Image placeholder"
                    src="img/theme/team-4-800x800.jpg"
                  />
                </span>
              </div>
            </template>
            <div class="dropdown-header noti-title">
              <h6 class="text-overflow m-0">Welcome!</h6>
            </div>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>My profile</span>
            </router-link>
            <router-link to="/settings" class="dropdown-item">
              <i class="ni ni-settings-gear-65"></i>
              <span>Settings</span>
            </router-link>
            <div class="dropdown-divider"></div>
            <div class="dropdown-item" @click="logout">
              <i class="ni ni-user-run"></i>
              <span>Logout</span>
            </div>
          </base-dropdown>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

import { getToken } from "@/utils/auth";
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
  methods: {
    ...mapActions("auth", ["clear"]),
    logout() {
      this.clear().then(() => {
        const token = new URL(window.location.href).searchParams.get('token')
        if (token) {
          this.$router.push('home')
        }
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  },
  computed: {
    ...mapGetters("auth", ["token"])
  },
};
</script>
<style>
</style>
