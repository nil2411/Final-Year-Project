// Sample Schemes Data in both languages
const schemesData = {
  en: [
    {
      id: 1,
      title: "PM Kisan Samman Nidhi",
      category: "Financial Support",
      government: "Central Government",
      amount: "₹6,000/year",
      status: "Active",
      description:
        "Provides direct income support to all landholding farmer families across the country. The scheme aims to fulfill the financial needs of farmers in purchasing various inputs related to agriculture and allied activities.",
      eligibility:
        "All small and marginal farmers who own cultivable land. Farmer families holding constitutional posts, retired pensioners, and professionals are not eligible.",
      documents: [
        "Aadhaar Card",
        "Bank Account Details",
        "Land Record Details",
      ],
      deadline: "Ongoing - Apply anytime",
      officialLink: "https://pmkisan.gov.in/",
    },
    {
      id: 2,
      title: "Pradhan Mantri Fasal Bima Yojana",
      category: "Insurance",
      government: "Central Government",
      amount: "Varies by crop",
      status: "Active",
      description:
        "Comprehensive crop insurance scheme that provides coverage against natural calamities, pests, and diseases. Premium is heavily subsidized by the government.",
      eligibility:
        "All farmers including sharecroppers and tenant farmers growing notified crops in notified areas.",
      documents: [
        "Aadhaar Card",
        "Land Records",
        "Bank Account Details",
        "Crop Details",
      ],
      deadline: "Varies by crop season",
      officialLink: "https://pmfby.gov.in/",
    },
    {
      id: 3,
      title: "Kisan Credit Card",
      category: "Financial Support",
      government: "Central Government",
      amount: "Up to ₹3,00,000",
      status: "Active",
      description:
        "Provides farmers with affordable credit for their cultivation needs, purchase of inputs, and other short-term expenses.",
      eligibility:
        "Individual farmers, joint borrowers who are owner farmers, tenant farmers, oral lessees, and sharecroppers.",
      documents: [
        "Aadhaar Card",
        "Land Documents",
        "Photo",
        "Bank Account Details",
      ],
      deadline: "Ongoing",
      officialLink: "https://www.indiaculture.nic.in/kisan-credit-card-scheme",
    },
    {
      id: 4,
      title: "National Agricultural Market (eNAM)",
      category: "Technology",
      government: "Central Government",
      amount: "No direct financial benefit",
      status: "Active",
      description:
        "Pan-India electronic trading portal which networks the existing APMC mandis to create a unified national market for agricultural commodities.",
      eligibility: "All registered farmers, traders, and mandis across India.",
      documents: ["Aadhaar Card", "Bank Account Details", "Land Records"],
      deadline: "Ongoing",
      officialLink: "https://www.enam.gov.in/web/",
    },
    {
      id: 5,
      title: "Maharashtra Crop Insurance Scheme",
      category: "Insurance",
      government: "Maharashtra Government",
      amount: "Varies by crop",
      status: "Active",
      description:
        "Special insurance scheme for farmers in Maharashtra that provides coverage against natural calamities, pests, and diseases.",
      eligibility: "All farmers in Maharashtra growing notified crops.",
      documents: [
        "Aadhaar Card",
        "Land Records",
        "Bank Account Details",
        "Crop Details",
      ],
      deadline: "Varies by crop season",
      officialLink: "https://mahavim.maharashtra.gov.in/",
    },
    {
      id: 6,
      title: "Maharashtra Micro Irrigation Scheme",
      category: "Technology",
      government: "Maharashtra Government",
      amount: "Up to 80% subsidy",
      status: "Active",
      description:
        "Provides financial assistance to farmers for installing water-saving micro irrigation systems.",
      eligibility: "All small and marginal farmers in Maharashtra.",
      documents: [
        "Aadhaar Card",
        "Land Documents",
        "Bank Account Details",
        "Farmer Certificate",
      ],
      deadline: "Ongoing",
      officialLink: "https://mrsm.maharashtra.gov.in/",
    },
    {
      id: 7,
      title: "New Organic Farming Scheme",
      category: "Training",
      government: "Central Government",
      amount: "Up to ₹50,000 subsidy",
      status: "Upcoming",
      description:
        "Promotes organic farming practices through cluster approach. Provides financial assistance for capacity building, input procurement, and certification.",
      eligibility:
        "Farmer groups/cooperatives/producer companies with minimum 20 farmers and 50 acres of land.",
      documents: ["Group Registration", "Land Documents", "Project Proposal"],
      deadline: "Starting from 01/10/2025",
      officialLink: "#",
    },
    {
      id: 8,
      title: "Expired Training Program",
      category: "Training",
      government: "State Government",
      amount: "₹10,000 subsidy",
      status: "Expired",
      description:
        "This was a training program for farmers that has now expired.",
      eligibility: "All farmers in the state.",
      documents: ["Aadhaar Card", "Farmer ID"],
      deadline: "Ended on 31/12/2024",
      officialLink: "#",
    },
  ],
  mr: [
    {
      id: 1,
      title: "पीएम किसान सम्मान निधी",
      category: "आर्थिक सहाय्य",
      government: "केंद्र सरकार",
      amount: "₹६,०००/वर्ष",
      status: "सक्रिय",
      description:
        "देशभरातील सर्व जमीनधारक शेतकरी कुटुंबांना थेट उत्पन्न सहाय्य प्रदान करते. या योजनेचा उद्देश कृषी आणि संबंधित क्रियाकलापांशी संबंधित विविध आगतांची खरेदी करण्यासाठी शेतकऱ्यांच्या आर्थिक गरजा पूर्ण करणे हा आहे.",
      eligibility:
        "सर्व लहान आणि सीमांत शेतकरी जे कुळवाढीयोग्य जमीनचे मालक आहेत. घटनात्मक पदे धारण करणारी शेतकरी कुटुंबे, निवृत्त पेन्शनधारक आणि व्यावसायिक पात्र नाहीत.",
      documents: ["आधार कार्ड", "बँक खात्याचा तपशील", "जमीन नोंदीचा तपशील"],
      deadline: "चालू - कोणत्याही वेळी अर्ज करा",
      officialLink: "https://pmkisan.gov.in/",
    },
    {
      id: 2,
      title: "प्रधानमंत्री फसल बीमा योजना",
      category: "विमा",
      government: "केंद्र सरकार",
      amount: "पिकानुसार बदलते",
      status: "सक्रिय",
      description:
        "व्यापक पीक विमा योजना जी नैसर्गिक आपत्ती, कीटक आणि रोगांविरुद्ध कव्हरेज प्रदान करते. प्रीमियम सरकारकडून जास्त प्रमाणात सबसिडी दिली जाते.",
      eligibility:
        "सर्व शेतकरी ज्यामध्ये सूचित क्षेत्रात सूचित पिके घेणारे भागीदार आणि भाडेकरी शेतकरी समाविष्ट आहेत.",
      documents: [
        "आधार कार्ड",
        "जमीन नोंदी",
        "बँक खात्याचा तपशील",
        "पिकाचा तपशील",
      ],
      deadline: "पिकाच्या हंगामानुसार बदलते",
      officialLink: "https://pmfby.gov.in/",
    },
    {
      id: 3,
      title: "किसान क्रेडिट कार्ड",
      category: "आर्थिक सहाय्य",
      government: "केंद्र सरकार",
      amount: "₹३,००,००० पर्यंत",
      status: "सक्रिय",
      description:
        "शेतकऱ्यांना त्यांच्या लागवडीच्या गरजा, आगतांची खरेदी आणि इतर अल्प-मुदतीचे खर्च यासाठी किफायतशीर कर्ज प्रदान करते.",
      eligibility:
        "वैयक्तिक शेतकरी, जॉईंट कर्जदार जे मालक शेतकरी, भाडेकरी शेतकरी, मौखिक भाडेकरू आणि भागीदार आहेत.",
      documents: ["आधार कार्ड", "जमीन दस्तऐवज", "फोटो", "बँक खात्याचा तपशील"],
      deadline: "चालू",
      officialLink: "https://www.indiaculture.nic.in/kisan-credit-card-scheme",
    },
    {
      id: 4,
      title: "राष्ट्रीय कृषी बाजार (eNAM)",
      category: "तंत्रज्ञान",
      government: "केंद्र सरकार",
      amount: "थेट आर्थिक लाभ नाही",
      status: "सक्रिय",
      description:
        "पॅन-इंडिया इलेक्ट्रॉनिक ट्रेडिंग पोर्टल जे कृषी उत्पादनांसाठी एकीकृत राष्ट्रीय बाजार तयार करण्यासाठी विद्यमान APMC मंडी नेटवर्क करते.",
      eligibility: "भारतातील सर्व नोंदणीकृत शेतकरी, व्यापारी आणि मंड्या.",
      documents: ["आधार कार्ड", "बँक खात्याचा तपशील", "जमीन नोंदी"],
      deadline: "चालू",
      officialLink: "https://www.enam.gov.in/web/",
    },
    {
      id: 5,
      title: "महाराष्ट्र कृषी उत्पन्न बीमा योजना",
      category: "विमा",
      government: "महाराष्ट्र सरकार",
      amount: "पिकानुसार बदलते",
      status: "सक्रिय",
      description:
        "महाराष्ट्रातील शेतकऱ्यांसाठी विशेष बीमा योजना जी नैसर्गिक आपत्ती, कीटक आणि रोगांविरुद्ध कव्हरेज प्रदान करते.",
      eligibility: "महाराष्ट्रातील सर्व शेतकरी ज्यामध्ये सूचित पिके घेतात.",
      documents: [
        "आधार कार्ड",
        "जमीन नोंदी",
        "बँक खात्याचा तपशील",
        "पिकाचा तपशील",
      ],
      deadline: "पिकाच्या हंगामानुसार बदलते",
      officialLink: "https://mahavim.maharashtra.gov.in/",
    },
    {
      id: 6,
      title: "महाराष्ट्र सूक्ष्म सिंचन योजना",
      category: "तंत्रज्ञान",
      government: "महाराष्ट्र सरकार",
      amount: "८०% पर्यंत सबसिडी",
      status: "सक्रिय",
      description:
        "शेतकऱ्यांना पाण्याची बचत करणाऱ्या सूक्ष्म सिंचन प्रणाली स्थापित करण्यासाठी आर्थिक सहाय्य प्रदान करते.",
      eligibility: "महाराष्ट्रातील सर्व लहान आणि सीमांत शेतकरी.",
      documents: [
        "आधार कार्ड",
        "जमीन दस्तऐवज",
        "बँक खात्याचा तपशील",
        "शेतकरी प्रमाणपत्र",
      ],
      deadline: "चालू",
      officialLink: "https://mrsm.maharashtra.gov.in/",
    },
    {
      id: 7,
      title: "नवीन सेंद्रिय शेती योजना",
      category: "प्रशिक्षण",
      government: "केंद्र सरकार",
      amount: "₹५०,००० पर्यंत सबसिडी",
      status: "आगामी",
      description:
        "क्लस्टर दृष्टीकोनातून सेंद्रिय शेती पद्धतींना प्रोत्साहन देते. क्षमता निर्माण, आगत खरेदी आणि प्रमाणीकरणासाठी आर्थिक सहाय्य प्रदान करते.",
      eligibility:
        "किमान २० शेतकरी आणि ५० एकर जमीन असलेले शेतकरी गट/सहकारी/उत्पादक कंपनी.",
      documents: ["गट नोंदणी", "जमीन दस्तऐवज", "प्रकल्प प्रस्ताव"],
      deadline: "०१/१०/२०२५ पासून सुरू",
      officialLink: "#",
    },
    {
      id: 8,
      title: "कालबाह्य प्रशिक्षण कार्यक्रम",
      category: "प्रशिक्षण",
      government: "राज्य सरकार",
      amount: "₹१०,००० सबसिडी",
      status: "कालबाह्य",
      description:
        "हा शेतकऱ्यांसाठीचा एक प्रशिक्षण कार्यक्रम होता जो आता कालबाह्य झाला आहे.",
      eligibility: "राज्यातील सर्व शेतकरी.",
      documents: ["आधार कार्ड", "शेतकरी आयडी"],
      deadline: "३१/१२/२०२४ रोजी संपला",
      officialLink: "#",
    },
  ],
};

// Language support
const translations = {
  en: {
    heroTitle: "Empowering Indian Farmers",
    heroSubtitle:
      "Access government schemes, get financial support, and grow your agricultural business with our comprehensive portal.",
    availableSchemes: "Available Schemes",
    statusFilter: "Status",
    allStatus: "All Status",
    categoryFilter: "Category",
    allCategories: "All Categories",
    govtFilter: "Government",
    allGovt: "All Government",
    centralGovt: "Central Government",
    stateGovt: "Maharashtra Government",
    clearFilters: "Clear Filters",
    description: "Description",
    financialDetails: "Financial Details",
    amount: "Amount",
    status: "Status",
    eligibility: "Eligibility",
    requiredDocs: "Required Documents",
    importantDates: "Important Dates",
    applyOfficial: "Apply on Official Portal",
    noSchemes: "No schemes match your filters",
    active: "Active",
    upcoming: "Upcoming",
    expired: "Expired",
  },
  mr: {
    heroTitle: "भारतीय शेतकऱ्यांना सक्षम करणे",
    heroSubtitle:
      "सरकारी योजनांमध्ये प्रवेश करा, आर्थिक सहाय्य मिळवा आणि आमच्या व्यापक पोर्टलद्वारे आपला कृषी व्यवसाय वाढवा.",
    availableSchemes: "उपलब्ध योजना",
    statusFilter: "स्थिती",
    allStatus: "सर्व स्थिती",
    categoryFilter: "श्रेणी",
    allCategories: "सर्व श्रेणी",
    govtFilter: "सरकार",
    allGovt: "सर्व सरकार",
    centralGovt: "केंद्र सरकार",
    stateGovt: "महाराष्ट्र सरकार",
    clearFilters: "फिल्टर साफ करा",
    description: "वर्णन",
    financialDetails: "आर्थिक तपशील",
    amount: "रक्कम",
    status: "स्थिती",
    eligibility: "पात्रता",
    requiredDocs: "आवश्यक कागदपत्रे",
    importantDates: "महत्वाच्या तारखा",
    applyOfficial: "अधिकृत पोर्टलवर अर्ज करा",
    noSchemes: "आपल्या फिल्टरशी जुळणाऱ्या योजना नाहीत",
    active: "सक्रिय",
    upcoming: "आगामी",
    expired: "कालबाह्य",
  },
};

let currentLang = "mr";
let currentSchemes = schemesData[currentLang];

// DOM Elements
const langSwitch = document.getElementById("langSwitch");
const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const schemeContainer = document.getElementById("schemeContainer");
const statusFilter = document.getElementById("statusFilter");
const categoryFilter = document.getElementById("categoryFilter");
const govtFilter = document.getElementById("govtFilter");

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  renderSchemes(currentSchemes);
  setupEventListeners();
  updateLanguage();
});

// Setup Event Listeners
function setupEventListeners() {
  // Language switch
  langSwitch.addEventListener("click", toggleLanguage);

  // Filters
  statusFilter.addEventListener("change", filterSchemes);
  categoryFilter.addEventListener("change", filterSchemes);
  govtFilter.addEventListener("change", filterSchemes);

  // Close modal
  document.getElementById("closeModal").onclick = closeModal;
  window.onclick = function (e) {
    if (e.target.id === "schemeModal") {
      closeModal();
    }
  };

  // View toggle
  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".view-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      const view = this.getAttribute("data-view");
      schemeContainer.className = `scheme-list ${view}-view`;
    });
  });
}

// Toggle Language
function toggleLanguage() {
  currentLang = currentLang === "en" ? "mr" : "en";
  currentSchemes = schemesData[currentLang];
  updateLanguage();
  renderSchemes(currentSchemes);
  // Reset filters when language changes
  clearFilters();
}

// Update Language
function updateLanguage() {
  const t = translations[currentLang];

  // Update UI elements
  heroTitle.textContent = t.heroTitle;
  heroSubtitle.textContent = t.heroSubtitle;

  document.querySelector(".section-title").textContent = t.availableSchemes;

  document.querySelector('label[for="statusFilter"]').textContent =
    t.statusFilter;
  document.querySelector('label[for="categoryFilter"]').textContent =
    t.categoryFilter;
  document.querySelector('label[for="govtFilter"]').textContent = t.govtFilter;
  document.querySelector(".clear-filters").textContent = t.clearFilters;

  // Update filter options
  document.querySelector('#statusFilter option[value=""]').textContent =
    t.allStatus;
  document.querySelector('#categoryFilter option[value=""]').textContent =
    t.allCategories;
  document.querySelector('#govtFilter option[value=""]').textContent =
    t.allGovt;
  document.querySelector('#govtFilter option[value="Central"]').textContent =
    t.centralGovt;
  document.querySelector('#govtFilter option[value="State"]').textContent =
    t.stateGovt;

  // Update modal if open
  if (document.getElementById("modalTitle").textContent) {
    document.querySelectorAll(".modal-section h4")[0].innerHTML =
      '<i class="fas fa-info-circle"></i> ' + t.description;
    document.querySelectorAll(".modal-section h4")[1].innerHTML =
      '<i class="fas fa-rupee-sign"></i> ' + t.financialDetails;
    document.querySelectorAll(".modal-section h4")[2].innerHTML =
      '<i class="fas fa-user-check"></i> ' + t.eligibility;
    document.querySelectorAll(".modal-section h4")[3].innerHTML =
      '<i class="fas fa-file-alt"></i> ' + t.requiredDocs;
    document.querySelectorAll(".modal-section h4")[4].innerHTML =
      '<i class="fas fa-calendar-alt"></i> ' + t.importantDates;
    document.getElementById("officialLink").innerHTML =
      '<i class="fas fa-external-link-alt"></i> ' + t.applyOfficial;
  }
}

// Render Schemes
function renderSchemes(list) {
  schemeContainer.innerHTML = "";

  if (list.length === 0) {
    schemeContainer.innerHTML = `<div class="no-schemes">${translations[currentLang].noSchemes}</div>`;
    return;
  }

  list.forEach((scheme) => {
    const card = document.createElement("div");
    card.classList.add("scheme-card");

    const statusClass = `status-${scheme.status.toLowerCase()}`;
    const statusText = translations[currentLang][scheme.status.toLowerCase()];

    card.innerHTML = `
            <div class="scheme-header">
                <h3>${scheme.title}</h3>
                <div class="scheme-category">${scheme.category}</div>
                <div class="scheme-govt">${scheme.government}</div>
                <div class="scheme-status ${statusClass}">${statusText}</div>
            </div>
            <div class="scheme-details">
                <div class="scheme-amount">${scheme.amount}</div>
                <div class="scheme-deadline"><i class="fas fa-calendar-alt"></i> ${scheme.deadline}</div>
            </div>
        `;

    card.addEventListener("click", () => openModal(scheme));
    schemeContainer.appendChild(card);
  });
}

// Open Modal
function openModal(scheme) {
  const modal = document.getElementById("schemeModal");
  const t = translations[currentLang];

  document.getElementById("modalTitle").textContent = scheme.title;
  document.getElementById("modalCategory").textContent = scheme.category;
  document.getElementById("modalGovt").textContent = scheme.government;
  document.getElementById("modalDescription").textContent = scheme.description;
  document.getElementById("modalAmount").textContent = scheme.amount;

  const statusText = t[scheme.status.toLowerCase()];
  document.getElementById("modalStatusText").textContent = statusText;

  document.getElementById("modalEligibility").textContent = scheme.eligibility;
  document.getElementById("modalDeadline").textContent = scheme.deadline;
  document.getElementById("officialLink").href = scheme.officialLink;
  document.getElementById("officialLink").innerHTML =
    '<i class="fas fa-external-link-alt"></i> ' + t.applyOfficial;

  // Add status badge
  const statusClass = `status-${scheme.status.toLowerCase()}`;
  document.getElementById("modalStatus").textContent = statusText;
  document.getElementById(
    "modalStatus"
  ).className = `scheme-status ${statusClass}`;

  // Requirements list
  const requirementsList = document.getElementById("modalRequirements");
  requirementsList.innerHTML = "";
  scheme.documents.forEach((doc) => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="fas fa-file"></i> ${doc}`;
    requirementsList.appendChild(li);
  });

  // Update modal section titles
  document.querySelectorAll(".modal-section h4")[0].innerHTML =
    '<i class="fas fa-info-circle"></i> ' + t.description;
  document.querySelectorAll(".modal-section h4")[1].innerHTML =
    '<i class="fas fa-rupee-sign"></i> ' + t.financialDetails;
  document.querySelectorAll(".modal-section h4")[2].innerHTML =
    '<i class="fas fa-user-check"></i> ' + t.eligibility;
  document.querySelectorAll(".modal-section h4")[3].innerHTML =
    '<i class="fas fa-file-alt"></i> ' + t.requiredDocs;
  document.querySelectorAll(".modal-section h4")[4].innerHTML =
    '<i class="fas fa-calendar-alt"></i> ' + t.importantDates;

  modal.style.display = "flex";
}

// Close Modal
function closeModal() {
  document.getElementById("schemeModal").style.display = "none";
}

// Filter Schemes
function filterSchemes() {
  const statusValue = statusFilter.value;
  const categoryValue = categoryFilter.value;
  const govtValue = govtFilter.value;

  const filtered = currentSchemes.filter((scheme) => {
    return (
      (!statusValue || scheme.status === statusValue) &&
      (!categoryValue || scheme.category === categoryValue) &&
      (!govtValue ||
        (govtValue === "Central" && scheme.government.includes("Central")) ||
        (govtValue === "State" && scheme.government.includes("Maharashtra")))
    );
  });

  renderSchemes(filtered);
}

// Clear Filters
function clearFilters() {
  statusFilter.value = "";
  categoryFilter.value = "";
  govtFilter.value = "";
  renderSchemes(currentSchemes);
}
