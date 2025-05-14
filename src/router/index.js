import RobotBuilder from "@/build/RobotBuilder.vue";
import HomePage from "@/home/HomePage.vue";
import PartInfo from "@/parts/PartInfo.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import QRCode from "@/build/QRCode.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes:[{
        path:'/',
        name:'ГЛАВНАЯ',
        component:HomePage,
    },{
        path:'/qrcode',
        name:'QR CODE',
        component:QRCode
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