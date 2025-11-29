# 🚀 Quick Deploy in 5 Minutes

## ⭐ Recommended: Vercel (Frontend) + Railway (Backend)

### Frontend Deployment (Vercel)

1. **Go to:** https://vercel.com/new
2. **Click:** "Import Git Repository"
3. **Select:** `AVHnandini/DonationPlatform`
4. **Framework:** Other (since it's HTML/CSS/JS)
5. **Deploy!** ✅

**Result:** Your frontend is live! You'll get a URL like:
```
https://donation-platform-xxxxx.vercel.app
```

### Backend Deployment (Railway)

1. **Go to:** https://railway.app
2. **Click:** "Create New Project"
3. **Select:** "Deploy from GitHub repo"
4. **Choose:** `AVHnandini/DonationPlatform`
5. **Railway auto-detects Node.js** ✅

**Add Environment Variables:**
- Click "Variables" tab
- Add these:
  ```
  PORT=3000
  RAZORPAY_KEY_ID=rzp_test_5Fy7UkEjIgAlZ8
  RAZORPAY_KEY_SECRET=YOUR_SECRET_KEY
  NODE_ENV=production
  ```

6. **Deploy!** Railway auto-starts your server

**Result:** Your backend is live! You'll get a URL like:
```
https://donationplatform-production.up.railway.app
```

### Connect Frontend to Backend

1. **Edit file:** `js/payment.js`
2. **Find:** `fetch('http://localhost:5000/payment/create-order'`
3. **Replace:** `http://localhost:5000` with your Railway URL
   ```javascript
   fetch('https://donationplatform-production.up.railway.app/payment/create-order'
   ```
4. **Commit & push:**
   ```bash
   git add .
   git commit -m "Update API URLs for production"
   git push
   ```
5. **Vercel auto-redeploys!** ✅

---

## 🔑 Get Razorpay Keys

1. **Sign up:** https://razorpay.com
2. **Dashboard:** https://dashboard.razorpay.com/
3. **Go to:** Settings → API Keys
4. **Copy:**
   - `Key ID` (public key)
   - `Key Secret` (keep private!)
5. **Use test keys for development, live keys for production**

---

## ✅ Verify Deployment

### Test Frontend
```
Open: https://donation-platform-xxxxx.vercel.app
- ✅ Homepage loads
- ✅ Images visible
- ✅ Responsive design works
- ✅ Navigation works
```

### Test Backend
```bash
curl -X POST https://donationplatform-production.up.railway.app/payment/create-order \
  -H "Content-Type: application/json" \
  -d '{"amount": 100, "currency": "INR"}'
```
Should return: `{ "id": "order_xxxxx", ... }`

### Test Full Donation Flow
1. Sign up at deployed frontend
2. Browse campaigns
3. Click "Donate"
4. Enter amount
5. Click "Donate Now"
6. Razorpay checkout opens
7. Use test card: `4111 1111 1111 1111`
8. Any expiry, CVV: `123`
9. Verify success page loads

---

## 🎉 You're Live!

Share your links:
- **Frontend:** `https://donation-platform-xxxxx.vercel.app`
- **GitHub:** `https://github.com/AVHnandini/DonationPlatform`

---

## 📝 Next Steps (Optional)

- [ ] Buy custom domain (Namecheap, GoDaddy)
- [ ] Set up SSL certificate
- [ ] Configure email notifications
- [ ] Add analytics (Google Analytics)
- [ ] Set up automated backups
- [ ] Create admin dashboard for analytics
- [ ] Add more campaigns
- [ ] Switch to Razorpay LIVE keys for real payments

---

**Need help?** Check `DEPLOYMENT.md` for detailed instructions!
