---
name: add-section
description: "Scaffold a new page section with component, i18n translations for all 3 languages, and page registration"
user_invocable: true
---

# Add Section Skill

Scaffolds a new page section for the Esharq Digital site. This is a multi-step process that touches 3 files.

## Instructions

When the user asks to add a new section, follow these steps:

### Step 1: Gather Requirements
Ask the user (if not already provided):
- Section name (e.g., "Testimonials", "Team", "FAQ")
- Brief description of what it should display
- Animation preference: GSAP ScrollTrigger (scroll-linked) or Framer Motion (viewport entrance)
- Position in the page (after which existing section)

### Step 2: Add Translation Keys
Edit `src/lib/dictionaries.ts` — add a new key to ALL THREE languages (en, uz, ru) in the `dictionaries` object. Follow the existing pattern:
- Each section has `title1` and `title2` (used by `SectionTitle` component)
- Add any section-specific keys (items, descriptions, etc.)
- The user must provide Uzbek and Russian translations, or mark them as TODO

### Step 3: Create the Section Component
Create a new file in `src/components/sections/{Name}.tsx` following these conventions:

**If using GSAP (scroll-linked animations):**
```tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionTitle from "../SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export const {Name} = ({ dict }: { dict: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // animations here with ScrollTrigger
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 bg-[#050505] overflow-hidden flex flex-col items-center">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#026F84]/10 blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="w-full max-w-5xl px-6 relative z-10">
        <div className="text-center mb-24">
          <SectionTitle title1={dict.title1} title2={dict.title2} />
        </div>
        {/* Section content */}
      </div>
    </section>
  );
};
```

**If using Framer Motion (entrance animations):**
```tsx
"use client";

import { useState } from "react";
import SectionTitle from "../SectionTitle";

export const {Name} = ({ dict }: { dict: any }) => {
  return (
    <section id="{sectionId}" className="relative py-32 bg-[#0A0A0A] overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-7xl px-6 relative z-10">
        <SectionTitle title1={dict.title1} title2={dict.title2} description={dict.description} />
        {/* Section content */}
      </div>
    </section>
  );
};
```

**Styling conventions:**
- Dark backgrounds: `bg-[#050505]`, `bg-[#0A0A0A]`, or `bg-[#151616]`
- Neon accent: `#27DFE9` for highlights, glows, hover states
- Teal accent: `#026F84` for secondary elements
- Text: `text-white` for headings, `text-gray-400`/`text-gray-500` for body
- Uppercase italic for headings: `uppercase italic tracking-tight font-black`
- Glow effects: `shadow-[0_0_15px_#27DFE9]`

### Step 4: Register in Page
Edit `src/app/[lang]/page.tsx`:
1. Add import: `import { {Name} } from "@/components/sections/{Name}";`
2. Add component in the correct position: `<{Name} dict={dict.{sectionKey}} />`

### Step 5: Verify
- Run `npm run build` to check for TypeScript/build errors
- Check the dev server to see the section renders correctly

## Important Notes
- Always use `SectionTitle` component for section headings — it provides consistent neon styling
- Every section receives its dict slice as props, NOT the full dictionary
- The `"use client"` directive is required for any component using hooks, GSAP, or Framer Motion
- Keep translations in `dictionaries.ts`, never in the component
