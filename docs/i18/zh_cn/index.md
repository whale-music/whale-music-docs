---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Whale Music"
  text: "一个音乐管理平台"
  tagline: ""
  actions:
    - theme: brand
      text: 快速开始
      link: /i18/zh_cn/guide/quick-start.md
    - theme: alt
      text: Github
      link: 'https://github.com/whale-music/whale'
  image:
    src: /logo.webp
    alt: WhaleMusic

features:
  - title: 使用简单
    icon: <i class="fa-solid fa-rocket"></i>
    details: 使用简单快捷，部署跨平台，无需任何修改即可部署并启动。
  - title: 音乐元数据
    icon: <i class="fa-solid fa-tag"></i>
    details: 根据tag可以随意对音乐，专辑，歌单进行管理
  - title: 文件与数据分离
    icon: <i class="fa-solid fa-coins"></i>
    details: 音乐元数据与音乐文件分离，不用担心音乐文件无法使用歌词，tag，流派等元数据
  - title: 文件存储
    icon: <i class="fa-solid fa-cloud"></i>
    details: 支持本地，Alist等文件存储服务，后续会支持Minio等服务
  - title: 支持多个协议
    icon: <i class="fa-solid fa-layer-group"></i>
    details: 支持Webdav，Subsonic，等音乐客户端的连接
  - title: 更多
    icon: <i class="fa-solid fa-paper-plane"></i>
    details: 后续将支持更多音乐协议，客户端，并将不断完善whale-music
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #5352ED 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #5352ED 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
