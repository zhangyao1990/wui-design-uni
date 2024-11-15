# 🥤 一杯咖啡

如果您认为本项目对你的工作起到了帮助，可以通过以下方式捐助组件库的研发工作，使本项目持续发展下去，捐赠后你的头像、昵称和主页将会被展示在 `wui design uni` 文档的捐赠榜单上。

:::tip 提醒
捐赠后，可以发送邮件到97972619@qq.com或者通过 github等社交平台告知要展示的捐赠者名称、留言、链接 (链接可以是您的博客、github、个人网站、公司产品等)，如果可以，请务必留下你的 Github 用户名。
:::

### 扫码捐赠

<div style="display: inline-block; margin-right: 120px;">
  <img style="width: 250px; height: 250px;" :src="WxQrcode" />
  <div style="text-align: center;">微信</div>
</div>

<div style="display: inline-block;">
  <img style="width: 250px; height: 250px;" :src="AlipayQrcode" />
  <div style="text-align: center;">支付宝</div>
</div>

<script>
import WxQrcode from '/weixinQrcode.png';
import AlipayQrcode from '/alipayQrcode.png';

export default {
  data () {
    return {
      WxQrcode,
      AlipayQrcode
    }
  }
}
</script>
