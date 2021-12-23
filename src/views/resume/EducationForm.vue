<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h3 @click="addEducationObj">Education</h3>
      <icon
        class="btn"
        name="fa fa-plus"
        type="primary"
        @click="addEducationObj"
      >
      </icon>
    </div>
    <p><span class="text-danger">*</span> Required fields</p>
    <b-form>
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
              <label>School <span class="text-danger">*</span></label>
              <b-form-input v-model="education.school" required />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group>
              <label>Field of Study <span class="text-danger">*</span></label>
              <b-form-input v-model="education.fieldOfStudy" required />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row v-if="education.degree !== 'None'">
          <b-col>
            <b-form-group>
              <label>Country <span class="text-danger">*</span></label>
              <b-form-input v-model="education.country" required />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group>
              <label>City <span class="text-danger">*</span></label>
              <b-form-input v-model="education.city" required />
            </b-form-group>
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
const educationObj = () => {
  return {
    degree: "None",
    fieldOfStudy: "",
    school: "",
    city: "",
    country: "",
    fromTime: "",
    toTime: "",
  };
};
export default {
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
      console.log(this.educationProfile);
    },
  },
};
</script>

<style>
</style>