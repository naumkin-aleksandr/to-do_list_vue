import Vue from "vue";
import VueRouter from "vue-router";
import TasksList from "../views/TasksList.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "TasksList",
        component: TasksList,
    },
    {
        path: "/addTask",
        name: "AddTask",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/AddTask.vue"),
    },

    {
        path: "/unfinishedTasks",
        name: "UnfinishedTasks",
        component: () => import("../views/UnfinishedTasks.vue"),
    },
    {
        path: "/completedTasks",
        name: "CompletedTasks",
        component: () => import("../views/CompletedTasks.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
