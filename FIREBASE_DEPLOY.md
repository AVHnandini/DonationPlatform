# 🔥 Firebase Deployment Guide (Option 3)

Deploy your entire Donation Platform on Firebase - frontend hosting + backend cloud functions in one place!

## ✅ Prerequisites

- Firebase account (free tier available): https://firebase.google.com
- Firebase CLI installed
- Node.js 18+ installed
- Your project already on GitHub

---

## 📋 Step-by-Step Setup

### Step 1: Create Firebase Project

1. Go to https://console.firebase.google.com
2. Click **"Create a project"**
3. Enter project name: `DonationPlatform`
4. **Enable Google Analytics** (optional)
5. Click **"Create project"**
6. Wait for setup to complete

### Step 2: Install Firebase CLI

```bash
npm install -g firebase-tools
```

### Step 3: Authenticate Firebase

```bash
firebase login
```

This opens browser to authenticate your Google account.

### Step 4: Update .firebaserc

Edit `.firebaserc` in your project root:

```json
{
  "projects": {
    "default": "YOUR-PROJECT-ID"
  }
}
```

Replace `YOUR-PROJECT-ID` with your actual Firebase project ID (from Firebase Console).

### Step 5: Set Environment Variables

Create `backend/.env` file:

```
PORT=5000
RAZORPAY_KEY_ID=rzp_test_5Fy7UkEjIgAlZ8
RAZORPAY_KEY_SECRET=your_secret_key
NODE_ENV=production
```

**Get Razorpay Keys:**
1. Sign up at https://razorpay.com
2. Go to Dashboard → Settings → API Keys
3. Copy your test keys

### Step 6: Deploy to Firebase

```bash
# From project root directory
firebase deploy
```

This deploys:
- **Hosting:** All HTML, CSS, JS, images → Firebase Hosting
- **Functions:** Backend API → Cloud Functions

**Output will show:**
```
✓ Deploy complete!

Project Console: https://console.firebase.google.com/project/donation-platform-xxxxx/overview
Hosting URL: https://donation-platform-xxxxx.web.app
Functions: https://us-central1-donation-platform-xxxxx.cloudfunctions.net/api
```

---

## 🔧 Configuration Details

### firebase.json
Already configured with:
- **hosting:** Points to root directory (all HTML/CSS/JS files)
- **functions:** Points to `backend/` folder
- **rewrites:** Routes all traffic to `index.html` for SPA behavior

### Cloud Functions Setup
- **Runtime:** Node.js 20
- **Trigger:** HTTP (handles payment API)
- **Environment:** Production-ready

### Ignored Files
The following won't be deployed:
- `backend/` folder (uploaded as functions)
- `node_modules/`
- `.git/`
- `README.md`, deployment guides
- `.env` file (for security)

---

## 🔗 Update Frontend API URLs

After deployment, update your code to use Cloud Functions URL:

**Edit: `js/payment.js`**

```javascript
// OLD (localhost)
const response = await fetch('http://localhost:5000/payment/create-order', {

// NEW (Firebase Cloud Functions)
const baseURL = 'https://us-central1-YOUR-PROJECT-ID.cloudfunctions.net/api';
const response = await fetch(baseURL + '/payment/create-order', {
```

Also check:
- `campaign.html` - any API calls
- `payment.html` - any API calls

**Commit and push:**
```bash
git add .
git commit -m "Update API URLs for Firebase deployment"
git push
```

---

## 🚀 Deploy Updates

Whenever you make changes:

```bash
git add .
git commit -m "Your changes"
git push

# Then deploy to Firebase
firebase deploy
```

Or deploy specific components:

```bash
# Only hosting (frontend)
firebase deploy --only hosting

# Only functions (backend)
firebase deploy --only functions
```

---

## ✅ Verify Deployment

### Check Frontend
```
Visit: https://donation-platform-xxxxx.web.app
- ✅ Homepage loads
- ✅ All images visible
- ✅ Navigation works
- ✅ Responsive on mobile
```

### Check Backend
```bash
# Open browser console and check:
# Go to any page with donation button
# Open DevTools (F12)
# Network tab should show successful requests to Cloud Functions
```

Or test directly:
```bash
curl https://us-central1-YOUR-PROJECT-ID.cloudfunctions.net/api
```

### Test Payment Flow
1. Open deployed site
2. Sign up with test email
3. Browse campaigns
4. Click "Donate"
5. Enter amount
6. Complete payment with test card

**Test Card:**
- Card: `4111 1111 1111 1111`
- Expiry: Any future date
- CVV: `123`

---

## 💰 Costs

Firebase Pricing (Free Tier Included):
- **Hosting:** 1 GB storage, 10 GB/month bandwidth (FREE)
- **Cloud Functions:** 2 million invocations/month (FREE)
- **Firestore:** 1 GB storage, 50k reads/day (FREE)

**Your app fits in free tier!** No credit card needed to start.

---

## 🔐 Security Considerations

### Before Going Live:

1. **Razorpay Keys**
   - Use TEST keys for development
   - Switch to LIVE keys for production
   - Never commit `.env` file

2. **Firebase Security Rules**
   - Configure Firestore rules for production
   - Restrict database access appropriately
   - Example rule:
     ```
     match /donations/{document=**} {
       allow read, write: if request.auth != null;
     }
     ```

3. **CORS Configuration**
   - Already enabled in Cloud Functions
   - Update if needed in `backend/index.js`

4. **Environment Variables**
   - Set via Firebase Console (not in code)
   - For functions: Project Settings → Runtime environment variables

---

## 🆘 Troubleshooting

### "firebase: command not found"
```bash
npm install -g firebase-tools
firebase login
```

### "Error: Could not find project"
Update `.firebaserc` with correct project ID

### "Cloud Functions deployment failed"
- Check `backend/package.json` is correct
- Ensure `backend/index.js` exports the function
- Check Node.js compatibility (18+)

### "404 on API endpoints"
- Verify Cloud Functions deployed: `firebase deploy --only functions`
- Check network tab in browser DevTools
- Verify API URLs in `js/payment.js`

### "CORS errors"
Already configured, but if issues:
Edit `backend/index.js`:
```javascript
app.use(cors({
  origin: 'https://donation-platform-xxxxx.web.app',
  credentials: true
}));
```

---

## 📊 Monitor Your Deployment

### Firebase Console
1. Go to https://console.firebase.google.com
2. Select your project
3. View:
   - **Hosting:** Deployment history, traffic
   - **Functions:** Invocations, errors, performance
   - **Realtime Database:** Data usage
   - **Analytics:** User engagement (if enabled)

### Cloud Functions Dashboard
- Function invocations
- Error rates
- Execution time
- Memory usage

---

## 🔄 Continuous Deployment (Optional)

Set up auto-deployment when you push to GitHub:

1. Connect GitHub to Firebase:
   - Firebase Console → Hosting
   - Click "Connect repository"
   - Select your repo
   - Choose main branch

2. Auto-deploy triggered on every push to main!

---

## 🎯 Next Steps

1. ✅ Install Firebase CLI
2. ✅ Create Firebase project
3. ✅ Update `.firebaserc`
4. ✅ Set environment variables
5. ✅ Run `firebase deploy`
6. ✅ Update API URLs in code
7. ✅ Test all features
8. ✅ Switch to Razorpay LIVE keys

---

## 📱 Share Your Live Site

Once deployed, share:
```
🌐 Visit: https://donation-platform-xxxxx.web.app
💻 GitHub: https://github.com/AVHnandini/DonationPlatform
```

---

## 🆘 Need Help?

- **Firebase Docs:** https://firebase.google.com/docs
- **Firebase CLI Guide:** https://firebase.google.com/docs/cli
- **Cloud Functions:** https://firebase.google.com/docs/functions
- **Razorpay Support:** https://razorpay.com/support

**Firebase deployment complete! Your site is now live! 🚀**
