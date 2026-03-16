#!/bin/bash
# 恢复 API 功能的脚本

echo "恢复 API 功能..."

# 恢复 Server Actions 文件
if [ -f "actions/submission/index.ts.bak" ]; then
    mv actions/submission/index.ts.bak actions/submission/index.ts
    echo "✓ 恢复 actions/submission/index.ts"
else
    echo "✗ actions/submission/index.ts.bak 不存在"
fi

if [ -f "actions/resend/index.ts.bak" ]; then
    mv actions/resend/index.ts.bak actions/resend/index.ts
    echo "✓ 恢复 actions/resend/index.ts"
else
    echo "✗ actions/resend/index.ts.bak 不存在"
fi

# 恢复 middleware 文件
if [ -f "proxy.ts.bak" ]; then
    mv proxy.ts.bak proxy.ts
    echo "✓ 恢复 proxy.ts (next-intl middleware)"
else
    echo "✗ proxy.ts.bak 不存在"
fi

# 提示用户手动修改 IS_STATIC_EXPORT
echo ""
echo "请手动修改以下文件中的 IS_STATIC_EXPORT:"
echo "  - components/home/ProductSubmission.tsx"
echo "  - components/footer/Newsletter.tsx"
echo "  - app/[locale]/unsubscribe/page.tsx"
echo ""
echo "将 const IS_STATIC_EXPORT = true 改为 const IS_STATIC_EXPORT = false"
echo ""
echo "如需部署到支持 API 的平台（如 Cloudflare Workers），请参阅 CLOUDFLARE_DEPLOY.md"
