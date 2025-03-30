const content = {
  en: {
    navHome: "Home",
    navInfo: "Information",
    navContact: "Contact",
    homeTitle: "Welcome",
    homeDescription: "This is the home page of our 3D printing and scanning site.",
    infoTitle: "Information",
    infoDescription: "Learn more about 3D printing and scanning technologies here.",
    contactTitle: "Contact Us",
    contactDescription: "Fill in the form to reach out to us.",
    labelName: "Name:",
    labelEmail: "Email:",
    labelMessage: "Message:",
    placeholderName: "Your name",
    placeholderEmail: "Your email",
    placeholderMessage: "Your message",
    submitBtn: "Send",
    footerText: "© 2025 Hussein Elali – All rights reserved."
  },
  sv: {
    navHome: "Hem",
    navInfo: "Information",
    navContact: "Kontakt",
    homeTitle: "Välkommen",
    homeDescription: "Det här är hemsidan för vår 3D-utskrifts- och skanningswebbplats.",
    infoTitle: "Information",
    infoDescription: "Lär dig mer om 3D-utskrift och skanningsteknik här.",
    contactTitle: "Kontakta Oss",
    contactDescription: "Fyll i formuläret för att kontakta oss.",
    labelName: "Namn:",
    labelEmail: "E-post:",
    labelMessage: "Meddelande:",
    placeholderName: "Ditt namn",
    placeholderEmail: "Din e-post",
    placeholderMessage: "Ditt meddelande",
    submitBtn: "Skicka",
    footerText: "© 2025 Hussein Elali – Alla rättigheter förbehållna."
  }
};

let currentLanguage = localStorage.getItem("language") || "en";

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  updateStaticContent();
  updateDynamicContent();
}

function updateStaticContent() {
  const text = content[currentLanguage];
  document.getElementById("nav-home").innerText = text.navHome;
  document.getElementById("nav-info").innerText = text.navInfo;
  document.getElementById("nav-contact").innerText = text.navContact;
  document.getElementById("footer-text-1").innerText = text.footerText;
  document.getElementById("footer-text-2").innerText = "Adress: 3D-Tech Street 123, 12345 Lund, Sweden";
  document.getElementById("footer-text-3").innerText = "Telephone: +46701234567 | Monday-Friday 08:00-17:00";
}

function updateDynamicContent() {
  const text = content[currentLanguage];

  if (document.getElementById("home-title")) {
    document.getElementById("home-title").innerText = text.homeTitle;
    document.getElementById("home-description").innerText = text.homeDescription;
  }

  if (document.getElementById("info-title")) {
    document.getElementById("info-title").innerText = text.infoTitle;
    document.getElementById("info-description").innerText = text.infoDescription;
  }

  if (document.getElementById("contact-title")) {
    document.getElementById("contact-title").innerText = text.contactTitle;
    document.getElementById("contact-description").innerText = text.contactDescription;
  }

  if (document.getElementById("label-name")) document.getElementById("label-name").innerText = text.labelName;
  if (document.getElementById("label-email")) document.getElementById("label-email").innerText = text.labelEmail;
  if (document.getElementById("label-message")) document.getElementById("label-message").innerText = text.labelMessage;

  if (document.getElementById("name")) document.getElementById("name").placeholder = text.placeholderName;
  if (document.getElementById("email")) document.getElementById("email").placeholder = text.placeholderEmail;
  if (document.getElementById("message")) document.getElementById("message").placeholder = text.placeholderMessage;

  if (document.getElementById("submit-btn")) document.getElementById("submit-btn").innerText = text.submitBtn;
}
