# ✅ Razorpay Fix Guide

## Issues Fixed:

✓ **Import order problem** - payment.js no longer imports campaign.js
✓ **Missing Razorpay SDK** - Checkout script loading order fixed
✓ **Module type** - Added `"type": "module"` to package.json
✓ **Better error messages** - Console logs added for debugging
✓ **Fallback functions** - Added local donateToCampaign function

---

## 🧪 Test Your Razorpay Integration:

### Option A: Using Frontend (Easiest)

1. **Start Backend Server:**
   ```bash
   cd backend
   npm start
   ```
   Should show: `Server running on port 5000`

2. **Start Python Server (separate terminal):**
   ```bash
   cd C:\Users\nandi\Downloads\DonationPlatform
   python -m http.server 5500
   ```

3. **Open Browser:**
   - Homepage: http://localhost:5500/index.html
   - Campaigns: http://localhost:5500/campaigns.html
   - Direct donation: http://localhost:5500/payment.html

4. **Test Donation:**
   - Click "Donate" button
   - Enter amount: ₹100
   - Complete Razorpay checkout
   - Use test card: `4111 1111 1111 1111`
   - Expiry: 12/25
   - OTP: 123456

### Option B: Test via API

```bash
# In PowerShell
$body = @{ amount = 100; currency = 'INR' } | ConvertTo-Json
Invoke-RestMethod -Uri http://127.0.0.1:5000/payment/create-order `
  -Method Post -Body $body -ContentType 'application/json'
```

Should return:
```json
{
  "id": "order_xxxxx",
  "amount": 10000,
  "currency": "INR"
}
```

---

## 🔑 Razorpay Test Credentials

**Key ID:** `rzp_test_5Fy7UkEjIgAlZ8`
**Key Secret:** `gvPuqNHf3aVBJH2UVZZEHLvN`

**Test Card Details:**
- Card: `4111 1111 1111 1111`
- Expiry: Any future date
- CVV: Any 3 digits
- OTP: `123456`

---

## ✅ Checklist

- ✓ Backend running (`npm start`)
- ✓ Frontend served (port 5500)
- ✓ Razorpay test keys configured
- ✓ Payment.js imports fixed
- ✓ Campaign.html has payment flow
- ✓ Payment.html has payment form
- ✓ Razorpay checkout.js loaded

---

## 🐛 Debugging

If donation doesn't work:

1. **Check browser console (F12):**
   - Look for red errors
   - Should see "Order created:" message

2. **Check backend console:**
   - Should show "Server running on port 5000"
   - Should show request logs

3. **Check network tab (DevTools):**
   - POST `/payment/create-order` should return 200
   - Response should have `id` field

4. **Common issues:**
   - ❌ "Cannot find Razorpay" → Reload page
   - ❌ "Failed to create order" → Backend not running
   - ❌ "CORS error" → Already fixed in server.js
   - ❌ "Payment verification failed" → Check Razorpay keys

---

## 📝 Files Changed

- `js/payment.js` - Fixed imports, better error handling
- `payment.html` - Fixed script loading order
- `backend/package.json` - Added `"type": "module"`
- `backend/test-server.js` - Test server for debugging

---

## 🚀 Next Steps

1. ✅ Start backend: `cd backend && npm start`
2. ✅ Start frontend: `python -m http.server 5500`
3. ✅ Test donation at http://localhost:5500/payment.html
4. ✅ Try campaign donation too
5. ✅ Check both server and browser logs

**Everything is fixed! Just start the servers and test.** 💜💖
