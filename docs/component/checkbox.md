<frame/>

# Checkbox 复选框

## 基本用法

通过 `v-model` 绑定复选框的勾选状态，单独使用时值为 `boolean` 类型。

```html
<wui-checkbox v-model="value" @change="handleChange">单选框1</wui-checkbox>
```

```typescript
const value = ref<boolean>(true)

function handleChange1({ value }) {
  console.log(value)
}
```

## 修改图标形状

修改 `shape` 属性，可选值为 'circle'、'square'、'button'，默认为 'circle'。

```html
<wui-checkbox :modelValue="true" shape="square">沃特</wui-checkbox>
<wui-checkbox :modelValue="true" shape="button">沃特</wui-checkbox>
```

## 修改选中的颜色

设置 `checked-color` 属性。

```html
<wui-checkbox v-model="value" checked-color="#f00">沃特</wui-checkbox>
```

```typescript
const value = ref<boolean>(true)
```

## 修改选中和非选中的值

设置 `true-value` 和 `false-value` 修改选中值和非选中值。如果不设置，`change`事件的参数 默认为 `true` 和 `false` 切换。

```html
<wui-checkbox :modelValue="true" true-value="沃特" false-value="商家后台">复选框</wui-checkbox>
```

## 复选框组

通过 `v-model` 绑定复选框的勾选状态。

```html
<wui-checkbox-group v-model="value">
  <wui-checkbox modelValue="jingmai">沃特</wui-checkbox>
  <wui-checkbox modelValue="shop">商家后台</wui-checkbox>
</wui-checkbox-group>
```

```typescript
const value = ref<number[]>([])
```

设置 `cell` 属性，开启表单模式复选框组。

```html
<wui-checkbox-group v-model="value1" cell>
  <wui-checkbox modelValue="jingmai">沃特</wui-checkbox>
  <wui-checkbox modelValue="shop">商家后台</wui-checkbox>
</wui-checkbox-group>
```

开启表单模式时，如果同时设置 `shape` 为 `button` 自动开启表单复选按钮组模式。

```html
<wui-checkbox-group v-model="value2" cell shape="button">
  <wui-checkbox modelValue="1" disabled>选项一</wui-checkbox>
  <wui-checkbox modelValue="2">选项二</wui-checkbox>
  <wui-checkbox modelValue="3">选项三</wui-checkbox>
  <wui-checkbox modelValue="4">选项四</wui-checkbox>
  <wui-checkbox modelValue="5">选项五</wui-checkbox>
  <wui-checkbox modelValue="6">选项六</wui-checkbox>
  <wui-checkbox modelValue="7">选项七</wui-checkbox>
</wui-checkbox-group>
```

```typescript
const value = ref(['jingmai'])
const value1 = ref(['jingmai'])
const value2 = ref(['1'])
```

## 同行展示

设置 `inline` 属性，使复选框在同一行展示。

```html
<wui-checkbox-group v-model="value" inline>
  <wui-checkbox modelValue="jingmai">沃特</wui-checkbox>
  <wui-checkbox modelValue="shop">商家后台</wui-checkbox>
</wui-checkbox-group>
```

```typescript
const value = ref(['jingmai'])
```

## 禁用

可以在 `checkbox-group` 上面设置 `disabled`，禁用所有复选框，也可以在单个复选框上面设置 `disabled` 属性，禁用某个复选框。

```html
<wui-checkbox-group v-model="value" disabled>
  <wui-checkbox modelValue="jingmai">沃特</wui-checkbox>
  <wui-checkbox modelValue="shop">商家后台</wui-checkbox>
</wui-checkbox-group>
```

```typescript
const value = ref(['jingmai'])
```

## 设置选中数量的上限和下限

`min` 属性设置最小选中的数量，`max` 属性设置最大选中的数量。如果要默认设置某个选项固定被选中，则给该复选框设置 disabled，且 `value` 中有该选项的值。

```html
<wui-checkbox-group v-model="value" :min="1" :max="3">
  <wui-checkbox modelValue="jd">京东</wui-checkbox>
  <wui-checkbox modelValue="jingmai">沃特</wui-checkbox>
  <wui-checkbox modelValue="shop">商家后台</wui-checkbox>
  <wui-checkbox modelValue="market">营销中心</wui-checkbox>
</wui-checkbox-group>
```

```typescript
const value = ref(['jd'])
```

## 尺寸

设置 `size` 属性，可选 `large`。

```html
<wui-checkbox-group v-model="value" size="large">
  <wui-checkbox modelValue="1">沃特</wui-checkbox>
  <wui-checkbox modelValue="2">商家后台</wui-checkbox>
</wui-checkbox-group>
```

## 结合 Cell 使用

通过 `Checkbox` 实例上的 `toggle` 方法触发选中状态切换。

```html
<wui-cell-group border>
  <wui-checkbox-group v-model="value" size="large">
    <wui-cell title="点赞" center clickable @click="handleCheck1">
      <view @click.stop="noop">
        <wui-checkbox model-value="1" ref="checkBox1" custom-style="margin:0;"></wui-checkbox>
      </view>
    </wui-cell>
    <wui-cell title="投币" center clickable @click="handleCheck2">
      <view @click.stop="noop">
        <wui-checkbox model-value="2" ref="checkBox2" custom-style="margin:0;"></wui-checkbox>
      </view>
    </wui-cell>
    <wui-cell title="一键三连" center clickable @click="handleCheck3">
      <view @click.stop="noop">
        <wui-checkbox model-value="3" ref="checkBox3" custom-style="margin:0;"></wui-checkbox>
      </view>
    </wui-cell>
  </wui-checkbox-group>
</wui-cell-group>
```

```ts
import { ref } from 'vue'
const value = ref<string[]>([])
const checkBox1 = ref<CheckboxInstance>()
const checkBox2 = ref<CheckboxInstance>()
const checkBox3 = ref<CheckboxInstance>()

function handleCheck1() {
  checkBox1.value && checkBox1.value.toggle()
}

function handleCheck2() {
  checkBox2.value && checkBox2.value.toggle()
}
function handleCheck3() {
  checkBox3.value && checkBox3.value.toggle()
}

function noop() {}
```

## Checkbox Attributes

| 参数          | 说明                                                                 | 类型                      | 可选值                   | 默认值  | 最低版本 |
| ------------- | -------------------------------------------------------------------- | ------------------------- | ------------------------ | ------- | -------- |
| v-model       | 单选框选中时的值                                                     | string / number / boolean | -                        | -       | -        |
| shape         | 单选框形状                                                           | string                    | circle / square / button | circle  | -        |
| checked-color | 选中的颜色                                                           | string                    | -                        | #4D80F0 | -        |
| disabled      | 禁用                                                                 | boolean                   | -                        | false   | -        |
| max-width     | 文字位置最大宽度                                                     | string                    | -                        | -       | -        |
| true-value    | 选中值，在 checkbox-group 中使用无效，需同 false-value 一块使用      | string / number           | -                        | true    | -        |
| false-value   | 非选中时的值，在 checkbox-group 中使用无效，需同 true-value 一块使用 | string /number            | -                        | false   | -        |
| size          | 设置大小                                                             | string                    | large                    | -       | -        |

## CheckboxGroup Attributes

| 参数          | 说明                                   | 类型    | 可选值                   | 默认值  | 最低版本 |
| ------------- | -------------------------------------- | ------- | ------------------------ | ------- | -------- |
| v-model       | 绑定值                                 | Array   | -                        | -       | -        |
| shape         | 单选框形状                             | string  | circle / square / button | circle  | -        |
| cell          | 表单模式                               | boolean | -                        | false   | -        |
| checked-color | 选中的颜色                             | string  | -                        | #4D80F0 | -        |
| disabled      | 禁用                                   | boolean | -                        | false   | -        |
| min           | 最小选中的数量                         | number  | -                        | 0       | -        |
| max           | 最大选中的数量，0 为无限数量，默认为 0 | number  | -                        | 0       | -        |
| inline        | 同行展示                               | boolean | -                        | false   | -        |
| size          | 设置大小                               | string  | large                    | -       | -        |

## Checkbox Methods

| 方法名称 | 说明                                  | 参数 | 最低版本 |
| -------- | ------------------------------------- | ---- | -------- |
| toggle   | 切换当前选中状态,同时触发 change 事件 | -    | 1.2.16   |

## Checkbox Events

| 事件名称 | 说明                                                                 | 参数        | 最低版本 |
| -------- | -------------------------------------------------------------------- | ----------- | -------- |
| change   | 绑定值变化时触发，当为复选框组时参数为 boolean，表示该复选框是否选中 | `{ value }` | -        |

## CheckboxGroup Events

| 事件名称 | 说明             | 参数        | 最低版本 |
| -------- | ---------------- | ----------- | -------- |
| change   | 绑定值变化时触发 | `{ value }` | -        |

## Checkbox 外部样式类

| 类名               | 说明             | 最低版本 |
| ------------------ | ---------------- | -------- |
| custom-class       | 根节点样式       | -        |
| custom-label-class | 文字结点样式     | -        |
| custom-shape-class | 单选图标结点样式 | -        |

## CheckboxGroup 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |
