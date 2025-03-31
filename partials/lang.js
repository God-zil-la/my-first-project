let currentLanguage = localStorage.getItem("language") || "en";

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);

  const contentDiv = document.getElementById("content");

  if (contentDiv) {
    contentDiv.classList.add("fade-out");

    setTimeout(() => {
      updateStaticContent();
      updateDynamicContent();

      contentDiv.classList.remove("fade-out");
      contentDiv.classList.add("fade-in");

      setTimeout(() => {
        contentDiv.classList.remove("fade-in");
      }, 400);
    }, 400);
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

    // HOME PAGE
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

    // INFORMATION PAGE
    infoTitle: "Workflow for “3D Scanned Object to 3D Printable File”",
    infoWorkflow: "When an object has been scanned, you get a mesh file, a shell of the scanned surface consisting of reference points that form triangles. The file is imported into the program, such as Fusion 360, where you need to review any missed data that can generate holes in the mesh, or direct errors in the depicted scan. There may also be unwanted scanned material from the environment that needs to be cleaned away. Once the file is repaired and the mesh is cleaned and intact, it is simply saved as a .stl file and imported into the slicer program. In the slicer program, you select the settings you want and save as a .gcode file. That file contains settings for the printer, such as temperature, speed, feed and coordinates in X-Y-Z directions that the printer then follows.",
    infoScannerDiffTitle: "Differences between iPad, Artec and ATOS scanners",
    infoIpad: "We tested scanning with iPad, Artec Eva and Atos scanner, and functionally the scanning works in a similar way. You photograph the object from the sides you want to include. With an <strong>iPad or iPhone/Android</strong> phone you can now scan objects, and get a result that is suitable for simpler modeling, such as smaller sculptures, busts or things with less accuracy. <em>Area of use:</em> Most suitable for simpler images for e.g. home users or where the object is less detailed.",
    infoCaptionIpad: "<strong>Scanning with iPhone and the </strong><em>Qlone</em> App",
    infoArtec: "<strong>Artec Eva</strong> is a handheld scanner that delivers very good results with an accuracy of up to 0.1mm, and is suitable for medium to large objects. You scan the object by moving the scanner over or around it until all surfaces are scanned. The scanner takes pictures continuously and you have to try to scan quickly but at the same time get all angles, which requires practice. Because the scanner is constantly collecting data in the images, the files can become very heavy if you are too slow. <em>Area of use:</em> Professional use: virtual 3D models, art, design, healthcare, and reverse engineering.",
    infoAtos: "<strong>Atos</strong> scanner differs from previous scanners in that the scanner is mounted and you spin the object and take a still image/scan and then rotate the object and take a new image and repeat until you cover all angles. It can also be mounted on a robot. It has high accuracy, up to 0.02mm. <em>Area of use:</em> Reverse engineering, inspections/analyses, measurement and controls.",
    infoCaptionArtec: "<strong>Scanning with Artec and Atos scanners</strong>",
    infoComparisonTitle: "Comparison of scanned object (stl) with CAD file (stl or stp)",
    infoComparison: "A scanned file contains measurement points from the scanned object, these form triangles like a net (mesh). It has no actual surface or volume, only coordinate references. The detail level depends on point density and triangle size. A CAD file forms a solid model and has full volume and references, allowing complete data extraction.",
    infoCaptionMesh: "<strong>Mesh file (hollow) left. Solid .stp file on the right.</strong>",
    infoProcessTitle: "Work process and area of application",
    infoGom: "In a measurement program, such as GOM Inspect, you can import both the scanned geometry and the original CAD file. You can combine both geometries and measure deviations and possible defects in the manufactured part. This helps ensure precision in production and quality control.",
    infoCaptionGom: "<strong>Example of measurement data in GOM Inspect</strong>",
    infoIndustriesTitle: "Industries Using 3D Scanning",
    infoIndustriesIntro: "A few examples of industries where 3D scanning is used today are:",
    industryManufacturing: "Control/quality assurance, reverse engineering, prototyping, CAD construction.",
    industryHealth: "Orthopedics, prosthetics, plastic surgery, personalized aids and products.",
    industryFashion: "VR/AR environments, creation of clothes, furniture, etc.",
    industryArchaeology: "Preserving heritage, ancient remains, making virtual copies or environments.",
    industryCsi: "Crime scene documentation, objects and damage.",
    industryAuto: "Quality checks, new model design, simulation & analysis.",
    industryConstruction: "Scanning buildings, surfaces, even terrain and landscapes.",

    // CONTACT PAGE
    contactTitle: "Contact Me",
    contactDescription: "If you have any questions about 3D printing or scanning, feel free to get in touch!",
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
    // Navigation & Footer
    navHome: "Hem",
    navInfo: "Information",
    navContact: "Kontakt",
    footerText: "© 2025 Hussein Elali – Alla rättigheter förbehållna.",

    // HOME Page
    homeTitle: "3D PRINTING",
    homeDescription: "<strong>BARA DIN FANTASIN OCH KUNSKAP KAN STOPPA DET!!!</strong>",
    homeWhatTitle: "Så vad är 3D printing och 3D scanning?",
    homePrintingDescription: "<strong>3D-utskrift</strong> är en teknik som skapar tredimensionella objekt genom att bygga upp lager av material baserat på en digital modell. Detta möjliggör snabb och anpassad tillverkning inom olika branscher, inklusive medicin, fordon och design.",
    homeScanningDescription: "<strong>3D-skanning</strong> används för att digitalisera fysiska objekt genom att skapa en korrekt digital representation. Den används ofta i reverse engineering, medicinsk forskning, konstkonservering och industriella tillämpningar.",
    homeHowTitle: "Hur fungerar tekniken?",
    fdmDesc: "Smälter och extruderar plastfilament lager för lager.",
    fdmCaption: "<strong>Exempel på FDM Printer sedan vanlig PLA FDM Plastfilament till en färdig produkt. På den här bilden ett lokomotiv</strong>",
    slaDesc: "Härdar flytande harts med laser.",
    slaCaption: "<strong>En vanlig prisvärd SLA-skrivare, där flytande material används och slutligen en färdig detaljprodukt.</strong>",
    slsDesc: "Använder en laser för att smälta pulvermaterial och skapa detaljerade objekt.",
    slsCaption: "<strong>SLS-skrivare är vanligast för företag. Materialet till denna maskin är pulver och ja, du kan se resultatet själv.</strong>",
    homeAppTitle: "Applikationer",
    homeAppDescription: "3D-teknik används inom ett antal områden:",
    appMedicine: "Proteser, implantat och anatomiska modeller.",
    appIndustry: "Prototyper och anpassade verktyg.",
    appArt: "Skulpturer, mode och specialdesignade produkter.",
    appArchitecture: "Skapa modeller för byggprojekt.",

    // INFORMATION Page
    infoTitle: "Arbetsflöde för \"3D-skannat objekt till 3D-utskrivbar fil\"",
    infoWorkflow: "När ett objekt har skannats får du en nätfil, ett skal av den skannade ytan som består av referenspunkter som bildar trianglar. Filen importeras till programmet, t.ex. Fusion 360, där du behöver granska eventuella missade data som kan generera hål i nätet, eller direkta fel i den avbildade skanningen. Det kan också finnas oönskat material från den skannade miljön som ska vara borta från den skannade miljön. repareras och nätet är rengjort och intakt, det sparas helt enkelt som en .stl-fil och importeras i slicerprogrammet I slicerprogrammet väljer du de inställningar du vill ha och sparar som en .gcode-fil. Den filen innehåller inställningar för skrivaren, såsom temperatur, hastighet, matning och koordinater i X-Y-Z-riktningar som skrivaren sedan följer.",
    infoScannerDiffTitle: "Skillnader mellan iPad, Artec och ATOS skannrar",
    infoIpad: "Vi testade skanning med iPad, Artec Eva och Atos scanner, och funktionellt fungerar skanningen på liknande sätt. Man fotograferar objektet från de sidor man vill ha med. Med en <strong>iPad eller iPhone/Android</strong> telefon kan man nu skanna objekt, och få ett resultat som lämpar sig för enklare modellering, såsom mindre noggrannhet, skulpturer eller saker med mindre noggrannhet, <em>a saker. använd:</em> Mest lämplig för enklare bilder för t.ex. hemanvändare eller där objektet är mindre detaljerat.",
    infoCaptionIpad: "<strong>Skanna med iPhone och </strong><em>Qlone</em>-appen",
    infoArtec: "<strong>Artec Eva</strong> är en handhållen skanner som ger mycket bra resultat med en noggrannhet på upp till 0,1 mm, och är lämplig för medelstora till stora objekt. Du skannar objektet genom att flytta skannern över eller runt det tills alla ytor är skannade. Skannern tar bilder kontinuerligt och du måste försöka skanna snabbt men samtidigt få all vinkel att öva in, eftersom skannern är konstant. bilder kan filerna bli väldigt tunga om du är för långsam <em>Användningsområde:</em> Professionell användning: virtuella 3D-modeller, konst, design, sjukvård och omvänd konstruktion.",
    infoAtos: "<strong>Atos</strong> scanner differs from previous scanners in that the scanner is mounted and you spin the object and take a still image/scan and then rotate the object and take a new image and repeat until you cover all angles. It can also be mounted on a robot. It has high accuracy, up to 0.02mm. <em>Area of use:</em> Reverse engineering, inspections/analyses, measurement and controls.",
    infoCaptionArtec: "<strong>Scanning with Artec and Atos scanners</strong>",
    infoComparisonTitle: "Jämförelse av skannat objekt (stl) med CAD-fil (stl eller stp)",
    infoComparison: "En skannad fil innehåller mätpunkter från det skannade objektet, dessa bildar trianglar som ett nät (nät). Den har ingen faktisk yta eller volym, bara koordinatreferenser. Detaljnivån beror på punktdensitet och triangelstorlek. En CAD-fil bildar en solid modell och har full volym och referenser, vilket möjliggör fullständig dataextraktion.",
    infoCaptionMesh: "<strong>Mesh-fil (ihålig) vänster. Solid .stp-fil till höger.</strong>",
    infoProcessTitle: "Arbetsprocess och användningsområde",
    infoGom: "I ett mätprogram, såsom GOM Inspect, kan du importera både den skannade geometrin och den ursprungliga CAD-filen. Du kan kombinera både geometrier och mäta avvikelser och eventuella defekter i den tillverkade delen. Detta hjälper till att säkerställa precision i produktion och kvalitetskontroll.",
    infoCaptionGom: "<strong>Exempel på mätdata i GOM Inspect</strong>",
    infoIndustriesTitle: "Branscher som använder 3D-skanning",
    infoIndustriesIntro: "Några exempel på branscher där 3D-skanning används idag är:",
    industryManufacturing: "Kontroll/kvalitetssäkring, reverse engineering, prototypframställning, CAD-konstruktion.",
    industryHealth: "Ortopedi, proteser, plastikkirurgi, personliga hjälpmedel och produkter.",
    industryFashion: "VR/AR-miljöer, skapande av kläder, möbler, etc.",
    industryArchaeology: "Bevara arv, fornlämningar, göra virtuella kopior eller miljöer.",
    industryCsi: "Brottsplatsdokumentation, föremål och skador.",
    industryAuto: "Kvalitetskontroller, ny modelldesign, simulering och analys.",
    industryConstruction: "Skanna byggnader, ytor, även terräng och landskap.",

    // CONTACT Page
    contactTitle: "Kontakta mig",
    contactDescription: "Om du har några frågor om 3D-utskrift eller scanning, hör gärna av dig!",
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
  