---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Whale Music"
  text: "A music management platform"
  tagline: ""
  actions:
    - theme: brand
      text: Quick Start
      link: /i18/en_us/guide/quick-start.md
    - theme: alt
      text: Github
      link: 'https://github.com/whale-music/whale'
  image:
    src: /logo.webp
    alt: WhaleMusic

features:
  - title: Easy to Use
    icon: <i class="fa-solid fa-rocket"></i>
    details: Simple and fast to use, deployable across platforms without any modifications required.
    
  - title: Music Metadata
    icon: <i class="fa-solid fa-tag"></i>
    details: Manage music, albums, and playlists freely based on tags.
    
  - title: File and Data Separation
    icon: <i class="fa-solid fa-coins"></i>
    details: Music metadata is separated from music files, eliminating concerns about metadata such as lyrics, tags, genres, etc., not being usable.
    
  - title: File Storage
    icon: <i class="fa-solid fa-cloud"></i>
    details: Supports local, Alist, and other file storage services, with future support for services like Minio.
    
  - title: Multiple Protocol Support
    icon: <i class="fa-solid fa-layer-group"></i>
    details: Supports connections from music clients like Webdav, Subsonic, etc.
  - title: More
    icon: <i class="fa-solid fa-paper-plane"></i>
    details: Will support more music protocols and clients in the future, and will continuously improve Whale Music.
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
