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
    'pagePath': "articles/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/index.html",
    'title': "文章",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1 id="%E6%96%87%E7%AB%A0">文章 <a class="header-anchor" href="#%E6%96%87%E7%AB%A0">§</a></h1>\n'
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
