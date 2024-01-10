module.exports = {
  // 和仓库名相同
  base: '/blog/',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  title: '我的博客',
  description: 'XXX',
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'coding祥 的博客',
        items: [
          { text: '掘金', link: 'https://juejin.cn/user/1341823822338574' },
          { text: 'Github', link: 'https://github.com/wjx7794' },
        ],
      },
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 是否折叠
        children: [{ title: '博客简介', path: '/' }],
      },
      {
        title: '基础篇',
        path: '/handbook/1',
        collapsable: true,
        children: [
          { title: '第一篇', path: '/handbook/1' },
          { title: '第二篇', path: '/handbook/2' },
        ],
      },
    ],
  },
};
