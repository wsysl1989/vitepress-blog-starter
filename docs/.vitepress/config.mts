import { fileURLToPath } from 'node:url'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  base: '/',
  description: '我的个人笔记与博客',
  markdown: {
    headers: {
      level:,
    },
  },
  themeConfig: {
    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2026',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sfxcode/vitepress-blog-starter' },
    ],
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig(),
    },
    blog: {
      title: '我的笔记',
      description: '记录日常学习与思考',
    },

  },
  title: '我的笔记空间',
  vite: {
    plugins: [
      Unocss({
        configFile: fileURLToPath(new URL('../uno.config.ts', import.meta.url)),
      }),
    ],
  },
})

function nav() {
  return [
    { text: '指南', link: '/guide/', activeMatch: '/guide/' },
    { text: '配置', link: '/config/', activeMatch: '/config/' },
    { text: '博客笔记', link: '/blog/', activeMatch: '/blog/' },
    {
      text: '参考文档',
      items: [
        {
          text: 'Vitepress',
          link: 'https://vitepress.vuejs.org',
        },
        {
          text: 'UnoCSS',
          link: 'https://uno.antfu.me',
        },
      ],
    },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/sfxcode/vitepress-blog-starter/blob/main/CHANGELOG.md',
        },
      ],
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is this?', link: '/guide/' },
      ],
    },
    {
      text: 'Features',
      collapsible: true,
      items: [
        { text: 'UnoCSS', link: '/guide/features/unocss' },
      ],
    },
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/' },
        { text: 'UnoCSS', link: '/config/unocss' },
      ],
    },
  ]
}
