# Wh Claw 使用指南

对标 sdifen.com 改造的应用产品展示站：首页卡片瀑布流 + 点击卡片进入产品详情页。

技术栈：React 19 + TypeScript + Vite 7 + Tailwind CSS 3 + shadcn/ui + react-router-dom + react-i18next（中英双语）

---

## 1. 快速开始

所有命令都在 `app/` 目录下执行：

```bash
cd app
npm install        # 首次安装依赖
npm run dev        # 启动开发服务器（默认 http://localhost:5173）
npm run build      # 生产构建（先 tsc 类型检查，再 vite 打包，输出到 app/dist/）
npm run lint       # ESLint 检查
npm run preview    # 本地预览生产构建
```

> Windows 下若 dev server 报 `EACCES: permission denied`，是端口被系统保留段占用，换端口即可：
> `npm run dev -- --host 127.0.0.1 --port 3000`

---

## 2. 站点结构

```
/                    首页：导航（含搜索）+ 精简 Hero + 分类 Tab + 产品瀑布流 + 页脚
/product/:slug       产品详情页：面包屑 / 介绍 / 特性 / 截图 / 规格侧栏 / 下载按钮 / 相关产品
```

**首页瀑布流**
- 每张卡片 = 一个产品：封面图、角标（置顶/推荐/新）、名称+版本、简介、#标签、日期、浏览/点赞/评论数
- 排序规则：置顶优先 → 日期倒序
- 分类 Tab：全部 / 工具 / 库 / 教程（点击过滤）
- 搜索：导航栏输入关键词回车 → 跳转到 `/?q=关键词`，按名称和标签过滤

**产品详情页**
- 左侧主栏：面包屑 → 标题+版本 → 互动数据 → 封面 → 产品介绍 → 核心特性 → 界面截图 → 标签
- 右侧粘性规格卡：版本 / 平台 / 大小 / 许可 / 分类 / 更新日期 + 「免费下载」「查看源码」按钮
- 底部：相关产品推荐（同分类，最多 4 个）
- 未知 slug 自动显示 404 页

---

## 3. 如何添加 / 修改产品（最常用）

所有产品数据集中在 **`app/src/config.ts`** 的 `productsConfig.products` 数组中，改这一个文件即可，无需动组件。

### 3.1 产品字段说明

```typescript
{
  id: 13,                                    // 数字，全站唯一
  slug: 'my-new-app',                        // URL 路径，详情页为 /product/my-new-app（小写字母+连字符，唯一）
  name: { en: 'My App', zh: '我的应用' },     // 双语名称
  version: '1.0.0',                          // 版本号
  category: 'Tools',                         // 分类，只能是 'Tools' | 'Libraries' | 'Tutorials'
  tags: ['AI', 'CLI'],                       // 标签（不翻译，技术词直接写）
  icon: '/images/my-app.jpg',                // 卡片封面图（放 app/public/images/ 下）
  screenshots: ['/images/my-app.jpg'],       // 详情页截图画廊，可为空数组 []
  badge: 'new',                              // 角标，可选：'pinned'置顶 | 'recommended'推荐 | 'new'新 | 不写则无
  date: '2026-08-03',                        // 更新日期（影响排序，新日期排前）
  views: 100,                                // 浏览数
  likes: 10,                                 // 点赞数
  comments: 2,                               // 评论数
  excerpt: { en: 'Short pitch.', zh: '一句话简介。' },        // 卡片上的一句话简介
  description: [                             // 详情页介绍段落（数组，每个元素一段）
    { en: 'Paragraph 1...', zh: '第一段……' },
    { en: 'Paragraph 2...', zh: '第二段……' },
  ],
  features: [                                // 详情页核心特性列表
    { en: 'Feature A', zh: '特性 A' },
  ],
  size: '12 MB',                             // 大小（教程类可写 '—'）
  platform: 'Windows / macOS / Linux',       // 平台
  license: 'MIT',                            // 许可证
  repoUrl: 'https://github.com/xxx/xxx',             // 「查看源码」按钮链接
  downloadUrl: 'https://github.com/xxx/xxx/releases',// 「免费下载」按钮链接
}
```

### 3.2 添加产品的步骤

1. 把封面图/截图放到 `app/public/images/`（引用路径为 `/images/文件名.jpg`）
2. 打开 `app/src/config.ts`，在 `products` 数组中追加上述结构的对象
3. 保存，dev server 热更新即可看到；构建前 `npm run build` 会做类型检查，字段写错会直接报错

### 3.3 产品图片建议

- 封面图比例不限（瀑布流靠自然高度形成错落感），建议宽度 ≥ 800px
- 想在卡片上制造高度差：给不同产品配不同宽高比的封面即可

---

## 4. 双语（i18n）说明

- **产品内容**（名称/简介/介绍/特性）：写在 `config.ts` 的 `{ en, zh }` 双语对象里，随语言切换自动显示对应语言
- **界面文案**（按钮、标题、标签等）：在 `app/src/i18n/locales/en.json` 和 `zh.json`
  - `feed.*`：首页瀑布流区块文案
  - `product.*`：详情页文案 + 角标文字（`product.badge.*`）
  - `resources.categories.*`：分类 Tab 名称
- 新增界面文案时，**两个 json 文件都要加同名 key**
- 组件中取产品文本用 `useLocalized()` hook，取界面文案用 `t('key')`

---

## 5. 常见定制

| 需求 | 改哪里 |
|---|---|
| 改分类（增删 Tools/Libraries/Tutorials） | `config.ts` 的 `productsConfig.categories` + `ProductCategory` 类型 + 两个 locale 的 `resources.categories` |
| 改主题色（当前 `#8b6d4b` 金棕色） | 全局搜索 `#8b6d4b` 替换 |
| 改站点名 | `config.ts` 的 `navigationConfig.brandName` 和 `siteConfig`；浏览器标题在 `app/index.html` |
| 改瀑布流列数 | `app/src/sections/ProductFeed.tsx` 中 `columns-1 sm:columns-2 lg:columns-3` |
| 改相关产品数量 | 详情页调用 `getRelatedProducts(product, 4)` 的第二个参数 |
| 改卡片样式 | `app/src/components/ProductCard.tsx` |
| 改详情页布局 | `app/src/pages/ProductDetail.tsx` |

---

## 6. 代码结构（改造后）

```
app/src/
  config.ts                      # ★ 全部站点配置 + 产品数据（最常改）
  App.tsx                        # 路由：/ 和 /product/:slug
  main.tsx                       # 入口
  pages/
    ProductDetail.tsx            # 产品详情页
  sections/
    Navigation.tsx               # 顶部导航（搜索 → /?q=）
    SlimHero.tsx                 # 首页精简 Hero
    ProductFeed.tsx              # 首页瀑布流（Tab 过滤 + 搜索过滤 + 置顶排序）
    Footer.tsx                   # 页脚
  components/
    ProductCard.tsx              # 瀑布流卡片
    RelatedProductCard.tsx       # 详情页底部相关产品小卡片
    ScrollToTop.tsx              # 路由切换回顶部
    LanguageSwitcher.tsx         # 语言切换
  hooks/
    use-localized.ts             # 双语文本选择 hook
  i18n/locales/
    en.json / zh.json            # 界面文案
```

---

## 7. 部署注意

这是 SPA（单页应用），`/product/:slug` 是前端路由。部署到静态托管（Nginx / Vercel / Netlify / OSS）时，**必须配置 history 路由回退**：所有路径都回退到 `index.html`，否则直接访问详情页 URL 会 404。

- **Nginx**：
  ```nginx
  location / {
    try_files $uri $uri/ /index.html;
  }
  ```
- **Netlify**：`app/public/_redirects` 写 `/* /index.html 200`
- **Vercel**：开箱即用，无需配置

---

## 8. 已知事项

- `npm run lint` 有 8 个报错，全部来自 shadcn/ui 预置组件（`components/ui/*`），为脚手架自带的历史问题，与本次改造无关，不影响构建和运行
- 浏览/点赞/评论数目前是 `config.ts` 里的静态展示数据；如需真实互动数据，需要接后端接口（当前无后端）
- 未配置测试框架，如需单测建议用 Vitest
