<template>
  <div>
    <h3>Profile</h3>
    <p><span class="text-danger">*</span> Required fields</p>
    <b-form @submit.prevent="submit">
      <b-row>
        <b-col>
          <b-form-group>
            <label>First Name <span class="text-danger">*</span></label>
            <b-form-input v-model="formData.firstName" required />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <label>Last Name <span class="text-danger">*</span></label>
            <b-form-input v-model="formData.lastName" required />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group>
            <label>Country <span class="text-danger">*</span></label>
            <b-form-input v-model="formData.country" required />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <label>City <span class="text-danger">*</span></label>
            <b-form-input v-model="formData.city" required />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group>
            <label>Street Address</label>
            <b-form-input v-model="formData.address" />
          </b-form-group>
        </b-col>
      </b-row>
      <h3>Contact Information</h3>
      <b-row>
        <b-col>
          <b-form-group>
            <label>Email Address</label>
            <b-form-input disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <label>Phone Number</label>
            <b-form-input v-model="formData.phone"></b-form-input>
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
      formData: {
        firstName: "",
        lastName: "",
        country: "",
        city: "",
        address: "",
        phone: "",
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