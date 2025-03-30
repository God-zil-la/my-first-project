let currentLanguage = localStorage.getItem("language") || "en";

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("language", lang);
  
    const contentDiv = document.getElementById("content");
  
    if (contentDiv) {
      contentDiv.classList.remove("fade-in"); // 👈 make sure to remove it first
      contentDiv.classList.add("fade-out");
  
      setTimeout(() => {
        updateStaticContent();
        updateDynamicContent();
  
        contentDiv.classList.remove("fade-out");
        contentDiv.classList.add("fade-in");
  
        // Remove fade-in after animation ends
        setTimeout(() => {
          contentDiv.classList.remove("fade-in");
        }, 500);
      }, 300);
    } else {
      updateStaticContent();
      updateDynamicContent();
    }
  }
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("language-toggle")?.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const selectedLang = e.target.textContent.toLowerCase().includes("sv") ? "sv" : "en";
      setLanguage(selectedLang);
    }
  });

  updateStaticContent();
  updateDynamicContent();
});

const content = {
  en: {
    navHome: "Home",
    navInfo: "Information",
    navContact: "Contact",
    footerText: "© 2025 Hussein Elali – All rights reserved.",
    homeTitle: "3D PRINTING",
    homeDescription: "<strong>ONLY YOUR IMAGINATION AND KNOWLEDGE CAN STOP IT!!!</strong>",
    homeWhatTitle: "So what are 3D Printing and 3D Scanning?",
    homePrintingDescription: "<strong>3D Printing</strong> is a technology that creates three-dimensional objects by building up layers of material based on a digital model. This enables rapid and customized manufacturing in various industries, including medicine, automotive, and design.",
    homeScanningDescription: "<strong>3D Scanning</strong> is used to digitize physical objects by creating an accurate digital representation. It is often used in reverse engineering, medical research, art conservation, and industrial applications.",
    homeHowTitle: "How does the technology work?",
    fdmDesc: "Melts and extrudes plastic filament layer by layer.",
    fdmCaption: "<strong>Example of FDM Printer then regular PLA FDM Plastic filament to a finished product. In this picture a locomotive</strong>",
    slaDesc: "Hardens liquid resin with a laser.",
    slaCaption: "<strong>A common affordable SLA printer, where liquid material is used and finally a finished detailed product.</strong>",
    slsDesc: "Uses a laser to melt powder material and create detailed objects.",
    slsCaption: "<strong>SLS Printers are most common for companies. The material for this machine is powder and yes, you can see the result yourself.</strong>",
    homeAppTitle: "Applications",
    homeAppDescription: "3D technology is used in a number of areas:",
    appMedicine: "Prosthetics, implants and anatomical models.",
    appIndustry: "Prototypes and custom tools.",
    appArt: "Sculptures, fashion and custom-designed products.",
    appArchitecture: "Creating models for building projects.",
    infoTitle: "Workflow for “3D Scanned Object to 3D Printable File”",
    infoWorkflow: "When an object has been scanned, you get a mesh file, a shell of the scanned surface consisting of reference points that form triangles...",
    infoScannerDiffTitle: "Differences between iPad, Artec and ATOS scanners",
    infoIpad: "We tested scanning with iPad, Artec Eva and Atos scanner...",
    infoCaptionIpad: "<strong>Scanning with iPhone and the </strong><em>Qlone</em> App",
    infoArtec: "<strong>Artec Eva</strong> is a handheld scanner...",
    infoAtos: "<strong>Atos</strong> scanner differs from previous scanners...",
    infoCaptionArtec: "<strong>Scanning with Artec and Atos scanners</strong>",
    infoComparisonTitle: "Comparison of scanned object (stl) with CAD file (stl or stp)",
    infoComparison: "A scanned file contains measurement points from the scanned object...",
    infoCaptionMesh: "<strong>Mesh file (hollow) left. Solid .stp file on the right.</strong>",
    infoProcessTitle: "Work process and area of application",
    infoGom: "In a measurement program, such as GOM Inspect, you can import both the scanned geometry...",
    infoCaptionGom: "<strong>Example of measurement data in GOM Inspect</strong>",
    infoIndustriesTitle: "Industries Using 3D Scanning",
    infoIndustriesIntro: "A few examples of industries where 3D scanning is used today are:",
    industryManufacturing: "Control/quality assurance, reverse engineering...",
    industryHealth: "Orthopedics, prosthetics, plastic surgery...",
    industryFashion: "VR/AR environments, creation of clothes...",
    industryArchaeology: "Preserving heritage, ancient remains...",
    industryCsi: "Crime scene documentation, objects and damage.",
    industryAuto: "Quality checks, new model design...",
    industryConstruction: "Scanning buildings, surfaces...",
    contactTitle: "Contact Me",
    contactDescription: "If you have any questions about 3D printing or scanning...",
    labelName: "Name:",
    labelEmail: "Email:",
    labelMessage: "Message:",
    labelCaptcha: "What is 3 + 4? (Anti-spam check)",
    placeholderName: "Your name",
    placeholderEmail: "Your email",
    placeholderMessage: "Your message",
    submitBtn: "Send",
    confirmationMsg: "✅ Thank you! Your message has been sent."
    },
    sv: {
      navHome: "Hem",
      navInfo: "Information",
      navContact: "Kontakt",
      footerText: "© 2025 Hussein Elali – Alla rättigheter förbehållna.",
      homeTitle: "3D-UTSKRIFT",
      homeDescription: "<strong>ENDAST DIN FANTASI OCH KUNSKAP KAN STOPPA DET!!!</strong>",
      homeWhatTitle: "Så vad är 3D-utskrift och 3D-skanning?",
      homePrintingDescription: "<strong>3D-utskrift</strong> är en teknik som skapar tredimensionella objekt genom att bygga upp lager av material baserat på en digital modell. Detta möjliggör snabb och anpassad tillverkning inom olika branscher, inklusive medicin, fordonsindustri och design.",
      homeScanningDescription: "<strong>3D-skanning</strong> används för att digitalisera fysiska objekt genom att skapa en exakt digital representation. Det används ofta inom omvänd konstruktion, medicinsk forskning, konstbevarande och industriella tillämpningar.",
      homeHowTitle: "Hur fungerar tekniken?",
      fdmDesc: "Smälter och extruderar plasttråd lager för lager.",
      fdmCaption: "<strong>Exempel på FDM-skrivare med vanlig PLA FDM-plastfilament till en färdig produkt. På bilden en lokomotiv</strong>",
      slaDesc: "Härdar flytande harts med en laser.",
      slaCaption: "<strong>En vanlig prisvärd SLA-skrivare där flytande material används och slutligen en detaljerad produkt skapas.</strong>",
      slsDesc: "Använder en laser för att smälta pulvermaterial och skapa detaljerade objekt.",
      slsCaption: "<strong>SLS-skrivare är vanligast hos företag. Materialet är pulver och resultatet ser du själv.</strong>",
      homeAppTitle: "Tillämpningar",
      homeAppDescription: "3D-teknik används inom flera områden:",
      appMedicine: "Proteser, implantat och anatomiska modeller.",
      appIndustry: "Prototyper och specialverktyg.",
      appArt: "Skulpturer, mode och specialdesignade produkter.",
      appArchitecture: "Skapa modeller för byggprojekt.",
      infoTitle: "Arbetsflöde för '3D-skannat objekt till 3D-utskriftsfil'",
      infoWorkflow: "När ett objekt har skannats får du en mesh-fil, ett skal av ytan bestående av referenspunkter som bildar trianglar. Filen importeras till program som Fusion 360 där du granskar data som kan generera hål eller fel i mesh-strukturen. Oönskat material från omgivningen rensas bort. När filen är reparerad sparas den som en .stl-fil och importeras till slicern, där inställningar görs och filen sparas som .gcode som skrivaren följer.",
      infoScannerDiffTitle: "Skillnader mellan iPad, Artec och ATOS-skannrar",
      infoIpad: "Vi testade skanning med iPad, Artec Eva och Atos. Du fotar objektet från alla sidor. <strong>iPad eller Android/iPhone</strong> kan användas för enklare skanningar, t.ex. skulpturer eller byster med låg detaljnivå. <em>Användningsområde:</em> Hemmabruk eller enklare modeller.",
      infoCaptionIpad: "<strong>Skanning med iPhone och </strong><em>Qlone</em> App",
      infoArtec: "<strong>Artec Eva</strong> är en handhållen skanner med upp till 0,1 mm noggrannhet. Den skannar medan du rör den runt objektet. Kräver snabbhet och noggrannhet. <em>Användningsområde:</em> Professionellt bruk: virtuella modeller, konst, design, hälsa, omvänd konstruktion.",
      infoAtos: "<strong>Atos</strong> är stationär och du roterar objektet vid varje skanning. Kan monteras på robotarm. Noggrannhet upp till 0,02 mm. <em>Användningsområde:</em> Inspektioner, omvänd konstruktion, mätning och kvalitetskontroll.",
      infoCaptionArtec: "<strong>Skanning med Artec och Atos-skannrar</strong>",
      infoComparisonTitle: "Jämförelse mellan mesh-fil och CAD-fil",
      infoComparison: "En mesh-fil innehåller mätpunkter som formar trianglar (nät). Den har ingen volym, bara koordinatreferenser. Detaljnivån beror på tätheten. En CAD-fil är solid med fullständig data, referenser och volym.",
      infoCaptionMesh: "<strong>Mesh-fil (ihålig) till vänster. Solid .stp-fil till höger.</strong>",
      infoProcessTitle: "Arbetsprocess och användningsområden",
      infoGom: "I ett program som GOM Inspect kan du importera både skannad geometri och CAD-modellen. Du kan jämföra, mäta avvikelser och upptäcka fel i tillverkningen. Bra för kvalitetskontroll.",
      infoCaptionGom: "<strong>Exempel på mätdata i GOM Inspect</strong>",
      infoIndustriesTitle: "Branscher som använder 3D-skanning",
      infoIndustriesIntro: "Exempel på branscher där 3D-skanning används:",
      industryManufacturing: "Kvalitetskontroll, omvänd konstruktion, prototyper, CAD.",
      industryHealth: "Ortopedi, proteser, kirurgi, individuella hjälpmedel.",
      industryFashion: "VR/AR-miljöer, skapande av kläder, möbler, etc.",
      industryArchaeology: "Bevarande av kulturarv, digitalisering av fornlämningar.",
      industryCsi: "Brottsplatsdokumentation, objekt och skador.",
      industryAuto: "Kvalitetsanalys, design, simulering.",
      industryConstruction: "Skanning av byggnader, ytor, terräng.",
      contactTitle: "Kontakta mig",
      contactDescription: "Har du frågor om 3D-utskrift eller skanning? Tveka inte att kontakta mig!",
      labelName: "Namn:",
      labelEmail: "E-post:",
      labelMessage: "Meddelande:",
      labelCaptcha: "Vad är 3 + 4? (Spam-skydd)",
      placeholderName: "Ditt namn",
      placeholderEmail: "Din e-post",
      placeholderMessage: "Ditt meddelande",
      submitBtn: "Skicka",
      confirmationMsg: "✅ Tack! Ditt meddelande har skickats."
    }
  };
  


  function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("language", lang);
    updateStaticContent();
    updateDynamicContent();
  }
  
  function updateDynamicContent() {
    const text = content[currentLanguage];
  
    // Navigation
    if (document.getElementById("nav-home")) document.getElementById("nav-home").innerText = text.navHome;
    if (document.getElementById("nav-info")) document.getElementById("nav-info").innerText = text.navInfo;
    if (document.getElementById("nav-contact")) document.getElementById("nav-contact").innerText = text.navContact;
  
    // Footer
    if (document.getElementById("footer-text-1")) document.getElementById("footer-text-1").innerText = text.footerText;
  
    // === HOME Page ===
    if (document.getElementById("home-title")) document.getElementById("home-title").innerText = text.homeTitle;
    if (document.getElementById("home-description")) document.getElementById("home-description").innerHTML = text.homeDescription;
    if (document.getElementById("home-what-title")) document.getElementById("home-what-title").innerText = text.homeWhatTitle;
    if (document.getElementById("home-printing-description")) document.getElementById("home-printing-description").innerHTML = text.homePrintingDescription;
    if (document.getElementById("home-scanning-description")) document.getElementById("home-scanning-description").innerHTML = text.homeScanningDescription;
    if (document.getElementById("home-how-title")) document.getElementById("home-how-title").innerText = text.homeHowTitle;
    if (document.getElementById("fdm-desc")) document.getElementById("fdm-desc").innerText = text.fdmDesc;
    if (document.getElementById("fdm-caption")) document.getElementById("fdm-caption").innerHTML = text.fdmCaption;
    if (document.getElementById("sla-desc")) document.getElementById("sla-desc").innerText = text.slaDesc;
    if (document.getElementById("sla-caption")) document.getElementById("sla-caption").innerHTML = text.slaCaption;
    if (document.getElementById("sls-desc")) document.getElementById("sls-desc").innerText = text.slsDesc;
    if (document.getElementById("sls-caption")) document.getElementById("sls-caption").innerHTML = text.slsCaption;
    if (document.getElementById("home-app-title")) document.getElementById("home-app-title").innerText = text.homeAppTitle;
    if (document.getElementById("home-app-description")) document.getElementById("home-app-description").innerText = text.homeAppDescription;
    if (document.getElementById("app-medicine")) document.getElementById("app-medicine").innerText = text.appMedicine;
    if (document.getElementById("app-industry")) document.getElementById("app-industry").innerText = text.appIndustry;
    if (document.getElementById("app-art")) document.getElementById("app-art").innerText = text.appArt;
    if (document.getElementById("app-architecture")) document.getElementById("app-architecture").innerText = text.appArchitecture;
  
    // === INFORMATION Page ===
    if (document.getElementById("info-title")) document.getElementById("info-title").innerText = text.infoTitle;
    if (document.getElementById("info-workflow")) document.getElementById("info-workflow").innerText = text.infoWorkflow;
    if (document.getElementById("info-scanner-diff-title")) document.getElementById("info-scanner-diff-title").innerText = text.infoScannerDiffTitle;
    if (document.getElementById("info-ipad")) document.getElementById("info-ipad").innerHTML = text.infoIpad;
    if (document.getElementById("info-caption-ipad")) document.getElementById("info-caption-ipad").innerHTML = text.infoCaptionIpad;
    if (document.getElementById("info-artec")) document.getElementById("info-artec").innerHTML = text.infoArtec;
    if (document.getElementById("info-atos")) document.getElementById("info-atos").innerHTML = text.infoAtos;
    if (document.getElementById("info-caption-artec")) document.getElementById("info-caption-artec").innerHTML = text.infoCaptionArtec;
    if (document.getElementById("info-comparison-title")) document.getElementById("info-comparison-title").innerText = text.infoComparisonTitle;
    if (document.getElementById("info-comparison")) document.getElementById("info-comparison").innerText = text.infoComparison;
    if (document.getElementById("info-caption-mesh")) document.getElementById("info-caption-mesh").innerHTML = text.infoCaptionMesh;
    if (document.getElementById("info-process-title")) document.getElementById("info-process-title").innerText = text.infoProcessTitle;
    if (document.getElementById("info-gom")) document.getElementById("info-gom").innerText = text.infoGom;
    if (document.getElementById("info-caption-gom")) document.getElementById("info-caption-gom").innerHTML = text.infoCaptionGom;
    if (document.getElementById("info-industries-title")) document.getElementById("info-industries-title").innerText = text.infoIndustriesTitle;
    if (document.getElementById("info-industries-intro")) document.getElementById("info-industries-intro").innerText = text.infoIndustriesIntro;
    if (document.getElementById("industry-manufacturing")) document.getElementById("industry-manufacturing").innerText = text.industryManufacturing;
    if (document.getElementById("industry-health")) document.getElementById("industry-health").innerText = text.industryHealth;
    if (document.getElementById("industry-fashion")) document.getElementById("industry-fashion").innerText = text.industryFashion;
    if (document.getElementById("industry-archaeology")) document.getElementById("industry-archaeology").innerText = text.industryArchaeology;
    if (document.getElementById("industry-csi")) document.getElementById("industry-csi").innerText = text.industryCsi;
    if (document.getElementById("industry-auto")) document.getElementById("industry-auto").innerText = text.industryAuto;
    if (document.getElementById("industry-construction")) document.getElementById("industry-construction").innerText = text.industryConstruction;
  
    // === CONTACT Page ===
    if (document.getElementById("contact-title")) document.getElementById("contact-title").innerText = text.contactTitle;
    if (document.getElementById("contact-description")) document.getElementById("contact-description").innerText = text.contactDescription;
    if (document.getElementById("label-name")) document.getElementById("label-name").innerText = text.labelName;
    if (document.getElementById("label-email")) document.getElementById("label-email").innerText = text.labelEmail;
    if (document.getElementById("label-message")) document.getElementById("label-message").innerText = text.labelMessage;
    if (document.getElementById("label-captcha")) document.getElementById("label-captcha").innerText = text.labelCaptcha;
    if (document.getElementById("name")) document.getElementById("name").placeholder = text.placeholderName;
    if (document.getElementById("email")) document.getElementById("email").placeholder = text.placeholderEmail;
    if (document.getElementById("message")) document.getElementById("message").placeholder = text.placeholderMessage;
    if (document.getElementById("submit-btn")) document.getElementById("submit-btn").innerText = text.submitBtn;
    if (document.getElementById("confirmation")) document.getElementById("confirmation").innerText = text.confirmationMsg;
  }

  function updateStaticContent() {
    const text = content[currentLanguage];
  
    // Navigation
    if (document.getElementById("nav-home")) document.getElementById("nav-home").innerText = text.navHome;
    if (document.getElementById("nav-info")) document.getElementById("nav-info").innerText = text.navInfo;
    if (document.getElementById("nav-contact")) document.getElementById("nav-contact").innerText = text.navContact;
  
    // Footer
    if (document.getElementById("footer-text-1")) document.getElementById("footer-text-1").innerText = text.footerText;
  }
  