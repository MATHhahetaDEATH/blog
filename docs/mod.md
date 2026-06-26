---
title: Quartz 手动魔改代码地图
---

# Quartz 手动魔改代码地图

这份报告回答一个问题：如果不只改 `quartz.config.yaml`，而是直接写代码给这个 Quartz blog 加功能/外观，哪些地方相对独立、适合动手，哪些地方属于核心管线、需要更谨慎？

结论先说：

- 最推荐新手先改：`quartz/styles/custom.scss`、`quartz.config.yaml`、新增小型组件、调整 `quartz.ts`。
- 想加“一个新的页面元素”：优先做成 Quartz Component，再通过 layout 放进 `left/right/beforeBody/afterBody`。
- 不建议一开始改：`quartz/build.ts`、`quartz/processors/*`、`quartz/plugins/loader/*`、`quartz/components/renderPage.tsx`。这些是管线和装配核心，影响面大。
- `.quartz/plugins/*` 是已安装社区插件源码，很适合阅读参考，但不适合作为长期魔改位置，因为重新安装/更新插件时可能被覆盖。

## 2026-06-26 本轮新增功能说明

本轮根据站点新设计需求，新增了一组项目本地 Quartz 组件插件，并通过 `quartz.config.yaml` 接入布局。后续开发者优先看这一节，可以快速知道哪些功能不是 Quartz 官方默认组件。

### 2026-06-26 追加修正记录

本轮后续又补了几个布局和视觉细节，之后维护时优先检查这些位置：

- 底部 `footer.ksm-footer` 现在由 `quartz/styles/custom.scss` 拉成真正的 `100vw` 全宽，并用 `margin-top: min(80vh, 80dvh)` 实现正文结束后的额外留白；移动端为 `50vh`。
- `quartz-custom/footer/dist/components/index.js` 新增了独立脚本：当 `footer.ksm-footer` 进入浏览器视口时，在 `<html>` 上设置 `data-ksm-footer-mode="on"`；离开视口时恢复为 `off`。全局 CSS 根据这个属性隐藏左右侧栏，并禁用 pointer events，因此鼠标移到两侧不会像原生 reader mode 那样重新显示侧栏。这个功能故意不复用 `reader-mode`，避免影响用户手动阅读模式状态。
- Giscus 仍放在 `.center .page-footer` 中，只受正文中栏宽度约束；不要再给 `.page-footer` 写 `width: 100vw`，否则评论区也会被拉满屏。
- 日历圆点只由 `quartz-custom/diary-calendar/dist/components/index.js` 输出的 `.ksm-calendar-day-dots` / `.ksm-calendar-dot` 绘制。`custom.scss` 不再为 `.ksm-calendar-day.has-entry::after` 额外画点，避免出现双层圆点。
- 新增颜色变量 `--ksm-soft-text: rgb(251, 248, 248)`。底部 block 的主要跳转文字、About/Site Map 链接、社交按钮，以及暗黑模式正文文本都使用这个浅色。

### 新增本地组件插件

这些插件都放在 `quartz-custom/`，并提供预构建的 `dist/`，Quartz 会通过本地 `source: ./quartz-custom/<name>` 加载。

- `quartz-custom/site-logo`: 左侧栏 Logo 组件。默认显示 `https://img.ksmtang.com/logo.svg`，尺寸配置为 `240x80`。配置入口在 `quartz.config.yaml` 的 `./quartz-custom/site-logo`。
- `quartz-custom/moments-nav`: 左侧栏 Moments 跳转按钮，替代原来的 Recent Notes 位置。按钮文案、链接、小字说明都在 YAML 中配置。
- `quartz-custom/diary-calendar`: 左侧栏日历组件。读取 `allFiles` 中 `dairy/` 目录下的文章，按最近一篇 diary 所在月份绘制日历；有 diary 的日期会加划线，并在下方显示最近一次 diary。
- `quartz-custom/site-map-link`: 右侧栏 Site Map 跳转按钮，默认指向 `/index/`。
- `quartz-custom/sidebar-divider`: 右侧栏虚线分隔组件，用于分开工具区和 Graph/TOC/Backlinks 等内容区。
- `quartz-custom/footer`: 自定义站点页脚。替代官方 footer，背景色为 `rgb(39, 44, 47)`，包含「快速跳转」「このサイトについて」「Links」和底部版权/社交按钮。

这些本地插件都采用“配置优先”的方式：常用文案、链接、尺寸、目录名先改 `quartz.config.yaml`；只有当结构本身要变化时，才进入对应 `quartz-custom/<name>/dist/components/index.js` 改组件代码。

`quartz-custom/footer` 的 `quickLinks` 和 `links` 都支持 `description` 小字说明。`socialLinks` 支持两类条目：带 `href` 的普通跳转按钮，或不带 `href`、带 `popup` 的弹出文本按钮，例如 `Weixin` / `Zhihu`。

### 当前布局约定

左侧栏顺序：

1. `SiteLogo`
2. `MomentsNav`
3. `DiaryCalendar`

右侧栏顺序：

1. `Search`、`Darkmode`、`ReaderMode` 组成 `toolbar`
2. `SiteMapLink`
3. `SidebarDivider`
4. `Graph`
5. `TableOfContents`
6. `Backlinks`

原 `page-title`、`recent-notes`、`explorer`、官方 `footer` 已在 `quartz.config.yaml` 中禁用。不要直接删除这些配置，保留禁用项便于之后回滚或比较。

### 新增页面和栏目命名

四个栏目通过各自目录下的 `index.md` 命名，并继续使用 Quartz FolderPage 默认能力显示文章列表：

- `content/journal_flow/index.md`: `Moments`
- `content/dairy/index.md`: `ダイアリー`
- `content/deprecated/index.md`: `過期思想`
- `content/stem/index.md`: `笔记分享`

新增 Site Map 页面：

- `content/index/index.md`: 对应 `/index/`，暂时提供四个栏目、About、かすみのサイト的跳转。

### 字体与样式入口

字体和新布局视觉主要在 `quartz/styles/custom.scss`：

- 日期/阅读时长元信息 `.content-meta`: `Sacramento`
- 侧栏按钮/导航/页脚按钮: `Kiwi Maru`
- 文章标题 `.article-title`: `Noto Serif TC Variable`
- 正文 fallback: `Cactus Classical Serif`

`quartz.config.yaml` 也同步配置了 `github:quartz-community/fonts` 插件，主要用于 Quartz 自身的字体变量；更细的选择器覆盖在 `custom.scss`。

### Giscus 注意事项

官方 `github:quartz-community/comments` 目前保持 `enabled: false`。评论区改由本地组件 `quartz-custom/giscus-comments` 注入，配置入口在 `quartz.config.yaml` 的 `./quartz-custom/giscus-comments`：

- `repo: MATHhahetaDEATH/blog`
- `repoId: R_kgDOTEoNZw`
- `category: General`
- `categoryId: DIC_kwDOTEoNZ84C_6-T`
- `mapping: pathname`
- `theme: preferred_color_scheme`
- `lang: zh-CN`

如果之后要改 Giscus 仓库、分类、语言或主题，优先改 YAML 配置；只有要改变脚本注入方式时，才进入 `quartz-custom/giscus-comments/dist/components/index.js`。

### 构建与外部资源注意事项

字体文件由 `quartz/styles/custom.scss` 中的 jsDelivr `@font-face` 加载；`quartz.config.yaml` 里的 `configuration.theme.fontOrigin` 和 `github:quartz-community/fonts` 插件都设为 `local`，只负责声明 Quartz 字体变量，不再额外生成 Google Fonts 请求。

`github:quartz-community/og-image` 当前设为 `enabled: false`。原因是该插件生成社交图时会在构建阶段抓取外部字体；在网络受限或本地离线构建时会失败。Quartz 仍会使用 `static/og-image.png` 作为默认社交图。以后如果要恢复动态 OG 图，先保证构建环境能访问外部字体，再把这个插件启用。

本项目在当前机器上直接 `npx quartz build` 曾出现 Node 默认堆内存不足。稳定构建命令建议使用：

```bash
node --max-old-space-size=8192 quartz/bootstrap-cli.mjs build --concurrency=1
```

## 项目结构速览

### 内容层

- `content/`: 你的文章和笔记。
- `docs/`: 当前仓库自带 Quartz 文档，也可作为站内文档内容。
- `docs/dev/func.md`: 本次新增的官方功能地图。
- `docs/mod.md`: 本文档。

内容层最适合练习 Markdown、frontmatter、文件夹页、标签页、Canvas、Bases。

### 配置层

- `quartz.config.yaml`: 最主要的低风险入口。全站配置、插件启停、插件 options、组件 layout 都在这里。
- `quartz.ts`: TypeScript override 入口。当 YAML 表达不了函数、复杂条件或直接组件数组时，用它。
- `quartz.config.default.yaml`: 默认配置参考。不要把它当主要修改入口。

### 样式层

- `quartz/styles/custom.scss`: 官方留给你的自定义样式入口，目前几乎为空。强烈推荐优先使用。
- `quartz/styles/variables.scss`: 布局断点、侧栏宽度、顶部间距、网格模板。
- `quartz/styles/base.scss`: 全站基础样式和默认 frame 样式。
- `quartz/styles/callouts.scss`: callout 样式。
- `quartz/styles/syntax.scss`: 代码高亮相关样式。

### 组件层

- `quartz/components/types.ts`: Quartz Component 的 props 类型。
- `quartz/components/registry.ts`: 组件注册表。
- `quartz/components/Flex.tsx`、`MobileOnly.tsx`、`DesktopOnly.tsx`、`ConditionalRender.tsx`: 布局包装器。
- `quartz/components/Head.tsx`: `<head>` 标签、meta、字体、CSS/JS 注入。
- `quartz/components/Body.tsx`: `#quartz-body` 外壳。
- `quartz/components/frames/*`: 页面骨架 frame。

### 插件层

- `.quartz/plugins/*`: 已安装社区插件源码。例如 footer、recent-notes、darkmode、search、graph。
- `quartz/plugins/types.ts`: Transformer/Filter/Emitter/PageType 类型定义。
- `quartz/plugins/loader/*`: 从 `quartz.config.yaml` 安装、加载、实例化插件和组件。
- `quartz/plugins/pageTypes/*`: 内置 page type dispatcher 和 404。
- `quartz/plugins/emitters/*`: 内部 emitter。

### 构建层

- `quartz/build.ts`: 构建主流程。
- `quartz/processors/parse.ts`、`filter.ts`、`emit.ts`: 解析、过滤、输出阶段。
- `quartz/worker.ts`: 并发处理。
- `quartz/bootstrap-cli.mjs`: CLI 入口。

构建层属于高风险区。除非你已经明确要改 Quartz 的行为模型，否则先别动。

## 最适合手动魔改的位置

## 1. `quartz/styles/custom.scss`

风险：低。

适合：

- 改正文宽度、行距、标题、引用块、图片、表格、代码块外观。
- 给已有组件补样式。
- 自定义 callout。
- 针对特定 frame 写样式。
- 针对自己新增的组件写样式。

原因：

- 官方明确写了 `// put your custom CSS here!`
- 不改 TS，不影响构建管线。
- 出问题一般只是视觉问题，容易回退。

推荐写法：

```scss
@use "./variables.scss" as *;

.my-widget {
  border: 1px solid var(--lightgray);
  padding: 0.75rem;
}

@media all and ($mobile) {
  .my-widget {
    padding: 0.5rem;
  }
}
```

注意：

- Quartz 不使用 CSS Modules，所有 CSS 都是全局的。类名要取得具体一点，例如 `.ksm-profile-card`，不要叫 `.card` 这种太宽泛的名字。
- 优先使用 CSS 变量：`var(--light)`、`var(--dark)`、`var(--secondary)`、`var(--lightgray)`，这样明暗模式更容易兼容。
- 响应式断点可以复用 `variables.scss` 里的 `$mobile`、`$tablet`、`$desktop`。

适合练习：

- 给所有图片加说明文字样式。
- 给 blockquote 做不同边框/背景。
- 把文章标题和元信息间距改得更舒服。
- 给 `.recent-notes`、`.backlinks`、`.graph` 写局部样式。

## 2. `quartz.config.yaml`

风险：低到中。

适合：

- 插件启停。
- 插件 options。
- 组件位置和优先级。
- 页面类型布局差异。
- frame 切换。

项目中布局装配逻辑来自 `quartz/plugins/loader/config-loader.ts`：

- 只处理 `enabled: true` 且有 `layout` 的插件。
- 按插件名在 `componentRegistry` 查组件。
- 根据 `layout.position` 放进 `left/right/beforeBody/afterBody`。
- 按 `priority` 排序。
- 有 `group` 时包装成 `Flex`。
- 有 `display` 时包装成 `MobileOnly` 或 `DesktopOnly`。
- 有 `condition` 时包装成 `ConditionalRender`。

这意味着：想移动一个可视组件，不需要改 TSX，改 YAML 就够。

例子：把 TOC 只在桌面右栏显示：

```yaml
- source: github:quartz-community/table-of-contents
  enabled: true
  layout:
    position: right
    priority: 30
    display: desktop-only
    condition: has-toc
```

例子：让 folder 页没有右栏：

```yaml
layout:
  byPageType:
    folder:
      positions:
        right: []
```

注意：

- YAML schema 限制了 layout position 取值。写错通常会有编辑器提示或构建错误。
- `order` 和 `priority` 不一样：`order` 是插件执行顺序，`priority` 是组件显示顺序。
- 某些插件之间有顺序依赖，例如加密页应晚于需要读真实 HTML 的链接处理插件。

## 3. `quartz.ts`

风险：中。

适合：

- 写 YAML 无法表达的函数。
- 给 Explorer、Recent Notes 等插件传 `filterFn`、`mapFn`、`sortFn`。
- 用 `loadQuartzLayout({ ... })` 进行更强的布局 override。
- 注册自定义组件后手动组合布局。

当前文件：

```ts
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
```

重要规则：

- 插件 option override 必须放在 `loadQuartzConfig()` 之前。
- `loadQuartzLayout()` 会再次读取 YAML 并装配布局。
- 如果你要直接覆盖某个 page type 的组件数组，可以传 `byPageType`。

适合练习：

- Explorer 中隐藏某个目录。
- Recent Notes 只显示 `content/journal_flow` 下的文章。
- 对某类页面条件显示一个组件。

## 4. 新增一个本地 Quartz Component

风险：中，但非常适合学习。

这是“加一个新的页面元素”的最佳路线。Quartz Component 本质是一个返回 JSX 的函数，能读当前页面数据、全站配置、所有文件列表，然后输出 HTML。

你会用到：

- `quartz/components/types.ts`
- `QuartzComponent`
- `QuartzComponentConstructor`
- `QuartzComponentProps`
- `.css`
- `.beforeDOMLoaded`
- `.afterDOMLoaded`

组件 props 里最有用的字段：

- `fileData`: 当前页面元数据。常用 `fileData.slug`、`fileData.frontmatter`、`fileData.dates`。
- `cfg`: `quartz.config.yaml` 的 `configuration`。
- `allFiles`: 所有已解析页面的元数据。适合做列表、随机文章、相关文章。
- `tree`: 当前页 HTML AST。普通组件通常不用碰。
- `displayClass`: 布局包装器给的移动端/桌面端 class。

一个简单组件可以长这样：

```tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const SiteNotice: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <aside class="ksm-site-notice">
      <strong>{cfg.pageTitle}</strong>
      <p>这里可以放一句站点说明。</p>
    </aside>
  )
}

SiteNotice.css = `
.ksm-site-notice {
  border: 1px solid var(--lightgray);
  padding: 0.75rem;
  border-radius: 6px;
}
`

export default (() => SiteNotice) satisfies QuartzComponentConstructor
```

但只新建文件还不够。你还需要让布局系统知道它。对本项目而言，推荐两条路线：

### 路线 A：写成真正的本地/社区插件

风险：中。

优点：

- 最符合 Quartz 5 的设计。
- 能通过 `quartz.config.yaml` 的 `plugins` 和 `layout` 管理。
- 不容易和核心代码混在一起。

缺点：

- 需要插件 manifest、导出、安装路径等额外结构。
- 对完全新手稍微绕一点。

官方推荐组件插件结构见 `docs/advanced/creating components.md`。

### 路线 B：项目内直接注册组件

风险：中。

优点：

- 学习成本低。
- 适合个人站点魔改。

可能做法：

1. 在 `quartz/components/` 新建组件文件。
2. 在 `quartz/components/index.ts` 导出。
3. 在 `quartz.ts` 里用 `loadQuartzLayout({ ... })` 把组件加入某个槽位。

注意：

- 这个项目的 YAML layout 主要从插件 registry 查组件。纯放在 `quartz/components/index.ts` 的组件，不会自动出现在 YAML 的 `plugins` 列表里。
- 如果想继续用 YAML 管理位置，更推荐做成本地插件。
- 如果直接改 `loadQuartzLayout({ defaults: { left: [...] } })`，要小心覆盖掉 YAML 已经装配好的组件数组。更稳的方式是先理解返回结构，或用插件路线。

适合做的小组件：

- 站点公告。
- 个人简介卡片。
- 随机文章按钮。
- 当前页面字数/自定义元信息。
- “返回顶部”按钮。
- 按 tag 显示相关推荐。

## 5. 组件脚本：`.beforeDOMLoaded` 和 `.afterDOMLoaded`

风险：中。

适合：

- 按钮点击。
- 本地状态。
- DOM 增强。
- 主题变化监听。
- 图表/交互初始化。

Quartz 页面是静态生成的，但客户端有 SPA 导航。组件脚本必须注意：

- 页面初次加载和 SPA 跳转后都要能初始化。
- 监听 `document.addEventListener("nav", setup)`。
- 如果 DOM 被插件局部重渲染，还要监听 `render`。
- 事件监听器要用 `window.addCleanup` 清理，避免 SPA 跳转后重复绑定。

参考：

- `.quartz/plugins/darkmode/src/components/Darkmode.tsx`
- `.quartz/plugins/search/src/components/Search.tsx`
- `.quartz/plugins/graph/src/components/Graph.tsx`

经验规则：

- 能不用 JS 就先不用 JS。
- 需要交互时，把 DOM 选择器限定在自己组件 class 内。
- 不要直接依赖页面加载一次的假设。

## 6. `quartz/components/frames/*`

风险：中到高。

适合：

- 改整个页面骨架。
- 做全宽页、极简页、沉浸页。
- 改 sidebars、header、footer、content 的组合方式。

当前内置：

- `DefaultFrame.tsx`: 三栏布局。
- `FullWidthFrame.tsx`: 无左右栏，全宽中心。
- `MinimalFrame.tsx`: 只渲染正文和 footer。
- `index.ts`: frame 注册和解析。
- `types.ts`: `PageFrame` 接口。

Frame 的工作方式：

- `renderPage.tsx` 渲染 `<html>`、`<head>`、`<body>`、`#quartz-root`。
- 然后调用 `resolveFrame(frameName)` 找到 frame。
- frame 的 `render()` 决定 `#quartz-body` 里面怎么排组件。
- `.page` 上会有 `data-frame="frame-name"`，CSS 可据此作用域化。

如果你要新增 core frame：

1. 在 `quartz/components/frames/` 新建 `MyFrame.tsx`。
2. 实现 `PageFrame`。
3. 在 `quartz/components/frames/index.ts` import 并加入 `builtinFrames`。
4. 在 `quartz/styles/base.scss` 或 `custom.scss` 写 `[data-frame="my-frame"]` 样式。
5. 在 `quartz.config.yaml` 用 `layout.byPageType.<type>.template: my-frame`。

注意：

- Frame 影响所有槽位的最终位置，移动端最容易出问题。
- 修改 frame 后至少检查桌面、平板、手机三种宽度。
- 自定义 frame CSS 必须用 `[data-frame="..."]` 作用域，避免影响默认文章页。

## 7. Page Type 插件

风险：高，但功能上限很高。

适合：

- 新增一种文件类型页面。
- 生成虚拟页面。
- 做专题页、归档页、时间线、相册、项目页。

类型定义在 `quartz/plugins/types.ts`：

- `match`: 判断当前 slug/fileData 是否由这个 page type 处理。
- `generate`: 可生成虚拟页面。
- `layout`: page type 名，用来匹配 `layout.byPageType`。
- `frame`: 默认 frame。
- `body`: 页面主体组件。
- `treeTransforms`: 渲染时改 HAST。

调度逻辑在 `quartz/plugins/pageTypes/dispatcher.ts`：

- page types 按 `priority` 排序。
- 对每个普通页面，找到第一个 `match()` 为 true 的 page type。
- 先生成虚拟页，再渲染普通页，再渲染虚拟页。
- 每个 page type 通过 `resolveLayout()` 拿到布局和 frame。

适合以后做：

- `/now` 页面：从若干 frontmatter 聚合当前状态。
- `/timeline` 页面：按日期生成时间轴。
- `/books` 页面：从 `book:` frontmatter 生成阅读库。
- 自定义 `.gallery` 或 `.json` 文件渲染。

不建议一开始做，因为它牵涉内容索引、布局、虚拟页面、构建输出。

## 8. 已安装社区插件源码：`.quartz/plugins/*`

风险：阅读低，直接修改中到高。

适合阅读：

- `.quartz/plugins/footer/src/components/Footer.tsx`: 最简单的组件之一，适合学习 options、props、css。
- `.quartz/plugins/recent-notes/src/components/RecentNotes.tsx`: 学习如何用 `allFiles` 生成列表。
- `.quartz/plugins/darkmode/src/components/Darkmode.tsx`: 学习组件脚本、按钮、CSS。
- `.quartz/plugins/search/src/components/Search.tsx`: 学习复杂交互组件。
- `.quartz/plugins/graph/src/components/Graph.tsx`: 学习使用 content index 和 canvas/svg 交互。

不建议直接长期修改：

- `.quartz/plugins` 由 Quartz 插件安装器管理。
- `npx quartz plugin install --latest` 或重新安装可能覆盖你的改动。
- 如果你真的要魔改某个社区插件，最好 fork 成自己的插件源，或复制成项目本地插件。

## 不太适合新手直接改的位置

### `quartz/components/renderPage.tsx`

风险：高。

它负责：

- 处理 transclusion。
- 汇总 page resources。
- 运行 tree transforms。
- 组装 `<html>`、`<head>`、`<body>`。
- 调用 frame。
- 注入脚本。

除非你要改所有页面的 HTML 外壳，否则不要先动这里。多数页面元素需求都可以通过 Component 或 Frame 完成。

### `quartz/plugins/loader/*`

风险：高。

它负责：

- 读取 YAML。
- 安装插件。
- 读 manifest。
- 校验依赖。
- 分类 transformer/filter/emitter/pageType。
- 加载组件和 frame。
- 根据 layout 装配组件。

如果你想“让 YAML 支持一种新语法”，才可能动这里。否则尽量不动。

### `quartz/processors/*` 和 `quartz/build.ts`

风险：很高。

它们是构建管线：

- parse：Markdown 到 AST/HTML。
- filter：内容过滤。
- emit：输出文件。
- build：总体调度、watch、incremental rebuild。

这里适合 Quartz 核心开发，不适合站点个性化。

### `node_modules/`

不要改。

这里都是依赖，重新安装会丢，且不属于你的项目逻辑。

## 如果目标是“加一个新的页面元素”

推荐顺序：

### 第一步：判断它是否只是样式

例如：

- 让标题更大。
- 给侧栏加边框。
- 改最近文章列表外观。
- 改图片样式。

只改 `quartz/styles/custom.scss`。

### 第二步：判断官方组件能不能做到

例如：

- 想要最新文章：Recent Notes。
- 想要目录：Table of Contents。
- 想要标签：Tag List。
- 想要评论：Comments。
- 想要按钮组：layout group/Flex。

优先改 `quartz.config.yaml`。

### 第三步：写新组件

如果官方没有，例如：

- 个人简介卡。
- 今日一句。
- 随机文章。
- 阅读进度条。
- 站点公告。
- “本文属于某系列”的提示。

写 Quartz Component。

建议组件形态：

- 静态内容：只返回 JSX + `.css`。
- 需要页面数据：读取 `fileData.frontmatter`。
- 需要全站列表：读取 `allFiles`。
- 需要交互：加 `.afterDOMLoaded`，并监听 `nav`。

### 第四步：接入布局

如果做成插件：

- 在 `quartz.config.yaml` 里加 plugin entry。
- 设置 `layout.position` 和 `priority`。

如果是项目内组件：

- 用 `quartz.ts` 的 `loadQuartzLayout()` 覆盖布局。
- 或进一步接入 component registry。

### 第五步：写样式

优先：

- 组件 `.css` 写组件自带样式。
- `custom.scss` 写项目级覆盖。

类名要唯一，避免污染。

### 第六步：本地验证

至少跑：

```bash
npm run check
```

需要看效果时：

```bash
npx quartz build --serve
```

检查：

- 首页。
- 一篇普通文章。
- folder 页。
- tag 页。
- 404 页。
- 桌面宽度。
- 移动端宽度。
- 明暗模式。
- SPA 内部跳转后组件是否还正常。

## 推荐学习路线

### 阶段 1：只动配置和样式

目标：理解 Quartz 页面由哪些组件拼起来。

练习：

- 改站点标题、字体、颜色。
- 移动 Search、Graph、Backlinks、TOC 的位置。
- 在 `custom.scss` 改正文排版。
- 启用 `tag-list`。
- 修正或关闭 Comments。

### 阶段 2：读并仿写简单组件

目标：理解 Quartz Component。

阅读：

- `.quartz/plugins/footer/src/components/Footer.tsx`
- `.quartz/plugins/recent-notes/src/components/RecentNotes.tsx`
- `quartz/components/Header.tsx`
- `quartz/components/Flex.tsx`

练习：

- 写一个站点公告组件。
- 写一个个人简介卡。
- 写一个从 `allFiles` 随机挑文章的组件。

### 阶段 3：写交互组件

目标：理解 SPA、客户端脚本、事件清理。

阅读：

- `.quartz/plugins/darkmode/src/components/Darkmode.tsx`
- `.quartz/plugins/darkmode/src/components/scripts/darkmode.inline.ts`
- `.quartz/plugins/search/src/components/Search.tsx`

练习：

- 返回顶部按钮。
- 阅读进度条。
- 可折叠个人链接区。

### 阶段 4：改 Frame 或 Page Type

目标：理解页面骨架和页面生成。

阅读：

- `quartz/components/frames/DefaultFrame.tsx`
- `quartz/components/frames/FullWidthFrame.tsx`
- `quartz/components/frames/index.ts`
- `quartz/plugins/pageTypes/dispatcher.ts`

练习：

- 给某类页面切成 `full-width`。
- 新增一个只用于专题页的 frame。
- 以后再考虑自定义 page type。

## 本项目的具体改造机会

### 1. Giscus 评论已改成本地组件

`quartz.config.yaml` 中官方 comments 插件保持 `enabled: false`，当前评论区由 `quartz-custom/giscus-comments` 负责。

建议：

- 改仓库、分类、主题、语言时，优先改 `./quartz-custom/giscus-comments` 的 YAML options。
- 如果暂时不想展示评论，把 `./quartz-custom/giscus-comments` 改成 `enabled: false`。
- 单篇文章要关闭评论，可以在 frontmatter 写 `comments: false`。

这是当前最明显的外部服务接入点，涉及 GitHub Discussions 和 `https://giscus.app/client.js`。

### 2. `custom.scss` 是主要视觉实验区

这是最好的视觉实验区。

可以先尝试：

- 调整文章最大宽度。
- 改 blockquote。
- 改图片、表格、代码块。
- 给左栏组件加统一间距/边界。

### 3. Recent Notes 可以本地化

当前标题是 `Recent Notes`。如果站点主要是中文/日文内容，可以改成：

```yaml
options:
  title: 最近更新
```

也可以用 TS override 只显示某些目录。

### 4. Folder/Tag 页已经做了简化

当前：

```yaml
folder:
  exclude:
    - reader-mode
  positions:
    right: []
tag:
  exclude:
    - reader-mode
  positions:
    right: []
```

这说明项目已经开始按页面类型定制布局。可以继续做：

- folder/tag 页使用 `full-width` frame。
- 给归档页单独加说明组件。
- 让右栏在普通文章保留，列表页隐藏。

### 5. Canvas 和 Bases 已启用

这两个功能上限很高，适合把 blog 扩展为知识库：

- `.canvas` 做专题导览。
- `.base` 做数据库视图。
- 如果默认布局不满意，可以通过 frame 改成全宽/极简。

### 6. 适合新增的第一个组件

建议做“Profile / About 卡片”，放在左栏 PageTitle 后、Recent Notes 前。

它只需要：

- 一个 TSX 组件。
- 一段 CSS。
- 接入 layout。

功能不复杂，但能学到 JSX、CSS、layout、构建验证。

## 文件风险分级

### 低风险

- `quartz.config.yaml`
- `quartz/styles/custom.scss`
- `content/**/*.md`
- `docs/**/*.md`
- `quartz/static/*`

### 中风险

- `quartz.ts`
- `quartz/styles/variables.scss`
- `quartz/styles/base.scss`
- `quartz/styles/callouts.scss`
- 新增 `quartz/components/*.tsx`
- `quartz/components/index.ts`

### 中高风险

- `quartz/components/frames/*`
- `quartz/plugins/pageTypes/*`
- 本地/自制插件结构
- 组件交互脚本

### 高风险

- `quartz/components/renderPage.tsx`
- `quartz/plugins/loader/*`
- `quartz/processors/*`
- `quartz/build.ts`
- `.quartz/plugins/*` 的直接改动

### 不要改

- `node_modules/`
- `package-lock.json`，除非你真的安装/升级依赖
- `.quartz/plugins/*/.git`

## 最后：改造时的判断口诀

1. 能用 frontmatter 解决，就不要写代码。
2. 能用 `quartz.config.yaml` 解决，就不要写 TS。
3. 能用 `custom.scss` 解决，就不要改组件。
4. 能写新组件解决，就不要改 `renderPage.tsx`。
5. 能写插件/Frame 解决，就不要改构建管线。

这样改得慢一点，但每一步都能知道自己动的是哪一层。对用这个项目学习网页开发来说，这个顺序最稳。
