const sidebar = {
    'route-one': [
      {
        title: '目录一',
        collapsable: false,
        children: [
          '',
          '/route-one/readme1',
          '/route-one/readme2',
        ]
      },
      {
        title: '目录二',
        collapsable: false,
        children: [
          '/route-one/readme3',
          '/route-one/readme4',
        ]
      }
    ],
    'route-two': [
      {
        title: '目录一',
        collapsable: false,
        children: [
          '',
          '/route-two/readme1',
          '/route-two/readme2',
        ]
      }
    ]
  }

module.exports = {
    title: 'Taylor Guo\'s blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      logo: '/logo.JPG',
      nav:[ // 导航栏配置
        {text: '导航一', link: '/route-one/' },
        {text: '导航二', link: '/route-two/'},
        {text: '外链', link: 'https://baidu.com'}      
      ],
      sidebarDepth: 2, // 侧边栏显示2级
      sidebar: {  // 侧边栏配置
        collapsable: false,
        '/route-one/': sidebar['route-one'],
        '/route-two/': sidebar['route-two']
      }
    },
    
  };