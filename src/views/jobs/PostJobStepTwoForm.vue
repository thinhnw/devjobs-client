<template>
  <div>
    <h3>Job Details</h3>
    <p><span class="text-danger">*</span> Required fields</p>
    <b-form @submit.prevent="submit">
      <b-row>
        <b-col>
          <b-form-group>
            <label>Job type <span class="text-danger">*</span></label>
            <b-form-select :options="jobTypeOptions" v-model="model.type"></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <h5>Salary</h5> 
      <b-row>
        <b-col>
          <b-form-group>
            <label>Minimum</label>
            <b-input-group>
              <b-form-input v-model="model.salaryMin" placeholder="Example: 500,000" type="number" step="1000"></b-form-input>
              <template #append>
                <b-input-group-text>VND</b-input-group-text>
              </template>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <label>Maximum</label>
            <b-input-group>
              <b-form-input v-model="model.salaryMax" placeholder="Example: 500,000" step="1000" type="number"></b-form-input>
              <template #append>
                <b-input-group-text>VND</b-input-group-text>
              </template>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <label>Rate</label>
            <b-form-select :options="salaryRateOptions" v-model="model.salaryRate"></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <h5>Job Descriptions <span class="text-danger">*</span></h5>
      <b-row>
        <b-col>
          <label>Describe the responsibilities of this job, required work experience, skills, or education.</label>
          <ckeditor :editor="editor" v-model="model.description" :config="editorConfig" ></ckeditor>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col class="text-center">
          <b-button type="submit" variant="primary" class="px-5 py-3"
            >Next</b-button
          >
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  data() {
    return {
      jobTypeOptions: [ { value: "full_time", text: "Full-time" }, { value: "part_time", text: "Part-time"}, { value: "contract", text: "Contract" }],
      salaryRateOptions: [ { value: "per_hour", text: "per hour" }, { value: "per_week", text: "per week"}, { value: "per_month", text: "per month" }, { value: "per_year", text: "per year" }],
      model: {
        type: "full_time",
        salaryMin: "",
        salaryMax: "",
        salaryRate: "per_month",
        description: ""
      },

      editor: ClassicEditor,
      editorConfig: { height: 800 }
    };
  },
  methods: {
    submit() {
      this.$emit("next", this.model);
    },
  },
};
</script>

<style>
</style>