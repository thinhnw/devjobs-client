<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h3>Work Experience</h3>
      <icon
        class="btn btn-primary "
        name="fa fa-plus "
        @click="addWorkObj"
      >
      </icon>
    </div>
    <p><span class="text-danger">*</span> Required fields</p>
    <b-form>
      <div
        v-for="(work, index) in workProfile"
        :key="index"
        :class="{ 'border-top': index > 0 }"
        class="py-3"
      >
        <b-row>
          <b-col cols="6">
            <b-form-group>
              <label>Job Title <span class="text-danger">*</span></label>
              <b-form-input
                v-model="work.jobTitle"
                required
              />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group>
              <label>Company <span class="text-danger">*</span></label>
              <b-form-input
                v-model="work.organization"
                required
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group>
              <label>Country <span class="text-danger">*</span></label>
              <b-form-input v-model="work.country" required />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group>
              <label>City <span class="text-danger">*</span></label>
              <b-form-input v-model="work.city" required />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <label>From</label>
            <base-input addon-left-icon="ni ni-calendar-grid-58">
              <flat-picker slot-scope="{focus, blur}"
                @on-open="focus"
                @on-close="blur"
                :config="{allowInput: true}"
                class="form-control datepicker"
                v-model="work.fromTime">
              </flat-picker>
            </base-input>
          </b-col>
          <b-col>
            <label>To</label>
            <base-input addon-left-icon="ni ni-calendar-grid-58">
              <flat-picker slot-scope="{focus, blur}"
                @on-open="focus"
                @on-close="blur"
                :config="{allowInput: true}"
                class="form-control datepicker"
                v-model="work.toTime">
              </flat-picker>
            </base-input>
          </b-col>
        </b-row>
      </div>
      <b-row class="mt-5">
        <b-col class="text-center">
          <b-button variant="primary" class="px-5 py-3">Next</b-button>
          <b-button variant="outline-primary" class="py-3"
            >Previous Step</b-button
          >
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
const workObj = () => {
  return {
    jobTitle: "",
    organization: "",
    city: "",
    country: "",
    fromTime: "",
    toTime: ""
  };
};
export default {
  components: {
    flatPicker
  },
  data() {
    return {
      workProfile: [workObj()],
    };
  },
  methods: {
    addWorkObj() {
      if (this.workProfile.some((profile) => profile.jobTitle === ""))
        return;
      this.workProfile.push(workObj());
    },
    async submit() {
      console.log(this.workProfile);
    },
  },
};
</script>

<style>
</style>