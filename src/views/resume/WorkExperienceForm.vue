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
    <b-form @submit.prevent="submit">
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
        <b-row>
          <b-col>
            <label>Description <span class="text-danger">*</span> </label>
            <b-textarea 
              v-model="work.description"
              placeholder="Describe what you have done in previous the job..." rows="5" required></b-textarea>
          </b-col>
        </b-row>
      </div>
      <b-row class="mt-5">
        <b-col class="text-center">
          <b-button variant="primary" class="px-5 py-3" type="submit">Next</b-button>
          <b-button variant="outline-primary" class="py-3"
            >Previous Step</b-button
          >
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import candidate from "@/api/candidate";
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { mapGetters } from 'vuex';
const workObj = () => {
  return {
    jobTitle: "",
    organization: "",
    city: "",
    country: "",
    fromTime: null,
    toTime: null,
    description: ""
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
      try {
        console.log(this.workProfile);
        await candidate.postWorkExperience(this.workProfile) 
      } catch (error) {
        console.error(error) 
      }
    },
  },
  computed: {
    ...mapGetters("auth", ["me"])
  },
  watch: {
    me: {
      immediate: true,
      handler() {
        if (this.me.candidate) {
          this.workProfile = this.me.candidate.workExperiences
        }
      }
    }
  }
};
</script>

<style>
</style>