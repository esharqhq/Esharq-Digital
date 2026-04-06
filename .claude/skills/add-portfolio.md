---
name: add-portfolio
description: "Add a new portfolio project to partfoliyo.json with trilingual content"
user_invocable: true
---

# Add Portfolio Skill

Adds a new project entry to `constants/partfoliyo.json` with proper trilingual structure.

## Instructions

### Step 1: Gather Project Info
Ask the user for (if not already provided):
- Project name (in English, Uzbek, Russian)
- Category: `web`, `app`, or `marketing`
- Year
- Short description (3 languages)
- Tags (3 languages)
- Images (filenames — user should place them in `public/images/portfolio/`)
- Client name
- Industry (3 languages)
- Services provided (3 languages)
- Detailed description (3 languages)
- Key features (3 languages)
- Accent color (hex, defaults to `#00C8E0`)

### Step 2: Read Current File
Read `constants/partfoliyo.json` to understand the structure and get the existing entries.

### Step 3: Add New Entry
Add a new object to the `portfolio` array following this exact structure:

```json
{
  "id": "project-slug",
  "slug": "project-slug-url",
  "category": "web",
  "color": "#00C8E0",
  "year": 2024,
  "images": [
    "/images/portfolio/image1.png",
    "/images/portfolio/image2.png"
  ],
  "image": "/images/portfolio/image1.png",
  "mockup_type": "screen",

  "title": {
    "en": "Project Title",
    "ru": "Название проекта",
    "uz": "Loyiha nomi"
  },

  "short_desc": {
    "en": "Brief description",
    "ru": "Краткое описание",
    "uz": "Qisqa tavsif"
  },

  "tags": {
    "en": ["Tag1", "Tag2"],
    "ru": ["Тег1", "Тег2"],
    "uz": ["Teg1", "Teg2"]
  },

  "details": {
    "client": "Client Name",
    "industry": {
      "en": "Industry",
      "ru": "Индустрия",
      "uz": "Soha"
    },
    "services": {
      "en": ["Service 1", "Service 2"],
      "ru": ["Услуга 1", "Услуга 2"],
      "uz": ["Xizmat 1", "Xizmat 2"]
    },
    "description": {
      "en": "Full description...",
      "ru": "Полное описание...",
      "uz": "To'liq tavsif..."
    },
    "features": {
      "en": ["Feature 1", "Feature 2"],
      "ru": ["Функция 1", "Функция 2"],
      "uz": ["Xususiyat 1", "Xususiyat 2"]
    },
    "results": {
      "en": "Results summary",
      "ru": "Итоги",
      "uz": "Natijalar"
    },
    "stack": ["Next.js", "Tailwind CSS"]
  }
}
```

### Step 4: Validate
- Ensure the `id` and `slug` are unique (not duplicating existing entries)
- Ensure `category` matches one of the existing categories: `web`, `app`, `marketing`
- Ensure all trilingual fields have all 3 languages
- Remind the user to place images in `public/images/portfolio/`

## Important Notes
- The file is `constants/partfoliyo.json`
- Categories are defined at the top of the JSON file in the `categories` array
- If adding a new category, it must also be added to the `categories` array with trilingual labels
- The `mockup_type` field is typically `"screen"`
- The `image` field is the primary/thumbnail image, `images` is the full gallery
- The Portfolio component at `src/components/sections/Portfolio.tsx` reads this file
