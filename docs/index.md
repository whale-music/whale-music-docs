<script setup>
import { inBrowser } from 'vitepress';
if (inBrowser) {
    try {
        const lang = navigator.language.toLowerCase().replace("-", "_");
        const flag = lang === "zh_cn" || lang === "en_us";
        if (flag) {
            window.location.href = `/i18/${lang}/`;
        } else {
            window.location.href = `/i18/en_us`;
        }
    } catch (e) {
        console.error(e);
        window.location.href = `/i18/en_us`;
    }
}
</script>
