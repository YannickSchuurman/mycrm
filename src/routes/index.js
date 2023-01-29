import {
    createWebHistory,
    createRouter
} from "vue-router";

import Dashboard from "../components/Dashboard.vue";
import Register from "../views/Register.vue";
import ClientOverview from "../components/clients/ClientOverview.vue"

const history = createWebHistory();
const routes = [
    {
        path: "/",
        component: Dashboard
    },
    {
        path: "/klant",
        component: ClientOverview
    },
    {
        path: "/register",
        component: Register
    }
];
const router = createRouter({
    history,
    routes
});
export default router;