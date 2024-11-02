import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/zh/": [],
    "/": [
        {
            text: "初级-开服入门",
            icon: "ic:round-menu-book",
            collapsible: true,
            prefix: "open-server/",
            children: ["speed","n1","n2", "n3", "common-command.md","n4"],
        },
        {
            text: "中级-插件使用",
            icon: "mingcute:plugin-2-fill",
            collapsible: true,
            prefix: "interview-preparation/",
            children: [

            ],
        },

    ],
})