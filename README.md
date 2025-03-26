# 3D-Printing Website

## Introduction
This project is a **3D-printing and 3D-scanning website** designed to inform users about the advancements in additive manufacturing and 3D-scanning technologies. The website offers an **interactive and user-friendly** experience, making it easy for beginners and professionals to learn about different printing techniques, scanning methods, and their applications across various industries.

It covers essential concepts like **Fused Deposition Modeling (FDM), Stereolithography (SLA), and Selective Laser Sintering (SLS)**, while also providing insights into how **3D scanning** is used for reverse engineering, medical applications, and digital preservation.

### 3D Printers
- Details various types of **3D-printing technologies** such as:
- **FDM (Fused Deposition Modeling)** – Uses thermoplastic filaments to create objects.
- **SLA (Stereolithography)** – Uses liquid resin cured by UV light for high-detail printing.
- **SLS (Selective Laser Sintering)** – Utilizes powdered materials and a laser for precise builds.
- Discusses materials used in 3D-printing, including **plastics, resins, metals, and composites**.
- Highlights real-world applications in **engineering, medical fields, automotive, and design**.

### 3D Scanning
- Explores different 3D scanning techniques such as **structured light scanning, laser scanning, and photogrammetry**.
- Explains how **3D-scanners capture and convert physical objects into digital models**.
- Discusses applications in **reverse engineering, archaeology, medical imaging, and digital preservation**.

## Headings

### Navigation Bar
![Nav Bar](navbar.jpg)
- Sticky and responsive.
- Highlights the active section.
- Includes links to Home, Info, and Contact.

### Home Page
![Home](home.jpg)
- Large welcoming text and banner.
- Introduction to 3D-printing and 3D-scanning.

### Information Page
![Info](info.jpg)
- Provides an introduction to **3D-printing and 3D-scanning**.
- Explains the basic principles of **additive manufacturing** and how objects are created layer by layer.
- Covers the benefits of 3D-printing.

### Contact Page
![Contact](<kontakt form-1.jpg>)
- A form allowing users to reach out.
- Features validation to ensure correct email and name entry.
- Fully functional contact form with validation and CAPTCHA.
- Provides an automatic confirmation message upon successful submission.
- Auto-redirects to the home page with animation.

### Footer
![Footer](footer.jpg)
- Displays contact information, address, and working hours.
- Link to Facebook and Instagram

### User Experience (UX)
- The design is centered around simplicity, speed, and cross-device compatibility. It includes:
- Responsive layout with Flexbox and media queries
- Semantic HTML for accessibility
- Smooth scrolling and section transitions
- Friendly color contrast and interactive feedback (hover and focus states)
- Animated visual effects to enhance content appearance

### Testimonials (optional/placeholder)
- Placeholder section for future reviews or feedback.

### Responsive Design
- Optimized for mobile and tablet screens.
- Fluid layout adjusts to all screen sizes.

### Wireframe mockups:
- [Home, Information and Contact](https://god-zil-la.github.io/my-first-project/)
- Initial sketches of the three main sections:
- Home with information and images
- Info page detailing the 3D process
- Contact page with a form

### Design
**Colors**
- Gold text on a black background
- Red accents and buttons

### Typography
- Sans-serif font (Arial)
- Large headings with good spacing for readability

### User Stories
**First Time Visitor Goals**
- Learn what 3D-printing and 3D-scanning are
- See image examples of machines and printed objects
- Navigate easily between site sections
**Returning Visitor Goals**
- Review information about specific technologies
- Access contact form for follow-up questions
- Explore images and application cases in detail

## Some Manual Tests
1. **Navigation Test**: Click through all menu items and ensure the correct content loads without refreshing the page.
2. **Form Validation Test**: Try submitting an empty form, an invalid email, and a correct submission to test error handling.
3. **Responsive Design Test**: Resize the browser window and check the layout on mobile devices.
4. **Performance Test**: Measure load time and ensure images and scripts load correctly.
5. **Cross-Browser Compatibility Test**: Open the site in Chrome, Firefox, Edge, and Safari to check functionality.
6. **Footer Visibility Test**: Ensure the footer is always at the bottom of the page on all screen sizes.

## Final Manual Testing and Write-Up
- **Cross-Browser Testing**: Ensure the site functions well in multiple browsers.
- **Performance Optimization**: Evaluate and optimize load times.
- **Accessibility Check**: Confirm proper text contrast and navigation support for screen readers.
- **Final Bug Fixes**: Address any reported issues before final deployment.

#### Validation
![css aproval](<css godkänd.jpg>)
![html aproval](<html checker.jpg>)
- HTML and CSS validated with W3C tools
- No major validation errors found

#### Lighthouse
![lighthouse](<lighthouse 92-81-100-91.jpg>)
- Performance: 92
- Accessibility: 81
- Best Practices: 100
- SEO: 91

 #### Bugs
**Fixed Bugs**
- Missing </form> tag caused display issues (fixed)
- Contact form did not reset after submission (now resolved)
- CAPTCHA wasn't preventing form submission (now validated)
- Transition animations weren't working (fixed with .fade-transition)

## Deployment
- The project can be run locally by opening index.html
- External images and styles.css should be in /assets/
- No backend required; works fully in the browser

#### Development Process
- HTML structure created first
- Original content written in Swedish
- CSS styles built in index.css
- JavaScript used to dynamically switch content
- The contact form progressively improved with JS validation

### Web Deployment:
- The project can be run locally by opening index.html
- External images and styles.css should be in /assets/
- No backend required; works fully in the browser

#### **Deploying on GitHub Pages:**
1. Push the project to a GitHub repository:
```sh
git add .
git commit -m "Initial commit"
git push origin main
```
2. Go to your repository settings on GitHub.
3. Scroll to the **GitHub Pages** section and select the `main` branch as the source.
4. The site will be hosted at `https://god-zil-la.github.io/my-first-project/`.

### **Post-Deployment Checklist:**
✔ Ensure all internal links are working.
✔ Verify that the contact form submits correctly.
✔ Test the responsiveness on different devices.
✔ Optimize performance for fast loading speeds.
✔ Set up analytics if needed (Google Analytics, etc.).

## Known Features
- **Dynamic Page Switching**: Uses JavaScript to switch content without refreshing the page.
- **Responsive Design**: Adapts to different screen sizes for mobile, tablet, and desktop.
- **Contact Form Validation**: Ensures users enter a valid email and message before submission.
- **Interactive Hover Effects**: Enhances user engagement with visual effects.
- **Fast Load Times**: Optimized for quick performance.

## Credit Resources
- **HTML/CSS Frameworks**: Custom styles and layout.
- **JavaScript**: Used for dynamic content switching and form validation.
- **Icons and Images**: Sourced from **open-source image repositories**.
- **Hosting Services**: Options include GitHub Pages, Netlify, and Vercel for deployment.

## Future Features
- **User Accounts & Login System**: Allow users to create accounts and save preferences.
- **3D Model Viewer**: Integration of an interactive 3D model viewer.
- **Blog Section**: Regular updates about advancements in 3D printing.
- **E-commerce Integration**: Allow users to purchase 3D-printed models or related products.
- **Dark Mode Toggle**: User preference for light and dark themes.
- **Multilingual Support**: Add translations for international users.

## Credits Final Write-Up
This project was developed by **Hussein Elali**, aiming to create an informative and accessible website about **3D printing and scanning**. Special thanks to **Family, friends my mentor Brian at Code Institute and Google** for their resources and support.

🚀 **Explore the world of 3D printing and scanning with this website!**