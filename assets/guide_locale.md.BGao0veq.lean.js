import{_ as t,c as e,j as i,a as s,I as n,w as d,aS as l,D as p,o as h}from"./chunks/framework.Ci-Vrujy.js";const b=JSON.parse('{"title":"国际化0.2.20","description":"","frontmatter":{},"headers":[],"relativePath":"guide/locale.md","filePath":"guide/locale.md","lastUpdated":1731586503000}'),k={name:"guide/locale.md"},r={id:"国际化0-2-20",tabindex:"-1"},o=i("a",{class:"header-anchor",href:"#国际化0-2-20","aria-label":'Permalink to "国际化<el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">0.2.20</el-tag>"'},"​",-1),c=l(`<p>Wot Design Uni 默认使用中文语言，同时支持多语言切换，如果你希望使用其他语言，你可以参考下面的方案。</p><div class="warning custom-block"><p class="custom-block-title">注意点</p><p>目前组件库发布到 npm 上的包是未经编译的<code>vue</code>与<code>ts</code>，而 Vite 会将<a href="https://cn.vitejs.dev/guide/dep-pre-bundling.html" target="_blank" rel="noreferrer">预构建</a>的依赖项缓存到 <code>node_modules/.vite</code>，组件库的国际化的实现是基于<code>reactive</code>实现的数据共享，在<code>dev</code>阶段就会出现页面使用预构建产物中的国际化数据，而组件库使用组件库内部的国际化数据，所以在非<code>uni_modules</code>模式引入时，需要在<code>vite.config.ts</code>中增加以下配置:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uni </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@dcloudio/vite-plugin-uni&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  optimizeDeps: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    exclude: process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UNI_PLATFORM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;h5&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NODE_ENV</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;development&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wui-design-uni&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>使用<a href="https://cn.vitejs.dev/config/dep-optimization-options.html#optimizedeps-exclude" target="_blank" rel="noreferrer">optimizeDeps.exclude</a>在预构建中强制排除<code>wui-design-uni</code>模块，在<code>uni_modules</code>模式下，不需要做任何处理。</p></div><h2 id="使用其他语言" tabindex="-1">使用其他语言 <a class="header-anchor" href="#使用其他语言" aria-label="Permalink to &quot;使用其他语言&quot;">​</a></h2><p>我们通过 <strong>Locale</strong> 组件实现多语言支持，使用 <strong>Locale.use</strong> 方法可以切换当前使用的语言。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Locale } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;wui-design-uni&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 引入英文语言包</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> enUS </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;wui-design-uni/locale/lang/en-US&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Locale.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en-US&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, enUS)</span></span></code></pre></div><h2 id="覆盖语言包" tabindex="-1">覆盖语言包 <a class="header-anchor" href="#覆盖语言包" aria-label="Permalink to &quot;覆盖语言包&quot;">​</a></h2><p>通过 <strong>Locale.add</strong> 方法可以实现文案的修改和扩展，示例如下：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Locale } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;wui-design-uni&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> messages</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;zh-CN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    calendar: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;请选择日期&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 将&#39;选择日期&#39;修改为&#39;请选择日期&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Locale.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(messages)</span></span></code></pre></div><h2 id="支持的语言" tabindex="-1">支持的语言 <a class="header-anchor" href="#支持的语言" aria-label="Permalink to &quot;支持的语言&quot;">​</a></h2><table tabindex="0"><thead><tr><th>语言</th><th>文件名</th><th>版本</th></tr></thead><tbody><tr><td>简体中文</td><td>zh-CN</td><td><code>v0.2.20</code></td></tr><tr><td>繁体中文（台湾）</td><td>zh-TW</td><td><code>v0.2.20</code></td></tr><tr><td>繁体中文（香港）</td><td>zh-HK</td><td><code>v0.2.20</code></td></tr><tr><td>英语</td><td>en-US</td><td><code>v0.2.20</code></td></tr><tr><td>泰语</td><td>th-TH</td><td><code>v0.2.20</code></td></tr><tr><td>越南语</td><td>vi-VN</td><td><code>v0.2.20</code></td></tr><tr><td>阿拉伯语</td><td>ar-SA</td><td><code>v1.3.12</code></td></tr><tr><td>德语</td><td>de-DE</td><td><code>v1.3.12</code></td></tr><tr><td>西班牙语</td><td>es-ES</td><td><code>v1.3.12</code></td></tr><tr><td>葡萄牙语</td><td>pt-PT</td><td><code>v1.3.12</code></td></tr><tr><td>法语</td><td>fr-FR</td><td><code>v1.3.12</code></td></tr><tr><td>日语</td><td>ja-JP</td><td><code>v1.3.12</code></td></tr><tr><td>韩语</td><td>ko-KR</td><td><code>v1.3.12</code></td></tr><tr><td>土耳其语</td><td>tr-TR</td><td><code>v1.3.12</code></td></tr><tr><td>俄语</td><td>ru-RU</td><td><code>v1.3.12</code></td></tr></tbody></table><p>如果你需要使用其他的语言，只需在<a href="https://github.com/zhangyao1990/wui-design-uni/tree/master/src/uni_modules/wui-design-uni/locale/lang" target="_blank" rel="noreferrer">这里</a>添加一个语言配置文件即可。</p>`,11);function g(E,y,u,F,m,v){const a=p("el-tag");return h(),e("div",null,[i("h1",r,[s("国际化"),n(a,{text:"",style:{"vertical-align":"middle","margin-left":"8px"},effect:"plain"},{default:d(()=>[s("0.2.20")]),_:1}),s(),o]),c])}const C=t(k,[["render",g]]);export{b as __pageData,C as default};