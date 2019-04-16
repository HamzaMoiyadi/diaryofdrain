/* eslint-disable */
import Blogs from "@/statics/blogs.json";
import Details from "../Details/Details.vue";

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