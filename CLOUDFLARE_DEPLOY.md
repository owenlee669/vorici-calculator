# Cloudflare Pages 部署指南

## 项目状态

✅ 已完成静态导出配置，可以部署到 Cloudflare Pages

## 修改总结

### 1. 配置文件 (`next.config.mjs`)
- 添加 `output: 'export'` 启用静态导出
- 添加 `distDir: 'dist'` 指定输出目录
- 设置 `images.unoptimized: true`（Cloudflare 不支持 Next.js 图片优化）

### 2. 动态路由 (`[locale]/layout.tsx`)
- 添加 `generateStaticParams()` 为静态导出预渲染所有语言路由

### 3. 博客路由 (`[locale]/blog/[slug]/page.tsx`)
- 移动 `generateStaticParams()` 到文件顶部
- 添加空文章回退处理

### 4. SEO 文件 (`robots.ts`, `sitemap.ts`)
- 添加 `export const dynamic = 'force-static'`

### 5. API 功能降级（保留代码，暂停使用）

以下功能已添加 `IS_STATIC_EXPORT = true` 开关，按钮显示 "Coming Soon"：

- `components/home/ProductSubmission.tsx` - 产品提交表单
- `components/footer/Newsletter.tsx` - 邮件订阅
- `app/[locale]/unsubscribe/page.tsx` - 取消订阅页面

### 6. Server Actions 占位文件

以下文件已替换为占位实现：
- `actions/submission/index.ts`
- `actions/resend/index.ts`

原始文件备份为 `.ts.bak`，恢复方法见下方。

### 6. Middleware 文件 (`proxy.ts`)

`proxy.ts` 是 next-intl 的 middleware 文件，用于 i18n 路由重定向。静态导出不支持 middleware，已重命名为 `proxy.ts.bak`。

## 部署到 Cloudflare Pages

### 方法一：使用 Wrangler CLI

1. **安装 Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **登录 Cloudflare**
   ```bash
   wrangler login
   ```

3. **构建项目**
   ```bash
   pnpm build
   ```

4. **部署**
   ```bash
   wrangler pages deploy dist
   ```

### 方法二：Git 集成（推荐）

1. 在 [Cloudflare Dashboard](https://dash.cloudflare.com) 创建 Pages 项目
2. 连接 GitHub 仓库
3. 构建设置：
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
4. 添加环境变量（见下方）
5. 保存并部署

## 环境变量

在 Cloudflare Dashboard > Pages > 项目设置 > Environment variables 中添加：

```
NEXT_PUBLIC_SITE_URL=https://your-domain.pages.dev
NEXT_PUBLIC_LOCALE_DETECTION=false
NEXT_PUBLIC_OPTIMIZED_IMAGES=false
```

## 恢复 API 功能（后续接入）

当你准备好接入 API 时，按以下步骤操作：

### 快速恢复脚本

```bash
# Windows (Git Bash)
./restore-api.sh

# 或手动执行以下步骤：
```

### 手动恢复步骤

1. **恢复 Server Actions 和 Middleware 文件**
   ```bash
   mv actions/submission/index.ts.bak actions/submission/index.ts
   mv actions/resend/index.ts.bak actions/resend/index.ts
   mv proxy.ts.bak proxy.ts
   ```

2. **修改静态导出开关（3个文件）**

   将以下文件中的 `IS_STATIC_EXPORT = true` 改为 `IS_STATIC_EXPORT = false`：
   - `components/home/ProductSubmission.tsx`
   - `components/footer/Newsletter.tsx`
   - `app/[locale]/unsubscribe/page.tsx`

3. **修改 Next.js 配置**

   编辑 `next.config.mjs`，移除静态导出配置：
   ```javascript
   // 移除或注释掉以下行
   // output: 'export',
   // distDir: 'dist',
   ```

4. **安装 Cloudflare Workers 适配器（可选）**

   如果要部署到 Cloudflare Workers 以支持完整功能：
   ```bash
   pnpm i -D @cloudflare/next-on-pages
   ```

5. **配置环境变量**

   添加 API 所需的环境变量：
   ```
   RESEND_API_KEY=your_resend_api_key
   ADMIN_EMAIL=your_admin_email
   UPSTASH_REDIS_REST_URL=your_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_redis_token
   DAY_MAX_SUBMISSIONS=10
   ```

6. **重新构建和部署**
   ```bash
   pnpm build
   wrangler pages deploy dist
   ```

## 注意事项

1. **API Routes 在静态导出中不可用**：`/api/newsletter` 在静态导出模式下不会工作
2. **图片优化已禁用**：使用 `unoptimized: true`，如需图片优化建议使用 Cloudflare Images
3. **Server Actions 已禁用**：已替换为占位实现
4. **博客内容**：当前只有 `ja` 和 `zh` 语言有博客内容，`en` 目录为空

## 常见问题

### Q: 为什么构建时显示 "Server Actions are not supported"？
A: Next.js 静态导出不支持 Server Actions。我们已将相关文件替换为占位实现。

### Q: 如何预览本地构建？
A: 使用 `npx serve dist` 或 `python -m http.server 3000 --directory dist`

### Q: 可以恢复 API 同时保持静态导出吗？
A: 不可以。API 需要服务器端运行，静态导出是纯静态 HTML。如需 API 功能，需使用 Cloudflare Workers 或 Vercel。

## 文件变更清单

| 文件 | 变更类型 | 说明 |
|------|---------|------|
| `next.config.mjs` | 修改 | 添加静态导出配置 |
| `app/[locale]/layout.tsx` | 修改 | 添加 generateStaticParams |
| `app/[locale]/blog/[slug]/page.tsx` | 修改 | 调整 generateStaticParams 位置 |
| `app/robots.ts` | 修改 | 添加 force-static |
| `app/sitemap.ts` | 修改 | 添加 force-static |
| `components/home/ProductSubmission.tsx` | 修改 | 添加 IS_STATIC_EXPORT 开关 |
| `components/footer/Newsletter.tsx` | 修改 | 添加 IS_STATIC_EXPORT 开关 |
| `app/[locale]/unsubscribe/page.tsx` | 修改 | 添加 IS_STATIC_EXPORT 开关 |
| `proxy.ts` | 重命名 | 已重命名为 .bak（静态导出不支持 middleware） |
| `actions/submission/index.ts` | 替换 | 占位实现，原文件备份为 .bak |
| `actions/resend/index.ts` | 替换 | 占位实现，原文件备份为 .bak |
