// Payment handling with Razorpay
import { auth } from './firebaseConfig.js';
import { donateToCampaign } from './campaign.js';

const API_BASE_URL = "http://localhost:5000";

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
      throw new Error("Failed to create order");
    }

    const order = await orderResponse.json();

    // Step 2: Open Razorpay checkout
    const options = {
      key: "rzp_test_5Fy7UkEjIgAlZ8", // Your Razorpay Key ID
      amount: order.amount,
      currency: order.currency,
      name: "Donation Platform",
      description: "Make a donation",
      order_id: order.id,
      handler: async function(response) {
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

        if (verifyData.success) {
          alert("Payment successful! Thank you for your donation.");
          
          // Get campaign ID from URL or session
          const params = new URLSearchParams(window.location.search);
          const campaignId = params.get("id");
          
          if (campaignId) {
            await donateToCampaign(campaignId, parseInt(amount), () => {
              window.location.href = "dashboard.html";
            });
          } else {
            window.location.href = "dashboard.html";
          }
        } else {
          alert("Payment verification failed: " + verifyData.message);
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

    const rzp = new Razorpay(options);
    rzp.open();

  } catch (error) {
    console.error("Payment Error:", error);
    alert("Payment failed: " + error.message);
  }
}

// Export for use in HTML
window.startPayment = startPayment;
