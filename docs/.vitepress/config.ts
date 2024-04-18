export default {
  lang: 'zh-cmn-Hans',
  title: 'ga',
  description: 'gavin node',
  logo: 'assets/logo.png',
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
          { text: 'Item A', link: '/item-1', logo: 'assets/logo.png' },
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

}