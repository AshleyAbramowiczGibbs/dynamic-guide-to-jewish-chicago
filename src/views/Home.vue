<template>
<div class="home">

    <div>
      <button v-on:click="setSortAttribute('name')" class="btn btn-secondary">Sort by name</button>
      <button v-on:click="setSortAttribute('neighborhood')" class="btn btn-secondary">Sort by Neighborhood</button>
      <button v-on:click="setSortAttribute('category')" class="btn btn-secondary">Sort by category</button>
    </div>
    <h2>Did you know? Chicago is the 5th largest Jewish community in the United States of America. Read all about the amazing Jewish organizations operating in the city of Chicago. Click on the categories to find your community. Find Your Tribe. 

</h2>
<!--     <div v-for="organization in organizations"> -->
 <div class="row">
  <div v-for="organization in orderBy(filterBy(organizations, searchFilter, 'name', 'content'), sortAttribute, sortOrder)" class="col-md-4 mb-2" v-bind:key="organization.id">
          <div class="card">
                        <img class="card-img-top" v-bind:src="organization.image_url" alt="Card image cap">
                                    <div class="card-body">
    <h2>{{ organization.name }}</h2>
    <h3>{{ organization.categories.categoryName }}</h3>
    <h3>{{ organization.tags }}</h3>
    <div>
      <button v-on:click="isHidden = true">Hide the text below</button>
  <button v-on:click="isHidden = !isHidden">Toggle hide and show</button>
  
  <h1 v-if="!isHidden">Hide me on click event!</h1>
    <h3>{{ organization.content }}</h3>
    <h3>{{ organization.website }}</h3>
    <h3>{{ organization.imageUrl }}</h3>
    <h3>{{ organization.facebook }}</h3>
    <h3>{{ organization.email }}</h3>
    <h3>{{ organization.location }}</h3>
    </div>

    </div>
  </div>
</div>
</div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      organizations: [
        {
          name: "JUF",
          content:
            "The American Jewish Council is the leading global Jewish advocacy organization, with unparalleled access to government officials, diplomats, and other world leaders. Through these relationships and international presence, AJC is able to impact opinion and policy on the issues that matter most: combating rising anti-Semitism and extremism, defending Israel’s place in the world, and safeguarding the rights and freedoms of all people.",
          website: "www.website.com",
          imageUrl: "",
          facebook: "",
          email: "",
          location: "",
          categories: {
            categoryName: true
          },
          tags: ["social justice", "singles", "politics"]
        },
        {
          name: "AJC Chicago",
          content: "thjrew lj ads lajsd jsa;d iais;d ",
          website: "www.website.com",
          imageUrl: "",
          facebook: "",
          email: "",
          location: "",
          categories: {
            categoryName: true
          },
          tags: {
            tag: ""
          }
        },
        {
          name: "Mishkan",
          content: "thjrew lj ads lajsd jsa;d iais;d ",
          website: "www.website.com",
          imageUrl: "",
          facebook: "",
          email: "",
          location: "",
          categories: {
            categoryName: true
          },
          tags: {
            tag: ""
          }
        },
        {
          name: "Jewish National Fund",
          content: "thjrew lj ads lajsd jsa;d iais;d ",
          website: "www.website.com",
          imageUrl: "",
          facebook: "",
          email: "",
          location: "",
          categories: {
            categoryName: true
          },
          tags: {
            tag: ""
          }
        }
      ]
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>
