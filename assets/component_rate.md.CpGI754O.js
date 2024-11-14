import{_ as d,c as n,I as t,w as a,a as s,aS as l,D as e,o as p}from"./chunks/framework.Ci-Vrujy.js";const m=JSON.parse('{"title":"Rate 评分","description":"","frontmatter":{},"headers":[],"relativePath":"component/rate.md","filePath":"component/rate.md","lastUpdated":1731586503000}'),r={name:"component/rate.md"},k=l(`<h1 id="rate-评分" tabindex="-1">Rate 评分 <a class="header-anchor" href="#rate-评分" aria-label="Permalink to &quot;Rate 评分&quot;">​</a></h1><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>设置<code>v-model</code>分数，设置<code>num</code>总分数，默认为5分。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wui-rate</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;handleChange&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> changeValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="只读" tabindex="-1">只读 <a class="header-anchor" href="#只读" aria-label="Permalink to &quot;只读&quot;">​</a></h2><p>设置 <code>readonly</code> 属性。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wui-rate</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readonly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="禁用" tabindex="-1">禁用 <a class="header-anchor" href="#禁用" aria-label="Permalink to &quot;禁用&quot;">​</a></h2><p>设置 <code>disabled</code> 属性和<code>disabled-color</code></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wui-rate</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :modelValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="修改颜色" tabindex="-1">修改颜色 <a class="header-anchor" href="#修改颜色" aria-label="Permalink to &quot;修改颜色&quot;">​</a></h2><p>可以通过 <code>color</code> 属性修改未选中的颜色，<code>active-color</code> 修改选中的颜色。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wui-rate</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> active-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;linear-gradient(180deg, rgba(255,238,0,1) 0%,rgba(250,176,21,1) 100%)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wui-rate</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :active-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[&#39;linear-gradient(180deg, rgba(255,238,0,1) 0%,rgba(250,176,21,1) 100%)&#39;, &#39;linear-gradient(315deg, rgba(245,34,34,1) 0%,rgba(255,117,102,1) 100%)&#39;]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="修改icon" tabindex="-1">修改icon <a class="header-anchor" href="#修改icon" aria-label="Permalink to &quot;修改icon&quot;">​</a></h2><p>可以通过 <code>icon</code> 属性修改未选中的图标，<code>active-icon</code> 修改选中的图标。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wui-rate</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wui-icon-dong&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> active-icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wui-icon-dong&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> active-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#4D80F0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="修改大小、间隔" tabindex="-1">修改大小、间隔 <a class="header-anchor" href="#修改大小、间隔" aria-label="Permalink to &quot;修改大小、间隔&quot;">​</a></h2><p>可以通过 <code>size</code> 属性修改图标的大小，<code>space</code> 修改图标之间的间隔。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wui-rate</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;30px&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> space</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10px&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td>v-model</td><td>当前分数</td><td>number</td><td>-</td><td>-</td><td>-</td></tr><tr><td>num</td><td>评分最大值</td><td>number</td><td>-</td><td>5</td><td>-</td></tr><tr><td>readonly</td><td>是否只读</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>size</td><td>图标大小</td><td>string</td><td>-</td><td>16px</td><td>-</td></tr><tr><td>space</td><td>图标间距</td><td>string</td><td>-</td><td>4px</td><td>-</td></tr><tr><td>color</td><td>未选中的图标颜色</td><td>string</td><td>-</td><td>#E8E8E8</td><td>-</td></tr><tr><td>active-color</td><td>选中的图标颜色(支持传颜色数组，共有 2 个元素，为 2 个分段所对应的颜色)</td><td>string/array</td><td>-</td><td>linear-gradient(180deg, rgba(255,238,0,1) 0%,rgba(250,176,21,1) 100%)</td><td>-</td></tr><tr><td>icon</td><td>未选中的图标类名</td><td>string</td><td>-</td><td>wui-icon-star-on</td><td>-</td></tr><tr><td>active-icon</td><td>选中的图标类名</td><td>string</td><td>-</td><td>wui-icon-star-on</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>disabled-color</td><td>禁用的图标颜色</td><td>string</td><td>-</td><td>linear-gradient(315deg, rgba(177,177,177,1) 0%,rgba(199,199,199,1) 100%)</td><td>-</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名称</th><th>说明</th><th>参数</th><th>最低版本</th></tr></thead><tbody><tr><td>change</td><td>点击icon，修改分值事件</td><td><code>{ value }</code></td><td>-</td></tr></tbody></table><h2 id="外部样式类" tabindex="-1">外部样式类 <a class="header-anchor" href="#外部样式类" aria-label="Permalink to &quot;外部样式类&quot;">​</a></h2><table tabindex="0"><thead><tr><th>类名</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>custom-class</td><td>根节点样式</td><td>-</td></tr></tbody></table><h2 id="源代码" tabindex="-1">源代码 <a class="header-anchor" href="#源代码" aria-label="Permalink to &quot;源代码&quot;">​</a></h2>`,27);function o(c,E,g,u,y,b){const h=e("frame"),i=e("ExternalLink");return p(),n("div",null,[t(h),k,t(i,{href:"https://github.com/zhangyao1990/wui-design-uni/tree/master/src/pages/rate"},{default:a(()=>[s("文档")]),_:1}),s(" • "),t(i,{href:"https://github.com/zhangyao1990/wui-design-uni/tree/master/src/uni_modules/wui-design-uni/components/wui-rate"},{default:a(()=>[s("组件")]),_:1})])}const v=d(r,[["render",o]]);export{m as __pageData,v as default};
