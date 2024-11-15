<template>
  <page-wraper :use-wx-ad="false">
    <view class="page">
      <view class="page__hd">
        <view class="page__title">
          <view class="logo"></view>
          <view class="inline">
            Wui Design Uni
            <text class="version">@{{ packageConfig.version }}</text>
          </view>
        </view>
        <view class="page__desc">Wui Design Uni 是一个基于Vue3+TS开发的uni-app组件库，提供70+高质量组件，支持暗黑模式、国际化和自定义主题。</view>
      </view>
      <view class="page__bd">
        <block v-for="(item, index) in list" :key="index">
          <view class="kind-list__item">
            <view :id="item.id" class="wui-flex kind-list__item-hd" @click="kindToggle(item.id)">
              <view class="wui-flex__item title">{{ item.name }}</view>
              <image class="kind-list__img" :src="item.icon"></image>
            </view>
            <view :class="['kind-list__item-bd', item.open ? 'kind-list__item-bd_show' : '']">
              <view :class="['wui-cells', item.open ? 'wui-cells_show' : '']">
                <wui-cell
                  v-for="(page, j) in item.pages"
                  :key="j"
                  is-link
                  :label="page.name"
                  @click="handleClick(`/pages/${page.id}/Index`)"
                ></wui-cell>
              </view>
            </view>
          </view>
        </block>
      </view>
    </view>
  </page-wraper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import packageConfig from '../../../package.json'

const imgModules: any = import.meta.glob('../images/*.png', { eager: true })

const list = ref([
  {
    id: 'widget',
    name: '基础',
    open: false,
    icon: imgModules['../images/icon_nav_widget.png'].default,
    pages: [
      {
        id: 'button',
        name: 'Button 按钮'
      },
      {
        id: 'icon',
        name: 'Icon 图标'
      },
      {
        id: 'layout',
        name: 'Layout 布局'
      },
      {
        id: 'configProvider',
        name: 'ConfigProvider 全局配置'
      },
      {
        id: 'popup',
        name: 'Popup 弹出层'
      },
      {
        id: 'resize',
        name: 'Resize 监听元素尺寸变化'
      },
      {
        id: 'transition',
        name: 'Transition 动画'
      },
      {
        id: 'fab',
        name: 'Fab 悬浮按钮'
      },
      {
        id: 'text',
        name: 'Text 文本'
      }
    ]
  },
  {
    id: 'nav',
    name: '导航',
    open: false,
    icon: imgModules['../images/icon_nav_nav.png'].default,

    pages: [
      {
        id: 'pagination',
        name: 'Pagination 分页'
      },
      {
        id: 'popover',
        name: 'Popover 气泡'
      },
      {
        id: 'tabs',
        name: 'Tabs 标签页'
      },
      {
        id: 'segmented',
        name: 'Segmented 分段器'
      },
      {
        id: 'tabbar',
        name: 'Tabbar 标签栏'
      },
      {
        id: 'navbar',
        name: 'Navbar 导航栏'
      },
      {
        id: 'sidebar',
        name: 'Sidebar 侧边栏'
      },
      {
        id: 'backtop',
        name: 'Backtop 回到顶部'
      },
      {
        id: 'indexBar',
        name: 'IndexBar 索引栏'
      }
    ]
  },
  {
    id: 'form',
    name: '数据输入',
    open: false,
    icon: imgModules['../images/icon_nav_form.png'].default,
    pages: [
      {
        id: 'calendar',
        name: 'Calendar 日历选择器'
      },
      {
        id: 'calendarView',
        name: 'CalendarView 日历面板'
      },
      {
        id: 'checkbox',
        name: 'Checkbox 复选框'
      },
      {
        id: 'colPicker',
        name: 'ColPicker 多列选择器'
      },
      {
        id: 'datetimePicker',
        name: 'DatetimePicker 时间选择器'
      },
      {
        id: 'datetimePickerView',
        name: 'DatetimePickerView 时间选择器视图'
      },
      {
        id: 'input',
        name: 'Input 输入框'
      },
      {
        id: 'textarea',
        name: 'Textarea 文本域'
      },
      {
        id: 'inputNumber',
        name: 'InputNumber 计数器'
      },
      {
        id: 'picker',
        name: 'Picker 选择器'
      },
      {
        id: 'pickerView',
        name: 'PickerView 选择器视图'
      },
      {
        id: 'radio',
        name: 'Radio 单选框'
      },
      {
        id: 'rate',
        name: 'Rate 评分'
      },
      {
        id: 'search',
        name: 'Search 搜索'
      },
      {
        id: 'selectPicker',
        name: 'SelectPicker 单复选选择器'
      },
      {
        id: 'slider',
        name: 'Slider 滑块'
      },
      {
        id: 'switch',
        name: 'Switch 开关'
      },
      {
        id: 'form',
        name: 'Form 表单'
      },
      {
        id: 'upload',
        name: 'Upload 上传'
      },
      {
        id: 'passwordInput',
        name: 'PasswordInput 密码输入框'
      }
    ]
  },
  {
    id: 'feedback',
    name: '反馈',
    open: false,
    icon: imgModules['../images/icon_nav_feedback.png'].default,
    pages: [
      {
        id: 'actionSheet',
        name: 'ActionSheet 上拉菜单'
      },
      {
        id: 'dropMenu',
        name: 'DropMenu 下拉菜单'
      },
      {
        id: 'floatingPanel',
        name: 'FloatingPanel 浮动面板'
      },
      {
        id: 'loading',
        name: 'Loading 加载指示器'
      },
      {
        id: 'messageBox',
        name: 'MessageBox 弹框'
      },
      {
        id: 'overlay',
        name: 'Overlay 遮罩层'
      },
      {
        id: 'noticeBar',
        name: 'NoticeBar 通知栏'
      },
      {
        id: 'progress',
        name: 'Progress 进度条'
      },
      {
        id: 'circle',
        name: 'Circle 环形进度条'
      },
      {
        id: 'sortButton',
        name: 'SortButton 排序按钮'
      },
      {
        id: 'statusTip',
        name: 'StatusTip 缺省提示'
      },
      {
        id: 'swipeAction',
        name: 'SwipeAction 滑动操作'
      },
      {
        id: 'toast',
        name: 'Toast 轻提示'
      },
      {
        id: 'notify',
        name: 'Notify 消息通知'
      },
      {
        id: 'tooltip',
        name: 'Tooltip 文字提示'
      },
      {
        id: 'countDown',
        name: 'CountDown 倒计时'
      },
      {
        id: 'countTo',
        name: 'CountTo 数字滚动'
      },
      {
        id: 'keyboard',
        name: 'Keyboard 虚拟键盘'
      },
      {
        id: 'numberKeyboard',
        name: 'NumberKeyboard 数字键盘'
      }
    ]
  },
  {
    id: 'show',
    name: '数据展示',
    open: false,
    icon: imgModules['../images/icon_nav_show.png'].default,
    pages: [
      {
        id: 'badge',
        name: 'Badge 徽标'
      },
      {
        id: 'card',
        name: 'Card 卡片'
      },
      {
        id: 'cell',
        name: 'Cell 单元格'
      },
      {
        id: 'collapse',
        name: 'Collapse 折叠面板'
      },
      {
        id: 'curtain',
        name: 'Curtain 幕帘'
      },
      {
        id: 'divider',
        name: 'Divider 分割线'
      },
      {
        id: 'gap',
        name: 'Gap 间隔槽'
      },
      {
        id: 'img',
        name: 'Img 图片'
      },
      {
        id: 'imgCropper',
        name: 'imgCropper 图片裁剪'
      },
      {
        id: 'grid',
        name: 'Grid 宫格'
      },
      {
        id: 'loadmore',
        name: 'Loadmore 加载更多'
      },
      {
        id: 'skeleton',
        name: 'Skeleton 骨架屏'
      },
      {
        id: 'steps',
        name: 'Steps 步骤条'
      },
      {
        id: 'sticky',
        name: 'Sticky 吸顶布局'
      },
      {
        id: 'tag',
        name: 'Tag 标签'
      },
      {
        id: 'watermark',
        name: 'Watermark 水印'
      },
      {
        id: 'swiper',
        name: 'Swiper 轮播图'
      },
      {
        id: 'table',
        name: 'Table 表格'
      }
    ]
  }
])

function handleClick(url: string) {
  uni.navigateTo({
    url
  })
}

function kindToggle(id: string) {
  const listValue = list.value
  for (let i = 0, len = listValue.length; i < len; ++i) {
    if (listValue[i].id === id) {
      listValue[i].open = !listValue[i].open
      break
    }
  }
  list.value = listValue
}
</script>

<style lang="scss" scoped>
.wui-theme-dark {
  .page__hd,
  .kind-list__item {
    background: $-dark-background2;
  }
  .title {
    color: $-dark-color;
  }
  :deep(.wui-cell__label) {
    color: $-dark-color3 !important;
  }
  .kind-list__img {
    filter: invert(100%);
  }
}
.page__hd {
  padding: 40px 40px 30px;
  margin-bottom: 30px;
  background: #fff;
}
.page__title {
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  color: #0083ff;
}
.page__desc {
  margin-top: 20px;
  color: #999;
  text-align: left;
  font-size: 12px;
}
.page__bd {
  padding: 0 15px 30px 20px;
  user-select: none;
}
.logo {
  display: inline-block;
  margin-right: 14px;
  width: 40px;
  height: 40px;
}
.inline {
  display: inline-block;
  vertical-align: middle;
}
.version {
  font-size: 14px;
}

.wui-cell_access {
  padding: 15px 20px;
}
.wui-cell__ft {
  padding-right: 16px;
  position: relative;
}
.wui-cells {
  position: relative;
  margin-top: 0;
  opacity: 0;
  transform: translateY(-50%);
  transition: 0.3s;
  :deep(.wui-cell__label) {
    color: rgba(0, 0, 0, 0.65);
  }
}
.wui-cells_show {
  opacity: 1;
  transform: translateY(0);
}

.kind-list__item {
  border-radius: 30px;
  background: #fff;
  overflow: hidden;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
}

.kind-list__img {
  width: 20px;
  height: 20px;
}

.kind-list__item-hd {
  padding: 15px 30px;
  transition: opacity 0.3s;
}

.kind-list__item-bd {
  height: 0;
  overflow: hidden;
}
.kind-list__item-bd_show {
  height: auto;
}

.wui-flex {
  display: flex;
}
.wui-flex__item {
  flex: 1;
}
.title {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
}
.page-name {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.65);
}

.wui-tool-right-line-angle::after {
  content: ' ';
  display: inline-block;
  height: 8px;
  width: 8px;
  border-width: 2px 2px 0 0;
  border-color: #b2b2b2;
  border-style: solid;
  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  position: relative;
  top: -2px;
  position: absolute;
  top: 50%;
  margin-top: -5px;
  right: 0;
}
</style>
