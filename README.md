## 3D-Printing Website

### Introduction

![am-i-responsive](assets/readme-img/am-i-responsive.jpg)

This project is a **3D-printing and 3D-scanning website** designed to inform users about the advancements in additive manufacturing and 3D-scanning technologies. The website offers an **interactive and user-friendly** experience, making it easy for beginners and professionals to learn about different printing techniques, scanning methods, and their applications across various industries.

It covers essential concepts like **Fused Deposition Modeling (FDM), Stereolithography (SLA), and Selective Laser Sintering (SLS)**, while also providing insights into how **3D scanning** is used for reverse engineering, medical applications, and digital preservation.

### 3D Printers
- Details various types of **3D-printing technologies**:
- **FDM (Fused Deposition Modeling)** – Uses thermoplastic filaments to create objects.
- **SLA (Stereolithography)** – Uses liquid resin cured by UV light for high-detail printing.
- **SLS (Selective Laser Sintering)** – Utilizes powdered materials and a laser for precise builds.
- Discusses materials used: **plastics, resins, metals, and composites**.
- Real-world applications in **engineering, medical, automotive, and design** fields.

### 3D Scanning
- Explores techniques like **structured light scanning, laser scanning, and photogrammetry**.
- Explains how 3D-scanners convert physical objects into digital models.
- Applications in **reverse engineering, archaeology, medical imaging, and digital preservation**.

### Headings
- Clear and consistent heading structure improves accessibility and readability.
- Pages dynamically load structured headings via JavaScript:
- `<h1>`: Main page titles
- `<h2>`: Section headings
- `<h3>`: Reserved for future use

### Page Structure Overview

- **Navigation Bar**
- Sticky and responsive `<nav>` styled with Flexbox
- Highlights active page
- Includes links to **Home, Info, Contact**
![Contact nav-bar](assets/readme-img/navbar.jpg)

-**Features**
- Dynamic content switching via `onclick="showPage('...')"`
- Vibrant orange gradient background
- Bold black text and responsive behavior

### Responsive Behavior
- Converts layout to vertical on screens < 768px
- Font sizes and padding adjust for usability

### Pages Overview
#### Home Page
- Large banner and welcome message
- Intro to 3D printing and scanning
![Home Page](assets/readme-img/home.jpg)

#### Information Page
- In-depth overview of 3D technologies
- Benefits and working principles
![Information Page](assets/readme-img/info.jpg)

#### Contact Page
- Fully functional form with:
- Name, Email, Message fields
- CAPTCHA (3 + 4)
- Confirmation message on success
- Auto-redirect with fade transition
![Contact Page](assets/readme-img/contact.jpg)

### Form Behavior
- Validates CAPTCHA before submission
- Confirmation displayed for 2 seconds
- Resets form and redirects to Home with animation

### Accessibility Features
- All form inputs have proper labels and `required` attributes
- Keyboard and screen reader friendly
- Semantic HTML used throughout

### Footer
- Displays contact info, address, working hours
- Facebook and Instagram icons
- Responsive Flexbox layout
![footer](assets/readme-img/footer.jpg)

### Mobile Adjustments
- Footer stacks vertically under 768px
- Text remains centered and clear at all screen sizes

### Responsive Design
- Tested on all devices and screen sizes down to 111px
- Media queries used for font, image, and layout scaling

### Techniques Used
- **Flexbox**: for responsive layout
- **Media Queries**: adaptive styling
- **Object-fit & max-width**: consistent image rendering
- **Semantic HTML + Times New Roman font**

### User Experience (UX)
- Clean layout
- Smooth transitions and responsive nav
- Accessible contrast, hover/focus feedback

### Wireframes
- Initial wireframes sketched by hand
- Pages: **Home**, **Information**, **Contact**

![Home Wireframe](assets/readme-img/sketch-home.jpg)
![Info Wireframe](assets/readme-img/sketch-info.jpg)
![Contact Wireframe](assets/readme-img/sketch-contact.jpg)
![Contact Wireframe](assets/readme-img/sketch-contact.jpg)
![Wireframe-all](assets/readme-img/wireframe.jpg)
![Wireframe-home](assets/readme-img/wireframe-home.jpg)
![Wireframe-info](assets/readme-img/wireframe-info.jpg)
![Wireframe-info](assets/readme-img/wireframe-contact.jpg)
### Design
- **Colors**: Gold text on black, orange gradient accents
- **Font**: Times New Roman
- **Typography**: Clear spacing and size adjustments via media queries
- **Layout**: Built using Flexbox for modular responsiveness across all components

### User Stories
- **First-time visitors**:
  - Learn what 3D-printing/scanning is
  - See machine and model examples
  - Navigate easily
- **Returning users**:
  - Review specific tech
  - Submit form questions
  - Explore image examples

### Manual Tests
1. Navigation test
2. Form validation test (empty, invalid, valid)
3. Responsive layout check
4. Image load/performance check
5. Cross-browser compatibility test
6. Footer stays bottom-aligned on all sizes

### Bugs
- **Fixed Bugs**
- Missing **form** tag (caused display issues)
- Contact form didn’t reset (now resolved)
- CAPTCHA not working (now validated)
- Fade transition didn’t run (added .fade-transition class)
- Footer overlapped content on small screens (fixed with flex and media queries)
- Footer too tall on desktop, not pushed down on mobile (solved with min-height & flex: 1)
- Social icons misaligned (positioned via .footer-bar with flex)
- **ul/li** colors & alignment broken on mobile (responsive font rules added)
- **h1** size too large on small screens (scaled via media queries)
- Browser language affected form messages (resolved by setting lang="en" in HTML tag)
- White stripe above navbar (fixed by removing default margins and background override

#### Known Issues (Resolved)
- Footer stacked wrong on iPhone 5 — fixed with better layout & height adjustments
- Images scaled unevenly — now controlled via `aspect-ratio` and `max-width`
- Layout broke under 320px — now fully tested to 111px width

### Final Manual Testing and Write-Up
- ✅ Cross-browser tested
- ✅ Performance checked
- ✅ Accessibility verified (text contrast, ARIA)

### Validation
- ✅ HTML and CSS validated via W3C
![CSS Validation](assets/readme-img/css-validation.jpg)
![HTML Adress Validation](assets/readme-img/adress-validation.jpg)
![HTML Index Validation](assets/readme-img/index-validation.jpg)
![HTML Home Validation](assets/readme-img/home-validation.jpg)
![HTML Info Validation](assets/readme-img/info-validation.jpg)
![HTML Contact Validation](assets/readme-img/contact-validation.jpg)

### Lighthouse Scores
- **Performance**: 95
- **Accessibility**: 88
- **Best Practices**: 100
- **SEO**: 91
![Lighthouse](assets/readme-img/lighthouse-95-88-100-91.jpg)

### Deployment
- Hosted on GitHub Pages: https://god-zil-la.github.io/my-first-project/
- Files in /assets/ for styles and images
- Works fully in browser, no backend needed

### Development Process
- Structure in HTML
- CSS via external styles.css
- Dynamic content switch via JavaScript
- Contact form improved with validation logic

### Running in Gitpod
- You can open and test this project directly in Gitpod (a cloud-based VS Code environment):
- https://gitpod.io/#https://github.com/god-zil-la/my-first-project
- Or click the button at the top of this README to launch instantly in Gitpod.
- Wait for Gitpod to load your project files.
- Open index.html
- Right-click > Open with Live Server (install Live Server if prompted)

This allows live editing and previewing your site directly in Gitpod.
### GitHub Pages Deployment
- git add .
- git commit -m "Initial commit"
- git push
- Go to GitHub > Repo Settings > Pages
- Choose main as source
- ✅ Site live at https://god-zil-la.github.io/my-first-project/

### Post-Deployment Checklist
- ✔ Internal links work
- ✔ Contact form functional
- ✔ Mobile and desktop tested
- ✔ Performance optimized

### GitHub Repository
- 📁 GitHub Repo

### Known Features
- ✅ Dynamic content switching
- ✅ Responsive design
- ✅ Validated contact form
- ✅ Fast load time and hover effects

### Future Features
- 👤 User login system
- 🌀 3D model viewer
- 📰 Blog section
- 🛒 E-commerce integration
- 🌙 Dark mode toggle
- 🌍 Multilingual support

### Technologies & Tools:
- CSS3: Core styling language
- Flexbox: For layout and alignment
- Source: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Media Queries: Responsive design breakpoints
- Font Awesome Icons: Social media icons
- Source: https://fontawesome.com/
- Balsamiq: https://balsamiq.com/

### References & Learning Platforms:
- W3Schools: https://www.w3schools.com/css/
- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/CSS
- Code Institute materials and mentoring

### Design Inspiration:
- Kevin Powell (YouTube)
- FreeCodeCamp tutorials
- CSS gradient ideas and hover transitions from various modern UI examples

### Testing & Validation:
- Chrome DevTools: Mobile responsiveness and layout testing
- W3C CSS Validator: https://jigsaw.w3.org/css-validator/
- Lighthouse Performance Tool

### Credits
- Project created by Hussein Elali
- Thanks to family, friends, mentor Brian (Code Institute), and Google for support and guidance 🚀