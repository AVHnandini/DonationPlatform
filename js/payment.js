// Payment handling with Razorpay
import { auth } from './firebaseConfig.js';

// Allow deployment-time override. Netlify frontend will set `window.API_BASE` to the
// deployed Railway backend URL. Fallback to localhost for local testing.
const API_BASE_URL = (typeof window !== 'undefined' && window.API_BASE) ? window.API_BASE : "http://127.0.0.1:5000";

// Fallback function if campaign.js not available
async function donateToCampaign(campaignId, amount, callback) {
  try {
    console.log(`Donation recorded: Campaign ${campaignId}, Amount: ${amount}`);
    if (callback) callback();
  } catch (error) {
    console.error("Error recording donation:", error);
    if (callback) callback();
  }
}

async function startPayment(amount) {
  try {
    // Get current user
    if (!auth.currentUser) {
      alert("Please login to make a donation!");
      window.location.href = "login.html";
      return;
    }

    // Step 1: Create order on backend
    const orderResponse = await fetch(`${API_BASE_URL}/payment/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: parseInt(amount),
        currency: "INR"
      })
    });

    if (!orderResponse.ok) {
      const error = await orderResponse.text();
      console.error("Order response:", error);
      throw new Error(`Failed to create order: ${orderResponse.status}`);
    }

    const order = await orderResponse.json();
    console.log("Order created:", order);

    // Step 2: Open Razorpay checkout
    const options = {
      key: "rzp_test_5Fy7UkEjIgAlZ8", // Your Razorpay Key ID
      amount: order.amount,
      currency: order.currency,
      name: "Donation Platform",
      description: "Make a donation",
      order_id: order.id,
      handler: async function(response) {
        console.log("Payment response:", response);
        
        // Step 3: Verify payment
        const verifyResponse = await fetch(`${API_BASE_URL}/payment/verify`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature
          })
        });

        const verifyData = await verifyResponse.json();
        console.log("Verify response:", verifyData);

        if (verifyData.success) {
          alert("✅ Payment successful! Thank you for your donation.");
          
          // Get campaign ID from URL or session
          const params = new URLSearchParams(window.location.search);
          const campaignId = params.get("id");
          
          if (campaignId) {
            await donateToCampaign(campaignId, parseInt(amount), () => {
              window.location.href = "index.html";
            });
          } else {
            setTimeout(() => {
              window.location.href = "index.html";
            }, 1500);
          }
        } else {
          alert("❌ Payment verification failed: " + verifyData.message);
        }
      },
      prefill: {
        name: auth.currentUser.displayName || "User",
        email: auth.currentUser.email
      },
      theme: {
        color: "#9333ea"
      }
    };

    // Check if Razorpay is loaded
    if (typeof Razorpay === 'undefined') {
      throw new Error("Razorpay SDK not loaded. Please check your internet connection.");
    }

    const rzp = new Razorpay(options);
    rzp.open();

  } catch (error) {
    console.error("Payment Error:", error);
    alert("❌ Payment failed: " + error.message);
  }
}

// Export for use in HTML
window.startPayment = startPayment;
