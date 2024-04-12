import { defineConfig, type DefaultTheme } from 'vitepress'


export const zh_cn = defineConfig({
    lang: 'zh-CN',
    description: 'Whale Music 文档',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/i18/zh_cn/guide/': { base: '/i18/zh_cn/guide/', items: sidebarGuide() },
            '/i18/zh_cn/api/': { base: '/i18/zh_cn/api/', items: sidebarApi() },
        },

        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        footer: {
            message: '基于 MIT 许可发布',
            copyright: `版权所有 © 2022-${new Date().getFullYear()}`
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            level: 'deep',
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {}
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: '指南',
            link: '/i18/zh_cn/guide/quick-start',
            activeMatch: '/i18/zh_cn/guide/'
        },
        {
            text: '配置',
            link: '/i18/zh_cn/config/configuration',
            activeMatch: '/i18/zh_cn/config/'
        },
        {
            text: 'API',
            link: '/i18/zh_cn/api/index',
            activeMatch: '/i18/zh_cn/api/'
        },
    ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '安装',
            collapsed: false,
            items: [
                { text: '快速开始(jar)', link: 'quick-start' },
                { text: '部署', link: 'deploy' },
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

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
    zh: {
        placeholder: '搜索文档',
        translations: {
            button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
            },
            modal: {
                searchBox: {
                    resetButtonTitle: '清除查询条件',
                    resetButtonAriaLabel: '清除查询条件',
                    cancelButtonText: '取消',
                    cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                    recentSearchesTitle: '搜索历史',
                    noRecentSearchesText: '没有搜索历史',
                    saveRecentSearchButtonTitle: '保存至搜索历史',
                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                    favoriteSearchesTitle: '收藏',
                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                    titleText: '无法获取结果',
                    helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                    searchByText: '搜索提供者'
                },
                noResultsScreen: {
                    noResultsText: '无法找到相关结果',
                    suggestedQueryText: '你可以尝试查询',
                    reportMissingResultsText: '你认为该查询应该有结果？',
                    reportMissingResultsLinkText: '点击反馈'
                }
            }
        }
    }
}
