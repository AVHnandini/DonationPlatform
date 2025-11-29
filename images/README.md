# Images for Donation Platform

This folder contains images used throughout the site (hero slider, campaigns, etc.).

## Image Sources (Free)

All images are sourced from free stock photo sites:
- **Unsplash** (https://unsplash.com) - Free high-quality photos
- **Pexels** (https://pexels.com) - Free stock photos
- **Pixabay** (https://pixabay.com) - Free images & videos

## Images Used

### Hero Slider (index.html)
- `hero-1.jpg` - Donation/charity theme (landscape)
- `hero-2.jpg` - Community/volunteers theme (landscape)
- `hero-3.jpg` - Social causes theme (landscape)

### Campaigns
- `campaign-water.jpg` - Clean water campaign
- `campaign-education.jpg` - Education campaign
- `campaign-medical.jpg` - Medical aid campaign
- `campaign-environment.jpg` - Environment campaign

### About Section
- `about-mission.jpg` - Mission/team image

## How to Download Images

### Option 1: Auto-download via PowerShell script
Run `fetch-images.ps1` from this directory:
```powershell
cd c:\Users\nandi\Downloads\DonationPlatform
.\fetch-images.ps1
```

### Option 2: Manual Download
Visit the URLs below and save to this folder with the specified filenames:

**Hero Slider:**
1. https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=60 → save as `hero-1.jpg`
2. https://images.unsplash.com/photo-1509099836639-18ba6d6a1f0f?auto=format&fit=crop&w=1600&q=60 → save as `hero-2.jpg`
3. https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1600&q=60 → save as `hero-3.jpg`

**Campaign Cards:**
1. https://images.unsplash.com/photo-1582719478143-51d45b6b7b32?auto=format&fit=crop&w=800&q=60 → save as `campaign-water.jpg`
2. https://images.unsplash.com/photo-1573495628363-4b0b8c1b6f0b?auto=format&fit=crop&w=800&q=60 → save as `campaign-education.jpg`
3. https://images.unsplash.com/photo-1588774069406-2b6e1ab4c8c4?auto=format&fit=crop&w=800&q=60 → save as `campaign-medical.jpg`

**About Section:**
1. https://images.unsplash.com/photo-1542736667-069246bdbc97?auto=format&fit=crop&w=1200&q=60 → save as `about-mission.jpg`

## Notes
- All images are optimized for web (compressed, reasonable dimensions).
- Images are used as-is; you can customize later if needed.
- If you need different images, simply replace the .jpg files and update the src paths in HTML if needed.
