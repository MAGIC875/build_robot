import RobotBuilder from "@/build/RobotBuilder.vue";
import HomePage from "@/home/HomePage.vue";
import PartInfo from "@/parts/PartInfo.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
    history: createWebHashHistory(),
    routes:[{
        path:'/',
        name:'ГЛАВНАЯ',
        component:HomePage,
    },{
        path:'/build',
        name:'КОНСТРУКТОР',
        component:RobotBuilder,
    },{
        path:'/part-info/partType/:id',
        name:'ОПИСАНИЕ',
        component:PartInfo
    }]
})