import { createMemoryHistory, createRouter } from "vue-router";
import loginScreen from "../components/loginScreen.vue";
import registerScreen from "../components/registerScreen.vue";
const routes = [
    {
        path:"/login",
        component:loginScreen
    },
    {
        path:"/register",
        component:registerScreen
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
export default router;