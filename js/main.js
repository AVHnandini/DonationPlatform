import { initNavbar } from './navbar.js';
import { renderFooter } from './footer.js';
import { campaigns as dummyCampaigns } from './data.js';
import { db } from './firebaseConfig.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';

export async function initSite() {
  initNavbar();
  renderFooter();
}

// Load campaigns from Firestore fallback to dummy
export async function loadCampaigns(targetId = 'campaigns') {
  const container = document.getElementById(targetId);
  if (!container) return;
  container.innerHTML = '';

  try {
    const col = collection(db, 'campaigns');
    const snap = await getDocs(col);
    if (!snap.empty) {
      snap.forEach(doc => {
        const data = doc.data();
        container.appendChild(createCampaignCard({ id: doc.id, ...data }));
      });
      return;
    }
  } catch (err) {
    // Firestore not available or empty, fall back
    console.log('Firestore campaigns load failed, using dummy', err);
  }

  // fallback
  dummyCampaigns.forEach(c => container.appendChild(createCampaignCard(c)));
}

function createCampaignCard(c) {
  const card = document.createElement('div');
  card.className = 'bg-white rounded-xl shadow-md overflow-hidden';
  const imgPath = c.imageURL || './images/campaign-default.jpg';
  card.innerHTML = `
    <img src="${imgPath}" alt="${escapeHtml(c.title)}" class="w-full h-48 object-cover">
    <div class="p-4">
      <h4 class="text-lg font-semibold">${escapeHtml(c.title)}</h4>
      <p class="text-sm text-gray-600 mt-2">${escapeHtml(c.description)}</p>
      <div class="mt-3 flex items-center justify-between gap-4">
        <div class="text-sm text-gray-700">Goal: ₹${numberWithCommas(c.goalAmount)}</div>
        <div class="text-sm text-green-600 font-semibold">Raised: ₹${numberWithCommas(c.collectedAmount || 0)}</div>
      </div>
      <button onclick="window.location.href='campaign.html?id=${c.id}'" class="mt-4 w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 rounded-md">Donate</button>
    </div>
  `;
  return card;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function(tag) {
    const charsToReplace = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return charsToReplace[tag] || tag;
  });
}

// expose for simple inline calls
window.initSite = initSite;
window.loadCampaigns = loadCampaigns;
