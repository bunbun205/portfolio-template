# 🌐 Astro + React + Tailwind Portfolio Template

A developer and artist-friendly portfolio template built with **Astro**, **React**, **TailwindCSS**, and **Vite**. Designed to be modern, responsive, easily customizable, and backend-ready.

---

## 🚀 Features

- 🌙 Dark/Light Theme Toggle
- 🎨 Project Showcase (Carousel, Categories, Popup Viewer)
- ✍️ Blog Section with Likes & Commenting
- 💬 Comment Threads (frontend-only with local storage fallback)
- 📦 Asset Viewer & Upload System (if backend connected)
- 🧠 Skill Map + About + Resume Popup
- ☕ Funding Page (UPI, PayPal, Bank Transfer options)
- 🧩 Modular Components for Reusability
- 🔧 Backend-Ready but Fully Functional Without One

---

## 🛠️ Getting Started

### 1. **Clone the Repo**
```bash
git clone https://github.com/yourusername/your-portfolio-template.git
cd your-portfolio-template
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally
```bash
npm run dev
```

## 📁 Folder Structure
bash
Copy
Edit
src/
├── components/          # React components
│   ├── Blog/
│   ├── ProjectsPage/
│   ├── Shared/
│   └── ...
├── layouts/             # Astro layout files
├── pages/               # Astro pages (.astro)
│   ├── index.astro
│   ├── blog/
│   ├── projects/
│   └── contact.astro
├── styles/              # Tailwind and global styles
├── utils/               # Helper functions, interfaces, mock data
└── assets/              # Static files like images and models
⚙️ Configuration
Theme toggle is stored in local storage and syncs with system preference.

You can update mock content in:

src/utils/mockProjects.ts

src/utils/mockPosts.ts

src/utils/mockComments.ts

To change skills, update SkillMap.tsx.

🔌 Backend Integration (Optional)
This template is backend-ready. You can integrate your own REST API or Cloudflare Worker to support:

Persistent blog posts

Project uploads

Comment moderation

Asset hosting (Cloudflare R2 recommended)

See /utils/interfaces.ts for expected data formats.

🧪 Fallback Behavior
If no backend is detected, the site uses:

Mock data for blog posts and projects

Local storage to save comments and likes

Fallback mock-thumb.png image and lorem ipsum text

📦 Deployment
Recommended platforms:

Vercel

Netlify

Cloudflare Pages

Build
bash
Copy
Edit
npm run build
Preview
bash
Copy
Edit
npm run preview
💰 Support Section Setup
You can link the Contact page to:

✅ UPI QR or link

✅ PayPal.me

✅ Bank transfer instructions (external)

⚠️ No sensitive data is stored in code.

🧑‍💻 Author
Built by Your Name

Twitter: @yourhandle

License: MIT

📸 Screenshots
(Insert screenshot previews of key pages)

✅ To-Do (Optional)
 Add backend endpoints

 Integrate Cloudflare D1/R2

 CMS-like blog editor

 Image optimization

