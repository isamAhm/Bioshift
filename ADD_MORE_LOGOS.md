# 🏢 How to Add More Company Logos

## Quick Guide

Currently, the slider shows `image.png` repeated 8 times. Here's how to add different company logos:

---

## Step 1: Add Logo Files

Place your company logo images in the `public/` folder:

```bash
public/
  ├── image.png          # Your existing logo
  ├── company1.png       # Add new logos here
  ├── company2.png
  ├── company3.png
  ├── company4.png
  └── company5.png
```

---

## Step 2: Update the Component

Open `components/CompaniesSlider.tsx` and replace this:

```typescript
// Current code (line 4-5):
const companies = Array(8).fill("/image.png");
```

With this:

```typescript
// New code with multiple logos:
const companies = [
  "/image.png",
  "/company1.png",
  "/company2.png",
  "/company3.png",
  "/company4.png",
  "/company5.png",
];
```

---

## Step 3: Save and Test

```bash
npm run dev
```

That's it! The slider will now show all your different company logos.

---

## Example with Company Names

If you want to include company names (for accessibility):

```typescript
const companies = [
  { name: "BioShift", logo: "/image.png" },
  { name: "Company One", logo: "/company1.png" },
  { name: "Company Two", logo: "/company2.png" },
  { name: "Company Three", logo: "/company3.png" },
];
```

Then update the JSX (lines 29-41 and 43-55):

```typescript
{companies.map((company, index) => (
  <div
    key={`first-${index}`}
    className="flex-shrink-0 mx-8 flex items-center justify-center"
  >
    <div className="relative w-48 h-24 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
      <Image
        src={company.logo}
        alt={company.name}
        fill
        className="object-contain"
      />
    </div>
  </div>
))}
```

---

## Logo Requirements

### Recommended Specs
- **Format:** PNG with transparent background
- **Size:** 400-800px width
- **Height:** 200-400px
- **File size:** Under 100KB
- **Background:** Transparent (or white)

### Tips
- Use landscape orientation (wider than tall)
- Keep logos simple and readable
- Consistent sizing looks best
- High resolution for retina displays

---

## Alternative: Keep Single Logo

If you only have one logo and want to keep it repeated, the current setup works perfectly! No changes needed.

---

## Current vs. Multiple Logos

**Current (Single Logo Repeated):**
```typescript
const companies = Array(8).fill("/image.png");
// Shows: Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo
```

**Multiple Different Logos:**
```typescript
const companies = [
  "/image.png",
  "/company1.png", 
  "/company2.png",
  "/company3.png",
];
// Shows: Logo1, Logo2, Logo3, Logo4 (then repeats)
```

---

## Need More Logos in the Scroll?

If you have 5 logos but want more visible in the slider, just duplicate them:

```typescript
const companies = [
  "/image.png",
  "/company1.png",
  "/company2.png",
  "/company3.png",
  "/company4.png",
  // Duplicate for more visible logos
  "/image.png",
  "/company1.png",
  "/company2.png",
  "/company3.png",
  "/company4.png",
];
```

---

That's all you need! The infinite scroll will work automatically with any number of logos.
