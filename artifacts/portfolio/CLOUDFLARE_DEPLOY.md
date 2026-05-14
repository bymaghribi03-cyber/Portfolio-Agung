# Cloudflare Pages Deployment

## Build Settings

| Setting | Value |
|---|---|
| **Framework preset** | None (Vite) |
| **Build command** | `pnpm --filter @workspace/portfolio run build` |
| **Build output directory** | `artifacts/portfolio/dist/public` |
| **Root directory** | `/` (repo root) |
| **Node.js version** | 20 or 22 |

## Environment Variables

No environment variables are required for production builds.

## Notes

- The `_redirects` file in `public/` handles SPA client-side routing — all paths fall through to `index.html`.
- No server-side API is deployed to Cloudflare Pages; the portfolio is fully static.
- All image assets are bundled inside `dist/public` from `artifacts/portfolio/public/`.
