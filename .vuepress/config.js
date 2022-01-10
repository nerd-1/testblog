module.exports = {
  // 标题
  title: "小默同学的个人博客",   
  description: '社会只有看到辉煌的成就，才能认可你的天才。',  // 描述
  // 静态文件存放的文件夹
  dest: 'public',  
  // 给头文件添加标签
  head: [    
    ['link', {rel:'stylesheet', href:'/css/katex.min.css'}],
    ['link', {rel:'stylesheet', href:'/css/texmath.css'}],
    ['link', {rel:'stylesheet', href:'/css/custom.css'}],
    ['script', {defer: 'defer', src: '/js/markdown-it.js'}],
    ['script', {defer: 'defer', src: '/js/texmath.js'}],
    ['script', {defer: 'defer', src: '/js/katex.min.js'}],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco', // 主题，怎么配置就不知道了
  themeConfig: {
    // 深度
    sidebarDepth: 2,
    // 评论功能valine
    valineConfig:{
      appId: 'jw1bU1OVro2Y1DakAVG7e5AH-gzGzoHsz',
      appKey: 'K6OKmDc99qRHpAtDuDfGiuqP'
    },
    // 导航栏
    nav: [       
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'Docs', 
        icon: 'reco-message',
        items: [
          // { text: 'vuepress-reco', link: '/docs/theme-reco/' },
          { text: '组成原理', link: '/docs/zuchengyuanli/' }
        ]
      },
      { text: 'Contact', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/nerd-1', icon: 'reco-github' },
          { text: '博客园', link: 'https://www.cnblogs.com/nerd-/', icon: 'reco-bokeyuan' },
          { text: '码云', link: 'https://gitee.com/nerd', icon: 'reco-mayun' }
        ]
      }
    ],
    sidebar: {
      // 写文件名而不是标题名
      // 可以数字开头但是不能是中文
      // '/docs/theme-reco/': [
      //   '',   // README.md
      //   'theme',  // 文件名，省略.md
      //   'plugin',
      //   'api'
      // ],
      '/docs/zuchengyuanli/':[
        '',
      ]
    },  
    // sidebar: [
    //   {
    //     title: 'theme-reco',
    //     path: '/docs/theme-reco/',
    //     siderbarDepth: 1,
    //     children: []
    //   },
    //   {
    //     title: '组成原理',
    //     path: '/docs/zuchengyuanli/',
    //     siderbarDepth: 1,
    //     children: []
    //   },
    // ],
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: 'vuepress-theme-reco官方文档',
        desc: 'vuepress-theme-reco的官方文档，以便自己查阅',
        email: '1904981400@qq.com',
        link: 'https://vuepress-theme-reco.recoluan.com/views/1.x/valine.html',
        avatar: "https://vuepress-theme-reco.recoluan.com/favicon.ico",
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: '小默同学',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2022'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true,
    anchor: { permalink: false },
    toc: {includeLevel: [1,2,3,4,5,6]},
    extendMarkdown: md => {
      md.use(require('markdown-it-texmath'))
    }
  }
}  

/*
docs里面必须要有个README.md
*/