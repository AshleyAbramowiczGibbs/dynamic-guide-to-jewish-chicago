<!-- experimenting on this page -->

<template>
  <div class="about">
<div id="app">
  <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search For A Jewish Organization"/>
  </div>
  <div class="wrapper">
    <div class="card" v-for="organization in filteredList">
      <a v-bind:href="organization.link" target="_blank">
        <img v-bind:src="organization.img"/>
      </a>
    </div>
  </div>
</div>
  </div>
</template>

<style>
input {
  padding: 4px 12px;
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: 0.15s all ease-in-out;
  background: white;
  width: 100%;
  &:focus {
    outline: none;
    transform: scale(1.05);
    & + label {
      font-size: 10px;
      transform: translateY(-24px) translateX(-12px);
    }
  }
  &::-webkit-input-placeholder {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 100;
  }
}

.wrapper {
  display: flex;
  max-width: 444px;
  flex-wrap: wrap;
  padding-top: 12px;
}

.card {
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  max-width: 124px;
  margin: 12px;
  transition: 0.15s all ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  a {
    text-decoration: none;
    padding: 12px;
    color: #03a9f4;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 100px;
    }
    small {
      font-size: 10px;
      padding: 4px;
    }
  }
}

.hotpink {
  background: hotpink;
}

.green {
  background: green;
}

.box {
  width: 100px;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>

<script>
export default {
  data: function() {
    return {
      search: "",
      organizationList: [
        {
          title: "AJC",
          contetnt:
            "The American Jewish Council is the leading global Jewish advocacy organization, with unparalleled access to government officials, diplomats, and other world leaders. Through these relationships and international presence, AJC is able to impact opinion and policy on the issues that matter most: combating rising anti-Semitism and extremism, defending Israel’s place in the world, and safeguarding the rights and freedoms of all people.",
          link: "https:website.com",
          img: "https://chitribe.org/wp-content/uploads/2018/06/DIWaZ6_-_400x400-150x150.jpg",
          facebookPage: "",
          email: "",
          location: "The loop",
          categories: {
            categoryName: "Activism and Advocacy"
          },
          tags: ["social justice", "singles", "politics"]
        },
        {
          title: "Avodah",
          content: "We love Avodah, community, love",
          link: "https:website.com",
          img: "https://chitribe.org/wp-content/uploads/2018/06/avodah_2017_logo_209-300x170.png",
          facebookPage: "",
          email: "",
          location: "The loop",
          categories: {
            categoryName: "Activism and Advocacy"
          },
          tags: ["social justice", "singles", "politics"]
        },
        {
          title: "Home Sweet Home",
          content: "We love Avodah, community, love",
          link: "https:website.com",
          img: "http://sweet-home.org/wp-content/uploads/2018/03/HSH-Logo.png",
          facebookPage: "",
          email: "",
          location: "The loop",
          categories: {
            categoryName: "Activism and Advocacy"
          },
          tags: ["social justice", "singles", "politics"]
        },
        {
          title: "American Sephardi Federation",
          link: "https://vuejs.org/",
          img: "https://chitribe.org/wp-content/uploads/2018/09/Screen-Shot-2018-09-23-at-5.37.14-PM.png",
          facebookPage: "",
          email: "",
          location: "The loop",
          categories: {
            categoryName: "Community"
          },
          tags: ["social justice", "singles", "politics"]
        },
        {
          title: "OneTable",
          link: "https://vuejs.org/",
          img: "https://chitribe.org/wp-content/uploads/2018/06/OneTable-300x130.png",
          facebookPage: "",
          email: "",
          location: "The loop",
          categories: {
            categoryName: "Community"
          },
          tags: ["social justice", "singles", "politics"]
        }
      ],
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  methods: {},
  computed: {
    filteredList() {
      return this.organizationList.filter(organization => {
        return organization.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>
