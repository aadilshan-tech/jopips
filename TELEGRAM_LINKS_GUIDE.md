# How to Change Telegram Links - JOPIPS Website

This guide shows you exactly how to update all Telegram links in your website.

## 📱 Current Telegram Links

Your website currently uses these 3 Telegram links:

1. **Trial Group**: `https://t.me/+-T8RglzaJdxiZjM1`
2. **VIP Group**: `https://t.me/+8ulkB_9sXvM2Yjll`
3. **Contact**: `https://t.me/Aadilshane`

---

## 🔧 How to Change the Links

### Step 1: Locate the Files

All Telegram links are used in these files:

1. `/src/app/components/Header.tsx`
2. `/src/app/components/Hero.tsx`
3. `/src/app/components/Pricing.tsx`
4. `/src/app/components/FinalCTA.tsx`

### Step 2: Replace Links Using Find & Replace

The easiest way is to use "Find and Replace" in your code editor:

#### For Trial Group Link:
- **Find**: `https://t.me/+-T8RglzaJdxiZjM1`
- **Replace with**: `YOUR_NEW_TRIAL_LINK`

#### For VIP Group Link:
- **Find**: `https://t.me/+8ulkB_9sXvM2Yjll`
- **Replace with**: `YOUR_NEW_VIP_LINK`

#### For Contact Link:
- **Find**: `https://t.me/Aadilshane`
- **Replace with**: `YOUR_NEW_CONTACT_LINK`

---

## 📍 Exact Locations (If You Want to Change Manually)

### File 1: `/src/app/components/Header.tsx`

**Line 63-65** - Trial Button:
```typescript
onClick={() => window.open('https://t.me/+-T8RglzaJdxiZjM1', '_blank')}
```

**Line 71** - Contact Button:
```typescript
onClick={handleContactClick}
```

**Line 31-32** - Contact Function:
```typescript
const message = encodeURIComponent('Hi! I am interested in JOPIPS premium signals.');
window.open(`https://t.me/Aadilshane?text=${message}`, '_blank');
```

---

### File 2: `/src/app/components/Hero.tsx`

**Line 31** - Start Free Trial Button:
```typescript
onClick={() => window.open('https://t.me/+-T8RglzaJdxiZjM1', '_blank')}
```

**Line 41** - Learn More Button:
```typescript
window.open(`https://t.me/Aadilshane?text=${message}`, '_blank');
```

---

### File 3: `/src/app/components/Pricing.tsx`

**Line 71** - Start Free Trial Button:
```typescript
onClick={() => window.open('https://t.me/+-T8RglzaJdxiZjM1', '_blank')}
```

**Line 27** - Contact for VIP Button:
```typescript
window.open(`https://t.me/Aadilshane?text=${message}`, '_blank');
```

---

### File 4: `/src/app/components/FinalCTA.tsx`

**Line 31** - Join Telegram Trial Button:
```typescript
onClick={() => window.open('https://t.me/+-T8RglzaJdxiZjM1', '_blank')}
```

**Line 42** - Contact for Premium Button:
```typescript
onClick={handleContactClick}
```

**Line 7** - Contact Function:
```typescript
window.open(`https://t.me/Aadilshane?text=${message}`, '_blank');
```

---

## ✅ Quick Search Method

Open each file and press `Ctrl+F` (Windows) or `Cmd+F` (Mac), then search for:

1. `t.me/+-T8RglzaJdxiZjM1` - Replace all with your new trial link
2. `t.me/+8ulkB_9sXvM2Yjll` - Replace all with your new VIP link (if used)
3. `t.me/Aadilshane` - Replace all with your new contact link

---

## 🎯 Example Replacement

**Before:**
```typescript
onClick={() => window.open('https://t.me/+-T8RglzaJdxiZjM1', '_blank')}
```

**After** (with your new link):
```typescript
onClick={() => window.open('https://t.me/+YOUR_NEW_LINK_HERE', '_blank')}
```

---

## 💡 Pro Tips

1. **Keep the Format**: Always keep `https://t.me/` at the beginning
2. **Test Links**: After changing, click all buttons on your website to make sure they work
3. **Pre-filled Messages**: The contact buttons include pre-filled messages. You can change these too by editing the `message` variable in each file

---

## 🔄 After Making Changes

1. Save all files
2. The website will auto-refresh if dev server is running
3. Test all buttons to ensure they redirect correctly
4. Deploy to Netlify to publish changes

---

## 📝 Summary

Total places to update:
- **4 files** contain Telegram links
- **Trial link** appears **4 times**
- **Contact link** appears **5 times**
- **VIP link** (currently only in this guide, not used directly in buttons)

Use "Find & Replace All" to change them in one go!
