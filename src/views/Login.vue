<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center ">
        <div class="col-lg-5 pb-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-center text-muted mb-4">
                <!-- <small>Or sign in with credentials</small> -->
                <h4>Sign In</h4>
              </div>
              <form role="form" @submit.prevent="handleLogin">
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                  v-model="model.email"
                >
                </base-input>
                <base-input
                  alternative
                  type="password"
                  placeholder="Password"
                  addon-left-icon="ni ni-lock-circle-open"
                  v-model="model.password"
                >
                </base-input>
                <base-checkbox> Remember me </base-checkbox>
                <div class="text-center">
                  <b-button type="submit" variant="primary" class="my-4">Sign In</b-button>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <router-link to="/register" class="text-secondary">New to Devjobs? Create new account</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions } from "vuex";
// import { showSuccess } from "@/utils/message";
// import { Status } from "@/utils/constants";
import corporate from "@/api/corporate";

export default {
  data() {
    return {
      model: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["register", "login"]),
    handleLogin() {
      this.login(this.model);
    },
  },
  mounted() {
    corporate.getCorporates();
  },
};
</script>
<style>
</style>
