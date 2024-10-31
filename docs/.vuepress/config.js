import {defineUserConfig} from 'vuepress/cli'
import {hopeTheme} from "vuepress-theme-hope";
import {webpackBundler} from '@vuepress/bundler-webpack'

export default defineUserConfig({
    base: '/blog/',
    lang: 'zh-CN',

    title: '橘子的教程网',

    description: 'My first VuePress Site',

    theme: hopeTheme({
        logo: '/assets/橘子.jpg',
        colorModeSwitch: true,
        iconAssets: "iconify",
        repo: "vuepress-theme-hope/vuepress-theme-hope",
        repoLabel: "GitHub",
        repoDisplay: true,
        navbar: [// NavbarLink
            {
                text: '首页',
                icon: 'vaadin:home',
                link: '/',
            },
            // NavbarGroup
            {
                text: 'Group',
                icon: '',
                prefix: '/group/',
                children: ['foo.md', 'bar.md'],
            },
            // 字符串 - 页面文件路径
            '/bar/README.md',
        ],
        plugins: {
            search: {
                isSearchable: (page) => page.path !== "/",
                maxSuggestions: 10,
            },
            components: {
                // 你想使用的组件
                components: [
                    "Share",
                ],
            },

        },

    }),

    bundler: webpackBundler(),
})
