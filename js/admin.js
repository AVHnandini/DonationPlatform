// Admin logic
// js/admin.js
import { db, auth } from './firebaseConfig.js';
import { collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// Add new campaign
export async function addCampaign(title, description, goalAmount, imageURL) {
  await addDoc(collection(db, "campaigns"), {
    title,
    description,
    goalAmount: parseInt(goalAmount),
    collectedAmount: 0,
    imageURL
  });
}

// Load campaigns in admin panel
export async function loadAdminCampaigns(containerId) {
  const campaignsDiv = document.getElementById(containerId);
  campaignsDiv.innerHTML = '';
  const snapshot = await getDocs(collection(db, "campaigns"));
  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    campaignsDiv.innerHTML += `
      <div class="bg-white p-4 rounded shadow-md flex justify-between items-center hover:shadow-lg transition duration-300">
        <div>
          <h4 class="font-semibold text-gray-800">${data.title}</h4>
          <p class="text-gray-600">Goal: ₹${data.goalAmount} | Collected: ₹${data.collectedAmount}</p>
        </div>
        <button onclick="deleteCampaign('${docSnap.id}')" class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Delete</button>
      </div>
    `;
  });
}

// Delete campaign
export async function deleteCampaign(campaignId) {
  if(confirm("Delete this campaign?")) {
    await deleteDoc(doc(db, "campaigns", campaignId));
    alert("Campaign deleted!");
    location.reload();
  }
}

// Load all donations
export async function loadDonations(containerId) {
  const donationDiv = document.getElementById(containerId);
  donationDiv.innerHTML = '';
  const snapshot = await getDocs(collection(db, "donations"));
  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    donationDiv.innerHTML += `<p class="bg-white p-2 rounded shadow-md">${data.userId} donated ₹${data.amount} to ${data.campaignId}</p>`;
  });
}
