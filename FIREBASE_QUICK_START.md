# 🚀 Firebase Deployment - Quick Start (Option 3)

Get your Donation Platform live in **10 minutes** using Firebase!

## ✅ What You'll Get

- 🌐 Frontend hosted on **Firebase Hosting** (instant CDN)
- ⚡ Backend API on **Cloud Functions** (serverless)
- 🔥 All in one Firebase project (easy management)
- 🆓 Free tier covers your entire app
- 🔒 HTTPS by default
- 📊 Built-in analytics and monitoring

---

## 🎯 5-Step Setup

### Step 1: Create Firebase Project (2 min)

1. Go to: https://console.firebase.google.com
2. Click **"Create a project"**
3. Name: `DonationPlatform`
4. Choose location closest to you
5. Click **"Create project"**
6. Wait for green checkmark ✓

### Step 2: Get Your Project ID (1 min)

1. In Firebase Console, click your project
2. Click ⚙️ **Settings** (top right)
3. Look for **Project ID** (example: `donation-platform-abc123`)
4. Copy it

### Step 3: Install Firebase CLI (2 min)

Open terminal/PowerShell:

```bash
npm install -g firebase-tools
firebase login
```

This opens browser to authenticate with your Google account.

### Step 4: Update Project Configuration (1 min)

Edit `.firebaserc` in your project folder:

```json
{
  "projects": {
    "default": "YOUR-PROJECT-ID"
  }
}
```

Replace `YOUR-PROJECT-ID` with your actual ID from Step 2.

### Step 5: Deploy! (4 min)

```bash
cd C:\Users\nandi\Downloads\DonationPlatform
firebase deploy
```

Watch the magic happen! ✨

---

## 🔑 Set Razorpay Keys (Important!)

### Option A: Via Firebase Console (Recommended)

1. Firebase Console → Your Project
2. Go to **Functions** → Click the `api` function
3. Click **"Runtime settings"**
4. Add environment variables:
   - `RAZORPAY_KEY_ID` = `rzp_test_5Fy7UkEjIgAlZ8`
   - `RAZORPAY_KEY_SECRET` = your_secret_key_here
5. Save and redeploy

### Option B: Via Local .env (for testing)

Create `backend/.env`:
```
RAZORPAY_KEY_ID=rzp_test_5Fy7UkEjIgAlZ8
RAZORPAY_KEY_SECRET=your_secret_key
```

Then deploy:
```bash
firebase deploy --only functions
```

**Get your test keys from:** https://dashboard.razorpay.com/

---

## 🔗 Update API URLs in Code

After deployment, your backend URL will be something like:
```
https://us-central1-donation-platform-abc123.cloudfunctions.net/api
```

Update these files:

**1. Edit `js/payment.js`**

Find this line:
```javascript
const response = await fetch('http://localhost:5000/payment/create-order'
```

Replace with:
```javascript
const baseURL = 'https://us-central1-YOURPROJECTID.cloudfunctions.net/api';
const response = await fetch(baseURL + '/payment/create-order'
```

**2. Push changes:**
```bash
git add .
git commit -m "Update API URLs for Firebase"
git push
firebase deploy
```

**3. Redeploy:**
```bash
firebase deploy --only hosting
```

---

## ✅ Your Deployed URLs

After `firebase deploy` completes, you'll see:

```
✓ Deploy complete!
Hosting URL: https://donation-platform-abc123.web.app
Functions URL: https://us-central1-donation-platform-abc123.cloudfunctions.net
```

**Visit:** `https://donation-platform-abc123.web.app` 🎉

---

## 🧪 Test Your Deployment

1. **Open frontend:**
   ```
   https://donation-platform-abc123.web.app
   ```

2. **Check if it loads** ✓
   - All pages accessible
   - Images visible
   - Navigation works
   - Responsive on mobile

3. **Test a donation:**
   - Sign up
   - Browse campaigns
   - Click "Donate"
   - Enter amount (₹100)
   - Use test card: `4111 1111 1111 1111`
   - Expiry: Any future date
   - CVV: `123`
   - Should see success page ✓

---

## 📊 Monitor Your App

1. **Firebase Console:** https://console.firebase.google.com
   - Click your project
   - View **Hosting** stats (traffic, bandwidth)
   - View **Functions** stats (invocations, errors)

2. **See live logs:**
   ```bash
   firebase functions:log
   ```

---

## 🔄 Deploy Updates

Every time you make changes:

```bash
git add .
git commit -m "Your message"
git push

firebase deploy
# or specific targets:
firebase deploy --only hosting  # Frontend only
firebase deploy --only functions  # Backend only
```

---

## 🆓 Free Tier (Plenty for Your App!)

- **Hosting:** 1 GB storage, 10 GB/month bandwidth
- **Cloud Functions:** 2 million invocations/month
- **Firestore:** 1 GB storage, 50k reads/day
- **Authentication:** 30k MAU (monthly active users)

Your app easily fits! No credit card needed.

---

## 🆘 Troubleshooting

**"firebase: command not found"**
```bash
npm install -g firebase-tools
firebase login
```

**"Permission denied / Authentication failed"**
```bash
firebase logout
firebase login
```

**"Error: Could not find Firebase project"**
- Update `.firebaserc` with correct project ID
- Run from project root directory

**"404 on API calls"**
- Check Cloud Functions deployed: `firebase deploy --only functions`
- Verify API URL in code matches deployed URL
- Check browser DevTools Network tab for exact error

**"CORS error"**
- Already configured in Cloud Functions
- If still issues, check `backend/index.js` CORS settings

---

## 🎯 Next Steps

1. ✅ Create Firebase project
2. ✅ Install Firebase CLI
3. ✅ Update `.firebaserc`
4. ✅ Set Razorpay keys
5. ✅ Run `firebase deploy`
6. ✅ Update API URLs in code
7. ✅ Test everything works
8. ✅ Share your live site!

---

## 🎉 Share Your Live Platform!

```
🌐 Frontend: https://donation-platform-abc123.web.app
💻 GitHub: https://github.com/AVHnandini/DonationPlatform
📱 Try donations and help causes!
```

---

**Detailed guide:** See `FIREBASE_DEPLOY.md` for more info

**Your Donation Platform is now live! 🚀💜💖**
