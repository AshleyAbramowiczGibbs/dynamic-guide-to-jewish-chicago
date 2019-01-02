<template>
<div class="home">
    <h1>All organizations</h1>
    <div v-for="organization in organizations">
    <h2>{{ organization.name }}</h2>
    <h3>{{ organization.content }}</h3>
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      organizations: [
        {
          name: "JUF",
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
          name: "JUF",
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
          name: "JUF",
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
          name: "JUF",
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
