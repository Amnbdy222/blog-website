# The Capital Drafts - Deployment Guide

## 🚀 Deploy to Netlify

Follow these steps to deploy your blog website to Netlify:

### **Option 1: Deploy via Netlify CLI (Recommended)**

1. **Install Netlify CLI** (if not already installed):
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**:
```bash
netlify login
```

3. **Initialize and Deploy**:
```bash
netlify init
```
Follow the prompts:
- Create & configure a new site
- Choose your team
- Site name: `the-capital-drafts` (or your preferred name)
- Build command: `npm run build`
- Publish directory: `.next`

4. **Deploy**:
```bash
netlify deploy --prod
```

---

### **Option 2: Deploy via Netlify Dashboard**

1. **Push to GitHub** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit - The Capital Drafts blog"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize
   - Select your repository

3. **Configure Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18 or higher

4. **Deploy**:
   - Click "Deploy site"
   - Wait for build to complete

---

### **Option 3: Drag & Drop (Quick Test)**

1. **Build locally**:
```bash
npm run build
```

2. **Deploy**:
   - Go to [netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `.next` folder
   - Get instant preview URL

---

## 📋 Pre-Deployment Checklist

✅ `netlify.toml` configuration file created
✅ Build command configured: `npm run build`
✅ Next.js plugin enabled
✅ Environment variables (if any) set in Netlify dashboard
✅ Custom domain (optional) configured in Netlify DNS

---

## 🔧 Build Configuration

The `netlify.toml` file includes:
- Next.js plugin for optimal performance
- Proper build and publish settings
- Node.js version specification
- Automatic redirects for SPA routing

---

## 🌐 Post-Deployment

After deployment, your site will be available at:
- **Netlify URL**: `https://your-site-name.netlify.app`
- **Custom Domain**: Configure in Netlify dashboard → Domain settings

---

## 🔄 Continuous Deployment

Once connected to GitHub, Netlify will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Run build checks before deployment

---

## 📊 Performance Tips

- ✅ Images are optimized with Next.js Image component
- ✅ Static generation for all pages
- ✅ Automatic code splitting
- ✅ Mobile-first responsive design
- ✅ SEO-friendly meta tags

---

## 🆘 Troubleshooting

**Build fails?**
- Check Node.js version (should be 18+)
- Verify all dependencies are in `package.json`
- Check build logs in Netlify dashboard

**Images not loading?**
- Ensure all image paths are correct
- Check Next.js Image configuration

**404 errors?**
- Verify `netlify.toml` redirects are configured
- Check Next.js routing configuration

---

## 📞 Support

For deployment issues:
- [Netlify Documentation](https://docs.netlify.com)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
