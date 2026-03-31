# ComplianceOS Demo

A highly interactive vanilla HTML/CSS/JS prototype for a Corporate Sustainability & Compliance Operations system (CSRD, NIS2, AIFMD). 
Built with clean architecture, dynamic i18n localization, and local-storage state persistence.

## 🚀 Running Locally
You don't need a heavy build process. Simply serve the files via a local static HTTP server:
```bash
# Using Python 3
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## 🌟 Key Features
* **Localization**: Fully responsive toggles between EN, DE, FR without page reloads (via `js/i18n.js`).
* **Zero-DB Persistence**: All user interactions (notifications, tasks, data source management) persist natively in the browser via `localStorage` (via `js/data.js`).
* **Dynamic Interactivity**: Uses beautiful custom CSS glassmorphic aesthetics and SVG animations.

## 🛠 Tech Stack
* **HTML5** & **Vanilla Javascript**
* **Tailwind CSS** (via CDN for rapid prototyping)
* **CSS Custom Properties** (for robust theming)
