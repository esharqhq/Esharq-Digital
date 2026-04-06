---
name: add-translation
description: "Add or update i18n translation keys across all 3 languages (en, uz, ru) in dictionaries.ts"
user_invocable: true
---

# Add Translation Skill

Adds or updates translation keys in `src/lib/dictionaries.ts` for all 3 supported languages.

## Instructions

### Step 1: Read Current State
Read `src/lib/dictionaries.ts` to understand the current structure and find where to add new keys.

### Step 2: Determine What to Add
Based on the user's request, determine:
- Which section the keys belong to (nav, hero, whyAi, services, portfolio, contact, workflow, or a new section)
- The key names and English values
- Whether Uzbek and Russian translations are provided

### Step 3: Add Keys to All 3 Languages
Edit `src/lib/dictionaries.ts` — add the new keys to **all three** language objects: `en`, `uz`, `ru`.

**Rules:**
- Always add keys to ALL 3 languages in the same edit — never leave a language behind
- If the user only provides English text, add the English text and mark others with a `// TODO: translate` comment or ask the user for translations
- Match the existing key naming style (camelCase for keys, nested objects for grouped content)
- Arrays of items (like services.items) must have the same length and structure across all languages
- Preserve the existing order of keys within each section

### Step 4: Verify Structure Parity
After editing, quickly scan that:
- All 3 language objects have the same key paths
- Array lengths match across languages
- No typos in key names

### Example: Adding a Key

If the user says "add a tagline to the hero section":

```typescript
// In en:
hero: {
  // ... existing keys
  tagline: "Building the future with AI",
},

// In uz:
hero: {
  // ... existing keys
  tagline: "Sun'iy intellekt bilan kelajakni quramiz",
},

// In ru:
hero: {
  // ... existing keys
  tagline: "Строим будущее с ИИ",
},
```

## Important Notes
- The file is `src/lib/dictionaries.ts` — translations are inline, NOT in separate JSON files
- The type `Language = "en" | "uz" | "ru"` is exported from this file
- `getDictionary()` in `src/lib/getDictionary.ts` returns the locale's dictionary with fallback to English
- Components receive their section's dict slice as props (e.g., `dict.hero`, `dict.services`)
