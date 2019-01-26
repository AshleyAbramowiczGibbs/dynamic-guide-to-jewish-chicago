<template>
  <div class="card p-3">
    <div class="text-center">
      <img class="img-fluid" :src="item.logo" width="100" alt="Card image cap">
      <div class="card-body">
<!--         <h5 class="card-title">{{ item.name | capitalize }} </h5> -->
      <div>
        <span v-for="(group, index) in item.stack" :key="index" :class="`badge badge-${tags[group]}`">{{ group }}</span>
      </div> 
      </div>
<div class="content"> {{ item.content }} </div>
     
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      // list of tags to giving each stack a different color
      tags: {
        Advocacy: "dark",
        Chabad: "danger",
        Israel: "secondary",
        "Jewish Intersectionality": "info",
        "Moishe House": "warning",
        Synagogue: "secondary",
        Singles: "info",
        "Social Justice": "light",
        "Russian Jewish Life": "success",
        "Professional Networking": "black",
        "Mental Health Awareness": "warning",
        Politics: "success",
        Volunteering: "danger",
        "Young Families": "success"
      }
    };
  },
  filters: {
    // this filter will can be used to capitalise words
    capitalize: item => {
      return item.toUpperCase();
    }
  },
  props: {
    // this component expects a prop of type object
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
