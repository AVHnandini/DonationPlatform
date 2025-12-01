# 🚀 FREE Deployment: Vercel + Railway (No Credit Card!)

Deploy your Donation Platform completely FREE - no credit card needed!

## ✅ Free Features

- **Vercel (Frontend):** Free tier includes 100 GB bandwidth/month
- **Railway (Backend):** Free tier includes $5/month credit (more than enough)
- **Both:** SSL/HTTPS included, automatic deployments

---

## 📋 Step-by-Step (10 minutes)

### Step 1: Deploy Frontend to Vercel (3 min)

1. **Go to:** https://vercel.com/new
2. **Login with GitHub** (or create account)
3. **Select:** `AVHnandini/DonationPlatform`
4. **Framework:** Select "Other" (it's HTML/CSS/JS)
5. **Click:** "Deploy"
6. **Wait** for deployment to complete ✓

**You'll get a URL like:**
```
https://donation-platform-abc123.vercel.app
```

---

### Step 2: Deploy Backend to Railway (5 min)

1. **Go to:** https://railway.app
2. **Sign up with GitHub** (free, no credit card)
3. **New Project** → "Deploy from GitHub repo"
4. **Select:** `AVHnandini/DonationPlatform`
5. **Railway auto-detects Node.js** ✓
6. **Configure Variables:**
   - Add a new variable: `RAZORPAY_KEY_ID` = `rzp_test_5Fy7UkEjIgAlZ8`
   - Add another: `RAZORPAY_KEY_SECRET` = `test_secret_key`
7. **Deploy!** ✓

**You'll get a URL like:**
```
https://donationplatform-production.up.railway.app
```

---

### Step 3: Connect Frontend to Backend (2 min)

**Edit `js/payment.js`:**

Find this:
```javascript
const response = await fetch('http://localhost:5000/payment/create-order',
```

Replace with your Railway URL:
```javascript
const response = await fetch('https://donationplatform-production.up.railway.app/payment/create-order',
```

**Push to GitHub:**
```bash
git add .
git commit -m "Update API URLs for Vercel + Railway deployment"
git push
```

**Vercel auto-redeploys!** ✓

---

## ✅ Test Your Deployment

1. **Open:** `https://donation-platform-abc123.vercel.app`
2. **Check:**
   - ✅ All pages load
   - ✅ Images visible
   - ✅ Mobile responsive
   - ✅ Navbar/Footer works

3. **Test Donation:**
   - Sign up
   - Browse campaigns
   - Click "Donate"
   - Enter amount: ₹100
   - Use test card: `4111 1111 1111 1111`
   - Expiry: Any future date (e.g., 12/25)
   - CVV: `123`
   - Should see success page ✓

---

## 🎯 Your Live Links

**Frontend:** https://donation-platform-abc123.vercel.app
**GitHub:** https://github.com/AVHnandini/DonationPlatform

---

## 📊 Free Limits (More than enough!)

| Service | Free Limit | Your Usage |
|---------|-----------|-----------|
| **Vercel Bandwidth** | 100 GB/month | ~1-5 GB |
| **Railway Credit** | $5/month | ~$0.50 |
| **Razorpay Test** | Unlimited | Free testing |

**Total Cost: $0** 💰

---

## 🔄 Update Your Site

Every time you make changes:

```bash
git add .
git commit -m "Your changes"
git push
```

**Both Vercel & Railway auto-deploy!** No manual deployment needed.

---

## 🆘 Troubleshooting

**"Donation button doesn't work"**
- Check browser console (F12)
- Verify Railway URL in `js/payment.js` is correct
- Make sure you pushed changes

**"404 on payments"**
- Wait 2 minutes after push (deployment takes time)
- Check Network tab in DevTools for actual error
- Verify Razorpay keys in backend

**"Page not loading"**
- Check Vercel deployment status at https://vercel.com
- Make sure all files are committed

---

## 📝 Next Steps

1. ✅ Deploy frontend to Vercel
2. ✅ Deploy backend to Railway
3. ✅ Update API URLs
4. ✅ Test everything
5. ✅ Share your live link!

---

**No credit card. No costs. Just FREE deployment!** 🚀💜💖
