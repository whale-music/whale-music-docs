import {defineConfig} from 'vitepress'
import {search as zhSearch} from "./i18/zh_cn";

export const shared = defineConfig({
    // 修改次配置时，需要同时修改docs/index.md
    base: '/',
    title: 'Whale Music Docs',
    description: "whale music docs",
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    head: [
        ['link', {rel: 'stylesheet', href: "https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.2/css/all.min.css"}],
        ['link', {rel: 'icon', type: 'image/svg+xml', href: '/logo.svg'}],
        ['link', {rel: 'icon', type: 'image/png', href: '/logo.svg'}],
        ['meta', {name: 'theme-color', content: '#5f67ee'}],
        ['meta', {property: 'og:type', content: 'website'}],
        ['meta', {property: 'og:locale', content: 'en'}],
        ['meta', {property: 'og:title', content: 'whale music docs'}],
        ['meta', {property: 'og:site_name', content: 'Whale Music Docs'}],
    ],

    themeConfig: {
        logo: {src: '/logo.svg', width: 24, height: 24},
        outline: [2, 3],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/whale-music/whale'}
        ],

        search: {
            provider: 'local',
            options: {
                locales: {...zhSearch}
            }
        },
    },
    ignoreDeadLinks: [
        // 忽略所有 localhost 链接
        /^https?:\/\/localhost/,
    ]
})
