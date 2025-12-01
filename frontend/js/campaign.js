// Campaign logic
// js/campaign.js
import { db, auth } from './firebaseConfig.js';
import { collection, getDocs, doc, getDoc, updateDoc, arrayUnion, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// Load all campaigns
export async function loadCampaigns(containerId) {
  const campaignsCol = collection(db, "campaigns");
  const snapshot = await getDocs(campaignsCol);
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    const card = document.createElement('div');
    card.className = "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300";
    card.innerHTML = `
      <img src="${data.imageURL || 'https://via.placeholder.com/400x200'}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h4 class="text-xl font-semibold text-gray-800 mb-2">${data.title}</h4>
        <p class="text-gray-600 mb-4">${data.description}</p>
        <p class="text-gray-700 font-medium mb-2">Goal: ₹${data.goalAmount} | Collected: ₹${data.collectedAmount || 0}</p>
        <button onclick="window.location.href='campaign.html?id=${docSnap.id}'" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition duration-300 w-full">Donate Now</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Handle donation for a single campaign
export async function donateToCampaign(campaignId, amount, callback) {
  const campaignRef = doc(db, "campaigns", campaignId);
  const campaignSnap = await getDoc(campaignRef);
  const campaign = campaignSnap.data();

  // Update donation in Firestore
  await addDoc(collection(db, "donations"), {
    userId: auth.currentUser.uid,
    campaignId,
    amount,
    date: new Date()
  });

  await updateDoc(campaignRef, {
    collectedAmount: (campaign.collectedAmount || 0) + amount
  });

  if(callback) callback();
}
