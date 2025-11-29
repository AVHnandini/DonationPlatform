# Deployment Guide

This guide covers deploying the Donation Platform frontend and backend to production.

## 📋 Deployment Options

### Option 1: Vercel (Frontend) + Railway (Backend) ⭐ RECOMMENDED

**Pros:** Easiest setup, free tier, GitHub integration, automatic deployments

#### Step 1: Deploy Frontend to Vercel

1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Choose `AVHnandini/DonationPlatform`
4. Framework preset: **Other** (since it's static HTML)
5. Click "Deploy"

**Post-deployment:**
- Frontend URL: `https://donation-platform-xxxxx.vercel.app`
- Update your backend API URL in `js/payment.js` (see step below)

#### Step 2: Deploy Backend to Railway

1. Go to https://railway.app
2. Create new project → "Deploy from GitHub repo"
3. Select `AVHnandini/DonationPlatform`
4. Railway will auto-detect Node.js
5. Configure environment variables:
   - `PORT=3000` (or Railway's assigned port)
   - `RAZORPAY_KEY_ID=your_key_id`
   - `RAZORPAY_KEY_SECRET=your_key_secret`

**Backend URL:** Railway provides automatic HTTPS URL

#### Step 3: Update Frontend API Calls

Edit `js/payment.js` and replace:
```javascript
// OLD (localhost)
const response = await fetch('http://localhost:5000/payment/create-order', {

// NEW (Railway backend)
const response = await fetch('https://your-railway-app.up.railway.app/payment/create-order', {
```

Also update in `campaign.html` if there are other API calls.

---

### Option 2: Netlify (Frontend) + Heroku (Backend)

#### Deploy Frontend to Netlify

1. Go to https://netlify.com/drop
2. Drag and drop your project folder
3. Or: Connect GitHub → New site from Git → Select repository

#### Deploy Backend to Heroku

1. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
2. Login: `heroku login`
3. Navigate to project: `cd DonationPlatform`
4. Create app: `heroku create your-app-name`
5. Configure environment variables:
   ```bash
   heroku config:set RAZORPAY_KEY_ID=your_key_id
   heroku config:set RAZORPAY_KEY_SECRET=your_key_secret
   heroku config:set PORT=5000
   ```
6. Deploy: `git push heroku main`

---

### Option 3: Firebase Hosting (Frontend) + Cloud Functions (Backend)

#### Deploy Frontend to Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize: `firebase init`
3. Deploy: `firebase deploy --only hosting`

#### Deploy Backend to Firebase Cloud Functions

1. Create Cloud Function for API
2. Deploy: `firebase deploy --only functions`

---

## 🔑 Environment Variables Setup

Create a `.env` file in `backend/` folder with:

```
PORT=5000
RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_ID
RAZORPAY_KEY_SECRET=YOUR_KEY_SECRET
NODE_ENV=production
```

**⚠️ Never commit `.env` file!** It's in `.gitignore` already.

---

## 🚀 Production Checklist

Before deploying, ensure:

- ✅ Firebase project is live and configured
- ✅ Razorpay account is set up with live keys (for production)
- ✅ All API URLs point to production backend
- ✅ CORS is properly configured in `backend/server.js`
- ✅ Environment variables are set on hosting platform
- ✅ Images are optimized and loading correctly
- ✅ Payment flow tested with test keys
- ✅ Authentication tested (signup/login)
- ✅ All links are using HTTPS

---

## 📝 CORS Configuration

Your `backend/server.js` already has CORS enabled, but for production, update it:

```javascript
app.use(cors({
  origin: ['https://your-vercel-frontend.vercel.app', 'https://yourdomain.com'],
  credentials: true
}));
```

---

## 🧪 Testing Deployment

1. **Test Frontend**
   - Open deployed URL
   - Check all pages load
   - Verify images display
   - Test responsive design on mobile

2. **Test Backend API**
   ```bash
   curl -X POST https://your-backend.railway.app/payment/create-order \
     -H "Content-Type: application/json" \
     -d '{"amount": 100, "currency": "INR"}'
   ```

3. **Test Full Flow**
   - Sign up with test email
   - Browse campaigns
   - Make test payment (use Razorpay test card)
   - Verify donation recorded

---

## 🔐 Switch to Live Razorpay Keys

Once tested:

1. Get Live Keys from Razorpay Dashboard
2. Update environment variables:
   ```
   RAZORPAY_KEY_ID=rzp_live_YOUR_LIVE_KEY
   RAZORPAY_KEY_SECRET=YOUR_LIVE_SECRET
   ```
3. Update test card references to production

---

## 📊 Monitor Deployment

### Vercel Dashboard
- Automatic deployments on push to `main`
- Real-time logs and analytics
- Performance insights

### Railway Dashboard
- Server logs
- Database connections
- Environment variables management

---

## 🐛 Troubleshooting

### "CORS error" in browser console
- Check backend CORS configuration
- Verify frontend URL is in allowed origins
- Ensure credentials flag is set correctly

### "Payment failed" errors
- Verify Razorpay keys are correct
- Check that backend is running
- Review browser console for API errors

### "Images not loading"
- Verify image paths in production
- Check if images folder is deployed
- Ensure relative paths work in production

### "Firebase not connecting"
- Verify Firebase config in `js/firebaseConfig.js`
- Check Firestore rules allow read/write
- Ensure API keys are correct

---

## 📱 Custom Domain Setup

Once deployed:

1. Buy domain (Namecheap, GoDaddy, etc.)
2. Point DNS to hosting provider
3. Set up SSL certificate (auto-included on Vercel/Railway)
4. Update frontend API URLs to use domain

---

## 🆘 Deployment Support

- **Vercel Issues:** https://vercel.com/support
- **Railway Issues:** https://railway.app/support
- **Firebase Issues:** https://firebase.google.com/support
- **Razorpay Issues:** https://razorpay.com/support

---

## Quick Deploy Commands

### Vercel
```bash
npm install -g vercel
vercel
```

### Railway
```bash
# Just push to main, Railway auto-deploys
git push origin main
```

### Heroku
```bash
heroku login
heroku create your-app-name
git push heroku main
heroku config
```

---

**Recommended:** Start with **Vercel + Railway** for simplest setup! 🚀
