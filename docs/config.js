
window.$docsify = {
  name: 'Amazing document',//文档标题,侧边栏显示
  // repo: 'Amazing document',//右上角的github图标
  loadSidebar: true,//定制自己的侧边栏
  subMaxLevel: 2,//侧边栏的目录
  loadNavbar: true,//导航栏
  // 嵌套侧边栏
  alias: {
    '/.*/_sidebar.md': '/_sidebar.md'
  },
  coverpage: true,//开启封面渲染的功能,
  maxLevel: 4,//支持4级渲染的标题层级
  auto2top: true,//切换页面是否跳转到顶部
  routerMode: 'history', // default: 'hash'
  topMargin: 90, //页面设置锚点跳转到对应位置时,让其与页面顶部有一定的距离,默认值为0
  // 字数统计的配置
  count: {
    countable: true,
    fontsize: '0.9em',
    color: 'rgb(90,90,90)',
    language: 'chinese'
  },
  // 全局搜索的关键字
  search: {
    paths: 'auto',
    placeholder: '请输入要搜索的关键字',//文本框输入的提示信息
    noData: '没有结果',//没有搜索到对应数据的提示信息
    depth: 6,
  },
  
}
