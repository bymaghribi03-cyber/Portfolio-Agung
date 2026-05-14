#!/usr/bin/env bash
set -e

echo "==> Building portfolio..."
pnpm --filter @workspace/portfolio run build

echo "==> Deploying to Cloudflare Pages..."
# Always pass the directory explicitly to avoid the workspace-root detection error
pnpm --filter @workspace/portfolio run deploy

echo "==> Done!"
