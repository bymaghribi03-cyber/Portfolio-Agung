# Cloudflare Pages Deployment

## Why the Workspace Error Happens

Wrangler's auto-detection fails when it's run from a pnpm workspace root without an
explicit output directory. **Always pass the directory explicitly** — all scripts here
do this automatically.

## One-Command Deploy (CLI)

```bash
# Build + deploy in one step
bash deploy.sh

# Or using pnpm
pnpm run deploy
```

This runs `wrangler pages deploy dist/public --project-name agung-maghribi-portfolio`
from inside `artifacts/portfolio/` — bypassing the workspace detection issue entirely.

## Cloudflare Pages Dashboard Settings

| Setting | Value |
|---|---|
| **Framework preset** | None (Vite) |
| **Root directory** | `/` (repo root) |
| **Build command** | `pnpm --filter @workspace/portfolio run build` |
| **Build output directory** | `artifacts/portfolio/dist/public` |
| **Node.js version** | `22` |

Cloudflare reads `wrangler.toml` at the repo root for the project name and output path.
The `[build]` section there drives automatic deploys on every git push.

## Manual CLI Deploy (step by step)

```bash
# 1. Build
pnpm --filter @workspace/portfolio run build

# 2. Deploy — always pass the dist directory explicitly
cd artifacts/portfolio
npx wrangler pages deploy dist/public --project-name agung-maghribi-portfolio
```

## Environment Variables

No environment variables are required for production builds.

## Notes

- `artifacts/portfolio/wrangler.toml` — used when wrangler runs from the portfolio directory
- `wrangler.toml` (root) — used by Cloudflare Pages dashboard CI
- `public/_redirects` — SPA routing: all paths fall through to `index.html`
- All image assets are bundled inside `dist/public` from `artifacts/portfolio/public/`
