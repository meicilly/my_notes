module.exports = {
    title: 'meicilly的学习笔记',
    description: 'meicilly的学习笔记',
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
      nav: [
          {text: "主页",link: "/"},
        {text:"大数据",items: [
                { text: 'hadoop', link: '/hadoop/' },
                { text: 'scala', link: '/scala/' },
                { text: 'spark', link: '/spark/' },
            ]},
        { text: 'java后端', link: '/intro/' },
          {text: '前端部分',link: '/frontend/index/'}
      ],
      sidebar:{
          "/hadoop/":[
              {
                  title: 'hadoop的学习笔记',   // 必要的
                  path: '/hadoop/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                  collapsable: true, // 可选的, 默认值是 true,
                  sidebarDepth: 3,    // 可选的, 默认值是 1
                  children: [
                    {title:'1.1 HDFS的学习',path:"/hadoop/hdfs"}
                  ]
              }
          ],
          "/scala/":[
              {
                  title: 'scala的学习笔记',   // 必要的
                  path: '/scala/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                  collapsable: true, // 可选的, 默认值是 true,
                  sidebarDepth: 2,    // 可选的, 默认值是 1
                  children: [
                          {title:'1.1 scala的基础学习',path:"/scala/scala基础"},
                          {title:'1.2 scala方法与函数',path:"/scala/scala方法与函数"},
                          {title:'1.3 scala字符串', path: "/scala/scala字符串"},
                          {title:'1.4 scala集合', path: "/scala/scala集合"}
                  ]
              }
          ],
          "/spark/":[
              {
                  title: 'spark的学习笔记',   // 必要的
                  path: '/spark/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                  collapsable: false, // 可选的, 默认值是 true,
                  sidebarDepth: 2,    // 可选的, 默认值是 1
                  children: [
                      {title:'1.1 spark的运行架构',path:"/spark/spark的运行架构"},
                      {title:'1.2 RDD核心编程',path:"/spark/Spark核心编程"}
                  ]
              }
          ]
      },
      //搜索框大小
        searchMaxSuggestions: 10
    },
    //显示行号
    markdown: {
        lineNumbers: true
    }
  }