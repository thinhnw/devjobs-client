<template>
  <div>
    <h3>Profile</h3>
    <p><span class="text-danger">*</span> Required fields</p>
    <b-form @submit.prevent="submit">
      <b-row>
        <b-col>
          <b-form-group>
            <label>Company Name <span class="text-danger">*</span></label>
            <b-form-input v-model="model.name" required />
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
      </b-row>
      <b-row>
        <b-col>
          <b-form-group>
            <label>Logo</label>
            <b-form-file type="file" v-model="model.logo" required />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group>
            <label>About</label>
            <b-form-textarea v-model="model.about" rows="5" />
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
            >Save</b-button
          >
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import corporate from "@/api/corporate";
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      model: {
        name: "",
        country: "",
        logo: null,
        about: "",
        phone: ""
      },
    };
  },
  methods: {
    ...mapActions("auth", {
      "getMe": "me"
    }),
    async submit() {
      try {
        this.$emit("submit");
        let form = new FormData()
        form.append("logo", this.model.logo)
        form.append("name", this.model.name)
        form.append("country", this.model.country)
        form.append("about", this.model.about)
        form.append("phone", this.model.phone)
        await corporate.editProfile(this.me.corporate.id, form)
        await this.getMe()
        this.$emit("done");
      } catch (error) {
        this.$emit("fail");
      }
    },
  },
  computed: {
    ...mapGetters("auth", ["me"])
  }
};
</script>

<style>
</style>