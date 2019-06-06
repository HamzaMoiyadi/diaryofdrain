/* eslint-disable no-console */
import Vue from 'vue'
import Router from 'vue-router'
import Blogs from './statics/n-blogs.json'


Vue.use(Router)



// Make the Blog Routes object
const blogRoutes = Object.keys(Blogs).map(section => {
    console.log(Blogs[section]['posts']);

    const children = Blogs[section]['posts'].map(child => {
        return {
            path: `/${child['id']}`,
            name: child['id'],
            component: () => import(`@/blogs/${section}/${child['id']}.md`)
        }
    }
    );

    console.log('Children are ', children);

    return {
        path: `/${section}`,
        name: section,
        component: () => import(`./views/Blogs.vue`),
        children: children
    }
})


/* const blogRoutes = Object.keys(Blogs).map(section => {
    

    const children = Blogs[section].map(child => ({
        path: `/${child['id']}`,
        name: child['id'],
        component: () => import(`@/blogs/${section}/${child['id']}.md`)
    }));

    console.log('Children are ', children);

    return {
        path: `/${section}`,
        name: section,
        component: () => import(`./views/Blogs.vue`),
        children
    }
}) */

console.log('All the blog routes are ', blogRoutes);



export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(`./views/Home.vue`)
        },
        ...blogRoutes
    ]
})
