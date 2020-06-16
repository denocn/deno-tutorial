import Ga from '/_ga.js';
export default {
    'config': {
        "srcDir": ".",
        "publicDir": "public",
        "ignore": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        "base": "/",
        "theme": "docs",
        "plugins": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        "watch": false,
        "serve": false,
        "port": 8000,
        "title": "Deno 钻研之术",
        "sidebar": [
            "README.md",
            {
                "link": "articles/README.md",
                "children": [
                    "articles/001-install-and-hello-world.md",
                    "articles/002-awesome-deno-cn.md"
                ]
            },
            {
                "link": "translations/README.md",
                "children": [
                    "translations/001-the-deno-handbook.md",
                    "translations/002-deno-chat-app.md",
                    "translations/003-from-node-to-deno.md",
                    "translations/004-deno-oak-todo-api.md"
                ]
            }
        ],
        "nav": [
            {
                "text": "源码",
                "link": "https://github.com/hylerrix/deno-tutorial"
            },
            {
                "text": "官网",
                "link": "https://deno.land"
            },
            {
                "text": "资源",
                "link": "https://github.com/hylerrix/awesome-deno-cn"
            },
            {
                "text": "手册",
                "link": "https://nugine.github.io/deno-manual-cn"
            },
            {
                "text": "deno.js.cn",
                "link": "https://deno.js.cn"
            },
            {
                "text": "denocn.org",
                "link": "https://denocn.org"
            },
            {
                "text": "Pagic 主题",
                "link": "https://github.com/xcatliu/pagic"
            },
            {
                "text": "关于作者",
                "link": "https://github.com/hylerrix"
            }
        ],
        "ga": {
            "id": "UA-169223577-1"
        }
    },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "Deno 钻研之术",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1 id="deno-%E9%92%BB%E7%A0%94%E4%B9%8B%E6%9C%AF">Deno 钻研之术 <a class="header-anchor" href="#deno-%E9%92%BB%E7%A0%94%E4%B9%8B%E6%9C%AF">§</a></h1>\n<blockquote>\n<p>:sauropod: 长期更新的《Deno 钻研之术》！循序渐进学 Deno &amp; 先易后难补 Node &amp; 面向未来的 Deno Web 应用开发。</p>\n</blockquote>\n<p><img src="http://qiniu.ningo.cloud/deno-background.png" alt=""></p>\n<p>《Deno 钻研之术》的配套仓库：<a href="https://github.com/hylerrix/awesome-deno-cn">独家 Awesome Deno 资源清单</a>，构造 Deno 资源全图谱。</p>\n<h2 id="%E7%9B%AE%E5%BD%95">目录 <a class="header-anchor" href="#%E7%9B%AE%E5%BD%95">§</a></h2>\n<p>目前规划的章节目录如下。</p>\n<ul>\n<li>基础篇：循序渐进学 Deno 基础知识；</li>\n<li>标准库篇：深入标准库的内部世界；</li>\n<li>CLI 篇：探索 CLI 命令行的知识；</li>\n<li>Web 篇：打造 Web 开发基石；</li>\n<li>Node 篇：先易后难补 Node 知识，探索与 Deno 的异与同；</li>\n<li>Rust 篇：探索 Deno 底层有关 Rust 的更多知识；</li>\n<li>前端篇：探索 Deno Web 前端应用开发的方式；</li>\n<li>后端篇：探索 Deno Web 后端应用开发的方式；</li>\n<li>架构篇：深入到 Deno 底层读 V8，学架构；</li>\n<li>生态篇：介绍 Deno 生态的相关内容；</li>\n<li>翻译篇：翻译优质的、授权的英文一手博文。</li>\n</ul>\n<p>目前本仓库的文件结构如下。</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token punctuation">.</span>\n├── LICENSE\n├── README<span class="token punctuation">.</span>md\n├── articles # 按照发布顺序进行编号\n│   └── <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> \n├── demos # 收录各大优良 Demo，来源不止于官方\n└── translations # 收录自己或和小伙伴们一起翻译的优质文章\n    ├── authorization<span class="token operator">-</span>required # 暂未得到授权，一般不会跟踪在 Git 上\n    └── work<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>progress # 翻译进行中\n</code></pre>\n<p>本仓库工作流大致如下。</p>\n<ul>\n<li><code>master</code> 分支：作为核心提供稳定版本，我直接工作在这里；</li>\n<li><code>Github Flow</code>：有兴趣的开发者 fork 后一起来 PR；</li>\n<li><code>Git Flow</code>：开放权限给和我一起翻译、一起写作的小伙伴；\n<ul>\n<li><code>develop</code> 分支：用来对整个子分支进行统一管理；</li>\n<li><code>trans/${name}-${user}</code> 分支：某 user 用来翻译某篇授权 name文章；</li>\n<li><code>write/${name}-${user}</code> 分支：某 user 用来某篇 name 文章的写作。</li>\n</ul>\n</li>\n</ul>\n<p>本仓库的<a href="./.ningowood/timeline.html">开发日志</a>。</p>\n<h2 id="%E6%96%87%E7%AB%A0">文章 <a class="header-anchor" href="#%E6%96%87%E7%AB%A0">§</a></h2>\n<p>《Deno 钻研之术》文章内容重点维护在该项目中，以下列表内容根据发布时间排序。写作序号思路为：随心而动！</p>\n<table>\n<thead>\n<tr>\n<th>序号</th>\n<th>文章名</th>\n<th>发布时间</th>\n<th>所属章节</th>\n<th>备注</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>001</td>\n<td><a href="./articles/001-install-and-hello-world.html">Hello, 从多样化安装到简单实战</a></td>\n<td>2020-05-13</td>\n<td>基础篇</td>\n<td>Deno v1.0 正式发布之日</td>\n</tr>\n<tr>\n<td>002</td>\n<td>:heart: <a href="./articles/002-awesome-deno-cn.html">Awesome Deno 中文资源全图谱</a></td>\n<td>2020-05-22</td>\n<td>生态篇</td>\n<td></td>\n</tr>\n<tr>\n<td>003</td>\n<td>...</td>\n<td>...</td>\n<td>...</td>\n<td>...</td>\n</tr>\n</tbody>\n</table>\n<p>这里将翻译篇抽离出来单独排序，争取得到更多的授权翻译，还有欢迎你 issues/群里 推荐高质量的文章甚至一起翻译！</p>\n<table>\n<thead>\n<tr>\n<th>序号</th>\n<th>文章名</th>\n<th>原文发布时间</th>\n<th>翻译发布时间</th>\n<th>备注</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>001</td>\n<td><a href="./translations/001-the-deno-handbook.html">Deno 入门手册：附大量 TypeScript 代码实例</a></td>\n<td>2020-05-12</td>\n<td>2020-05-18</td>\n<td>译者：<a href="https://github.com/hylerrix">@hylerrix</a>, <a href="http://github.com/yunkou">@YunKou</a></td>\n</tr>\n<tr>\n<td>002</td>\n<td><a href="./translations/002-deno-chat-app.html">Deno + WebSockets 打造聊天室应用</a></td>\n<td>2020-05-10</td>\n<td>2020-05-25</td>\n<td>译者：<a href="https://github.com/hylerrix">@hylerrix</a></td>\n</tr>\n<tr>\n<td>003</td>\n<td><a href="./translations/003-from-node-to-deno.html">从 Node 到 Deno：探索各大主流库替代方案</a></td>\n<td>2020-05-17</td>\n<td>2020-06-04</td>\n<td>译者：<a href="https://github.com/hylerrix">@hylerrix</a>, <a href="http://github.com/yunkou">@YunKou</a></td>\n</tr>\n<tr>\n<td>004</td>\n<td>...</td>\n<td>...</td>\n<td>...</td>\n<td>...</td>\n</tr>\n</tbody>\n</table>\n<p>同时更新在如下第三方平台：</p>\n<ul>\n<li><a href="https://mp.weixin.qq.com/s/Eg2atcxZPpIfgqdAd73imQ">微信</a>：公众号 @ningowood。</li>\n<li><a href="https://zhuanlan.zhihu.com/ningowood">知乎</a>。</li>\n<li><a href="https://www.yuque.com/ningowood/beginning">语雀</a>。</li>\n<li><a href="https://juejin.im/user/57e9fc052e958a0054509825/posts">掘金</a>。</li>\n<li><a href="https://www.jianshu.com/u/ecbf49bf207b">简书</a>。</li>\n<li><a href="https://segmentfault.com/blog/ningowood">SegmentFault</a>。</li>\n</ul>\n<h2 id="%E5%86%99%E4%BD%9C%E8%B7%AF%E7%BA%BF%E5%9B%BE">写作路线图 <a class="header-anchor" href="#%E5%86%99%E4%BD%9C%E8%B7%AF%E7%BA%BF%E5%9B%BE">§</a></h2>\n<p>也欢迎你的建议。你想了解什么？一起来学。</p>\n<p><strong>202006 写作关键词</strong></p>\n<ul>\n<li>[x] 授权翻译、<a href="https://aralroca.com/blog/from-node-to-deno">From Node to Deno</a></li>\n<li>[ ] JS 模块化</li>\n<li>[ ] Deno、React</li>\n<li>[ ] 参数列表、1.0 特性</li>\n<li>[ ] Node 篇：再谈、十大缺陷</li>\n<li>[x] 授权翻译、<a href="https://www.freecodecamp.org/news/create-a-todo-api-in-deno-written-by-a-guy-coming-from-node/">Deno Oak Todo API</a></li>\n<li>[ ] 授权翻译、<a href="https://www.freecodecamp.org/news/how-to-use-mysql-in-deno-oak/">Deno Oak MySQL</a></li>\n<li>[ ] 授权翻译、<a href="https://www.freecodecamp.org/news/why-deno-is-a-wrong-step-in-the-future/">Why ... Deno ... Wrong ...</a></li>\n<li>[ ] ...</li>\n</ul>\n<p><strong>202005 写作关键词</strong></p>\n<ul>\n<li>[x] 简介、安装、Demo</li>\n<li>[x] 授权翻译、<a href="https://www.freecodecamp.org/news/the-deno-handbook/">The Deno Handbook: ...</a></li>\n<li>[x] Awesome Deno！</li>\n<li>[x] 授权翻译、<a href="https://aralroca.com/blog/learn-deno-chat-app">Learn Deno: Chat app</a></li>\n</ul>\n<p><strong>未来写作关键词</strong></p>\n<ul>\n<li>[ ] 深入安装、deno_install</li>\n<li>[ ] OAK、ABC 入门 &amp; 简易对比</li>\n<li>[ ] 源码、安装</li>\n<li>[ ] 深入、IO</li>\n<li>[ ] 深入、beats</li>\n<li>[ ] Node 篇：EventEmmiter</li>\n<li>[ ] 精读、采访 Ry</li>\n<li>[ ] 深入、HTTP</li>\n<li>[ ] JS、运行时</li>\n</ul>\n<p><strong>其他待做</strong></p>\n<ul>\n<li>[x] 寻找好看的 UI 生成器搭建 Github Pages 部署网站</li>\n</ul>\n<h2 id="%E6%9E%84%E5%BB%BA">构建 <a class="header-anchor" href="#%E6%9E%84%E5%BB%BA">§</a></h2>\n<p>使用 <a href="https://github.com/xcatliu/pagic">Pagic</a> 构建：</p>\n<pre class="language-bash"><code class="language-bash">deno run --unstable --allow-read --allow-write --allow-net <a class="token url-link" href="https://deno.land/x/pagic@0.7.4/mod.ts">https://deno.land/x/pagic@0.7.4/mod.ts</a> build --serve --watch\n</code></pre>\n<h2 id="%E8%B4%A1%E7%8C%AE%E8%80%85">贡献者 <a class="header-anchor" href="#%E8%B4%A1%E7%8C%AE%E8%80%85">§</a></h2>\n<p>按第一次贡献顺序排名</p>\n<ul>\n<li><a href="https://github.com/hylerrix">@hylerrix</a></li>\n<li><a href="https://github.com/imcoddy">@imcoddy</a></li>\n<li><a href="https://github.com/xcatliu">@xcatliu</a></li>\n<li><a href="https://github.com/justjavac">@justjavac</a></li>\n</ul>\n<h2 id="%E8%AE%A2%E9%98%85">订阅 <a class="header-anchor" href="#%E8%AE%A2%E9%98%85">§</a></h2>\n<p>本项目文档内容均采用 [CC-BY-SA-4.0] 协议进行共享，欢迎 Star, Watch 本仓库，或订阅下方微信公众号及时交流。</p>\n<p><img src="http://qiniu.ningo.cloud/official-qrcode.png" alt=""></p>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'sidebar': [
        {
            "text": "Deno 钻研之术",
            "link": "index.html"
        },
        {
            "link": "articles/index.html",
            "children": [
                {
                    "text": "(1) Hello，从多样化安装到简单实战",
                    "link": "articles/001-install-and-hello-world.html"
                },
                {
                    "text": "(2) Awesome Deno 中文资源全图谱",
                    "link": "articles/002-awesome-deno-cn.html"
                }
            ],
            "text": "文章"
        },
        {
            "link": "translations/index.html",
            "children": [
                {
                    "text": "Deno 入门手册：附大量 TypeScript 代码实例",
                    "link": "translations/001-the-deno-handbook.html"
                },
                {
                    "text": "Deno + WebSockets 打造聊天室应用",
                    "link": "translations/002-deno-chat-app.html"
                },
                {
                    "text": "从 Node 到 Deno：探索各大主流库替代方案",
                    "link": "translations/003-from-node-to-deno.html"
                },
                {
                    "text": "Deno + Oak 构建酷炫的 Todo API",
                    "link": "translations/004-deno-oak-todo-api.html"
                }
            ],
            "text": "翻译"
        }
    ],
    'ga': React.createElement(Ga, { id: "UA-169223577-1" })
};
