<template>
  <div class="container-fluid">

    <div>
      <h5 class="intro">Did you know? Chicago is the 5th largest Jewish community in the United States of America

Read all about the amazing Jewish organizations operating in the city of Chicago. Click on the categories to find your community. Find Your Tribe. </h5>

    </div>
    <div class="search-wrapper">
      <!-- the search bar form -->
      <form v-on:submit="getfilteredData">
        <div class="form-row">
          <div class="col-10">
            <input type="text" class="form-control" placeholder="Search for a Jewish Organization" v-model="search" v-on:keyup="getfilteredData">
          </div>
          <div class="col-2">
            <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
          </div>
        </div>
      </form>
      <!-- check boxes -->
      <div id="checkboxes">
        <div v-for="(stack,index) in stacks" :key="index" class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox"  v-model="stack.checked" v-on:change="getfilteredData">
          <label class="form-check-label">
            {{ stack.value }}
          </label>
        </div>
      </div>
    </div>
    <!-- end of checkboxes -->
    <div class="card-columns">
      <!-- iterate data -->
      <item-card v-for="(item, index) in filteredData" :key="index" :item="item"></item-card>
    </div>
  </div>
</template>

<style>
h5.intro {
  padding: 10px;
}

input.form-control {
  width: 100;
}
</style>

<script>
import ItemCard from "./ItemCard";
import data from "../data/data";
export default {
  name: "SearchPage",
  components: {
    "item-card": ItemCard
  },
  computed: {
    selectedFilters: function() {
      let filters = [];
      let checkedFiters = this.stacks.filter(obj => obj.checked);
      checkedFiters.forEach(element => {
        filters.push(element.value);
      });
      return filters;
    }
  },
  data() {
    return {
      filteredData: [],
      search: "",
      stacks: [
        {
          checked: false,
          value: "Advocacy and Activism"
        },
        {
          checked: false,
          value: "Chabad"
        },
        {
          checked: false,
          value: "Israel"
        },
        {
          checked: false,
          value: "Jewish Intersectionality"
        },
        {
          checked: false,
          value: "Moishe House"
        },
        {
          checked: false,
          value: "Synagogue"
        },
        {
          checked: false,
          value: "Singles"
        },
        {
          checked: false,
          value: "Social Justice"
        },
        {
          checked: false,
          value: "Russian Jewish Life"
        },
        {
          checked: false,
          value: "Professional Networking"
        },
        {
          checked: false,
          value: "Mental Health Awareness"
        },
        {
          checked: false,
          value: "Politics"
        },
        {
          checked: false,
          value: "Volunteering"
        },
        {
          checked: false,
          value: "Young Families"
        }
      ]
    };
  },
  methods: {
    getfilteredData: function() {
      this.filteredData = data;
      let filteredDataByfilters = [];
      let filteredDataBySearch = [];
      // first check if filters where selected
      if (this.selectedFilters.length > 0) {
        filteredDataByfilters = this.filteredData.filter(obj =>
          this.selectedFilters.every(val => obj.stack.indexOf(val) >= 0)
        );
        this.filteredData = filteredDataByfilters;
      }
      // then filter according to keyword, for now this only affects the name attribute of each data
      if (this.search !== "") {
        filteredDataBySearch = this.filteredData.filter(obj => obj.name.indexOf(this.search.toLowerCase()) >= 0);
        this.filteredData = filteredDataBySearch;
      }
    }
  },
  mounted() {
    this.getfilteredData();
  }
};
</script>
