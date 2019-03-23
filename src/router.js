import Vue from 'vue'
import Router from 'vue-router'
import Blogs from './statics/blogs.json'


Vue.use(Router)



// Make the Blog Routes object
const blogRoutes = Object.keys(Blogs).map(section => {
    const children = Blogs[section].map(child => ({
        path: `/${child['id']}`,
        name: child['id'],
        component: () => import(`@/blogs/${section}/${child['id']}.md`)
    }))

    return {
        path: `/${section}`,
        name: section,
        component: () => import(`./views/Blogs.vue`),
        children
    }
})


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
