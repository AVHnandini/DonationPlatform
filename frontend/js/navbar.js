import { auth } from './firebaseConfig.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';

export function initNavbar() {
  const container = document.getElementById('site-navbar');
  if (!container) return;

  // initial static navbar markup
  container.innerHTML = `
  <header class="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white shadow-md">
    <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <a href="index.html" class="flex items-center gap-3">
        <div class="w-10 h-10 bg-white/20 rounded-md flex items-center justify-center font-bold">DP</div>
        <span class="font-semibold text-lg">Donation Platform</span>
      </a>
      <nav class="hidden md:flex items-center gap-4" id="nav-links">
        <a href="index.html" class="hover:underline">Home</a>
        <a href="campaigns.html" class="hover:underline">Campaigns</a>
        <a href="payment.html" class="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded font-semibold transition">💳 Donate</a>
        <a href="issues.html" class="hover:underline">Issues</a>
        <a href="volunteers.html" class="hover:underline">Volunteers</a>
      </nav>

      <div id="nav-auth" class="flex items-center gap-3">
        <a href="signup.html" class="hidden md:inline-block bg-white/20 hover:bg-white/30 px-3 py-1 rounded">Sign Up</a>
        <a href="login.html" class="md:inline-block bg-white px-3 py-1 rounded text-purple-700 font-semibold">Login</a>
      </div>

      <button id="mobile-menu-btn" class="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </header>
  `;

  // mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  mobileBtn.addEventListener('click', () => {
    const nav = document.getElementById('nav-links');
    if (nav.style.display === 'flex') nav.style.display = 'none'; else nav.style.display = 'flex';
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
  });

  // auth state handling
  onAuthStateChanged(auth, user => {
    const authContainer = document.getElementById('nav-auth');
    if (!authContainer) return;

    if (user) {
      const displayName = user.displayName || localStorage.getItem('displayName') || user.email.split('@')[0];
      authContainer.innerHTML = `
        <div class="relative" id="user-dropdown">
          <button id="user-btn" class="bg-white text-purple-700 px-3 py-1 rounded font-semibold">Hi, ${escapeHtml(displayName)}</button>
          <div id="user-menu" class="hidden absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg overflow-hidden">
            <a href="mydonations.html" class="block px-4 py-2 hover:bg-gray-100">My Donations</a>
            <button id="logout-btn" class="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
          </div>
        </div>
      `;

      // dropdown behavior
      const userBtn = document.getElementById('user-btn');
      const userMenu = document.getElementById('user-menu');
      userBtn.addEventListener('click', () => userMenu.classList.toggle('hidden'));

      document.getElementById('logout-btn').addEventListener('click', async () => {
        await signOut(auth);
        localStorage.removeItem('displayName');
        window.location.href = 'index.html';
      });

    } else {
      authContainer.innerHTML = `
        <a href="signup.html" class="hidden md:inline-block bg-white/20 hover:bg-white/30 px-3 py-1 rounded">Sign Up</a>
        <a href="login.html" class="md:inline-block bg-white px-3 py-1 rounded text-purple-700 font-semibold">Login</a>
      `;
    }
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function(tag) {
    const charsToReplace = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return charsToReplace[tag] || tag;
  });
}
