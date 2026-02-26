# Haanaak — Premium Home Design Makeover

**Haanaak** is a luxury interior design and home makeover brand that blends time-honoured craftsmanship with modern, elegant aesthetics. This React-based static website showcases the brand's portfolio, services, and vision with a premium, state-of-the-art interface.

---

## ✨ Key Features

1.  **Dynamic Luxury Interface**: A custom-built design system using a "Charcoal & Gold" palette, with glassmorphism, smooth animations, and premium typography (*Cormorant Garamond* & *Outfit*).
2.  **Full Page Suite**:
    *   **Home**: Features a hero section with an animated room visual, project statistics, a featured portfolio, and client testimonials.
    *   **Design**: A filterable gallery of 12 signature projects and a tiered pricing system (Essence, Signature, Prestige).
    *   **About**: Shares the studio's history since 2011, mission, core values, and a timeline of major milestones.
    *   **Contact**: Includes a detailed consultation booking form, studio information, and an interactive-style map placeholder and FAQ.
    *   **Login & Portal (Formerly Dashboard)**: A complete, integrated authentication and client portal interface. Includes Sign In, Sign Up, and Forgot Password flows, as well as the personal design status dashboard once authenticated.
    *   **More (Journal & Resources)**: A blog system with featured posts, downloadable design resources, and an industry awards showcase.
3.  **Responsive Engineering**: Fully optimized for Desktop, Tablet, and Mobile devices with a custom hamburger menu drawer for smaller screens.
4.  **Premium UX**:
    *   **Smooth Scroll**: Auto-scroll to top on navigation.
    *   **Glassmorphism**: Elegant blur effects on the navbar and cards.
    *   **Micro-animations**: Subtle fade-ups, gold glows, and hover effects that make the site feel "alive".

---

## 🛠️ Technology Stack

-   **Framework**: [React.js](https://reactjs.org/) (via Vite)
-   **Routing**: [React Router v6](https://reactrouter.com/)
-   **Styling**: Vanilla CSS with Modern CSS Variables
-   **Typography**: Google Fonts (Cormorant Garamond & Outfit)
-   **Icons**: Custom SVGs and Unicode Glyphs
-   **Tooling**: Vite (Development Server & Build Tool)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm (installed automatically with Node.js)

### Installation
1.  Navigate to the project directory:
    ```bash
    cd "New Website"
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Development
To start the development server with hot-module reloading:
```bash
npm run dev
```
The site will be available at `http://localhost:5173`.

### Production Build
To create an optimized production bundle:
```bash
npm run build
```
The production files will be generated in the `/dist` folder.

---

## 📁 Project Structure

```text
/src
... (Project Structure remains similar)
/server
  - index.js (Email Automation Server @ PORT 5000)
index.html (SEO & Meta Tags)
```

---

## 🎨 Design Philosophy — "The Haanaak Way"
The website uses a **"Charcoal & Gold"** aesthetic to evoke a sense of exclusivity and timelessness. 
- **Studio Details**: Location updated to 6/c, 2nd Street, Krishna Nagar, Kallakurichi.
- **Email Automation**: Professional inquiries are automatically routed to `nagarjunbm90@gmail.com` via the secure backend handler.
- **Charcoal (#1a1714)**: Represents the solid foundation of craftsmanship.
- **Gold (#c9a84c)**: Represents the "✦" (spark) of creativity and luxury.
`