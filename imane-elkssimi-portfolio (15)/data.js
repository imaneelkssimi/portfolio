/* ============================================================
   PORTFOLIO CONTENT — IMANE ELKSSIMI (English + French)
   ------------------------------------------------------------
   Everything on the website that is specific to you lives in
   this file, in TWO parallel versions: SITE_DATA.en and
   SITE_DATA.fr. Edit whichever language you want to change —
   you do not need to touch index.html or main.js.
   See README.md -> "How to modify my portfolio" for a full guide.

   HOW THE LANGUAGE SWITCH WORKS:
   The button in the top-right of the nav bar swaps between
   SITE_DATA.en and SITE_DATA.fr (and between UI_STRINGS.en /
   UI_STRINGS.fr in strings.js for menu labels, buttons, etc.)
   and re-renders the whole page. The site defaults to English
   for first-time visitors; if someone switches to French, that
   choice is remembered on their device for next time.

   ADDING PHOTOS TO AN EXPERIENCE OR PROJECT:
   1. Put the image file inside its matching folder, e.g.
      images/experience/azura/photo-1.jpg
   2. Add the path to that item's "images" array below (up to 3 --
      they will auto-rotate one at a time every 5 seconds).
   Photos, logos, dates, PDF/code paths and technical acronyms
   (DMAIC, 8D, SIPOC...) are the SAME in both "en" and "fr" --
   only the descriptive sentences differ.

   ADDING A COMPANY LOGO TO AN EXPERIENCE:
   Add the file to the same folder as the photos, then set that
   experience's "companyLogo" field to its path (same in en & fr).

   ADDING A DOWNLOADABLE INTERNSHIP REPORT:
   Put the PDF in the same folder, then set that experience's
   "report" field to its path (same in en & fr).
   ============================================================ */

const SITE_DATA = {

en: {
  profile: {
    name: "Imane Elkssimi",
    title: "Industrial Engineering Student",
    positioning: "Automotive • Quality • Continuous Improvement",
    email: "imaneelkssimi18@gmail.com",
    linkedin: "https://www.linkedin.com/in/imane-elkssimi-b9a163249",
    photo: "images/profile/imane-portrait-cutout-v5.png",
    cv: "cv/CV_Imane_Elkssimi_EN.pdf",
    heroIntro: "Final-year Industrial Engineering student with hands-on experience across automotive quality, supply chain, continuous improvement, industrial digitalization and process optimization.",

    about: [
      "I'm a <strong>final-year Industrial Engineering student</strong> at ENSA Agadir, with hands-on experience across production, quality, supply chain, energy management, and industrial digitalization.",
      "My internships have exposed me to <strong>real industrial challenges</strong>, from production improvement and ISO 50001 to MRP, quality digitalization with Python, and automotive problem solving through 8D.",
      "Across these experiences, I've developed a consistent approach: turn data and engineering methods into practical improvements using tools such as SIPOC, Ishikawa, QQOQCP, AMDEC, DMAIC, and 8D."
    ],
    aboutPullQuote: "Understand the process. Analyze the root cause.",

    areasOfFocus: [
      { num: "01", title: "Problem Solving", methods: "8D · QQOQCP · Ishikawa · 5 Whys", icon: "quality" },
      { num: "02", title: "Process Improvement", methods: "DMAIC · Lean · PDCA · 5S", icon: "improvement" },
      { num: "03", title: "Quality", methods: "AMDEC / FMEA · Control Plan · ISO 9001 · IATF 16949", icon: "automotive" },
      { num: "04", title: "Data & Digital", methods: "Python · Excel · Power BI · SQL", icon: "digital" },
      { num: "05", title: "Operations", methods: "Supply Chain · Planning · Maintenance · Project Management", icon: "performance" }
    ],

    transition: {
      line1: "I don't start with the solution.",
      line2Before: "I start with the ",
      line2Accent: "process",
      line2After: "."
    },

    education: [
      { school: "ENSA Agadir", program: "Industrial Engineering — Final Year", period: "Since 2021" }
    ]
  },

  experiences: [
    {
      id: "azura", featured: false, company: "AZURA Group",
      companyLogo: "images/logos/azura_logo_footer.webp",
      department: "Methods Engineering", date: "JULY – AUGUST 2023", role: "Methods Engineer",
      theme: "Process Improvement · DMAIC", industry: "Production / Packaging",
      title: "Minimizing variation in the predefined packaging tare",
      summary: "A DMAIC investigation into what was causing variation in the predefined packaging tare within the weight-control program of a production line.",
      context: "The weight-control program on a packaging line was showing unexplained variation against the predefined tare, which needed a structured investigation rather than a quick fix.",
      objective: "Identify the root causes of the variation and put corrective actions in place without disrupting the production line.",
      methodology: ["DMAIC", "QQOQCP", "SIPOC", "Ishikawa / 5M", "AMDEC / FMEA"],
      steps: [
        { phase: "Define", text: "Framed the problem: unexplained variation in the predefined packaging tare was affecting the reliability of the weight-control program." },
        { phase: "Measure", text: "Mapped the packaging process and collected data on the factors suspected of contributing to the variation." },
        { phase: "Analyze", text: "Used Ishikawa (5M) and root-cause analysis to separate genuine causes of variation from noise, supported by an AMDEC / FMEA risk assessment." },
        { phase: "Improve", text: "Proposed corrective actions targeting the identified causes, including a maintenance checklist to standardize preventive checks on the line." },
        { phase: "Control", text: "Outlined how the improvement could be monitored going forward so the variation stays under control." }
      ],
      contribution: "Led the DMAIC investigation from problem framing through to the improvement proposal, including the AMDEC risk assessment and the maintenance checklist.",
      learned: "This was my first real exposure to structured problem-solving on a production line — how DMAIC turns a vague quality complaint into a measurable, traceable investigation.",
      images: ["images/experience/azura/1.png", "images/experience/azura/2.png", "images/experience/azura/3.png"],
      report: null, imageFolder: "images/experience/azura/"
    },
    {
      id: "sma", featured: false, company: "Société de Manutention d'Agadir (SMA)",
      companyLogo: "images/logos/SMA_logo.jpg",
      department: "Energy & Improvement", date: "JULY 2024", role: "Energy & Improvement Engineer",
      theme: "Energy Management · ISO 50001", industry: "Port & Handling Operations",
      title: "Deploying an Energy Management System — ISO 50001",
      summary: "Contributed to the deployment of an Energy Management System aligned with ISO 50001, from energy assessment to an improvement action plan.",
      context: "The site needed a structured Energy Management System to track and reduce consumption in line with ISO 50001.",
      objective: "Assess current energy performance and propose a plan to improve efficiency and reduce cost and emissions.",
      methodology: ["ISO 50001", "Energy Auditing", "Continuous Improvement", "Project Management"],
      figures: [
        { label: "2023 electricity consumption", value: "3,393,977 kWh" },
        { label: "Diesel consumption", value: "594,057 L" },
        { label: "Energy cost", value: "10,818,297 MAD TTC" },
        { label: "Energy balance", value: "910 toe" },
        { label: "CO₂ emissions", value: "4,396 t/year" }
      ],
      steps: [
        { phase: "Assessment", text: "Reviewed the site's energy consumption across electricity and diesel to establish a baseline." },
        { phase: "Analysis", text: "Analyzed consumption patterns against ISO 50001 requirements to identify gaps in monitoring and measurement." },
        { phase: "Opportunities", text: "Identified energy-efficiency opportunities and areas where costs and emissions could be reduced." },
        { phase: "Action Plan", text: "Contributed to a performance-improvement plan structured around ISO 50001's continuous-improvement logic." },
        { phase: "Monitoring", text: "Proposed how energy performance indicators could be tracked over time." }
      ],
      contribution: "Assessed the site's energy consumption, benchmarked it against ISO 50001 requirements, and contributed to the resulting improvement plan.",
      learned: "Energy management turned out to be a continuous-improvement problem like any other — you can't improve what you haven't measured, and ISO 50001 gives that measurement a structure.",
      images: ["images/experience/sma/1.png", "images/experience/sma/2.png", "images/experience/sma/3.png"],
      report: null, imageFolder: "images/experience/sma/"
    },
    {
      id: "leoni-sc", featured: false, company: "LEONI Wiring Systems Agadir",
      companyLogo: "images/logos/logo-leoni.png",
      department: "Supply Chain & Logistics", date: "JULY 2025", role: "Supply Chain Engineer",
      theme: "Automotive Supply Chain · MPS / MRP", industry: "Automotive — Wiring Systems",
      title: "Supply chain flows, from customer forecast to delivery",
      summary: "Worked across the supply chain and logistics function, following how customer demand turns into a procurement and production plan.",
      context: "An automotive wiring systems plant runs on tight, forecast-driven supply chain flows shared directly with customers via EDI.",
      objective: "Understand and follow the full flow from customer forecast to delivery, across planning, procurement and logistics.",
      methodology: ["EDI", "MPS", "MRP", "Procurement", "Warehousing", "Transport Planning"],
      flow: ["Customer Forecast", "EDI", "ERP / MPS", "MRP", "Procurement", "Warehouse", "Production", "Transport", "Customer"],
      steps: [
        { phase: "Demand", text: "Observed how customer forecasts are received and integrated via EDI." },
        { phase: "Planning", text: "Followed the translation of demand into a Master Production Schedule and MRP run." },
        { phase: "Execution", text: "Tracked how MRP output drives procurement, warehouse operations and transport planning through to the customer." }
      ],
      contribution: "Followed and documented the end-to-end flow from customer forecast to delivery, working alongside planning and procurement.",
      learned: "Seeing the full flow end-to-end — forecast to delivery — made clear how a delay or error early in the chain (an EDI mismatch, a late procurement order) compounds downstream.",
      images: ["images/experience/leoni-supply-chain/1.png", "images/experience/leoni-supply-chain/2.png", "images/experience/leoni-supply-chain/3.png", "images/experience/leoni-supply-chain/4.png"],
      report: null, imageFolder: "images/experience/leoni-supply-chain/"
    },
    {
      id: "vetcam", featured: true, company: "VETCAM",
      companyLogo: "images/logos/logo-vetcam.png",
      department: "Quality / Production", date: "AUGUST 2025", role: "Project Engineer",
      theme: "Quality Digitalization · Python Application", industry: "Manufacturing — Quality Laboratory",
      title: "Digitalization of Quality and Production Management",
      summary: "Developed an internal Python application to centralize quality-test data that had previously been managed manually.",
      context: "Quality-test data was managed manually, which limited traceability and coordination between Quality and Production.",
      methodology: ["SIPOC", "PDCA", "Python Application Development"],
      contribution: "Mapped the existing process with SIPOC and developed the Python application, including its data-entry forms and table/chart visualizations.",
      images: ["images/experience/vetcam/1.png", "images/experience/vetcam/2.png", "images/experience/vetcam/3.png", "images/experience/vetcam/4.png"],
      imageCaptions: [
        "Application home screen — Finished Product Tests / Raw Material Tests",
        "Raw material test menu — density, moisture, cleanliness, granulometry, sand equivalent",
        "Sand equivalent conformity chart, generated for a selected day",
        "Apparent density comparison chart across product references"
      ],
      report: null, imageFolder: "images/experience/vetcam/"
    },
    {
      id: "leoni-quality", featured: true, company: "LEONI Wiring Systems Agadir",
      companyLogo: "images/logos/logo-leoni.png",
      department: "Quality", date: "AUGUST 2025", role: "Quality Engineer",
      theme: "Automotive Quality · 8D", industry: "Automotive — Wiring Systems",
      title: "Customer complaint analysis using the 8D method",
      summary: "Handled an automotive customer complaint through the full 8D methodology, from root-cause investigation to corrective and preventive action.",
      context: "A confidential automotive customer complaint required a structured investigation under the 8D framework, involving Quality, Production and Methods.",
      objective: "Identify the root cause of the non-conformity, contain it, correct it, and prevent its recurrence.",
      methodology: ["8D", "QQOQCP / 5W2H", "Ishikawa / 5M", "5 Whys", "AMDEC / Process FMEA", "Control Plan"],
      flow: ["Problem", "Investigation", "Root Cause", "Corrective Action", "Validation", "Prevention"],
      steps: [
        { phase: "Problem", text: "A confidential automotive customer complaint was received and needed structured investigation under the 8D framework." },
        { phase: "Investigation", text: "Collected data on the non-conformity and framed the problem precisely using QQOQCP (5W2H)." },
        { phase: "Root Cause", text: "Investigated root causes with Ishikawa (5M) and the 5 Whys, cross-checking findings with Production, Methods and Quality." },
        { phase: "Corrective Action", text: "Defined and implemented corrective actions, then updated the Process AMDEC (FMEA) and the Control Plan to reflect the new risk level." },
        { phase: "Validation", text: "Verified that the corrective actions actually resolved the non-conformity before closing the containment measures." },
        { phase: "Prevention", text: "Built preventive elements into the updated Control Plan and AMDEC so the same failure mode is caught earlier next time." }
      ],
      note: "The customer and internal document identifiers involved are confidential and are not disclosed here — this case study describes the engineering methodology only.",
      contribution: "Drove the investigation from initial containment through root-cause analysis to the validated corrective and preventive actions, including updates to the Process AMDEC and Control Plan.",
      learned: "8D is the most complete problem-solving framework I've used so far because it forces you to prove containment, root cause and prevention separately — it's not enough to just fix the symptom.",
      images: ["images/experience/leoni-quality/1.png", "images/experience/leoni-quality/2.png", "images/experience/leoni-quality/3.jpeg", "images/experience/leoni-quality/4.jpeg", "images/experience/leoni-quality/5.png"],
      report: null, imageFolder: "images/experience/leoni-quality/"
    }
  ],

  academicProjects: [
    {
      id: "montecarlo", style: "simulation",
      title: "Monte Carlo Simulation — Maintenance Strategy Analysis",
      summary: "A Python simulation comparing corrective-only maintenance against corrective + preventive maintenance on a modeled industrial system.",
      problem: "Deciding between a corrective-only maintenance policy and a corrective + preventive policy is hard to justify with intuition alone — it needs a model of failures, repairs and uncertainty.",
      approach: "Modeled machine failures, repair times and two maintenance strategies, then ran a large number of simulated trajectories to build confidence intervals around the resulting performance indicators.",
      technologies: ["Python", "Monte Carlo Simulation"],
      concepts: ["Reliability", "Maintenance Strategy", "Statistical Confidence Intervals"],
      output: "Where the project's own data supports it, preventive maintenance reduced unplanned interruptions and improved equipment stability — figures reflect the project's own findings rather than general claims.",
      learned: "Simulation turns a maintenance policy debate into a comparison of numbers with confidence intervals, instead of a matter of opinion.",
      images: ["images/projects/monte-carlo/2.png"], imageFolder: "images/projects/monte-carlo/", sourceCode: "code/monte-carlo-simulation.ipynb"
    },
    {
      id: "weather", style: "data",
      title: "Weather Forecast & Data Visualization Application",
      summary: "A Python desktop application retrieving live weather and geographic data, visualizing temperature trends and saving results locally.",
      problem: "Wanted a small, self-contained tool to pull live weather data for any city and visualize the forecast rather than reading raw numbers.",
      approach: "Built a desktop GUI that queries the Open-Meteo API for geographic and weather data, processes the response into current conditions and a forecast, and stores queries locally for later reloading.",
      technologies: ["Python", "Requests", "Open-Meteo API", "JSON", "Matplotlib"],
      concepts: ["API Integration", "Data Processing", "Data Visualization", "Local Data Storage"],
      learned: "Even a small tool benefits from separating concerns — API calls, data processing, storage and visualization each as their own piece.",
      images: ["images/projects/weather-app/tanger-forecast.jpg"],
      imageCaptions: ["The application's forecast view for Tanger — current conditions, saved-data confirmation, and the Matplotlib temperature chart."],
      imageFolder: "images/projects/weather-app/",
      cover: { type: "image", file: "images/projects/weather-app/tanger-forecast.jpg" },
      sourceCode: "code/weather-app-source.ipynb"
    },
    {
      id: "srp", style: "srp",
      title: "Smart Rolling Platform (SRP) — Industrial Product Design Project",
      summary: "Design of an autonomous AGV (automated guided vehicle) concept to automate internal material-transport flows within a company, with an interactive 3D prototype and logistics simulation.",
      problem: "Internal material transport between storage and production is often manual — the project explored how an autonomous rolling platform could automate that flow.",
      approach: "Carried out a needs analysis and market study to identify functional requirements and application opportunities, then defined the architecture and functions of an autonomous AGV: material transport, trajectory tracking, and obstacle detection. Developed a simulation of the logistics flow between a storage zone and production stations, integrating transport missions, obstacles, and battery management. Designed and presented an interactive 3D prototype visualizing the platform's main components — chassis, transport platform, motorized wheels, battery, microcontroller, and sensors.",
      technologies: ["Product Design", "AGV / Robotics Concept", "Three.js (3D Prototype)", "Industry 4.0"],
      concepts: ["Needs Analysis", "Market Study", "Autonomous Navigation", "Logistics Simulation", "3D Prototyping"],
      context: "ENSA Agadir | Academic Project",
      learned: "This project connected product design with digitalization and automation — an Industry 4.0 approach combining autonomous mobility with the digitalization of industrial flows.",
      interactiveLinks: [
        { label: "Open 3D Viewer", file: "interactive/srp-3d-viewer.html" },
        { label: "Open Logistics Simulation", file: "interactive/srp-simulation.html" },
        { label: "Open Product Showcase", file: "interactive/srp-spot-premium.html" }
      ],
      cover: { type: "iframe", file: "interactive/srp-3d-viewer.html" },
      noGallery: true
    },
    {
      id: "odoo", style: "erp",
      title: "ERP Implementation — Odoo",
      summary: "Configured an Odoo ERP for purchasing, sales and inventory to centralize information across operational functions.",
      problem: "Operational information split across purchasing, sales and inventory is hard to keep consistent without a shared system.",
      approach: "Configured Odoo modules for purchasing, sales and inventory to centralize data and give better visibility across functions.",
      technologies: ["Odoo", "ERP Configuration"],
      concepts: ["ERP", "Process Integration", "Information Centralization"],
      learned: "An ERP is only as useful as the process discipline behind it — configuration is the easy part, consistent data entry is the real challenge.",
      images: ["images/projects/odoo/odoo-apps-page.png"],
      imageCaptions: ["Odoo's apps dashboard — the modules (Purchase, Sales, Inventory, Accounting, and others) configured and used across this project."],
      imageFolder: "images/projects/odoo/",
      cover: { type: "image", file: "images/projects/odoo/odoo-apps-page.png" }
    }
  ],

  certifications: [
    { title: "Project Management Advanced", duration: "20h", provider: "PM Coaching", date: "September 2026",
      topics: ["Project Integration", "Scope", "Schedule", "Cost", "Quality", "Risk", "Stakeholders", "Exam Preparation"],
      learned: "Advanced training covering project planning, scope, schedule, cost, quality, risk and stakeholder management, with a focus on structured project planning and execution.",
      certs: [
        { org: "PM Coaching", logo: "images/logos/pm-coaching.png", file: "certificates/CPM/20h - Project Management Advanced-certificate.pdf" }
      ] },
    { title: "Supply Chain Fundamentals", duration: "15h", provider: "PM Coaching", date: "September 2026",
      topics: ["Supply Chain", "Production", "Planning", "Demand Management", "Forecasting", "PIC/PDP", "MRP", "Cost Management"],
      learned: "Training covering core supply chain and production planning concepts, from supply chain strategy and production methods to demand management, forecasting and planning.",
      certs: [
        { org: "PM Coaching", logo: "images/logos/pm-coaching.png", file: "certificates/supply chain/15h - Supply Chain Fundamentals-certificate.pdf" }
      ] },
    { title: "Quality Management for Operational Excellence", provider: "LinkedIn Learning · PMI® Registered Education Provider", date: "September 2026",
      topics: ["Quality Management", "Operational Excellence", "Continuous Improvement"],
      learned: "A focused training on quality management and operational excellence, developing an understanding of how quality practices contribute to process performance and continuous improvement.",
      certs: [
        { org: "LinkedIn Learning", logo: "images/logos/linkedin-learning.png", file: "certificates/quality management for opex/CertificateOfCompletion_Quality Management for Operational Excellence (1).pdf" },
        { org: "PMI® Registered Education Provider", logo: "images/logos/pmi-rep.png", file: "certificates/quality management for opex/CertificateOfCompletion_Quality Management for Operational Excellence.pdf" }
      ] },
    { title: "Root Cause Analysis: Getting to the Root of Business Problems", provider: "LinkedIn Learning · PMI® Registered Education Provider", date: "September 2026",
      topics: ["Root Cause Analysis", "Problem Solving", "Business Development"],
      learned: "A practical training focused on identifying the underlying causes of business problems and developing a structured approach to root cause analysis rather than addressing only their symptoms.",
      certs: [
        { org: "LinkedIn Learning", logo: "images/logos/linkedin-learning.png", file: "certificates/Root causes/CertificateOfCompletion_Root Cause Analysis Getting to the Root of Business Problems (1).pdf" },
        { org: "PMI® Registered Education Provider", logo: "images/logos/pmi-rep.png", file: "certificates/Root causes/CertificateOfCompletion_Root Cause Analysis Getting to the Root of Business Problems.pdf" }
      ] },
    { title: "Six Sigma: Green Belt", provider: "LinkedIn Learning · PMI® Registered Education Provider · IIBA®", date: "September 2026",
      topics: ["Six Sigma", "DMAIC", "Process Improvement", "Data Analysis", "Quality"],
      learned: "A Green Belt-level training focused on the Six Sigma approach to process improvement, structured problem solving and data-driven decision making.",
      certs: [
        { org: "LinkedIn Learning", logo: "images/logos/linkedin-learning.png", file: "certificates/six sigma green belt/CertificateOfCompletion_Six Sigma Green Belt (2).pdf" },
        { org: "PMI® Registered Education Provider", logo: "images/logos/pmi-rep.png", file: "certificates/six sigma green belt/CertificateOfCompletion_Six Sigma Green Belt.pdf" },
        { org: "IIBA® Endorsed Education Provider", logo: "images/logos/iiba.png", file: "certificates/six sigma green belt/CertificateOfCompletion_Six Sigma Green Belt (1).pdf" }
      ] },
    { title: "Business Process Improvement", provider: "LinkedIn Learning · PMI® Registered Education Provider", date: "September 2026",
      topics: ["Process Optimization", "Gap Analysis", "Change Management"],
      learned: "Analyzing current and desired states, performing gap analysis and implementing process improvements.",
      certs: [
        { org: "LinkedIn Learning · NASBA CPE Sponsor", logo: "images/logos/linkedin-learning.png", file: "certificates/business process improvement/CertificateOfCompletion_Business Process Improvement (1).pdf" },
        { org: "PMI® Registered Education Provider", logo: "images/logos/pmi-rep.png", file: "certificates/business process improvement/CertificateOfCompletion_Business Process Improvement (2).pdf" },
        { org: "LinkedIn Learning · 58 minutes", logo: "images/logos/linkedin-learning.png", file: "certificates/business process improvement/CertificateOfCompletion_Business Process Improvement.pdf" }
      ] }
  ],

  activities: [
    {
      "id": "fsf",
      "category": "Student Club",
      "title": "Vice President",
      "subtitle": "Formation Sans Frontières (FSF)",
      "date": "2022–2023",
      "dateFull": "2022–2023",
      "location": "ENSA Agadir",
      "role": "Vice President, Formation Sans Frontières (FSF), ENSA Agadir",
      "description": [
        "Formation Sans Frontières (FSF) was a student club at ENSA Agadir whose mission was to support students by providing academic and technical assistance.",
        "As Vice President, I helped accompany students and ensure the availability of training and support sessions for 1st-, 2nd- and 3rd-year students. The club provided trainers for academic modules as well as for practical skills and software training."
      ],
      "listLabel": null,
      "list": [],
      "closing": null,
      "impact": null,
      "images": [
        {
          "src": "images/activities/fsf/1.jpg",
        "fit": "cover",
        "pos": "50% 40%"
        }
      ]
    },
    {
      "id": "btp-forum",
      "category": "Event Organization",
      "title": "BTP Forum",
      "subtitle": "Organization Committee",
      "date": "2022–2023",
      "dateFull": "2022–2023",
      "location": "ENSA Agadir",
      "role": "Organization Committee Member / Event Organizer",
      "description": [
        "Participated as a member of the BTP Forum organization committee at ENSA Agadir."
      ],
      "listLabel": "My Responsibilities",
      "list": [
        "Supporting the smooth running of the event",
        "Welcoming and guiding guests",
        "Assisting with event logistics",
        "Helping resolve logistical issues during the event"
      ],
      "closing": "The role required coordination, communication, organization and problem-solving to help ensure the proper running of the event.",
      "impact": null,
      "images": [
        {
          "src": "images/activities/btp-forum/1.jpg",
        "fit": "cover",
        "pos": "50% 62%"
        },
        {
          "src": "images/activities/btp-forum/2.jpg",
        "fit": "cover",
        "pos": "50% 55%"
        },
        {
          "src": "images/activities/btp-forum/3.jpg",
        "fit": "cover",
        "pos": "58% 50%"
        },
        {
          "src": "images/activities/btp-forum/4.jpg",
        "fit": "contain",
        "pos": "50% 0%"
        }
      ]
    },
    {
      "id": "spark-2",
      "category": "Humanitarian Caravan",
      "title": "A Spark of Hope",
      "subtitle": "2nd Edition",
      "date": "3–5 March 2023",
      "dateFull": "3–5 March 2023",
      "location": "Douar Taourirt, Commune Boumanaame, Province of Tiznit",
      "role": null,
      "description": [
        "Participated in the 2nd edition of the humanitarian caravan “A Spark of Hope”."
      ],
      "listLabel": "The initiative focused on",
      "list": [
        "Medical donations",
        "Mosque and school renovation",
        "Distribution of clothing",
        "Distribution of food baskets"
      ],
      "closing": null,
      "impact": {
        "value": "≈ 60",
        "label": "families supported"
      },
      "images": [
        {
          "src": "images/activities/spark-2/1.jpg",
        "fit": "cover",
        "pos": "50% 42%"
        },
        {
          "src": "images/activities/spark-2/2.jpg",
        "fit": "cover",
        "pos": "50% 58%"
        },
        {
          "src": "images/activities/spark-2/3.jpg",
        "fit": "cover",
        "pos": "62% 50%"
        }
      ]
    },
    {
      "id": "spark-3",
      "category": "Humanitarian Caravan",
      "title": "A Spark of Hope",
      "subtitle": "3rd Edition",
      "date": "8–10 March 2024",
      "dateFull": "8–10 March 2024",
      "location": "Douar Arouk, Commune Argana, Province of Taroudant",
      "role": null,
      "description": [
        "Participated in the 3rd edition of the humanitarian caravan “A Spark of Hope”."
      ],
      "listLabel": "The initiative focused on",
      "list": [
        "Primary school renovation",
        "Mosque renovation",
        "Distribution of food baskets",
        "Clothing distribution",
        "Medical caravan",
        "Development of a water channel (sakia) and basin"
      ],
      "closing": null,
      "impact": {
        "value": "≈ 100",
        "label": "families supported"
      },
      "images": [
        {
          "src": "images/activities/spark-3/1.jpg",
        "fit": "cover",
        "pos": "50% 50%"
        },
        {
          "src": "images/activities/spark-3/2.jpg",
        "fit": "cover",
        "pos": "28% 50%"
        }
      ]
    },
    {
      "id": "ramadan-4",
      "category": "Humanitarian Caravan",
      "title": "Ramadan of Hope",
      "subtitle": "4th Edition",
      "date": "27 Feb – 2 Mar 2025",
      "dateFull": "27 February – 2 March 2025",
      "location": "Douar Ikirzan, Commune Aoulouz, Province of Taroudant",
      "role": null,
      "description": [
        "Participated in the 4th edition of the humanitarian caravan “Ramadan of Hope”."
      ],
      "listLabel": "The initiative focused on",
      "list": [
        "Food aid",
        "School renovation",
        "Mosque renovation",
        "Creation of a water well and fountain"
      ],
      "closing": null,
      "impact": {
        "value": "≈ 160",
        "label": "families supported"
      },
      "images": [
        {
          "src": "images/activities/ramadan-4/1.jpg",
        "fit": "cover",
        "pos": "50% 62%"
        },
        {
          "src": "images/activities/ramadan-4/2.jpg",
        "fit": "cover",
        "pos": "38% 50%"
        },
        {
          "src": "images/activities/ramadan-4/3.jpg",
        "fit": "cover",
        "pos": "50% 62%"
        },
        {
          "src": "images/activities/ramadan-4/4.jpg",
        "fit": "cover",
        "pos": "50% 50%"
        }
      ]
    }
  ],

  skills: {
    "Quality Engineering": ["8D", "QQOQCP / 5W2H", "Ishikawa / 5M", "5 Whys", "AMDEC / FMEA", "Control Plan", "ISO 9001", "Root Cause Analysis"],
    "Continuous Improvement": ["Lean Manufacturing", "5S", "DMAIC", "PDCA", "Process Optimization", "Problem Solving"],
    "Industrial Engineering": ["Production Management", "Supply Chain", "Procurement", "Planning & Scheduling", "Inventory Management", "Warehousing", "Transport Management", "Project Management", "Maintenance Management"]
  },
  tools: {
    "Programming & Data": ["Python", "Java", "SQL"],
    "Analytics & Reporting": ["Excel", "Power BI"],
    "ERP & Business": ["SAP / ERP", "Odoo", "MS Project"],
    "Engineering": ["CATIA", "GMAO / CMMS"]
  }
},

fr: {
  profile: {
    name: "Imane Elkssimi",
    title: "Étudiante en Génie Industriel",
    positioning: "Automobile • Qualité • Amélioration Continue",
    email: "imaneelkssimi18@gmail.com",
    linkedin: "https://www.linkedin.com/in/imane-elkssimi-b9a163249",
    photo: "images/profile/imane-portrait-cutout-v5.png",
    cv: "cv/CV_Imane_Elkssimi_FR.pdf",
    heroIntro: "Étudiante en dernière année de Génie Industriel, avec une expérience concrète en qualité automobile, supply chain, amélioration continue, digitalisation industrielle et optimisation des processus.",

    about: [
      "Je suis <strong>étudiante en dernière année de Génie Industriel</strong> à l'ENSA Agadir, avec une expérience concrète en production, qualité, supply chain, gestion de l'énergie et digitalisation industrielle.",
      "Mes stages m'ont confrontée à des <strong>problématiques industrielles réelles</strong> : amélioration de la production, ISO 50001, MRP, digitalisation de la qualité avec Python, et résolution de problèmes automobiles via la méthode 8D.",
      "À travers ces expériences, j'ai développé une approche cohérente : transformer les données et les méthodes d'ingénierie en améliorations concrètes, à l'aide d'outils tels que SIPOC, Ishikawa, QQOQCP, AMDEC, DMAIC et 8D."
    ],
    aboutPullQuote: "Comprendre le processus. Analyser la cause racine.",

    areasOfFocus: [
      { num: "01", title: "Résolution de Problèmes", methods: "8D · QQOQCP · Ishikawa · 5 Pourquoi", icon: "quality" },
      { num: "02", title: "Amélioration des Processus", methods: "DMAIC · Lean · PDCA · 5S", icon: "improvement" },
      { num: "03", title: "Qualité", methods: "AMDEC / FMEA · Plan de Surveillance · ISO 9001 · IATF 16949", icon: "automotive" },
      { num: "04", title: "Données & Digital", methods: "Python · Excel · Power BI · SQL", icon: "digital" },
      { num: "05", title: "Opérations", methods: "Supply Chain · Planification · Maintenance · Gestion de Projet", icon: "performance" }
    ],

    transition: {
      line1: "Je ne commence pas par la solution.",
      line2Before: "Je commence par le ",
      line2Accent: "processus",
      line2After: "."
    },

    education: [
      { school: "ENSA Agadir", program: "Génie Industriel — Dernière Année", period: "Depuis 2021" }
    ]
  },

  experiences: [
    {
      id: "azura", featured: false, company: "AZURA Group",
      companyLogo: "images/logos/azura_logo_footer.webp",
      department: "Ingénierie Méthodes", date: "JUILLET – AOÛT 2023", role: "Ingénieure Méthodes",
      theme: "Amélioration des Processus · DMAIC", industry: "Production / Conditionnement",
      title: "Minimiser la variation de la tare de barquette prédéfinie",
      summary: "Une investigation DMAIC sur la cause de la variation de la tare de barquette prédéfinie dans le programme de contrôle de poids d'une ligne de production.",
      context: "Le programme de contrôle de poids d'une ligne de conditionnement présentait une variation inexpliquée par rapport à la tare prédéfinie, nécessitant une investigation structurée plutôt qu'une correction rapide.",
      objective: "Identifier les causes racines de la variation et mettre en place des actions correctives sans perturber la ligne de production.",
      methodology: ["DMAIC", "QQOQCP", "SIPOC", "Ishikawa / 5M", "AMDEC / FMEA"],
      steps: [
        { phase: "Définir", text: "Cadrage du problème : une variation inexpliquée de la tare de barquette prédéfinie affectait la fiabilité du programme de contrôle de poids." },
        { phase: "Mesurer", text: "Cartographie du processus de conditionnement et collecte de données sur les facteurs suspectés de contribuer à la variation." },
        { phase: "Analyser", text: "Utilisation d'Ishikawa (5M) et d'une analyse des causes racines pour distinguer les causes réelles du bruit, appuyée par une analyse de risque AMDEC." },
        { phase: "Améliorer", text: "Proposition d'actions correctives ciblant les causes identifiées, incluant une checklist de maintenance pour standardiser les contrôles préventifs sur la ligne." },
        { phase: "Contrôler", text: "Définition du suivi de l'amélioration afin que la variation reste maîtrisée dans le temps." }
      ],
      contribution: "Pilotage de l'investigation DMAIC, du cadrage du problème jusqu'à la proposition d'amélioration, incluant l'analyse de risque AMDEC et la checklist de maintenance.",
      learned: "Ma première véritable expérience de résolution structurée de problème sur une ligne de production — comment le DMAIC transforme une réclamation qualité vague en une investigation mesurable et traçable.",
      images: ["images/experience/azura/1.png", "images/experience/azura/2.png", "images/experience/azura/3.png"],
      report: null, imageFolder: "images/experience/azura/"
    },
    {
      id: "sma", featured: false, company: "Société de Manutention d'Agadir (SMA)",
      companyLogo: "images/logos/SMA_logo.jpg",
      department: "Énergie & Amélioration", date: "JUILLET 2024", role: "Ingénieure Énergie & Amélioration",
      theme: "Gestion de l'Énergie · ISO 50001", industry: "Opérations Portuaires et Manutention",
      title: "Déploiement d'un Système de Management de l'Énergie — ISO 50001",
      summary: "Contribution au déploiement d'un Système de Management de l'Énergie conforme à l'ISO 50001, de l'évaluation énergétique jusqu'au plan d'actions d'amélioration.",
      context: "Le site avait besoin d'un Système de Management de l'Énergie structuré pour suivre et réduire sa consommation conformément à l'ISO 50001.",
      objective: "Évaluer la performance énergétique actuelle et proposer un plan pour améliorer l'efficacité et réduire les coûts et les émissions.",
      methodology: ["ISO 50001", "Audit Énergétique", "Amélioration Continue", "Gestion de Projet"],
      figures: [
        { label: "Consommation électrique 2023", value: "3 393 977 kWh" },
        { label: "Consommation de diesel", value: "594 057 L" },
        { label: "Coût énergétique", value: "10 818 297 MAD TTC" },
        { label: "Bilan énergétique", value: "910 tep" },
        { label: "Émissions de CO₂", value: "4 396 t/an" }
      ],
      steps: [
        { phase: "Évaluation", text: "Analyse de la consommation énergétique du site (électricité et diesel) pour établir une référence de base." },
        { phase: "Analyse", text: "Analyse des tendances de consommation par rapport aux exigences de l'ISO 50001 afin d'identifier les écarts de suivi et de mesure." },
        { phase: "Opportunités", text: "Identification des opportunités d'efficacité énergétique et des leviers de réduction des coûts et des émissions." },
        { phase: "Plan d'Action", text: "Contribution à un plan d'amélioration de la performance structuré selon la logique d'amélioration continue de l'ISO 50001." },
        { phase: "Suivi", text: "Proposition d'un suivi des indicateurs de performance énergétique dans le temps." }
      ],
      contribution: "Évaluation de la consommation énergétique du site, comparaison avec les exigences de l'ISO 50001, et contribution au plan d'amélioration qui en résulte.",
      learned: "La gestion de l'énergie s'est révélée être un problème d'amélioration continue comme un autre — on ne peut améliorer que ce que l'on mesure, et l'ISO 50001 donne une structure à cette mesure.",
      images: ["images/experience/sma/1.png", "images/experience/sma/2.png", "images/experience/sma/3.png"],
      report: null, imageFolder: "images/experience/sma/"
    },
    {
      id: "leoni-sc", featured: false, company: "LEONI Wiring Systems Agadir",
      companyLogo: "images/logos/logo-leoni.png",
      department: "Supply Chain & Logistique", date: "JUILLET 2025", role: "Ingénieure Supply Chain",
      theme: "Supply Chain Automobile · MPS / MRP", industry: "Automobile — Systèmes de Câblage",
      title: "Flux supply chain, de la prévision client à la livraison",
      summary: "Travail transverse sur la fonction supply chain et logistique, en suivant comment la demande client se transforme en plan d'approvisionnement et de production.",
      context: "Un site de câblage automobile fonctionne sur des flux supply chain tendus, pilotés par les prévisions et partagés directement avec les clients via EDI.",
      objective: "Comprendre et suivre le flux complet, de la prévision client à la livraison, à travers la planification, les achats et la logistique.",
      methodology: ["EDI", "MPS", "MRP", "Approvisionnement", "Gestion d'Entrepôt", "Planification Transport"],
      flow: ["Prévision Client", "EDI", "ERP / MPS", "MRP", "Approvisionnement", "Entrepôt", "Production", "Transport", "Client"],
      steps: [
        { phase: "Demande", text: "Observation de la réception et de l'intégration des prévisions client via EDI." },
        { phase: "Planification", text: "Suivi de la traduction de la demande en Plan Directeur de Production (MPS) et en calcul MRP." },
        { phase: "Exécution", text: "Suivi de la façon dont le résultat du MRP pilote les achats, les opérations d'entrepôt et la planification du transport jusqu'au client." }
      ],
      contribution: "Suivi et documentation du flux complet, de la prévision client à la livraison, en collaboration avec la planification et les achats.",
      learned: "Voir le flux complet de bout en bout — de la prévision à la livraison — a clairement montré comment un retard ou une erreur en amont de la chaîne (un écart EDI, une commande d'achat tardive) s'amplifie en aval.",
      images: ["images/experience/leoni-supply-chain/1.png", "images/experience/leoni-supply-chain/2.png", "images/experience/leoni-supply-chain/3.png", "images/experience/leoni-supply-chain/4.png"],
      report: null, imageFolder: "images/experience/leoni-supply-chain/"
    },
    {
      id: "vetcam", featured: true, company: "VETCAM",
      companyLogo: "images/logos/logo-vetcam.png",
      department: "Qualité / Production", date: "AOÛT 2025", role: "Ingénieure Projet",
      theme: "Digitalisation Qualité · Application Python", industry: "Industrie — Laboratoire Qualité",
      title: "Digitalisation de la gestion Qualité et Production",
      summary: "Développement d'une application Python interne pour centraliser des données de test qualité auparavant gérées manuellement.",
      context: "Les données de test qualité étaient gérées manuellement, ce qui limitait la traçabilité et la coordination entre Qualité et Production.",
      methodology: ["SIPOC", "PDCA", "Développement d'Application Python"],
      contribution: "Cartographie du processus existant avec un SIPOC et développement de l'application Python, incluant ses formulaires de saisie et ses visualisations en tableaux et graphiques.",
      images: ["images/experience/vetcam/1.png", "images/experience/vetcam/2.png", "images/experience/vetcam/3.png", "images/experience/vetcam/4.png"],
      imageCaptions: [
        "Écran d'accueil de l'application — Tests Produits Finis / Tests Matières Premières",
        "Menu des tests matières premières — densité, humidité, propreté, granulométrie, équivalent de sable",
        "Graphique de conformité de l'équivalent de sable, généré pour un jour sélectionné",
        "Graphique comparatif de la densité apparente selon les références produits"
      ],
      report: null, imageFolder: "images/experience/vetcam/"
    },
    {
      id: "leoni-quality", featured: true, company: "LEONI Wiring Systems Agadir",
      companyLogo: "images/logos/logo-leoni.png",
      department: "Qualité", date: "AOÛT 2025", role: "Ingénieure Qualité",
      theme: "Qualité Automobile · 8D", industry: "Automobile — Systèmes de Câblage",
      title: "Analyse d'une réclamation client par la méthode 8D",
      summary: "Traitement d'une réclamation client automobile via la méthodologie 8D complète, de l'investigation des causes racines jusqu'aux actions correctives et préventives.",
      context: "Une réclamation client automobile confidentielle a nécessité une investigation structurée dans le cadre 8D, impliquant la Qualité, la Production et les Méthodes.",
      objective: "Identifier la cause racine de la non-conformité, la contenir, la corriger et prévenir sa récurrence.",
      methodology: ["8D", "QQOQCP / 5W2H", "Ishikawa / 5M", "5 Pourquoi", "AMDEC Processus", "Plan de Surveillance"],
      flow: ["Problème", "Investigation", "Cause Racine", "Action Corrective", "Validation", "Prévention"],
      steps: [
        { phase: "Problème", text: "Réception d'une réclamation client automobile confidentielle nécessitant une investigation structurée dans le cadre 8D." },
        { phase: "Investigation", text: "Collecte des données sur la non-conformité et cadrage précis du problème via le QQOQCP (5W2H)." },
        { phase: "Cause Racine", text: "Investigation des causes racines avec Ishikawa (5M) et les 5 Pourquoi, en confrontant les résultats avec la Production, les Méthodes et la Qualité." },
        { phase: "Action Corrective", text: "Définition et mise en œuvre d'actions correctives, puis mise à jour de l'AMDEC Processus et du Plan de Surveillance pour refléter le nouveau niveau de risque." },
        { phase: "Validation", text: "Vérification que les actions correctives résolvaient effectivement la non-conformité avant la levée des mesures de confinement." },
        { phase: "Prévention", text: "Intégration d'éléments préventifs dans le Plan de Surveillance et l'AMDEC mis à jour afin de détecter le même mode de défaillance plus tôt à l'avenir." }
      ],
      note: "Le client et les identifiants des documents internes concernés sont confidentiels et ne sont pas divulgués ici — cette étude de cas décrit uniquement la méthodologie d'ingénierie.",
      contribution: "Pilotage de l'investigation depuis le confinement initial jusqu'à l'analyse des causes racines et aux actions correctives et préventives validées, incluant les mises à jour de l'AMDEC Processus et du Plan de Surveillance.",
      learned: "Le 8D est la méthode de résolution de problème la plus complète que j'aie utilisée jusqu'ici, car elle impose de prouver séparément le confinement, la cause racine et la prévention — corriger le symptôme ne suffit pas.",
      images: ["images/experience/leoni-quality/1.png", "images/experience/leoni-quality/2.png", "images/experience/leoni-quality/3.jpeg", "images/experience/leoni-quality/4.jpeg", "images/experience/leoni-quality/5.png"],
      report: null, imageFolder: "images/experience/leoni-quality/"
    }
  ],

  academicProjects: [
    {
      id: "montecarlo", style: "simulation",
      title: "Simulation Monte Carlo — Analyse de Stratégie de Maintenance",
      summary: "Une simulation Python comparant une maintenance corrective seule à une maintenance corrective + préventive sur un système industriel modélisé.",
      problem: "Choisir entre une politique de maintenance uniquement corrective et une politique corrective + préventive est difficile à justifier par la seule intuition — cela nécessite un modèle des pannes, des réparations et de l'incertitude.",
      approach: "Modélisation des pannes machine, des temps de réparation et de deux stratégies de maintenance, puis exécution d'un grand nombre de trajectoires simulées pour construire des intervalles de confiance autour des indicateurs de performance obtenus.",
      technologies: ["Python", "Simulation Monte Carlo"],
      concepts: ["Fiabilité", "Stratégie de Maintenance", "Intervalles de Confiance Statistiques"],
      output: "Lorsque les données du projet le confirment, la maintenance préventive a réduit les interruptions non planifiées et amélioré la stabilité des équipements — les chiffres reflètent les résultats propres au projet plutôt que des affirmations générales.",
      learned: "La simulation transforme un débat sur la politique de maintenance en une comparaison de chiffres avec intervalles de confiance, plutôt qu'une question d'opinion.",
      images: ["images/projects/monte-carlo/2.png"], imageFolder: "images/projects/monte-carlo/", sourceCode: "code/monte-carlo-simulation.ipynb"
    },
    {
      id: "weather", style: "data",
      title: "Application de Prévision Météo & Visualisation de Données",
      summary: "Une application de bureau en Python récupérant des données météo et géographiques en direct, visualisant les tendances de température et sauvegardant les résultats localement.",
      problem: "Besoin d'un outil simple et autonome pour récupérer les données météo en direct pour n'importe quelle ville et visualiser les prévisions plutôt que de lire des chiffres bruts.",
      approach: "Développement d'une interface graphique de bureau interrogeant l'API Open-Meteo pour les données géographiques et météo, traitant la réponse pour afficher les conditions actuelles et une prévision, et enregistrant les requêtes localement pour un rechargement ultérieur.",
      technologies: ["Python", "Requests", "API Open-Meteo", "JSON", "Matplotlib"],
      concepts: ["Intégration d'API", "Traitement de Données", "Visualisation de Données", "Stockage Local de Données"],
      learned: "Même un petit outil bénéficie d'une séparation des responsabilités — appels API, traitement des données, stockage et visualisation, chacun comme un module distinct.",
      images: ["images/projects/weather-app/tanger-forecast.jpg"],
      imageCaptions: ["La vue prévisionnelle de l'application pour Tanger — conditions actuelles, confirmation de sauvegarde, et graphique de température Matplotlib."],
      imageFolder: "images/projects/weather-app/",
      cover: { type: "image", file: "images/projects/weather-app/tanger-forecast.jpg" },
      sourceCode: "code/weather-app-source.ipynb"
    },
    {
      id: "srp", style: "srp",
      title: "Smart Rolling Platform (SRP) — Projet de Conception d'un Produit Industriel",
      summary: "Conception d'un concept d'AGV (véhicule à guidage automatique) autonome pour automatiser les flux de transport interne de matières au sein d'une entreprise, avec un prototype 3D interactif et une simulation logistique.",
      problem: "Le transport interne de matières entre le stockage et la production est souvent manuel — ce projet a exploré comment une plateforme roulante autonome pourrait automatiser ce flux.",
      approach: "Réalisation d'une analyse des besoins et d'une étude de marché afin d'identifier les exigences fonctionnelles et les opportunités d'application, puis définition de l'architecture et des fonctionnalités d'un AGV autonome : transport de matières, suivi de trajectoire et détection d'obstacles. Développement d'une simulation du flux logistique entre une zone de stockage et des postes de production, intégrant les missions de transport, les obstacles et la gestion de la batterie. Conception et présentation d'un prototype 3D interactif visualisant les principaux composants de la plateforme — châssis, plateforme de transport, roues motorisées, batterie, microcontrôleur et capteurs.",
      technologies: ["Conception Produit", "Concept AGV / Robotique", "Three.js (Prototype 3D)", "Industrie 4.0"],
      concepts: ["Analyse des Besoins", "Étude de Marché", "Navigation Autonome", "Simulation Logistique", "Prototypage 3D"],
      context: "ENSA Agadir | Projet Académique",
      learned: "Ce projet a relié la conception produit à la digitalisation et à l'automatisation — une approche Industrie 4.0 combinant mobilité autonome et digitalisation des flux industriels.",
      interactiveLinks: [
        { label: "Ouvrir le Visualiseur 3D", file: "interactive/srp-3d-viewer.html" },
        { label: "Ouvrir la Simulation Logistique", file: "interactive/srp-simulation.html" },
        { label: "Ouvrir la Vitrine Produit", file: "interactive/srp-spot-premium.html" }
      ],
      cover: { type: "iframe", file: "interactive/srp-3d-viewer.html" },
      noGallery: true
    },
    {
      id: "odoo", style: "erp",
      title: "Implémentation ERP — Odoo",
      summary: "Configuration d'un ERP Odoo pour les achats, les ventes et l'inventaire afin de centraliser l'information à travers les fonctions opérationnelles.",
      problem: "Une information opérationnelle répartie entre achats, ventes et inventaire est difficile à maintenir cohérente sans système partagé.",
      approach: "Configuration des modules Odoo pour les achats, les ventes et l'inventaire afin de centraliser les données et d'améliorer la visibilité entre les fonctions.",
      technologies: ["Odoo", "Configuration ERP"],
      concepts: ["ERP", "Intégration des Processus", "Centralisation de l'Information"],
      learned: "Un ERP n'est utile qu'à la hauteur de la discipline de processus qui l'accompagne — la configuration est la partie facile, la saisie de données cohérente est le vrai défi.",
      images: ["images/projects/odoo/odoo-apps-page.png"],
      imageCaptions: ["Le tableau de bord des applications Odoo — les modules (Achats, Ventes, Inventaire, Comptabilité, et autres) configurés et utilisés dans ce projet."],
      imageFolder: "images/projects/odoo/",
      cover: { type: "image", file: "images/projects/odoo/odoo-apps-page.png" }
    }
  ],

  certifications: [
    { title: "Project Management Advanced", duration: "20h", provider: "PM Coaching", date: "Septembre 2026",
      topics: ["Intégration de Projet", "Périmètre", "Planning", "Coûts", "Qualité", "Risques", "Parties Prenantes", "Préparation à l'Examen"],
      learned: "Formation avancée couvrant la planification de projet, le périmètre, les délais, les coûts, la qualité, les risques et la gestion des parties prenantes, avec un accent sur la planification et l'exécution structurées de projet.",
      certs: [
        { org: "PM Coaching", logo: "images/logos/pm-coaching.png", file: "certificates/CPM/20h - Project Management Advanced-certificate.pdf" }
      ] },
    { title: "Supply Chain Fundamentals", duration: "15h", provider: "PM Coaching", date: "Septembre 2026",
      topics: ["Supply Chain", "Production", "Planification", "Gestion de la Demande", "Prévision", "PIC/PDP", "MRP", "Gestion des Coûts"],
      learned: "Formation couvrant les concepts fondamentaux de la supply chain et de la planification de production, de la stratégie supply chain et des méthodes de production à la gestion de la demande, aux prévisions et à la planification.",
      certs: [
        { org: "PM Coaching", logo: "images/logos/pm-coaching.png", file: "certificates/supply chain/15h - Supply Chain Fundamentals-certificate.pdf" }
      ] },
    { title: "Quality Management for Operational Excellence", provider: "LinkedIn Learning · PMI® Registered Education Provider", date: "Septembre 2026",
      topics: ["Management de la Qualité", "Excellence Opérationnelle", "Amélioration Continue"],
      learned: "Formation ciblée sur le management de la qualité et l'excellence opérationnelle, pour comprendre comment les pratiques qualité contribuent à la performance des processus et à l'amélioration continue.",
      certs: [
        { org: "LinkedIn Learning", logo: "images/logos/linkedin-learning.png", file: "certificates/quality management for opex/CertificateOfCompletion_Quality Management for Operational Excellence (1).pdf" },
        { org: "PMI® Registered Education Provider", logo: "images/logos/pmi-rep.png", file: "certificates/quality management for opex/CertificateOfCompletion_Quality Management for Operational Excellence.pdf" }
      ] },
    { title: "Root Cause Analysis: Getting to the Root of Business Problems", provider: "LinkedIn Learning · PMI® Registered Education Provider", date: "Septembre 2026",
      topics: ["Analyse des Causes Racines", "Résolution de Problèmes", "Développement d'Affaires"],
      learned: "Formation pratique axée sur l'identification des causes profondes des problèmes d'entreprise et sur le développement d'une approche structurée d'analyse des causes racines, plutôt que de ne traiter que leurs symptômes.",
      certs: [
        { org: "LinkedIn Learning", logo: "images/logos/linkedin-learning.png", file: "certificates/Root causes/CertificateOfCompletion_Root Cause Analysis Getting to the Root of Business Problems (1).pdf" },
        { org: "PMI® Registered Education Provider", logo: "images/logos/pmi-rep.png", file: "certificates/Root causes/CertificateOfCompletion_Root Cause Analysis Getting to the Root of Business Problems.pdf" }
      ] },
    { title: "Six Sigma: Green Belt", provider: "LinkedIn Learning · PMI® Registered Education Provider · IIBA®", date: "Septembre 2026",
      topics: ["Six Sigma", "DMAIC", "Amélioration des Processus", "Analyse de Données", "Qualité"],
      learned: "Formation de niveau Green Belt axée sur l'approche Six Sigma pour l'amélioration des processus, la résolution structurée de problèmes et la prise de décision fondée sur les données.",
      certs: [
        { org: "LinkedIn Learning", logo: "images/logos/linkedin-learning.png", file: "certificates/six sigma green belt/CertificateOfCompletion_Six Sigma Green Belt (2).pdf" },
        { org: "PMI® Registered Education Provider", logo: "images/logos/pmi-rep.png", file: "certificates/six sigma green belt/CertificateOfCompletion_Six Sigma Green Belt.pdf" },
        { org: "IIBA® Endorsed Education Provider", logo: "images/logos/iiba.png", file: "certificates/six sigma green belt/CertificateOfCompletion_Six Sigma Green Belt (1).pdf" }
      ] },
    { title: "Business Process Improvement", provider: "LinkedIn Learning · PMI® Registered Education Provider", date: "Septembre 2026",
      topics: ["Optimisation des Processus", "Analyse des Écarts", "Conduite du Changement"],
      learned: "Analyse de l'état actuel et souhaité, analyse des écarts et mise en œuvre des améliorations de processus.",
      certs: [
        { org: "LinkedIn Learning · NASBA CPE Sponsor", logo: "images/logos/linkedin-learning.png", file: "certificates/business process improvement/CertificateOfCompletion_Business Process Improvement (1).pdf" },
        { org: "PMI® Registered Education Provider", logo: "images/logos/pmi-rep.png", file: "certificates/business process improvement/CertificateOfCompletion_Business Process Improvement (2).pdf" },
        { org: "LinkedIn Learning · 58 minutes", logo: "images/logos/linkedin-learning.png", file: "certificates/business process improvement/CertificateOfCompletion_Business Process Improvement.pdf" }
      ] }
  ],

  activities: [
    {
      "id": "fsf",
      "category": "Club étudiant",
      "title": "Vice-présidente",
      "subtitle": "Formation Sans Frontières (FSF)",
      "date": "2022–2023",
      "dateFull": "2022–2023",
      "location": "ENSA Agadir",
      "role": "Vice-présidente, Formation Sans Frontières (FSF), ENSA Agadir",
      "description": [
        "Formation Sans Frontières (FSF) était un club étudiant de l'ENSA Agadir dont la mission était d'accompagner les étudiants en leur apportant un soutien académique et technique.",
        "En tant que vice-présidente, j'ai contribué à l'accompagnement des étudiants et à la disponibilité de séances de formation et de soutien pour les étudiants de 1re, 2e et 3e année. Le club mettait à disposition des formateurs pour les modules académiques, ainsi que pour la formation aux compétences pratiques et aux logiciels."
      ],
      "listLabel": null,
      "list": [],
      "closing": null,
      "impact": null,
      "images": [
        {
          "src": "images/activities/fsf/1.jpg",
        "fit": "cover",
        "pos": "50% 40%"
        }
      ]
    },
    {
      "id": "btp-forum",
      "category": "Organisation d'événement",
      "title": "Forum BTP",
      "subtitle": "Comité d'organisation",
      "date": "2022–2023",
      "dateFull": "2022–2023",
      "location": "ENSA Agadir",
      "role": "Membre du comité d'organisation / Organisatrice d'événement",
      "description": [
        "J'ai participé, en tant que membre du comité d'organisation, au Forum BTP de l'ENSA Agadir."
      ],
      "listLabel": "Mes responsabilités",
      "list": [
        "Contribuer au bon déroulement de l'événement",
        "Accueillir et orienter les invités",
        "Assister sur la logistique de l'événement",
        "Aider à résoudre les problèmes logistiques pendant l'événement"
      ],
      "closing": "Ce rôle exigeait coordination, communication, organisation et résolution de problèmes afin de garantir le bon déroulement de l'événement.",
      "impact": null,
      "images": [
        {
          "src": "images/activities/btp-forum/1.jpg",
        "fit": "cover",
        "pos": "50% 62%"
        },
        {
          "src": "images/activities/btp-forum/2.jpg",
        "fit": "cover",
        "pos": "50% 55%"
        },
        {
          "src": "images/activities/btp-forum/3.jpg",
        "fit": "cover",
        "pos": "58% 50%"
        },
        {
          "src": "images/activities/btp-forum/4.jpg",
        "fit": "contain",
        "pos": "50% 0%"
        }
      ]
    },
    {
      "id": "spark-2",
      "category": "Caravane humanitaire",
      "title": "A Spark of Hope",
      "subtitle": "2e Édition",
      "date": "3–5 mars 2023",
      "dateFull": "3–5 mars 2023",
      "location": "Douar Taourirt, commune de Boumanaame, province de Tiznit",
      "role": null,
      "description": [
        "J'ai participé à la 2e édition de la caravane humanitaire « A Spark of Hope »."
      ],
      "listLabel": "L'initiative a porté sur",
      "list": [
        "Dons médicaux",
        "Rénovation de la mosquée et de l'école",
        "Distribution de vêtements",
        "Distribution de paniers alimentaires"
      ],
      "closing": null,
      "impact": {
        "value": "≈ 60",
        "label": "familles soutenues"
      },
      "images": [
        {
          "src": "images/activities/spark-2/1.jpg",
        "fit": "cover",
        "pos": "50% 42%"
        },
        {
          "src": "images/activities/spark-2/2.jpg",
        "fit": "cover",
        "pos": "50% 58%"
        },
        {
          "src": "images/activities/spark-2/3.jpg",
        "fit": "cover",
        "pos": "62% 50%"
        }
      ]
    },
    {
      "id": "spark-3",
      "category": "Caravane humanitaire",
      "title": "A Spark of Hope",
      "subtitle": "3e Édition",
      "date": "8–10 mars 2024",
      "dateFull": "8–10 mars 2024",
      "location": "Douar Arouk, commune d'Argana, province de Taroudant",
      "role": null,
      "description": [
        "J'ai participé à la 3e édition de la caravane humanitaire « A Spark of Hope »."
      ],
      "listLabel": "L'initiative a porté sur",
      "list": [
        "Rénovation de l'école primaire",
        "Rénovation de la mosquée",
        "Distribution de paniers alimentaires",
        "Distribution de vêtements",
        "Caravane médicale",
        "Aménagement d'un canal d'eau (sakia) et d'un bassin"
      ],
      "closing": null,
      "impact": {
        "value": "≈ 100",
        "label": "familles soutenues"
      },
      "images": [
        {
          "src": "images/activities/spark-3/1.jpg",
        "fit": "cover",
        "pos": "50% 50%"
        },
        {
          "src": "images/activities/spark-3/2.jpg",
        "fit": "cover",
        "pos": "28% 50%"
        }
      ]
    },
    {
      "id": "ramadan-4",
      "category": "Caravane humanitaire",
      "title": "Ramadan of Hope",
      "subtitle": "4e Édition",
      "date": "27 fév. – 2 mars 2025",
      "dateFull": "27 février – 2 mars 2025",
      "location": "Douar Ikirzan, commune d'Aoulouz, province de Taroudant",
      "role": null,
      "description": [
        "J'ai participé à la 4e édition de la caravane humanitaire « Ramadan of Hope »."
      ],
      "listLabel": "L'initiative a porté sur",
      "list": [
        "Aide alimentaire",
        "Rénovation de l'école",
        "Rénovation de la mosquée",
        "Création d'un puits et d'une fontaine"
      ],
      "closing": null,
      "impact": {
        "value": "≈ 160",
        "label": "familles soutenues"
      },
      "images": [
        {
          "src": "images/activities/ramadan-4/1.jpg",
        "fit": "cover",
        "pos": "50% 62%"
        },
        {
          "src": "images/activities/ramadan-4/2.jpg",
        "fit": "cover",
        "pos": "38% 50%"
        },
        {
          "src": "images/activities/ramadan-4/3.jpg",
        "fit": "cover",
        "pos": "50% 62%"
        },
        {
          "src": "images/activities/ramadan-4/4.jpg",
        "fit": "cover",
        "pos": "50% 50%"
        }
      ]
    }
  ],

  skills: {
    "Ingénierie Qualité": ["8D", "QQOQCP / 5W2H", "Ishikawa / 5M", "5 Pourquoi", "AMDEC / FMEA", "Plan de Surveillance", "ISO 9001", "Analyse des Causes Racines"],
    "Amélioration Continue": ["Lean Manufacturing", "5S", "DMAIC", "PDCA", "Optimisation des Processus", "Résolution de Problèmes"],
    "Génie Industriel": ["Gestion de Production", "Supply Chain", "Approvisionnement", "Planification & Ordonnancement", "Gestion des Stocks", "Gestion d'Entrepôt", "Gestion du Transport", "Gestion de Projet", "Gestion de la Maintenance"]
  },
  tools: {
    "Programmation & Données": ["Python", "Java", "SQL"],
    "Analytique & Reporting": ["Excel", "Power BI"],
    "ERP & Business": ["SAP / ERP", "Odoo", "MS Project"],
    "Ingénierie": ["CATIA", "GMAO / CMMS"]
  }
}

};
