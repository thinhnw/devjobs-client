<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h3>Skills</h3>
    </div>
    <p class="mt-4"><b class="ml-3">Recommendation:</b> include 3-5 of your top skills to help you stand out</p>
    <p class="mt-4"><span class="text-danger">*</span> Required fields</p>
    <b-form @submit.prevent="addSkills">
      <b-row>
        <b-col cols="8">
          <b-form-group>
            <label>Add a new skill <span class="text-danger">*</span></label>
            <b-input-group class="mt-3">
              <b-form-input v-model="skill.name" required></b-form-input>
              <b-input-group-append>
                <b-button variant="secondary" type="submit">Add</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>   
        </b-col>
      </b-row>
    </b-form>
    <b-form @submit.prevent="submit" class="mt-4">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="py-3"
      >
        <b-row>
          <b-col cols="8">
            <div class="border-bottom px-1 d-flex justify-content-between align-items-center">
              <div>
                <b-form-input v-if="skill.isDirty" v-model="skill.name" class="border-0">
                </b-form-input>
                <span v-else>
                  {{ skill.name }}
                </span>

              </div>
              <div>
                <span role="button" class="material-icons md-18 text-primary pointer" v-if="skill.isDirty" @click="doneEditing(skill)">done</span>
                <span role="button" class="material-icons md-18 text-primary pointer" v-else @click="edit(skill)">edit</span>
                <span role="button" class="material-icons md-18 text-primary pointer" @click="remove(index)">delete</span>
              </div>
            </div>
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
export default {
  data() {
    return {
      skill: {name: "", isDirty: false},
      skills: []
    };
  },
  methods: {
    addSkills() {
      this.skills.push(this.skill)
      this.skill = { name: "", isDirty: false }
    },
    edit(skill) {
      console.log(skill)
      skill.isDirty = true
    },
    remove(index) {
      this.skills.splice(index, 1)
    },
    doneEditing(skill) {
      skill.isDirty = false
    },
    async submit() {
      try {
        console.log(this.skills);
        await candidate.postSkills(this.skills) 
      } catch (error) {
        console.error(error) 
      }
    },
  },
};
</script>

<style>
</style>