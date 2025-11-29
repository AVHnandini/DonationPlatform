# Cloud-Based Donation & Social Cause Platform

A modern, responsive web platform for managing donations, campaigns, and emergency relief efforts. Built with HTML5, Tailwind CSS, JavaScript, Node.js, Express, Firebase, and Razorpay.

## 🌟 Features

- **User Authentication**: Sign up/login with Firebase Auth
- **Campaign Management**: Browse and filter donation campaigns by category
- **Payment Integration**: Secure donations via Razorpay payment gateway
- **Emergency Response**: Real-time campaigns for disaster relief, blood donation drives, and emergency aid
- **Volunteer Support**: Register as a volunteer to help with causes
- **Issue Reporting**: Report social issues and needs in your community
- **Donation History**: Track all your donations in one place
- **Responsive Design**: Beautiful UI that works on all devices (mobile, tablet, desktop)
- **Purple & Pink Theme**: Modern, professional color scheme

## 📋 Tech Stack

### Frontend
- HTML5
- Tailwind CSS (responsive design)
- Vanilla JavaScript (ES6 modules)
- Firebase SDK (Authentication & Firestore)
- Razorpay Checkout

### Backend
- Node.js
- Express.js
- Razorpay API
- Firebase (Firestore database)

## 📁 Project Structure

```
DonationPlatform/
├── index.html                 # Homepage with hero slider
├── campaigns.html             # Campaign gallery with filters
├── campaign.html              # Single campaign detail page
├── payment.html               # Standalone donation form
├── signup.html                # User registration
├── login.html                 # User login
├── mydonations.html           # Donation history
├── issues.html                # Report social issues
├── volunteers.html            # Volunteer registration
├── success.html               # Payment success page
├── admin.html                 # Admin dashboard
│
├── backend/
│   ├── server.js              # Express server entry point
│   ├── package.json           # Node dependencies
│   └── routes/
│       └── payment.js         # Razorpay payment routes
│
├── js/
│   ├── navbar.js              # Navigation component
│   ├── footer.js              # Footer component
│   ├── main.js                # Campaign rendering & core logic
│   ├── auth.js                # Authentication helpers
│   ├── payment.js             # Payment & Razorpay integration
│   ├── data.js                # Dummy campaign data
│   └── firebaseConfig.js      # Firebase configuration
│
├── css/
│   └── style.css              # Custom styles
│
└── images/                    # Campaign & hero images
    ├── hero-1.jpg, hero-2.jpg, hero-3.jpg
    ├── campaign-*.jpg         # Campaign images
    └── about-*.jpg            # About section images
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- Python (for local HTTP server)
- A Firebase project with Firestore & Auth enabled
- Razorpay test account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/DonationPlatform.git
   cd DonationPlatform
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the `backend/` directory:
   ```
   PORT=5000
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

4. **Update Firebase configuration**
   Edit `js/firebaseConfig.js` with your Firebase project credentials

5. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

6. **Start the frontend server** (in a new terminal)
   ```bash
   python -m http.server 5500
   ```

7. **Open your browser**
   Navigate to `http://localhost:5500/index.html`

## 📱 Pages Overview

| Page | URL | Purpose |
|------|-----|---------|
| Homepage | `/index.html` | Landing page with hero slider, featured campaigns |
| Campaigns | `/campaigns.html` | Browse all campaigns with category filters |
| Campaign Detail | `/campaign.html?id=campX` | View single campaign and donate |
| Direct Donation | `/payment.html` | Make direct donation without campaign |
| Sign Up | `/signup.html` | Create new user account |
| Login | `/login.html` | Login to existing account |
| My Donations | `/mydonations.html` | View donation history |
| Report Issue | `/issues.html` | Report social issues/needs |
| Volunteers | `/volunteers.html` | Register as volunteer |
| Payment Success | `/success.html` | Confirmation after donation |

## 💳 Payment Flow

1. User selects campaign and donation amount
2. Frontend sends order request to `/payment/create-order`
3. Backend creates Razorpay order
4. Razorpay checkout opens in modal
5. User completes payment
6. Frontend verifies signature via `/payment/verify`
7. Donation recorded in Firestore
8. Redirect to success page

## 🔐 Authentication Flow

- Firebase handles all authentication
- Display name stored in Firestore user document
- localStorage fallback for display name
- Auto-logout when browser closes
- Login state persists across page refreshes

## 📊 Campaigns

### Current Emergency Campaigns:
1. **Flood Relief & Rescue** - Help flood victims with shelter and aid
2. **Earthquake Survivor Support** - Emergency response and recovery
3. **Blood Donation Drive** - Critical blood donations for patients
4. **Disaster Recovery Fund** - Comprehensive disaster assistance
5. **Emergency Crisis Response** - Rapid response for emergencies
6. **Crisis Relief & Rehabilitation** - Post-crisis support

## 🎨 Design

- **Color Scheme**: Purple (#9333ea) & Pink (#ec4899)
- **Responsive**: Mobile-first design with Tailwind CSS
- **Accessibility**: Semantic HTML, proper contrast ratios
- **Performance**: Optimized images, minimal dependencies

## 🔧 Configuration

### Razorpay Test Keys
```javascript
// Test mode (pre-configured)
Key ID: rzp_test_5Fy7UkEjIgAlZ8
Key Secret: [configured in backend .env]
```

### Firebase Collections
- `campaigns` - Campaign data
- `donations` - Donation records
- `users` - User profiles & metadata

## 🚀 Deployment

### Deploy Frontend (Vercel/Netlify)
```bash
npm run build  # If applicable
# Deploy static files to Vercel/Netlify
```

### Deploy Backend (Heroku/Railway)
```bash
git push heroku main
# Backend will be live at https://your-app.herokuapp.com
```

## 📝 Environment Variables

| Variable | Value | Where |
|----------|-------|-------|
| `PORT` | 5000 | `backend/.env` |
| `RAZORPAY_KEY_ID` | Test key | `backend/.env` |
| `RAZORPAY_KEY_SECRET` | Test secret | `backend/.env` |
| Firebase Config | Your credentials | `js/firebaseConfig.js` |

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Support

For support, email support@donationplatform.com or open an issue on GitHub.

## 🙏 Acknowledgments

- Images from Pexels, Unsplash, and Dreamstime
- Tailwind CSS for styling
- Firebase for backend services
- Razorpay for payment processing

---

**Made with ❤️ for social causes**
