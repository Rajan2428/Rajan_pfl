# Rajan Raja — Personal Portfolio Website

A modern, premium, professional portfolio website designed for **Rajan Raja**, a B.Tech Computer Science Engineering student at **JECRC University**.

Built with pure semantic **HTML5**, modern **CSS3** (with dark/light theme tokens and responsive layouts), and vanilla **JavaScript (ES6+)**. Zero framework lock-in, zero build steps, and ultra-fast loading speeds.

---

## 🌟 Key Highlights & Design Features

- **Honest Academic & Technical Representation**:
  - Communicates Rajan's genuine profile as an ambitious, curious B.Tech CSE student building solid software fundamentals.
  - Transparent skills showcase with dedicated "Currently Learning" badges (Java, Data Structures & Algorithms) instead of artificial percentages or fake progress bars.
- **Modern & Premium Aesthetic**:
  - Deep slate/zinc dark mode (default) paired with crisp, clean light mode.
  - Persistent theme switching via `localStorage` and `prefers-color-scheme` support.
  - Subtle micro-interactions, sleek borders, and responsive cards.
- **Complete 8 Portfolio Sections**:
  1. **Home / Hero**: Prominent name, B.Tech CSE subtitle, technology tagline, introduction, CTAs, and interactive Java profile code card.
  2. **About Me**: Narrative on technology curiosity, interest in business & music, and continuous learning philosophy.
  3. **Education**: Dedicated B.Tech CSE card for JECRC University, currently pursuing status, and core focus topics.
  4. **Skills**: Categorized into Programming, Web Technologies, Computer Science, and AI Tools with honest badges.
  5. **Projects Showcase**: Polished cards for DSA Practice Repository, Personal Portfolio, and student mini-project placeholders.
  6. **Certifications & Achievements**: Structured, clearly marked placeholder cards ready for course completions, hackathons, and workshops.
  7. **Contact**: Direct email (`rrraja2805@gmail.com`) with a 1-click clipboard copy utility, interactive contact form, and campus location.
  8. **GitHub & LinkedIn**: Prominently featured in navigation, hero, contact cards, and footer with clearly commented placeholders.

---

## 📁 Project Structure

```text
Rajan-pfl/
├── index.html          # Main HTML document with all sections & semantic structure
├── css/
│   └── style.css       # Design system, CSS variables, dark/light themes, responsive styling
├── js/
│   └── main.js         # Theme toggle, scroll spy, clipboard helper, contact form handler
└── README.md           # Documentation, customization guide & deployment instructions
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Launch
Simply double-click `index.html` or right-click `index.html` &rarr; **Open with** &rarr; **Google Chrome / Microsoft Edge / Firefox**.

### Option 2: Using Node.js / NPX
If you have Node.js installed, open PowerShell or Terminal in this folder and run:
```bash
npx serve .
```
Then visit `http://localhost:3000` in your web browser.

### Option 3: VS Code Live Server
1. Open the folder in **Visual Studio Code**.
2. Install the **Live Server** extension.
3. Right-click `index.html` and click **"Open with Live Server"**.

---

## ✏️ How to Customize & Replace Placeholders

All placeholders are marked with `EDITABLE PLACEHOLDER` comments inside `index.html`.

### 1. Update Social Profile Links
Search for `https://github.com/your-username` and `https://linkedin.com/in/your-username` in `index.html` and replace them with your actual profiles:
- In the navigation bar (lines 40–55)
- In the hero connect section (lines 160–180)
- In the contact section (lines 900–925)
- In the footer (lines 1010–1025)

### 2. Attach Your Resume / CV PDF
1. Place your resume PDF in the project folder (e.g., `resume.pdf`).
2. In `index.html`, find the Resume button in the Hero section and update:
   ```html
   <a href="resume.pdf" target="_blank" class="btn btn-outline">
     <span>Resume / CV</span>
   </a>
   ```

### 3. Add or Update Projects
In the `<section id="projects">` section of `index.html`:
- Replace the titles, descriptions, and feature bullets with your actual repository links and demos.
- Update tech tags according to what you used (e.g., `Java`, `C`, `HTML`, `CSS`, etc.).

### 4. Add Certifications as You Earn Them
In the `<section id="certifications">` section of `index.html`:
- Update the placeholder cards with actual certificates from platforms like Coursera, NPTEL, HackerRank, or JECRC University events.

### 5. Connecting the Contact Form to Receive Emails
The contact form currently triggers client-side validation and opens the user's default email client (`mailto:`) with pre-filled content.

To receive submissions directly to your inbox without opening an email client, you can use **Formspree** (free):
1. Sign up at [formspree.io](https://formspree.io/) with `rrraja2805@gmail.com`.
2. Create a form and copy your endpoint URL (e.g., `https://formspree.io/f/xv...`).
3. In `index.html`, set the form tag:
   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST" class="contact-form">
   ```

---

## 🌐 How to Deploy for Free

### GitHub Pages (Recommended)
1. Initialize git and push the repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release for Rajan Raja"
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git branch -M main
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings** &rarr; **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your website will be live at `https://<your-username>.github.io` within 1–2 minutes!

### Vercel / Netlify
- Drag and drop this folder onto [Netlify Drop](https://app.netlify.com/drop) or import from GitHub on [Vercel](https://vercel.com) for instant deployment with free SSL.

---

## 📄 License & Credits
Designed and built for **Rajan Raja**. Feel free to customize and expand as your computer science career progresses!
