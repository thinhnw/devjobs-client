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
                  <h3>Create a CV</h3>
                  <p class="mb-0">Step {{ stepNumber }} of {{ totalSteps }}</p>
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
            <ProfileForm v-if="stepNumber === 2" @submit="nextStep" />
            <EducationForm v-if="stepNumber === 1" @submit="nextStep" />
          </b-overlay>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import ProfileForm from "./ProfileForm.vue";
import EducationForm from "./EducationForm.vue";
export default {
  components: {
    ProfileForm,
    EducationForm,
  },
  data() {
    return {
      stepNumber: 1,
      totalSteps: 5,
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
