export function renderFooter() {
  const c = document.getElementById('site-footer');
  if (!c) return;
  c.innerHTML = `
  <footer class="bg-gradient-to-r from-purple-700 via-purple-800 to-pink-700 text-white mt-12">
    <div class="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h4 class="font-bold text-lg">Donation Platform</h4>
        <p class="text-sm text-white/80 mt-2">Connecting donors to verified social causes. Small help makes big impact.</p>
      </div>
      <div>
        <h5 class="font-semibold">Quick Links</h5>
        <ul class="mt-2 space-y-1 text-sm text-white/90">
          <li><a href="index.html" class="hover:underline">Home</a></li>
          <li><a href="issues.html" class="hover:underline">Issues</a></li>
          <li><a href="volunteers.html" class="hover:underline">Volunteers</a></li>
          <li><a href="campaigns.html" class="hover:underline">Campaigns</a></li>
        </ul>
      </div>
      <div>
        <h5 class="font-semibold">Contact</h5>
        <p class="text-sm text-white/90 mt-2">hello@donationplatform.org<br/>+1 (555) 123-4567<br/>123 Charity Ave, City, Country</p>
        <div class="flex gap-3 mt-3">
          <a aria-label="twitter" href="#" class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">T</a>
          <a aria-label="facebook" href="#" class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">F</a>
          <a aria-label="instagram" href="#" class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">I</a>
        </div>
      </div>
    </div>
    <div class="border-t border-white/10 text-center py-3 text-white/80">&copy; 2025 Donation Platform. All rights reserved.</div>
  </footer>
  `;
}
