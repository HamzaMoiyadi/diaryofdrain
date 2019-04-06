<template>
  <div>
    <div class="navbar">
      <!-- logo  -->
      <div class="logo">DIARY.OF.DRAIN</div>
      <div class="links">
        <template v-for="(route, index) in categories">
          <span
            class="categories"
            :key="index"
            @mouseover="showDetails(route.slug, index)"
            @mouseleave="hideDetails(route.slug)"
          >{{route.title}}</span>
        </template>
        <!--Medium Link-->
        <a href="#">Check me out on Medium</a>
        <!--<router-link to="/first">First</router-link>|
      <router-link to="/second">Second</router-link>|
      <router-link to="/third">Third</router-link>|
      <router-link to="/fourth">Fourth</router-link>|
        <router-link to="/fifth">Fifth</router-link>-->
      </div>
    </div>

    <Details
      v-if="hovered"
      :title="getDetails().title"
      :description="getDetails().description"
      :links="getDetails().links"
    />
  </div>
</template>


<script>
/* eslint-disable */
import Blogs from "@/statics/blogs.json";
import Details from "./Details.vue";

import BlogInfo from "@/statics/n-blogs.json";

let categories = [];

Object.keys(BlogInfo).forEach(section => {
  categories.push({
    slug: section,
    title: BlogInfo[section]["name"],
    description: BlogInfo[section]["description"],
    links: BlogInfo[section]["posts"]
  });

  // console.log(section)
});

let sections = [];
let children = [];
let hovered = false;
let shownSection = {};

// Make the Blog Routes object
Object.keys(Blogs).forEach(section => {
  sections.push(section);
  Blogs[section].forEach(child => {
    children.push({
      name: child["id"],
      path: `/${child["id"]}`
    });
  });
});
console.log(categories);

// console.log("Sections are :", sections);
// console.log("Children are :", children);

// console.log(categories)

function showDetails(slug, index) {
  console.log("slug hovered over is ", slug);

  this.hovered = true;
  console.log("hovered status = ", this.hovered);
  this.shownSection = categories[index];
}

function hideDetails(slug) {
  console.log("slug hovered out is ", slug);
  this.hovered = false;
}

function getDetails() {
  if (this.hovered) {
    return this.shownSection;
  }
}

export default {
  name: "Navbar",
  data() {
    return {
      children: children,
      categories: categories,
      hovered: hovered
    };
  },
  components: {
    Details
  },
  methods: {
    showDetails: showDetails,
    hideDetails: hideDetails,
    getDetails: getDetails
  }
};
</script>



<style lang="stylus" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
  box-shadow: 0px 5px 10px -4px rgba(0, 0, 0, 0.1);

  .logo {
    font-family: 'Arvo', sans-serif;
    letter-spacing: 2px;
  }

  .categories {
    font-variant: all-small-caps;
    letter-spacing: 2px;
    padding: 0em 0.5em;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background-color: #dedede;
    }
  }
}
</style>
