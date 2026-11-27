# 📧 How to Update the Second Email Address

## Quick Instructions

Replace `secondemail@example.com` with your actual email in **2 files**:

---

## File 1: `app/page.tsx`

**Line 10:**

```typescript
const CONTACT_EMAIL_2 = "secondemail@example.com"; // ← CHANGE THIS
```

**Change to:**

```typescript
const CONTACT_EMAIL_2 = "your-actual-email@domain.com";
```

---

## File 2: `app/api/demo/route.ts`

**Lines 118-121:**

```typescript
to: [
    "henok3095@gmail.com",
    "secondemail@example.com",  // ← CHANGE THIS
],
```

**Change to:**

```typescript
to: [
    "henok3095@gmail.com",
    "your-actual-email@domain.com",
],
```

---

## Current Configuration

**Primary Email (Henok):**
- Email: `henok3095@gmail.com`
- Visible in: Footer, receives demo requests
- Status: ✅ Configured

**Secondary Email:**
- Email: `secondemail@example.com` ← **PLACEHOLDER**
- Visible in: Footer, receives demo requests
- Status: ⚠️ **NEEDS UPDATE**

---

## After Updating

1. **Save both files**
2. **Rebuild if needed:**
   ```bash
   npm run build
   ```
3. **Test locally:**
   ```bash
   npm run dev
   ```
4. **Submit a test form** to verify both emails receive it

---

## Example

If the second email is `isam.ahmedh8@gmail.com`:

**app/page.tsx:**
```typescript
const CONTACT_EMAIL_2 = "isam.ahmedh8@gmail.com";
```

**app/api/demo/route.ts:**
```typescript
to: [
    "henok3095@gmail.com",
    "isam.ahmedh8@gmail.com",
],
```

---

**That's it!** Both emails will now receive demo requests and appear in the footer.
