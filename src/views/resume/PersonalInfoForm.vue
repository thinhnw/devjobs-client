<template>
  <div>
    <h3>Profile</h3>
    <p><span class="text-danger">*</span> Required fields</p>
    <b-form @submit.prevent="submit">
      <b-row>
        <b-col>
          <b-form-group>
            <label>First Name <span class="text-danger">*</span></label>
            <b-form-input v-model="model.firstName" required />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <label>Last Name <span class="text-danger">*</span></label>
            <b-form-input v-model="model.lastName" required />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
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
            <label>Street Address</label>
            <b-form-input v-model="model.address" />
          </b-form-group>
        </b-col>
      </b-row>
      <h3>Contact Information</h3>
      <b-row>
        <b-col>
          <b-form-group>
            <label>Email Address</label>
            <b-form-input disabled :value="me.email"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <label>Phone Number</label>
            <b-form-input v-model="model.phone"></b-form-input>
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
import { mapActions, mapGetters } from "vuex"
export default {
  data() {
    return {
      model: {
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
    ...mapActions("auth", { fetchMe: "me" }),
    async submit() {
      try {
        // this.$emit("submit");
        console.log(this.model);
        await candidate.postPersonalDetails(this.model);
        await this.fetchMe()
        this.$emit("done");
      } catch (error) {
        this.$emit("fail");
      }
    },
  },
  computed: {
    ...mapGetters("auth", ["me"])
  },
  async mounted() {
    await this.fetchMe()
    Object.keys(this.model).forEach(key => {
      this.model[key] = this.me.candidate[key]
    })
  }
};
</script>

<style>
</style>