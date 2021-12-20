<template>
  <b-card no-body >
    <b-form class="job-search-bar" >
      <b-row no-gutters align-v="center">
        <b-col cols="4" class="col-name">
          <b-input-group>
            <b-input-group-prepend is-text class="input-name-prepend">
              <i class="fa fa-search text-primary"></i>
            </b-input-group-prepend>
            <b-form-input
              class="input-name"
              placeholder="Filter by title, companies, expertise"
            />
          </b-input-group>
        </b-col>
        <b-col class="col-location">
          <b-input-group>
            <b-input-group-prepend is-text class="input-name-prepend">
              <i class="fa fa-map-marker text-primary"></i>
            </b-input-group-prepend>
            <b-form-input
              class="input-location"
              placeholder="Filter by location..."
            />
          </b-input-group>
        </b-col>
        <b-col class="d-flex align-items-center justify-content-between py-2 px-3">
          <b-form-checkbox class="ml-3">
            <b>Full time only</b>
          </b-form-checkbox>
          <b-button variant="primary">
            Search
          </b-button>
        </b-col>
      </b-row>
      
    </b-form>
  </b-card>
  
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.job-search-bar {
  .input-group {
    .input-group-text {
      border: 0;
      border-radius: 0;
    }
  }
  .col-name {
    .input-group {
      border: 0;
      border-radius: 0;
      
      .input-name {
        border: 0;
        border-radius: 0;
        border-right: 1px solid #ddd;
      }
    }
  }
  .col-location {
    .input-group  {
      border: 0;
      .input-location {
        border: 0;
        border-radius: 0;
        border-right: 1px solid #ddd;
      }
    }
  }
}
</style>