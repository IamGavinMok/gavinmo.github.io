export default {
  lang: 'zh-cmn-Hans',
  title: 'ga-title',
  description: 'gavin node-description',
  logo: 'assets/logo.png',
  base: '/',
  // 主题相关配置
  themeConfig: {
    // sidebar: [
    //   {
    //     text: 'Guide',
    //     items: [
    //       { text: 'Introduction', link: '/introduction' },
    //       { text: 'Getting Started', link: '/getting-started' }
    //     ]
    //   }
    // ],
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/travel/mali', logo: 'assets/logo.png' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Evan You'
    }

  },
  // 选择多语言 这里也可以配置 head
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器',
    },
  },
  // 增加 head 标签
  // head: [['link', { rel: 'icon', href: '/images/logo.png' }]],

}