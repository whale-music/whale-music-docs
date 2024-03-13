import {type DefaultTheme, defineConfig} from 'vitepress'


export const en_us = defineConfig({
    lang: 'en-US',
    description: 'Documentation for whale music',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/i18/en_us/guide/': {base: '/i18/en_us/guide/', items: sidebarGuide()},
            '/i18/en_us/api/': {base: '/i18/en_us/api/', items: sidebarApi()},
        },

        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present'
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Guide',
            link: '/i18/en_us/guide/quick-start',
            activeMatch: '/i18/en_us/guide/'
        },
        {
            text: 'Config',
            link: '/i18/en_us/config/configuration',
            activeMatch: '/i18/en_us/config/'
        },
        {
            text: 'API',
            link: '/i18/en_us/api/index',
            activeMatch: '/i18/en_us/api/'
        },
    ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Install',
            collapsed: false,
            items: [
                {text: 'Quick start', link: 'quick-start'},
                {text: 'Deploy', link: 'deploy'}
            ]
        },
    ]
}

function sidebarApi(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'API',
            collapsed: false,
            items: [
                { text: 'Webdav', link: 'webdav' },
                { text: 'Subsonic', link: 'subsonic' },
            ]
        },
    ]
}