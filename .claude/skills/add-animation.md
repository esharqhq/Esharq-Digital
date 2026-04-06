---
name: add-animation
description: "Apply GSAP ScrollTrigger or Framer Motion animation patterns to components"
user_invocable: true
---

# Add Animation Skill

Applies the correct animation pattern to a component, following established project conventions.

## Instructions

### Step 1: Determine Animation Type
Ask the user (if not clear):
- **GSAP ScrollTrigger** — for scroll-linked animations (parallax, scrub, progress-based). Used in `Showcase.tsx` and `Workflow.tsx`.
- **Framer Motion** — for viewport entrance animations (fade-in, slide-up on appear). Used in simpler sections.

### Step 2: Apply the Pattern

#### GSAP ScrollTrigger Pattern
Reference: `src/components/sections/Workflow.tsx`

```tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Component = ({ dict }: { dict: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Target elements by class within the scoped container
    const items = gsap.utils.toArray(".animate-item");
    items.forEach((item: any) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef}>
      {/* Items start hidden: className="animate-item opacity-0 translate-y-8" */}
    </section>
  );
};
```

**Key points:**
- Always use `useGSAP` hook (NOT raw `useEffect`) — it handles cleanup automatically
- Pass `{ scope: containerRef }` to scope animations to the component
- Use `gsap.utils.toArray()` for selecting multiple elements
- Common ScrollTrigger configs:
  - `start: "top 75%"` — trigger when element enters viewport
  - `toggleActions: "play none none reverse"` — play on enter, reverse on leave
  - `scrub: true` — for scroll-linked progress animations
- Neon glow animation: `boxShadow: "0 0 20px rgba(39, 223, 233, 0.8)"`
- Accent color in GSAP: `backgroundColor: "#27DFE9"`

#### Framer Motion Pattern
Reference: `src/components/sections/Services.tsx` style

```tsx
"use client";

import { motion } from "framer-motion";

// Stagger children entrance
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Component = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {items.map((item) => (
        <motion.div key={item.id} variants={item}>
          {/* content */}
        </motion.div>
      ))}
    </motion.div>
  );
};
```

**Key points:**
- Use `whileInView` + `viewport={{ once: true }}` for one-time entrance
- Use variants for parent-child stagger patterns
- Hover: `whileHover={{ scale: 1.02 }}` with `transition={{ type: "spring" }}`

### Step 3: Set Initial Hidden State
Elements that animate in must start in their "before" state:
- GSAP: Add classes like `opacity-0 translate-y-8` or `translate-x-[-50px]`
- Framer Motion: Set via `initial` or `variants.hidden`

### Step 4: Test
- Check the animation triggers correctly on scroll
- Verify cleanup (no stale ScrollTrigger instances on hot reload)
- Test at mobile and desktop viewports

## Important Notes
- GSAP is already installed and registered globally — just import `gsap`, `ScrollTrigger`, and `useGSAP`
- Framer Motion is imported as `framer-motion`
- The `"use client"` directive is required for any component using animations
- Brand neon color for glows/accents: `#27DFE9` / `rgba(39, 223, 233, ...)`
- Teal for secondary: `#026F84`
