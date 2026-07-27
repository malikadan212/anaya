# Deployment Guide

## Deploying to Vercel

### Prerequisites
- A Vercel account
- GitHub repository with your code

### Steps

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/anaya.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the `vercel.json` configuration

3. **Configure Build Settings** (auto-configured via vercel.json)
   - Build Command: `pnpm run build`
   - Output Directory: `artifacts/anaya/dist/public`
   - Install Command: `pnpm install`

4. **Environment Variables** (if using API/Database)
   - Add `DATABASE_URL` if using PostgreSQL
   - Add any other required environment variables in Vercel dashboard

5. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - Every push to main branch will auto-deploy

### Custom Domain (Optional)
- Go to your project settings in Vercel
- Click "Domains"
- Add your custom domain
- Update DNS records as instructed

## Local Development

```bash
# Install dependencies
pnpm install

# Start frontend dev server
pnpm --filter @workspace/anaya run dev

# Start API server (optional)
pnpm --filter @workspace/api-server run dev
```

## Production Build Locally

```bash
# Build all packages
pnpm run build

# Preview the production build
pnpm --filter @workspace/anaya run serve
```

## Troubleshooting

### Build fails on Vercel
- Check that Node.js version is 24 or higher
- Ensure pnpm-lock.yaml is committed
- Verify all dependencies are in package.json

### 404 on page refresh
- The `vercel.json` rewrites configuration handles this
- Ensure the vercel.json file is in the root directory

### Slow build times
- Vercel caches dependencies automatically
- First build may be slow, subsequent builds are faster

## GitHub Actions

The project includes a CI workflow that:
- Runs on every push and pull request
- Installs dependencies
- Type checks the code
- Builds the project

This ensures code quality before deployment.
