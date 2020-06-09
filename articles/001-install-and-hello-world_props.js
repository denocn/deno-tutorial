
import ContentComponent from './001-install-and-hello-world_content.js';
export default {
  'config': {"srcDir":".","ignore":[{},{},{},{},{},{}],"plugins":["sidebar","script"],"title":"Deno 钻研之术","sidebar":["README.md",{"link":"articles/README.md","children":["articles/001-install-and-hello-world.md","articles/002-awesome-deno-cn.md"]},{"link":"translations/README.md","children":["translations/001-the-deno-handbook.md","translations/002-deno-chat-app.md","translations/003-from-node-to-deno.md"]}]},
  'pagePath': "articles/001-install-and-hello-world.md",
  'layoutPath': "_layout.tsx",
  'outputPath': "articles/001-install-and-hello-world.html",
  'title': "(1) Hello，从多样化安装到简单实战",
  'sidebar': [{"title":"Deno 钻研之术","link":"/index.html"},{"link":"/articles/index.html","children":[{"title":"(1) Hello，从多样化安装到简单实战","link":"/articles/001-install-and-hello-world.html"},{"title":"(2) Awesome Deno 中文资源全图谱","link":"/articles/002-awesome-deno-cn.html"}],"title":"文章"},{"link":"/translations/index.html","children":[{"title":"Deno 入门手册：附大量 TypeScript 代码实例","link":"/translations/001-the-deno-handbook.html"},{"title":"Deno + WebSockets 打造聊天室应用","link":"/translations/002-deno-chat-app.html"},{"title":"从 Node 到 Deno：探索各大主流库替代方案","link":"/translations/003-from-node-to-deno.html"}],"title":"翻译"}],
  content: React.createElement(ContentComponent),
  script: React.createElement('script', { type: 'module', src: '/main.js' })
}
