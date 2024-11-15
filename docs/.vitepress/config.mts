/*
 * @Author: Mr zhang
 * @Date: 2023-07-27 10:26:09
 * @LastEditTime: 2024-11-09 21:52:24
 * @LastEditors: Mr zhang
 * @Description: 
 * @FilePath: /wui-design-uni/docs/.vitepress/config.mts
 * 记得注释
 */
import { defineConfig } from 'vitepress';
import viteCompression from 'vite-plugin-compression'

import { MarkdownTransform } from './plugins/markdown-transform'


export default defineConfig({
  vite: {
    plugins: [
      MarkdownTransform(),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      })
    ],
    ssr: { noExternal: ['element-plus'] }
  },
  title: `Wui Design Uni`,
  description: '一个参照wui-design打造的uni-app组件库',
  base:process.env.NODE_ENV === 'production' ?'/wui-design-uni/':'/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['script', {}, `
      !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"3J4q4tM6fN0n1fbZ",ck:"3J4q4tM6fN0n1fbZ"});
   `]
  ],
  themeConfig: {
    search: {
      provider:'local'
    },
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '',
    //     apiKey: '',
    //     indexName: '',
    //   },
    // },
    logo: '/wui-design.png',
    lastUpdated: {
      text: '最后更新'
    },
    editLink: {
      pattern: 'https://github.com/zhangyao1990/wui-design-uni/edit/master/docs/:path',
      text: '为此页提供修改建议',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhangyao1990/wui-design-uni' },
    ],
    footer: {
      message: `Released under the MIT License.`,
      copyright: 'Copyright © 2023-present Mr zhang',
    },
    nav: [
      {
        text: '指南', activeMatch: '/guide/', items: [
          {
            text: '介绍',
            link: '/guide/introduction',
          },
          {
            text: '快速上手',
            link: '/guide/quick-use',
          },
          {
            text: '定制主题',
            link: '/guide/custom-theme',
          },
          {
            text: '常见问题',
            link: '/guide/common-problems',
          },
          {
            text: '国际化',
            link: '/guide/locale',
          }, {
            text: '更新日志',
            link: '/guide/changelog',
          }
        ]
      },
      {
        text: '组件', activeMatch: '/component/', items: [
          {
            text: '基础组件',
            link: "/component/button",
          },
          {
            text: "导航组件",
            link: "/component/pagination"
          }, {
            text: "数据输入",
            link: "/component/calendar",
          }, {
            text: "反馈组件",
            link: "/component/action-sheet",
          }, {
            text: "数据展示",
            link: "/component/badge",
          }

        ]
      },
      { text: '🥤一杯咖啡', link: '/reward/reward', activeMatch: '/reward/' },
      {
        text: '周边生态',
        items: [
          { text: 'uniapp文档', link: 'https://zh.uniapp.dcloud.io/component/' },
        ],
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          link: '/guide/introduction',
        },
        {
          text: '快速上手',
          link: '/guide/quick-use',
        },
        {
          text: '定制主题',
          link: '/guide/custom-theme',
        },
        {
          text: '国际化',
          link: '/guide/locale',
        },
        {
          text: '常见问题',
          link: '/guide/common-problems',
        },
        {
          text: '更新日志',
          link: '/guide/changelog',
        }
      ],
      '/reward/': [
        {
          text: '🥤一杯咖啡',
          link: '/reward/reward',
        }
      ],

      '/component/': [
        {
          text: '基础',
          collapsed: false,
          items: [
            {
              link: "/component/button",
              text: "Button 按钮"
            }, {
              link: "/component/icon",
              text: "Icon 图标"
            }, {
              link: "/component/layout",
              text: "Layout 布局"
            }, {
              link: "/component/config-provider",
              text: "ConfigProvider 全局配置"
            }, {
              link: "/component/popup",
              text: "Popup 弹出层"
            }, {
              link: "/component/resize",
              text: "Resize 监听元素尺寸变化"
            }, {
              link: "/component/transition",
              text: "Transition 动画"
            }, {
              link: "/component/fab",
              text: "Fab 悬浮按钮"
            }, {
              link: "/component/text",
              text: "Text 文本"
            }
          ]
        },
        {

          text: "导航",
          collapsed: false,
          items: [{
            link: "/component/pagination",
            text: "Pagination 分页"
          }, {
            link: "/component/popover",
            text: "Popover 气泡"
          }, {
            link: "/component/tabs",
            text: "Tabs 标签页"
          }, {
            link: "/component/segmented",
            text: "Segmented 分段器"
          }, {
            link: "/component/tabbar",
            text: "Tabbar 标签栏"
          }, {
            link: "/component/navbar",
            text: "Navbar 导航栏"
          }, {
            link: "/component/sidebar",
            text: "Sidebar 侧边栏"
          }, {
            link: "/component/backtop",
            text: "Backtop 回到顶部"
          }, {
            link: "/component/index-bar",
            text: "IndexBar 索引栏"
          }]
        }, {

          text: "数据输入",
          collapsed: false,
          items: [{
            link: "/component/calendar",
            text: "Calendar 日历选择器"
          }, {
            link: "/component/calendar-view",
            text: "CalendarView 日历面板"
          }, {
            link: "/component/checkbox",
            text: "Checkbox 复选框"
          }, {
            link: "/component/col-picker",
            text: "ColPicker 多列选择器"
          }, {
            link: "/component/datetime-picker",
            text: "DatetimePicker 时间选择器"
          }, {
            link: "/component/datetime-picker-view",
            text: "DatetimePickerView 时间选择器视图"
          }, {
            link: "/component/form",
            text: "Form 表单"
          }, {
            link: "/component/input",
            text: "Input 输入框"
          }, {
            link: "/component/textarea",
            text: "Textarea 文本域"
          }, {
            link: "/component/input-number",
            text: "InputNumber 计数器"
          }, {
            link: "/component/picker",
            text: "Picker 选择器"
          }, {
            link: "/component/picker-view",
            text: "PickerView 选择器视图"
          }, {
            link: "/component/radio",
            text: "Radio 单选框"
          }, {
            link: "/component/rate",
            text: "Rate 评分"
          }, {
            link: "/component/search",
            text: "Search 搜索框"
          }, {
            link: "/component/select-picker",
            text: "SelectPicker 单复选选择器"
          }, {
            link: "/component/slider",
            text: "Slider 滑块"
          }, {
            link: "/component/switch",
            text: "Switch 开关"
          }, {
            link: "/component/upload",
            text: "Upload 上传"
          }, {
            link: "/component/password-input",
            text: "PasswordInput 密码输入框"
          }]
        }, {
          text: "反馈",
          collapsed: false,
          items: [{
            link: "/component/action-sheet",
            text: "ActionSheet 动作面板"
          }, {
            link: "/component/drop-menu",
            text: "DropMenu 下拉菜单"
          }, {
            link: "/component/floating-panel",
            text: "FloatingPanel 浮动面板"
          }, {
            link: "/component/loading",
            text: "Loading 加载"
          }, {
            link: "/component/message-box",
            text: "MessageBox 弹框"
          }, {
            link: "/component/notice-bar",
            text: "NoticeBar 通知栏"
          }, {
            link: "/component/overlay",
            text: "Overlay 遮罩层"
          }, {
            link: "/component/progress",
            text: "Progress 进度条"
          }, {
            link: "/component/circle",
            text: "Circle 环形进度条"
          }, {
            link: "/component/sort-button",
            text: "SortButton 排序按钮"
          }, {
            link: "/component/status-tip",
            text: "StatusTip 缺省提示"
          }, {
            link: "/component/swipe-action",
            text: "SwipeAction 滑动操作"
          }, {
            link: "/component/toast",
            text: "Toast 轻提示"
          }, {
            link: "/component/notify",
            text: "Notify 消息通知"
          }, {
            link: "/component/tooltip",
            text: "Tooltip 文字提示"
          }, {
            link: "/component/count-down",
            text: "CountDown 倒计时"
          }, {
            link: "/component/count-to",
            text: "CountTo 数字滚动"
          }, {
            link: "/component/keyboard",
            text: "Keyboard 虚拟键盘"
          }, {
            link: "/component/number-keyboard",
            text: "NumberKeyboard 数字键盘"
          }]
        }, {

          text: "数据展示",
          collapsed: false,
          items: [{
            link: "/component/badge",
            text: "Badge 徽标"
          }, {
            link: "/component/card",
            text: "Card 卡片"
          }, {
            link: "/component/cell",
            text: "Cell 单元格"
          }, {
            link: "/component/collapse",
            text: "Collapse 折叠面板"
          }, {
            link: "/component/curtain",
            text: "Curtain 幕帘"
          }, {
            link: "/component/divider",
            text: "Divider 分割线"
          }, {
            link: "/component/gap",
            text: "Gap 间隔槽"
          }, {
            link: "/component/img",
            text: "Img 图片"
          }, {
            link: "/component/img-cropper",
            text: "ImgCropper 图片裁剪"
          }, {
            link: "/component/grid",
            text: "Grid 宫格"
          }, {
            link: "/component/loadmore",
            text: "Loadmore 加载更多"
          }, {
            link: "/component/skeleton",
            text: "Skeleton 骨架屏"
          }, {
            link: "/component/steps",
            text: "Steps 步骤条"
          }, {
            link: "/component/sticky",
            text: "Sticky 粘性布局"
          }, {
            link: "/component/tag",
            text: "Tag 标签"
          }, {
            link: "/component/watermark",
            text: "Watermark 水印"
          }, {
            link: "/component/swiper",
            text: "Swiper 轮播图"
          }, {
            link: "/component/table",
            text: "Table 表格"
          }]
        }
      ]
    }
  },
})
