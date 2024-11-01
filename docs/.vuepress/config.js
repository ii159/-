import {defineUserConfig} from 'vuepress/cli'
import {hopeTheme} from "vuepress-theme-hope";
import {webpackBundler} from '@vuepress/bundler-webpack'
import sidebar from './sidebar.js'
import { getDirname, path } from 'vuepress/utils'
const __dirname = getDirname(import.meta.url)
const pluginOrTheme = {
    clientConfigFile: path.resolve(__dirname, './client.js'),
}

export default defineUserConfig({
    base: '/blog/',
    lang: 'zh-CN',

    title: '橘子文档',

    theme: hopeTheme({

        logo: '/assets/a2.jpg',
        favicon: '/assets/a2.jpg',
        colorModeSwitch: true,
        iconAssets: "iconify",
        repo: "https://github.com/ii159/blog",
        repoLabel: "GitHub",
        repoDisplay: true,
        breadcrumb: false,

        author: {
            name: 'linxi',
        },
        pageInfo: ["Author", "Category", "Tag", "Original", "Word", "ReadingTime"],


        navbar: [// NavbarLink
            {
                text: '首页',
                icon: 'vaadin:home',
                link: '/',
            },
            // NavbarGroup
            {
                text: '插件使用',
                icon: 'mingcute:plugin-2-fill',
                prefix: '/group/',
                children: ['foo.md', 'bar.md'],
            },
            // 字符串 - 页面文件路径
            {
                text: '开服教程',
                icon: 'prime:book',
                prefix: '/group/',
                children: ['foo.md', 'bar.md'],
            },
        ],

        sidebar,
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
