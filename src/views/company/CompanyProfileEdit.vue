<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container shape-container d-flex">
        <div class="col px-0">
          <div class="row">
            <div class="col-lg-12">
              <b-card>
                <div class="d-flex justify-content-between align-items-center">
                  <h3 @click="prevStep">Setup Company Profile</h3>
                </div>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <b-overlay
            :show="isSpinning"
            spinner-variant="primary"
            class="px-4 py-5"
          >
            <CompanyProfileForm />
          </b-overlay>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import CompanyProfileForm from "./CompanyProfileForm.vue";
export default {
  components: {
    CompanyProfileForm
  },
  data() {
    return {
      stepNumber: 1,
      totalSteps: 4,
      isSpinning: false,
    };
  },
  methods: {
    startSpinning() {
      this.isSpinning = true;
    },
    stopSpinning() {
      this.isSpinning = false;
    },
    nextStep() {
      this.stepNumber++;
    },
    prevStep() {
      this.stepNumber--;
    },
  },
};
</script>
<style>
</style>
