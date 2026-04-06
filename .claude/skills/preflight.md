---
name: preflight
description: "Run lint and build checks before deploy to catch errors early (no CI/CD substitute)"
user_invocable: true
---

# Preflight Check Skill

Runs pre-deployment quality checks since the project has no CI/CD pipeline.

## Instructions

### Step 1: Run Lint
```bash
npm run lint
```
Report any ESLint errors or warnings with file paths.

### Step 2: Run Build
```bash
npm run build
```
This catches:
- TypeScript type errors
- Missing imports/exports
- SSR issues (server/client boundary violations)
- Invalid dynamic routes
- Missing environment variables at build time

### Step 3: Check for Common Issues
Scan for these known pitfalls:
- `"use client"` missing on components that use hooks, GSAP, or Framer Motion
- Missing translations (keys present in `en` but absent in `uz` or `ru` in `src/lib/dictionaries.ts`)
- Images referenced in code but missing from `public/images/` or `public/svg/`
- Environment variables: check `.env.example` lists all required vars (`GEMINI_API_KEY`, `APP_URL`)

### Step 4: Report Results
Provide a summary:

```
## Preflight Results

### Lint: PASS/FAIL
- [list any issues]

### Build: PASS/FAIL
- [list any errors with file:line references]

### Manual Checks:
- [ ] All translations complete (en/uz/ru)
- [ ] All referenced images exist
- [ ] Environment variables documented
```

## When to Use
- Before deploying to production
- After adding new sections or major changes
- Before creating a PR
