<template>
  <page-wraper>
    <!-- #ifdef MP-WEIXIN -->
    <wui-privacy-popup></wui-privacy-popup>
    <!-- #endif -->
    <wui-message-box></wui-message-box>
    <wui-toast></wui-toast>
    <demo-block title="基本用法">
      <wui-upload accept="image" v-model:file-list="fileList" image-mode="aspectFill" :action="action"></wui-upload>
    </demo-block>
    <demo-block title="最大上传数限制">
      <wui-upload :file-list="fileList3" :limit="3" :action="action" @change="handleChange3"></wui-upload>
    </demo-block>
    <demo-block title="拦截预览图片操作">
      <wui-upload :file-list="fileList4" :action="action" @change="handleChange4" :before-preview="beforePreview"></wui-upload>
    </demo-block>
    <demo-block title="上传前置处理">
      <wui-upload :file-list="fileList5" :action="action" @change="handleChange5" :before-upload="beforeUpload"></wui-upload>
    </demo-block>
    <demo-block title="移除图片前置处理">
      <wui-upload :file-list="fileList6" :action="action" @change="handleChange6" :before-remove="beforeRemove"></wui-upload>
    </demo-block>
    <demo-block title="上传状态钩子">
      <wui-upload
        :file-list="fileList7"
        :action="action"
        @change="handleChange7"
        @success="handleSuccess"
        @fail="handleFail"
        @progress="handleProgess"
      ></wui-upload>
    </demo-block>
    <demo-block title="禁用">
      <wui-upload :file-list="fileList8" disabled :action="action" @change="handleChange8"></wui-upload>
    </demo-block>
    <demo-block title="自定义唤起上传样式并限制上传5张">
      <wui-upload :file-list="fileList9" :action="action" @change="handleChange9" :limit="5">
        <wui-button>自定义唤起样式</wui-button>
      </wui-upload>
    </demo-block>
    <demo-block title="选择文件前置处理">
      <wui-upload :file-list="fileList10" :action="action" @change="handleChange10" :before-choose="beforeChoose"></wui-upload>
    </demo-block>

    <!-- <demo-block title="上传至oss">
      <wui-upload :file-list="fileList11" action="https://xxx.aliyuncs.com" :build-form-data="buildFormData" @change="handleChange11"></wui-upload>
    </demo-block> -->

    <demo-block title="上传视频">
      <wui-upload accept="video" multiple :file-list="fileList1" :action="action" @change="handleChange1"></wui-upload>
    </demo-block>

    <!-- #ifdef MP-WEIXIN -->
    <demo-block title="上传视频和图片">
      <wui-upload accept="media" multiple :file-list="fileList11" :action="action" @change="handleChange11"></wui-upload>
    </demo-block>
    <demo-block title="仅上传文件">
      <wui-upload accept="file" multiple :file-list="fileList12" :action="action" @change="handleChange12"></wui-upload>
    </demo-block>
    <!-- #endif -->

    <!-- #ifdef MP-WEIXIN || H5  -->
    <demo-block title="上传视频图片和文件">
      <wui-upload accept="all" multiple :file-list="fileList13" :action="action" @change="handleChange13"></wui-upload>
    </demo-block>
    <!-- #endif -->

    <demo-block title="手动触发上传">
      <wui-upload ref="upload14" :auto-upload="false" :file-list="fileList14" :action="action" @change="handleChange14"></wui-upload>
      <wui-button @click="upload14?.submit()">开始上传</wui-button>
    </demo-block>

    <demo-block title="自定义上传方法">
      <wui-upload v-model:file-list="fileList15" :upload-method="customUpload"></wui-upload>
    </demo-block>

    <demo-block title="自定义预览样式">
      <wui-upload v-model:file-list="fileList16" accept="image" image-mode="aspectFill" :action="action">
        <template #preview-cover="{ file, index }">
          <!-- 小程序拿不到文件 -->
          <view class="preview-cover">{{ file.name || `文件${index}` }}</view>
        </template>
      </wui-upload>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast, useMessage } from '@/uni_modules/wui-design-uni'
import type { UploadFile, UploadInstance, UploadMethod } from '@/uni_modules/wui-design-uni/components/wui-upload/types'
import { ref } from 'vue'

const action: string = 'https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload'
const fileList = ref<UploadFile[]>([
  {
    url: 'https://registry.npmmirror.com/wui-design-uni-assets/*/files/panda.jpg'
  }
])

const fileList1 = ref<UploadFile[]>([])
const fileList2 = ref<UploadFile[]>([
  {
    url: 'https://img12.360buyimg.com//n0/jfs/t1/29118/6/4823/55969/5c35c16bE7c262192/c9fdecec4b419355.jpg'
  }
])
const fileList3 = ref<UploadFile[]>([])
const fileList4 = ref<UploadFile[]>([])
const fileList5 = ref<UploadFile[]>([])
const fileList6 = ref<UploadFile[]>([])
const fileList7 = ref<UploadFile[]>([])
const fileList8 = ref<UploadFile[]>([])
const fileList9 = ref<UploadFile[]>([])
const fileList10 = ref<UploadFile[]>([])
const fileList11 = ref<UploadFile[]>([])
const fileList12 = ref<UploadFile[]>([])
const fileList13 = ref<UploadFile[]>([])
const fileList14 = ref<UploadFile[]>([])
const fileList15 = ref<UploadFile[]>([])
const fileList16 = ref<UploadFile[]>([
  {
    url: 'https://registry.npmmirror.com/wui-design-uni-assets/*/files/panda.jpg',
    name: 'panda'
  }
])

const upload14 = ref<UploadInstance>()

const messageBox = useMessage()
const toast = useToast()

const beforeChoose = ({ file, resolve }: any) => {
  messageBox
    .confirm({
      msg: '是否选择',
      title: '提示'
    })
    .then(() => {
      resolve(true)
    })
    .catch(() => {
      toast.show('取消选择操作')
    })
}

const beforePreview = ({ resolve, file }: any) => {
  messageBox
    .confirm({
      msg: '是否预览图片',
      title: '提示'
    })
    .then(() => {
      resolve(true)
    })
    .catch(() => {
      toast.show('取消预览操作')
    })
}
const beforeUpload = ({ files, resolve }: any) => {
  messageBox
    .confirm({
      msg: '是否上传',
      title: '提示'
    })
    .then(() => {
      console.log(files, 'files')
      resolve(true)
    })
    .catch(() => {
      toast.show('取消上传操作')
    })
}
const beforeRemove = ({ file, fileList, resolve }: any) => {
  messageBox
    .confirm({
      msg: '是否删除',
      title: '提示'
    })
    .then(() => {
      toast.success('删除成功')
      resolve(true)
    })
    .catch(() => {
      toast.show('取消删除操作')
    })
}

const buildFormData = ({ file, formData, resolve }: any) => {
  let imageName = file.url.substring(file.url.lastIndexOf('/') + 1)
  // #ifdef H5
  // h5端url中不包含扩展名，可以拼接一下name
  imageName = imageName + file.name
  // #endif
  const signature = 'your <signatureString>'
  const ossAccessKeyId = 'your ossAccessKeyId'
  const policy = 'your <policyBase64Str>'
  const key = `20231120/${imageName}`
  const success_action_status = '200' // 将上传成功状态码设置为200，默认状态码为204

  formData = {
    ...formData,
    key: key,
    OSSAccessKeyId: ossAccessKeyId,
    policy: policy,
    signature: signature,
    success_action_status: success_action_status
  }
  resolve(formData)
}

const handleSuccess1 = (res: any) => {
  console.log('成功', res)
}
const handleFail1 = (res: any) => {
  console.log('失败', res)
}
const handleProgess1 = (res: any) => {
  console.log('加载中', res)
}

function handleSuccess(event: any) {
  console.log('成功', event)
}
function handleFail(event: any) {
  console.log('失败', event)
}
function handleProgess(event: any) {
  console.log('加载中', event)
}

function handleChange({ fileList: list }: any) {
  fileList.value = list
}

function handleChange1({ fileList }: { fileList: UploadFile[] }) {
  // fileList.forEach((item) => {
  //   if (!item.thumb) {
  //     item.thumb = 'https://registry.npmmirror.com/wui-design-uni-assets/*/files/redpanda.jpg'
  //   }
  // })
  fileList1.value = fileList
}
function handleChange2({ fileList }: any) {
  fileList2.value = fileList
}
function handleChange3({ fileList }: any) {
  fileList3.value = fileList
}
function handleChange4({ fileList }: any) {
  fileList4.value = fileList
}
function handleChange5({ fileList }: any) {
  fileList5.value = fileList
}
function handleChange6({ fileList }: any) {
  fileList6.value = fileList
}
function handleChange7({ fileList }: any) {
  fileList7.value = fileList
}
function handleChange8({ fileList }: any) {
  fileList8.value = fileList
}
function handleChange9({ fileList }: any) {
  fileList9.value = fileList
}
function handleChange10({ fileList }: any) {
  fileList10.value = fileList
}
function handleChange11({ fileList }: any) {
  fileList11.value = fileList
}
function handleChange12({ fileList }: any) {
  fileList12.value = fileList
}
function handleChange13({ fileList }: any) {
  fileList13.value = fileList
}
function handleChange14({ fileList }: any) {
  fileList14.value = fileList
}

const customUpload: UploadMethod = (file, formData, options) => {
  const uploadTask = uni.uploadFile({
    url: action,
    header: options.header,
    name: options.name,
    fileName: options.name,
    fileType: options.fileType,
    formData,
    filePath: file.url,
    success(res) {
      if (res.statusCode === options.statusCode) {
        // 上传成功
        options.onSuccess(res, file, formData)
      } else {
        // 上传失败
        options.onError({ ...res, errMsg: res.errMsg || '' }, file, formData)
      }
    },
    fail(err) {
      // 上传失败
      options.onError(err, file, formData)
    }
  })
  // 获取当前文件加载的百分比
  uploadTask.onProgressUpdate((res) => {
    options.onProgress(res, file)
  })
}
</script>
<style lang="scss" scoped>
.preview-cover {
  margin-top: 10rpx;
  text-align: center;
}
</style>
