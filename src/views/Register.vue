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
      <div class="row justify-content-center">
        <div class="col-lg-5 ">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 pt-lg-5 pb-4"
            class="border-0"
          >
            <template>
              <div class="text-left text-muted mb-4">
                <h4>Create an Account</h4>
              </div>
              <form role="form" @submit.prevent="handleRegister">
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                  v-model="model.email"
                >
                  <!-- <template #label>Email</template> -->
                </base-input>
                <base-input
                  alternative
                  type="password"
                  placeholder="Password"
                  addon-left-icon="ni ni-lock-circle-open"
                  v-model="model.password"
                >
                </base-input>
                <b-row>
                  <b-col>
                    <b-form-group>
                      <label>Your roles <span class="text-danger">*</span></label>
                      <b-form-radio v-model="model.isCorporate" :value="true" class=" text-left pl-5 mr-0 form-control">Employer</b-form-radio>
                      <b-form-radio v-model="model.isCorporate" :value="false" class="form-control mt-3 text-left pl-5">Job seeker</b-form-radio>
                    </b-form-group>
                  </b-col>
                </b-row>
                <div class="text-center">
                  <b-button type="submit" variant="primary" class="my-4">Sign Up</b-button>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <router-link to="/login" class="text-secondary">Already have an account? Sign In</router-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      model: {
        email: '',
        password: '',
        isCorporate: false
      }
    }
  },
  methods: {
    ...mapActions("auth", ["register", "login"]),
    async handleRegister() {
      try {
        await this.register(this.model);
        if (getToken()) {
          router.push("/")
        }
      } catch (error) {
        
      }
    },
  },
};
</script>
<style>
</style>
