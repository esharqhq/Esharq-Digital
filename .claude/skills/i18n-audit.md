---
name: i18n-audit
description: "Audit translation completeness across all 3 languages (en, uz, ru) in dictionaries.ts"
user_invocable: true
---

# i18n Audit Skill

Checks that all translation keys in `src/lib/dictionaries.ts` exist and are non-empty across all 3 languages.

## Instructions

### Step 1: Read the Dictionary File
Read `src/lib/dictionaries.ts` completely.

### Step 2: Parse and Compare Key Trees
For each language (en, uz, ru), extract the full key tree (including nested keys). Compare:

1. **Missing keys** — keys present in one language but absent in another
2. **Empty values** — keys that exist but have empty string `""` values
3. **Array length mismatches** — arrays (like `services.items`) that differ in length across languages
4. **Type mismatches** — a key is a string in one language but an object/array in another

### Step 3: Also Audit Portfolio Data
Read `constants/partfoliyo.json` and check:
- Every trilingual field (`title`, `short_desc`, `tags`, `details.industry`, `details.services`, `details.description`, `details.features`, `details.results`) has all 3 language keys
- Category labels have all 3 languages

### Step 4: Report
Output a structured report:

```
## i18n Audit Report

### dictionaries.ts

#### Missing Keys
| Key Path | en | uz | ru |
|----------|----|----|-----|
| section.keyName | ✅ | ❌ | ✅ |

#### Empty Values
| Key Path | Language |
|----------|----------|
| section.keyName | uz |

#### Array Length Mismatches
| Key Path | en | uz | ru |
|----------|----|----|-----|
| services.items | 11 | 10 | 11 |

### partfoliyo.json

#### Missing Translations
| Project | Field | Missing Languages |
|---------|-------|-------------------|
| project-id | title | uz |

### Summary
- Total keys checked: X
- Missing: X
- Empty: X
- All clear: ✅/❌
```

If everything passes, report a clean bill of health.

## When to Use
- After adding new translations
- Before deploying
- Periodic QA checks
- After the `add-section` or `add-translation` skills run
