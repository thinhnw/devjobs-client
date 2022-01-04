<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h3 @click="addEducationObj">Education</h3>
      <icon
        class="btn btn-primary"
        name="fa fa-plus"
        @click="addEducationObj"
      >
      </icon>
    </div>
    <p><span class="text-danger">*</span> Required fields</p>
    <b-form @submit.prevent="submit">
      <div
        v-for="(education, index) in educationProfile"
        :key="index"
        :class="{ 'border-top': index > 0 }"
        class="py-3"
      >
        <b-row>
          <b-col cols="6">
            <b-form-group>
              <label>Degree <span class="text-danger">*</span></label>
              <b-form-select
                v-model="education.degree"
                :options="degreeOptions"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row v-if="education.degree !== 'None'">
          <b-col>
            <b-form-group>
              <label>School</label>
              <b-form-input v-model="education.school" />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group>
              <label>Field of Study </label>
              <b-form-input v-model="education.fieldOfStudy"/>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row v-if="education.degree !== 'None'">
          <b-col>
            <b-form-group>
              <label>Country </label>
              <b-form-input v-model="education.country" />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group>
              <label>City </label>
              <b-form-input v-model="education.city" />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row v-if="education.degree !== 'None'">
          <b-col>
            <label>From</label>
            <base-input addon-left-icon="ni ni-calendar-grid-58">
              <flat-picker slot-scope="{focus, blur}"
                @on-open="focus"
                @on-close="blur"
                :config="{allowInput: true}"
                class="form-control datepicker"
                v-model="education.fromTime">
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
                v-model="education.toTime">
              </flat-picker>
            </base-input>
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

const educationObj = () => {
  return {
    degree: "None",
    fieldOfStudy: "",
    school: "",
    city: "",
    country: "",
    fromTime: null,
    toTime: null,
  };
};
export default {
  components: {
    flatPicker
  },
  data() {
    return {
      degreeOptions: [
        "None",
        "Middle school",
        "High school",
        "Vocational Certificate",
        "Bachelor's",
        "Master's",
        "Doctorate",
      ],
      educationProfile: [educationObj()],
    };
  },
  methods: {
    addEducationObj() {
      console.log(this.educationProfile);
      if (this.educationProfile.some((profile) => profile.degree === "None"))
        return;
      this.educationProfile.push(educationObj());
    },
    async submit() {
      try {
        console.log(this.educationProfile);
        await candidate.postEducationProfile(this.educationProfile) 
      } catch (error) {
        console.error(error) 
      }
    },
  },
};
</script>

<style>
</style>