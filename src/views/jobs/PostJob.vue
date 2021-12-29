<template>
  <div class="post-job">
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
                  <h3 @click="prevStep">Post Job</h3>
                  <p class="mb-0" @click="nextStep">Step {{ stepNumber }} of {{ totalSteps }}</p>
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
            <PostJobStepOneForm v-show="stepNumber == 1" @next="updateParams" />
            <PostJobStepTwoForm v-show="stepNumber == 2" @next="updateParams" />
          </b-overlay>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import PostJobStepOneForm from './PostJobStepOneForm.vue'
import PostJobStepTwoForm from './PostJobStepTwoForm.vue'
import job from '@/api/job'
export default {
  components: {
    PostJobStepOneForm,
    PostJobStepTwoForm,
  },
  data() {
    return {
      stepNumber: 1,
      totalSteps: 4,
      isSpinning: false,
      params: {
        title: "",
        country: "",
        city: "",
        isRemote: false,
        hiringNumber: 1,
        type: "full_time",
        salaryMin: "",
        salaryMax: "",
        salaryRate: "per_month",
        description: ""
      }
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
    updateParams(model) {
      this.params = { ...this.params, ...model }
      console.log(this.params)
      if (this.stepNumber == 2) this.submit()
      this.nextStep()
    },
    async submit() {
      console.log(this.params)
      try {
        await job.postJob(this.params) 
      } catch (error) {
        console.error(error) 
      }
    }
  },
};
</script>
<style lang="scss">
.post-job {
  .ck-content {
    height: 300px;
  }
}
</style>
