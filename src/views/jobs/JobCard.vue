<template>
  <card class="border-0" hover shadow body-classes="py-5">
    <icon type="warning" class="mb-4">
      <img
        src="@/assets/images/logos/scoot.svg"
        class="img-fluid rounded shadow-lg"
        style="width: 50px"
      />
    </icon>
    <h6 class="text-primary text-uppercase">
      {{ job.jobTitle }}
    </h6>
    <p class="description mt-3"></p>
    <div>
      <badge type="primary" rounded>design</badge>
      <badge type="primary" rounded>system</badge>
      <badge type="primary" rounded>creative</badge>
    </div>
    <base-button tag="a" href="#" type="primary" class="mt-4">
      Learn more
    </base-button>
  </card>
</template>

<script>
export default {
  props: {
    job: Object,
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.job.logo);
  },
};
</script>

<style>
</style>