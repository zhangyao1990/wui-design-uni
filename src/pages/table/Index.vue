<template>
  <page-wraper>
    <demo-block title="基本用法">
      <wui-table :data="dataList" @sort-method="handleSort" height="328px" @row-click="handleRowClick">
        <wui-table-col prop="name" label="姓名" align="center" width="50%"></wui-table-col>
        <wui-table-col prop="grade" label="分数" align="center" width="50%"></wui-table-col>
      </wui-table>
    </demo-block>

    <demo-block title="无边框">
      <wui-table :data="dataList" @sort-method="handleSort" height="328px" :border="false" @row-click="handleRowClick">
        <wui-table-col prop="name" label="姓名" align="center" width="50%"></wui-table-col>
        <wui-table-col prop="grade" label="分数" align="center" width="50%"></wui-table-col>
      </wui-table>
    </demo-block>

    <demo-block title="无斑马纹">
      <wui-table :data="dataList" @sort-method="handleSort" height="328px" :stripe="false" @row-click="handleRowClick">
        <wui-table-col prop="name" label="姓名" align="center" width="50%"></wui-table-col>
        <wui-table-col prop="grade" label="分数" align="center" width="50%"></wui-table-col>
      </wui-table>
    </demo-block>

    <demo-block title="不展示表头">
      <wui-table :data="dataList" @sort-method="handleSort" height="328px" :show-header="false" @row-click="handleRowClick">
        <wui-table-col prop="name" label="姓名" align="center" width="50%"></wui-table-col>
        <wui-table-col prop="grade" label="分数" align="center" width="50%"></wui-table-col>
      </wui-table>
    </demo-block>

    <demo-block title="固定列">
      <wui-table :data="dataList" @sort-method="handleSort" @row-click="handleRowClick" height="328px">
        <wui-table-col prop="name" label="姓名" fixed :sortable="true" align="center"></wui-table-col>
        <wui-table-col prop="grade" label="分数" fixed :sortable="true" align="center"></wui-table-col>
        <wui-table-col prop="hobby" label="一言以蔽之" :sortable="true" :width="160"></wui-table-col>
        <wui-table-col prop="school" label="求学之所" :width="180"></wui-table-col>
        <wui-table-col prop="major" label="专业"></wui-table-col>
        <wui-table-col prop="gender" label="性别"></wui-table-col>
      </wui-table>
    </demo-block>

    <demo-block title="显示索引">
      <wui-table :data="dataList" height="328px" @sort-method="handleSort" :index="{ align: 'center' }">
        <wui-table-col prop="name" label="姓名" :sortable="true" align="center"></wui-table-col>
        <wui-table-col prop="grade" label="分数" :sortable="true" align="center"></wui-table-col>
        <wui-table-col prop="hobby" label="一言以蔽之" :sortable="true" :width="160"></wui-table-col>
        <wui-table-col prop="school" label="求学之所" :width="180"></wui-table-col>
        <wui-table-col prop="major" label="专业"></wui-table-col>
        <wui-table-col prop="gender" label="性别"></wui-table-col>
      </wui-table>
    </demo-block>

    <demo-block title="自定义列模板">
      <wui-table :data="dataList" @sort-method="handleSort" @row-click="handleRowClick" height="328px">
        <wui-table-col prop="name" label="姓名" fixed :sortable="true" align="center"></wui-table-col>
        <wui-table-col prop="grade" label="分数" fixed :sortable="true" align="center">
          <template #value="{ row }">
            <view class="custom-class">
              <text>{{ row.grade }}</text>
              <text>同比{{ row.compare }}</text>
            </view>
          </template>
        </wui-table-col>
        <wui-table-col prop="hobby" label="一言以蔽之" :sortable="true" :width="160"></wui-table-col>
        <wui-table-col prop="school" label="求学之所" :width="180"></wui-table-col>
        <wui-table-col prop="major" label="专业"></wui-table-col>
        <wui-table-col prop="gender" label="性别"></wui-table-col>
        <wui-table-col prop="graduation" label="学成时间"></wui-table-col>
      </wui-table>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import type { TableColumn } from '@/uni_modules/wui-design-uni/components/wui-table-col/types'
import { ref } from 'vue'

const dataList = ref<Record<string, any>[]>([
  {
    name: '关羽',
    school: '武汉市阳逻绿豆学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 66,
    compare: '48%',
    hobby: '颜良文丑，以吾观之，如土鸡瓦犬耳。'
  },
  {
    name: '刘备',
    school: '武汉市阳逻编织学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 68,
    compare: '21%',
    hobby: '我得空明，如鱼得水也'
  },
  {
    name: '赵云',
    school: '武汉市阳逻妇幼保健学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 91,
    compare: '12%',
    hobby: '子龙，子龙，世无双'
  },
  {
    name: '赵云',
    school: '武汉市阳逻妇幼保健学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 91,
    compare: '12%',
    hobby: '子龙，子龙，世无双'
  },
  {
    name: '孔明',
    school: '武汉市阳逻卧龙学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 99,
    compare: '18%',
    hobby: '兴汉讨贼，克复中原'
  },
  {
    name: '赵云',
    school: '武汉市阳逻妇幼保健学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 36,
    compare: '48%',
    hobby: '子龙，子龙，世无双'
  },
  {
    name: '关羽',
    school: '武汉市阳逻绿豆学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 66,
    compare: '48%',
    hobby: '颜良文丑，以吾观之，如土鸡瓦犬耳。'
  },
  {
    name: '刘备',
    school: '武汉市阳逻编织学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 68,
    compare: '21%',
    hobby: '我得空明，如鱼得水也'
  },
  {
    name: '赵云',
    school: '武汉市阳逻妇幼保健学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 91,
    compare: '12%',
    hobby: '子龙，子龙，世无双'
  },
  {
    name: '孔明',
    school: '武汉市阳逻卧龙学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 99,
    compare: '18%',
    hobby: '兴汉讨贼，克复中原'
  },
  {
    name: '赵云',
    school: '武汉市阳逻妇幼保健学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 36,
    compare: '48%',
    hobby: '子龙，子龙，世无双'
  },
  {
    name: '关羽',
    school: '武汉市阳逻绿豆学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 66,
    compare: '48%',
    hobby: '颜良文丑，以吾观之，如土鸡瓦犬耳。'
  },
  {
    name: '刘备',
    school: '武汉市阳逻编织学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 68,
    compare: '21%',
    hobby: '我得空明，如鱼得水也'
  },
  {
    name: '赵云',
    school: '武汉市阳逻妇幼保健学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 91,
    compare: '12%',
    hobby: '子龙，子龙，世无双'
  },
  {
    name: '孔明',
    school: '武汉市阳逻卧龙学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 99,
    compare: '18%',
    hobby: '兴汉讨贼，克复中原'
  }
])

/**
 * 排序
 * @param e
 */
function handleSort(column: TableColumn) {
  dataList.value = dataList.value.reverse()
}

function handleRowClick({ rowIndex }: any) {
  console.log(rowIndex)
}
</script>
<style lang="scss" scoped>
.custom-class {
  height: 80rpx;
  width: 220rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
