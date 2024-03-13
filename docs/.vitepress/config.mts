import {defineConfig} from 'vitepress'
import {en_us} from './i18/en_us'
import {zh_cn} from './i18/zh_cn'
import {shared} from './shared'
// https://vitepress.dev/reference/site-config
export default defineConfig({
    ...shared,
    locales: {
        'i18/en_us': {
            label: 'English',
            ...en_us
        },
        'i18/zh_cn': {
            label: '简体中文',
            ...zh_cn
        }
    }
})
