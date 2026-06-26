---
title: Quartz 官方功能改造地图
---

# Quartz 官方功能改造地图

这份笔记只整理“会明显改变博客功能、页面结构或外观”的官方能力。像普通 Markdown 语法、小型元数据插件、纯部署工具等，这里只在相关处顺带提，不单独展开。

本项目使用 Quartz 5。核心配置入口是根目录的 `quartz.config.yaml`；官方文档主要在 `docs/configuration.md`、`docs/layout.md`、`docs/layout-components.md`、`docs/features/` 和 `docs/plugins/`。

## 先记住三个改造层级

### 1. 全站配置：`configuration`

`quartz.config.yaml` 顶部的 `configuration` 影响整个站点。

适合改：

- 站点名：`pageTitle`、`pageTitleSuffix`。
- SPA 路由：`enableSPA`。开启后内部跳转更像单页应用，组件脚本需要注意 `nav` 事件。
- 链接悬浮预览：`enablePopovers`。关闭后内部链接 hover 不再弹预览。
- 语言和日期格式：`locale`。也影响组件内置文案。
- 站点 canonical 地址：`baseUrl`。RSS、sitemap、OG 图片、CNAME 等会用到。
- 忽略内容：`ignorePatterns`。用于从构建源头排除 private、templates、`.obsidian` 等目录。
- 主题基础：`theme.typography` 和 `theme.colors`。这是最安全的全站外观入口。

你当前项目已经设置：

- `enableSPA: true`
- `enablePopovers: true`
- `baseUrl: blog.ksmtang.com`
- 字体：`Schibsted Grotesk`、`Source Sans Pro`、`IBM Plex Mono`
- 明暗主题颜色都已经写在 YAML 内

### 2. 插件：`plugins`

Quartz 大多数功能都是插件。每个插件可以有：

- `enabled`: 是否启用。
- `order`: 在同类插件中的执行顺序，主要影响解析/过滤/生成顺序。
- `options`: 插件自己的参数。
- `layout`: 如果它有页面组件，可决定放在左栏、右栏、正文前后等位置。

插件大致分为：

- Transformer：改造内容，例如解析 frontmatter、Obsidian 语法、LaTeX、代码高亮。
- Filter：过滤内容，例如草稿、私密页。
- Emitter：生成额外文件，例如 RSS、sitemap、静态资源、重定向。
- Page Type：定义某类页面怎样生成，例如普通 Markdown、文件夹页、标签页、Canvas、Bases。
- Component：页面上的可视组件，例如搜索、图谱、反链、目录、评论、阅读模式。

### 3. 布局：`layout`

布局是功能和外观的交界处。组件插件的 `layout` 可以放到这些槽位：

- `left`: 左侧栏。桌面/平板竖排，移动端横排。
- `right`: 右侧栏。桌面竖排，平板/移动端更偏横向区域。
- `beforeBody`: 正文前，例如面包屑、标题、元信息、标签。
- `afterBody`: 正文后，例如评论、Stacked Pages 容器。
- `body`: schema 中保留，但本项目常见布局构建主要使用前四类。

常用布局参数：

- `priority`: 数字越小越靠前。
- `display`: `all`、`mobile-only`、`desktop-only`。
- `condition`: 按页面条件显示，例如 `not-index`、`has-tags`、`has-backlinks`、`has-toc`。
- `group`: 把多个组件组成 Flex 容器，例如当前的 `toolbar`。
- `groupOptions`: Flex 子项参数，例如 `grow`、`shrink`、`basis`、`align`。

本项目当前有一个 `toolbar` group，把 Search、Darkmode、Reader Mode 放在左栏同一行。

## 外观与阅读体验

### 主题颜色和基础字体

入口：

- `configuration.theme.colors`
- `configuration.theme.typography`
- `plugins: github:quartz-community/fonts`
- `quartz/styles/custom.scss`

能改什么：

- 明暗模式的背景、正文、链接、hover、边框、代码高亮底色。
- 标题、正文、代码、站点标题字体。
- 如果用 Fonts 插件，可以进一步改每级标题 `h1` 到 `h6` 的字体，设置 Google Fonts 权重/斜体，或 self-hosted fonts。

适合新手优先试：

1. 改 `theme.colors.lightMode.secondary` 和 `tertiary` 看链接颜色变化。
2. 改 `theme.typography.body/header/code` 看全站字体变化。
3. 在 `quartz/styles/custom.scss` 写少量覆盖样式，例如正文宽度、图片圆角、引用块风格。

### Darkmode

插件：`github:quartz-community/darkmode`

作用：

- 添加明暗模式按钮。
- 尊重用户系统主题偏好。
- 手动切换后会写入浏览器 localStorage。
- 会发出 `themechange` 事件，后续自定义脚本可以监听。

当前项目已启用，并放在左栏 `toolbar`。

可改方向：

- 通过 `layout.position`/`priority` 移到别处。
- 用 CSS 改按钮样式。
- 在自定义组件脚本中监听主题变化，同步图表、canvas 或第三方组件主题。

### Reader Mode

插件：`github:quartz-community/reader-mode`

作用：

- 提供阅读模式按钮。
- 点击后隐藏干扰性布局，优化正文阅读。

当前项目已启用，放在左栏 `toolbar`，并在 folder/tag 页通过 `layout.byPageType.exclude` 排除。

适合改：

- 是否启用。
- 放在左栏、正文前、或只在桌面显示。
- 用 CSS 改阅读模式开启后的布局变量和样式。

### Table of Contents

插件：`github:quartz-community/table-of-contents`

作用：

- 根据标题生成目录。
- 滚动时高亮当前阅读位置。
- 单页可用 frontmatter `enableToc: false` 隐藏。

当前项目已启用，放在右栏。

适合改：

- 目录深度。
- 是否折叠。
- 移动端是否隐藏：`display: desktop-only`。
- 是否只在有目录的页面显示：`condition: has-toc`。

### Callouts

来源：Obsidian Flavored Markdown + `quartz/styles/callouts.scss`

作用：

- 支持 Obsidian 风格 callout，例如 `[!note]`、`[!warning]`、`[!tip]`。
- 可折叠、可嵌套。

适合改：

- 在 `quartz/styles/custom.scss` 添加自定义 callout 类型样式。
- 在 `quartz/styles/callouts.scss` 调整图标和基础风格。

这是一个很好的外观练习点：效果明显，但不需要碰渲染管线。

### Syntax Highlighting

插件：`github:quartz-community/syntax-highlighting`

作用：

- 代码块语法高亮。
- 支持标题、行高亮、词高亮、行号、inline language 标记。

当前项目已启用：

```yaml
theme:
  light: github-light
  dark: github-dark
keepBackground: false
```

适合改：

- 换 Shikiji 主题。
- 改 `keepBackground` 决定是否保留主题自己的代码块背景。
- 在 `quartz/styles/syntax.scss` 或 `custom.scss` 微调代码块样式。

### Social Images / OG Images

插件：`github:quartz-community/og-image`

作用：

- 生成社交媒体预览图。
- 可以用 frontmatter 的 `socialImage`、`socialDescription` 定制单篇文章预览。
- 进阶时可自定义生成图片的 JSX 结构。

当前项目已启用。

适合改：

- 替换默认 `quartz/static/og-image.png`。
- 针对重点文章设置封面。
- 以后熟悉 TSX 后再自定义 OG 图片组件。

## 导航与发现

### Search

插件：`github:quartz-community/search`

作用：

- 全文搜索。
- 支持标签过滤、键盘导航、搜索结果预览。
- 使用 `contentIndex.json`。

当前项目已启用，放在左栏 `toolbar`，并设置 `groupOptions.grow: true`。

可配选项：

- `enablePreview`: 是否显示结果预览。
- `fieldPriority`: 搜索字段优先级，例如 title、content、tags。

适合改：

- 把搜索框放到 header 或正文前。
- 关闭 preview，做更紧凑的搜索。
- 调整搜索字段权重，做更偏标题/标签的搜索。

### Explorer

插件：`github:quartz-community/explorer`

作用：

- 左侧文件树。
- 支持文件夹展开/折叠、本地保存展开状态。
- 可用 TS override 自定义排序、过滤、显示名称。

当前项目已启用，放在左栏。

YAML 可配：

- `title`
- `folderClickBehavior`: `link` 或 `collapse`
- `folderDefaultState`: `collapsed` 或 `open`
- `useSavedState`

TS override 可配：

- `sortFn`
- `filterFn`
- `mapFn`
- `order`

适合改：

- 给目录项加 emoji 前缀。
- 隐藏某些目录或标签。
- 把文件排在文件夹前面。
- 把标题显示成中文别名。

### Graph

插件：`github:quartz-community/graph`

作用：

- 显示当前页面局部图谱和全站图谱。
- 节点来自内部链接、标签等内容索引。

当前项目已启用，放在右栏。

常见配置：

- `localGraph.depth`: 局部图谱深度。
- `globalGraph.depth`: 全站图谱深度，`-1` 表示不限制。
- `drag`、`zoom`: 是否允许拖拽/缩放。
- `repelForce`、`centerForce`、`linkDistance`: 力导向布局手感。
- `fontSize`、`opacityScale`: 视觉表现。
- `showTags`、`removeTags`: 标签节点显示。
- `enableRadial`、`focusOnHover`: 布局和交互。

适合改：

- 右栏图谱太挤时，降低 `fontSize` 或改 `scale`。
- 不想显示标签节点时设 `showTags: false`。
- 想要更“知识网络”视觉时增加 global graph 的可见性和交互。

### Backlinks

插件：`github:quartz-community/backlinks`

作用：

- 显示哪些页面链接到了当前页面。

当前项目已启用，放在右栏。

适合改：

- 放在正文后作为“相关引用”。
- 只在有反链时显示：`condition: has-backlinks`。
- 用 CSS 改成卡片式/紧凑列表。

### Breadcrumbs

插件：`github:quartz-community/breadcrumbs`

作用：

- 显示当前页面在路径层级中的位置。

当前项目已启用，放在 `beforeBody`，并设置 `condition: not-index`。

适合改：

- 根页面显示名。
- 是否显示当前页。
- 放在标题上方或侧栏。

### Recent Notes

插件：`github:quartz-community/recent-notes`

作用：

- 按日期和筛选条件显示最近文章。
- 可显示标签，可链接到更多页面。

当前项目已启用，放在左栏：

```yaml
title: Recent Notes
limit: 5
linkToMore: false
showTags: true
```

适合改：

- 改成“最近动态”“最新文章”。
- 限制数量。
- 隐藏标签。
- 用 TS override 按目录或标签过滤，例如只显示 journal_flow。

### Folder / Tag Listings

插件：

- `github:quartz-community/folder-page`
- `github:quartz-community/tag-page`
- `github:quartz-community/tag-list`

作用：

- 自动为文件夹生成索引页。
- 自动为标签生成标签页。
- `tag-list` 可以在文章头部显示当前页标签。

当前项目：

- folder-page、tag-page 已启用。
- tag-list 未启用。
- folder/tag 页右栏被清空，并排除了 reader-mode。

适合改：

- 给文件夹加 `index.md`，用 frontmatter 和正文描述文件夹。
- 启用 `tag-list`，让每篇文章标题下显示标签。
- 调整 folder/tag 页布局，让它们更像归档页。

### Stacked Pages

插件：`github:quartz-community/stacked-pages`

作用：

- Andy Matuschak 风格的横向堆叠页面。
- 点击内部链接不跳走，而是在右侧打开新 pane。
- URL hash 会记录当前堆叠路径。
- 默认移动端禁用。

当前项目未启用。

适合改：

- 如果你希望博客更像“知识花园/卡片盒”，这是一个很明显的交互升级。
- 可配 `maxTabs`、`mobileBreakpoint`、`showSpines`、`animateTransitions`。

注意：

- 这是强交互功能，会改变读者打开内部链接的习惯。
- 开启前最好本地测试移动端和长文章体验。

## 内容能力

### Obsidian Compatibility

插件：`github:quartz-community/obsidian-flavored-markdown`

作用：

- Wikilinks：`[[page]]`
- 嵌入：`![[page]]`
- 高亮：`==text==`
- Obsidian 注释：`%% comment %%`
- 标签：`#tag`
- callouts
- task lists
- Mermaid
- YouTube/Tweet/video embeds
- block references
- Obsidian URI
- footnotes

当前项目已启用，且 `enableCheckbox: true`。

这是 Quartz 最核心的内容体验插件。多数“写作体验”和“从 Obsidian 发布”的能力都在这里。

### Wikilinks 与 Popover

相关配置：

- `enablePopovers`
- `github:quartz-community/crawl-links`
- `github:quartz-community/obsidian-flavored-markdown`

作用：

- 自动解析内部链接。
- 支持链接悬浮预览。
- 支持 transclusion 嵌入。

适合改：

- 如果 hover 预览太干扰，关闭 `enablePopovers`。
- 如果你写了新组件，并希望它内部链接也有 popover，要让链接位于 `.popover-hint` 相关范围或遵循现有内容结构。

### LaTeX

插件：`github:quartz-community/latex`

作用：

- 渲染行内和块级数学公式。
- 默认使用 KaTeX。

当前项目已启用。

适合改：

- 改 `renderEngine`。
- 添加 mhchem 等扩展。
- 调整数学块 CSS。

### Mermaid

来源：Obsidian compatibility。

作用：

- 在 Markdown 中写流程图、时序图、时间线等。
- 默认适配站点主题。

适合改：

- 写技术笔记、课程笔记时很好用。
- 如果图表主题不协调，可以查 Mermaid 相关 CSS/初始化脚本。

### Citations

插件：`github:quartz-community/citations`

作用：

- 支持 BibTeX 引用。
- 适合学术笔记、论文阅读笔记。

当前项目未启用。

适合改：

- 如果你希望文章能写 `[@key]` 这类引用并生成参考文献，可启用它。

### Bases

插件：`github:quartz-community/bases-page`

作用：

- 渲染 Obsidian `.base` 文件。
- 把笔记显示成表格、列表、卡片、图库、看板等数据库视图。

当前项目已启用。

适合改：

- 做阅读清单、课程索引、项目列表、文章数据库。
- 和 frontmatter 配合使用，能把 blog 从“文章列表”扩展成“可查询资料库”。

### Canvas

插件：`github:quartz-community/canvas-page`

作用：

- 渲染 Obsidian `.canvas` 文件。
- 支持平移、缩放、文本节点、文件节点、链接节点、组、边。
- 插件自带 `canvas` frame，可全屏显示并带可切换侧栏。

当前项目已启用。

适合改：

- 做知识地图、专题导览、课程路线图。
- 如果不想全屏，可在 `layout.byPageType.canvas.template` 中改成 `default` 或 `minimal`。

## 互动和社区功能

### Comments

插件：`github:quartz-community/comments`

作用：

- 接入评论系统，目前官方文档主要介绍 Giscus。
- 支持自定义 Giscus 主题 CSS。
- 可通过 frontmatter `comments: false` 单页关闭。

当前项目已启用，但配置里仍是 `TODO:username/repo-name`、`TODO:your-repo-id` 等占位值，所以正式使用前必须补全。

适合改：

- 用 GitHub Discussions 做文章评论。
- 设置 `lang` 为中文或日文等。
- 用 `inputPosition` 控制评论输入框位置。
- 自定义 `quartz/static/giscus/light.css` 和 `dark.css`，再配置 `themeUrl`/`lightTheme`/`darkTheme`。

注意：

- 评论是外部服务，部署前要确保 repo、repoId、categoryId 正确。
- 如果不准备开放评论，建议先设 `enabled: false`，避免页面出现不可用组件。

### Encrypted Pages

插件：`github:quartz-community/encrypted-pages`

作用：

- 用 frontmatter `password` 给页面加密。
- 构建时把内容替换为密文，浏览器端用 Web Crypto 解密。
- 支持 `unlisted` 和 `stealth`，控制是否从搜索、图谱、Explorer、RSS、sitemap 等发现面隐藏。

当前项目未启用。

适合改：

- 分享半私密文章。
- 做只给知道链接/密码的人看的页面。

重要限制：

- 密码写在 frontmatter，公开仓库中要非常谨慎。
- 静态站点的客户端加密不等于高安全权限系统，只适合防普通浏览。
- 插件顺序很重要，`CrawlLinks` 等需要读取真实 HTML 的插件应在 EncryptedPages 之前运行。

### Private / Unlisted / Draft

相关入口：

- `configuration.ignorePatterns`
- `github:quartz-community/remove-draft`
- `github:quartz-community/explicit-publish`
- `github:quartz-community/unlisted-pages`

当前项目：

- `remove-draft` 已启用。
- `unlisted-pages` 已启用。
- `explicit-publish` 未启用。

区别：

- `ignorePatterns`: 构建一开始就忽略，最彻底。
- `draft: true`: 被 remove-draft 过滤，不发布。
- `publish: true`: explicit-publish 的白名单模式，只发布明确标记的文章。
- `unlisted: true`: 页面仍可直接访问，但不出现在搜索/图谱/列表/RSS 等发现面。

适合改：

- 想临时写草稿：用 `draft: true`。
- 想有“隐藏但可分享链接”的文章：用 `unlisted: true`。
- 想整个目录不进入 Quartz：放进 `ignorePatterns`。

## 发布、索引和 SEO

### Content Index / RSS / Sitemap

插件：`github:quartz-community/content-index`

作用：

- 生成 `contentIndex.json`，供搜索、图谱等前端组件使用。
- 生成 RSS。
- 生成 sitemap。

当前项目已启用：

```yaml
enableSiteMap: true
enableRSS: true
```

适合改：

- 如果你不需要 RSS，可以关闭。
- 如果希望搜索和图谱正常工作，不要随便移除 content index。
- `baseUrl` 必须正确，否则 RSS/sitemap/社交链接会不准。

### Alias Redirects

插件：`github:quartz-community/alias-redirects`

作用：

- 根据 frontmatter aliases 生成重定向页。
- 迁移旧链接、改文件名时很有用。
- Quartz v5 URL 小写化后，也可帮助保留旧大小写链接。

当前项目已启用。

适合改：

- 改文章标题/路径时，在 frontmatter 加 aliases，保留旧入口。

### Favicon / CNAME / Static Assets

插件：

- `github:quartz-community/favicon`
- `github:quartz-community/cname`
- 内部 `Static`、`Assets`

当前项目已启用 favicon、cname。

适合改：

- 替换 `quartz/static/icon.png` 改站点图标。
- `CNAME` 和 `configuration.baseUrl` 保持一致。
- 把自定义 JS/CSS/图片放入 `quartz/static` 或内容目录，按插件规则复制到输出。

## 页面骨架：Page Frames

官方内置 frame：

- `default`: 三栏布局，普通文章、文件夹页、标签页、Bases 默认使用。
- `full-width`: 无侧栏，单列全宽。
- `minimal`: 无侧栏、无 header/beforeBody chrome，只渲染内容和 footer。404 默认使用。

插件也能提供 frame，例如 Canvas 插件提供 `canvas` frame。

配置入口：

```yaml
layout:
  byPageType:
    canvas:
      template: minimal
```

适合改：

- 让某类页面全宽，例如 Canvas、Bases、专题页。
- 让 404、落地页、相册页更沉浸。

注意：

- frame 改的是页面骨架，不只是组件位置。
- 改 frame 后通常还要配合 CSS 检查桌面、平板、移动端。

## TS override：当 YAML 不够用时

有些配置需要函数，YAML 写不了，比如 Explorer 的排序/过滤、Recent Notes 的过滤、复杂条件渲染。这时用根目录 `quartz.ts`。

当前 `quartz.ts` 很简单：

```ts
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
```

可改方向：

- 在 `loadQuartzConfig()` 前调用插件 override，例如 `ExternalPlugin.Explorer({ mapFn })`。
- 给 `loadQuartzConfig({ ... })` 传全站配置覆盖。
- 给 `loadQuartzLayout({ defaults, byPageType })` 传布局覆盖。

原则：

- 能用 YAML 就先用 YAML。
- 需要函数、复杂条件、按页面类型完全重排时，再用 TS override。
- 插件 override 必须放在 `loadQuartzConfig()` 之前，否则组件已经实例化，覆盖不会生效。

## 对你当前站点的优先改造建议

### 最低风险，适合第一轮

- 修改 `configuration.pageTitle`，换成真实博客名。
- 修改 `theme.colors` 和 `theme.typography`。
- 在 `quartz/styles/custom.scss` 写全站样式覆盖。
- 调整组件位置：Search、Recent Notes、Graph、Backlinks、TOC。
- 修正或关闭 Comments 插件，因为当前仍是 TODO 占位。

### 中等风险，适合熟悉后

- 启用 `tag-list`，让文章显示标签。
- 给 folder/tag 页做专门布局。
- 用 Explorer 的 TS override 自定义目录树。
- 用 Recent Notes 的 TS override 做分区最新文章。
- 给 Canvas/Bases 改 frame。

### 高收益但需要测试

- 启用 Stacked Pages。
- 启用 Encrypted Pages。
- 自定义 OG 图片生成结构。
- 写自己的组件插件或本地组件。
- 写新的 Page Type 或 Frame。
