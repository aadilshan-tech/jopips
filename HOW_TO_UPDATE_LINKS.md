# 🔗 How to Update All Links - Super Easy Guide

## ⚡ Quick Update (Recommended)

All your links are now in **ONE SINGLE FILE** for easy updates!

### Step 1: Open the Config File

Navigate to: `/src/config/links.ts`

### Step 2: Update Your Links

```typescript
export const TELEGRAM_LINKS = {
  trial: 'YOUR_TRIAL_LINK_HERE',    // Replace this
  vip: 'YOUR_VIP_LINK_HERE',        // Replace this
  contact: 'YOUR_CONTACT_LINK_HERE', // Replace this
};

export const BROKER_LINKS = {
  signup: 'YOUR_BROKER_LINK_HERE',   // Replace this
};
```

### Step 3: Save & Done! ✅

That's it! All buttons across your entire website will now use your new links.

---

## 📝 What Each Link Does

### Telegram Links:

1. **trial** - Used by "Start Free Trial" buttons (appears 4 times across the site)
2. **vip** - VIP group link (currently for reference)
3. **contact** - "Contact Us" and "Learn More" buttons (appears 5 times)

### Broker Link:

1. **signup** - "Create Trading Account" button in the new Trading Account section

---

## 🎨 Customize Pre-filled Messages

You can also change what message appears when users click contact buttons:

```typescript
export const CONTACT_MESSAGES = {
  general: 'Hi! I am interested in JOPIPS premium signals.',
  vipUpgrade: 'Hi! I am interested in upgrading to JOPIPS VIP signals.',
  ready: 'Hi! I am ready to join JOPIPS premium signals.',
};
```

---

## 🌐 Update Your Website URL (For SEO)

Open `/src/app/components/SEO.tsx` and change line 4:

```typescript
const siteUrl = 'https://YOUR-DOMAIN-HERE.com';
```

Replace with your actual Netlify URL or custom domain.

---

## ✅ Test Your Changes

1. Save all files
2. Check that the dev server refreshes
3. Click every button on your website to test:
   - Header "Start Free Trial" button
   - Header "Contact Us" button  
   - Hero "Start Free Trial" button
   - Hero "Learn More" button
   - Trading Account "Create Account" button
   - Pricing "Start Free Trial" buttons
   - Pricing "Contact for VIP" button
   - Final CTA "Join Telegram Trial" button
   - Final CTA "Contact for Premium" button

---

## 🚀 Deploy to Production

After testing locally:

```bash
# Build your site
pnpm run build

# Deploy to Netlify (drag & drop the 'dist' folder to netlify.com/drop)
# OR push to GitHub and Netlify will auto-deploy
```

---

## 💡 Pro Tip

Bookmark this file! Whenever you need to update links in the future, just:

1. Open `/src/config/links.ts`
2. Change the links
3. Save
4. Deploy

No need to hunt through multiple files! 🎯
