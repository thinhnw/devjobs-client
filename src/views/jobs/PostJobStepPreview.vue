<template>
  <div>
    <h3>General Info</h3>
    <p><span class="text-danger">*</span> Required fields</p>
    <b-form @submit.prevent="submit">
      <b-row>
        <b-col>
          <b-form-group>
            <label>Job Title<span class="text-danger">*</span></label>
            <b-form-input v-model="model.title" required />
          </b-form-group>
        </b-col>
      
      </b-row>
      <b-row>
        <b-col>
          <b-form-group>
            <label>Can this job be performed remotely, meaning primarily from home? If so we'll add a "Remote" tag to your post</label>
            <b-form-radio v-model="model.isRemote" :value="true" class=" text-left pl-5 mr-0 form-control">Yes</b-form-radio>
            <b-form-radio v-model="model.isRemote" :value="false" class="form-control mt-3 text-left pl-5">No</b-form-radio>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row v-if="!model.isRemote">
        <b-col>
          <b-form-group>
            <label>Country <span class="text-danger">*</span></label>
            <b-form-input v-model="model.country" required />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <label>City <span class="text-danger">*</span></label>
            <b-form-input v-model="model.city" required />
          </b-form-group>
        </b-col>
      </b-row>
    
      <b-row>
        <b-col>
          <b-form-group>
            <label>How many hires? <span class="text-danger">*</span></label>
            <b-form-input v-model="model.hiringNumber" type="number" step="1" min="1"></b-form-input>
          </b-form-group>
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
import candidate from "@/api/candidate";
export default {
  data() {
    return {
      model: {
        title: "",
        country: "",
        city: "",
        isRemote: false,
        hiringNumber: 1
      },
    };
  },
  methods: {
    async submit() {
      try {
        this.$emit("submit");
        console.log(this.formData);
        await candidate.postProfile(formData);
        this.$emit("done");
      } catch (error) {
        this.$emit("fail");
      }
    },
  },
};
</script>

<style>
</style>