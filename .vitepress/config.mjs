import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "李嘉鹏的技术简历",
  description: "7年前端开发工程师 · 专注于 Vue 生态 · 擅长组件封装与开发效率优化",
  base: '/resume.github.io/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '简历', link: '/resume' },
      { text: '专业技能', link: '/skills' },
      { text: '工作经历', link: '/experience' },
      { text: '开源项目', link: '/open-source' },
      { text: '作品集', link: '/portfolio' },
      { text: '联系我', link: '/contact' }
    ],

    sidebar: [
      {
        text: '关于我',
        items: [
          { text: '个人简介', link: '/' },
          { text: '联系方式', link: '/contact' }
        ]
      },
      {
        text: '简历',
        items: [
          { text: '完整简历', link: '/resume' },
          { text: '专业技能', link: '/skills' },
          { text: '工作经历', link: '/experience' }
        ]
      },
      {
        text: '项目',
        items: [
          { text: '开源项目', link: '/open-source' },
          { text: '作品集', link: '/portfolio' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/time202051' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present 李嘉鹏'
    }
  }
})
