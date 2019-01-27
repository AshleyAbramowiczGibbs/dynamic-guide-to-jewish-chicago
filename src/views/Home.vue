<!-- experimenting on this page -->

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

        <input type="text" v-model="search" placeholder="search organizations">
 <div class="row">
  <div v-for="organization in filteredOrganizations"> <!-- orderBy(filterBy(organizations, searchFilter, 'name', 'content'), sortAttribute, sortOrder)" class="col-md-4 mb-2" v-bind:key="organization.id"> -->

          <div class="card">
                        <img class="card-img-top" v-bind:src="organization.image_url" alt="Card image cap">
                                    <div class="card-body">
    <h2>{{ organization.name }}</h2>
    <h3>{{ organization.categories.categoryName }}</h3>
    <h3>{{ organization.tags }}</h3>
    <div>
  <button v-on:click='visible = !visible'>Toggle hide and show</button>
  
  <h1 v-if="visible()">
   {{ organization.content }}
   {{ organization.website }}
   {{ organization.imageUrl }}
   {{ organization.facebook }}
   {{ organization.email }}
   {{ organization.location }}
  </h1>
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
      ],
      currentOrganization: "",
      sortAttribute: "name",
      sortOrder: 1,
      search: ""
    };
  },
  created: function() {},
  methods: {
    visible: function() {
      return false;
    },
    setCurrentRecipe: function(inputRecipe) {
      this.currentRecipe = inputRecipe;
    },
    setSortAttribute: function(inputAttribute) {
      if (this.sortOrder === 1) {
        this.sortOrder = -1;
      } else {
        this.sortOrder = 1;
      }
      this.sortAttribute = inputAttribute;
    }
  },
  computed: {
    filteredOrganizations: function() {
      return this.organizations.filter(organization => {
        return organization.content.match(this.search);
      });
    }
  }
};
</script>
