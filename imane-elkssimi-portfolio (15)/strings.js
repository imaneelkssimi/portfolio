/* ============================================================
   UI STRINGS — static labels, buttons, section titles (EN/FR)
   ------------------------------------------------------------
   This is separate from data.js because it covers text that is
   part of the page's fixed structure (menu items, section
   headings, button labels, form fields) rather than your
   personal content. Edit freely — the site re-renders instantly.
   ============================================================ */

const UI_STRINGS = {

en: {
  htmlLang: "en",
  nav: { home: "Home", about: "About", experience: "Experience", projects: "Projects", certifications: "Certifications", activities: "Activities", contact: "Contact", downloadCV: "Download CV" },
  hero: { viewCV: "View my CV", getInTouch: "Get in touch", linkedin: "LinkedIn ↗", schoolTag: "ENSA Agadir", programTag: "Génie Industriel" },
  about: { eyebrow: "Engineering Profile", heading: "About", aboutMeLabel: "How I Think", focusLabel: "What I Bring" },
  transitionNone: true,
  experience: { heading: "Professional Experience", sub: "A progression across quality, continuous improvement, supply chain and digitalization — click any experience for the full case study.", viewExperience: "View experience →", gallery: "Gallery", downloadReport: "Download internship report ↓" },
  projects: { heading: "Projects", sub: "Academic engineering projects — separate from the internship experience above. These are not personal projects.", viewProject: "View project →" },
  certifications: { heading: "Education & Certifications", sub: "Formal training that reinforces what I've already applied in the field.", viewCertificate: "View certificate ↗", viewDetails: "View details" },
  education: { since: "Since" },
  activities: { heading: "Activities", sub: "Beyond academics, I actively engaged in leadership, volunteering, and student initiatives throughout my university journey.", prev: "Prev", next: "Next", carouselLabel: "Activities carousel", viewDetails: "View details", overview: "Overview", location: "Location", role: "Role", impact: "Impact", photos: "Photos", photoCount: "photos" },
  contact: { heading: "Get in Touch", sub: "I’d be glad to hear from you about opportunities, collaborations, or projects where I can contribute and grow.", email: "Email", linkedin: "LinkedIn", nameLabel: "Name", emailLabel: "Email", subjectLabel: "Subject", messageLabel: "Message", send: "Send message", sending: "Sending…", sent: "Message sent — thank you, I'll reply as soon as I can.", notConnected: "This form isn't connected yet — please email me directly at", error: "Something went wrong — please email me directly at" },
  footer: { role: "Industrial Engineering Student", linkedin: "LinkedIn", email: "Email", cv: "CV", copyright: "Designed & built with precision." },
  modal: {
    context: "Context", objective: "Objective", methods: "Methods & Tools", flow: "Process Flow", figures: "Key Figures", approach: "Approach",
    existingProcess: "Existing Process", theApproach: "The Approach", digitalSolution: "The Digital Solution", visualization: "Visualization", impact: "Impact",
    beforeAfter: "Before / After", before: "Before", after: "After", myContribution: "My Contribution", confidentialNote: "A Note on Confidentiality",
    keyLearning: "Key Learning", whatILearned: "What I learned — ",
    overview: "Overview", problem: "Problem", technologies: "Technologies", concepts: "Engineering Concepts", methodology: "Methodology",
    indicators: "Indicators Tracked", implementation: "Implementation", results: "Results / Output", sourceCode: "Source Code", downloadSource: "Download source code (.ipynb) ↓",
    interactiveDemos: "Interactive Demos", whatLearned: "What I Learned", gallery: "Gallery", photosComingSoon: "Photos coming soon",
    academicProject: "Academic Project",
    keyTopics: "Key Topics", certificates: "Certificates", whatILearnedCert: "What I Learned"
  },
  langToggle: { hint: "Choose your language" }
},

fr: {
  htmlLang: "fr",
  nav: { home: "Accueil", about: "À propos", experience: "Expérience", projects: "Projets", certifications: "Certifications", activities: "Activités", contact: "Contact", downloadCV: "Télécharger le CV" },
  hero: { viewCV: "Voir mon CV", getInTouch: "Me contacter", linkedin: "LinkedIn ↗", schoolTag: "ENSA Agadir", programTag: "Génie Industriel" },
  about: { eyebrow: "Profil d'Ingénieure", heading: "À propos", aboutMeLabel: "Ma Façon de Penser", focusLabel: "Ce Que J'Apporte" },
  transitionNone: true,
  experience: { heading: "Expérience Professionnelle", sub: "Un parcours à travers la qualité, l'amélioration continue, la supply chain et la digitalisation — cliquez sur une expérience pour l'étude de cas complète.", viewExperience: "Voir l'expérience →", gallery: "Galerie", downloadReport: "Télécharger le rapport de stage ↓" },
  projects: { heading: "Projets", sub: "Projets académiques d’ingénierie — distincts des expériences de stage ci-dessus. Il ne s’agit pas de projets personnels.", viewProject: "Voir le projet →" },
  certifications: { heading: "Éducation & Certifications", sub: "Une formation formelle qui renforce ce que j'ai déjà appliqué sur le terrain.", viewCertificate: "Voir le certificat ↗", viewDetails: "Voir les détails" },
  education: { since: "Depuis" },
  activities: { heading: "Activités", sub: "Au-delà des études, je me suis investie dans le leadership, le bénévolat et les initiatives étudiantes tout au long de mon parcours universitaire.", prev: "Précédent", next: "Suivant", carouselLabel: "Carrousel des activités", viewDetails: "Voir les détails", overview: "Aperçu", location: "Lieu", role: "Rôle", impact: "Impact", photos: "Photos", photoCount: "photos" },
  contact: { heading: "Contact", sub: "Je serais ravie d'échanger avec vous sur des opportunités, collaborations ou projets où je peux contribuer et progresser.", email: "Email", linkedin: "LinkedIn", nameLabel: "Nom", emailLabel: "Email", subjectLabel: "Sujet", messageLabel: "Message", send: "Envoyer le message", sending: "Envoi en cours…", sent: "Message envoyé — merci, je répondrai dès que possible.", notConnected: "Ce formulaire n'est pas encore connecté — merci de m'écrire directement à", error: "Une erreur s'est produite — merci de m'écrire directement à" },
  footer: { role: "Étudiante en Génie Industriel", linkedin: "LinkedIn", email: "Email", cv: "CV", copyright: "Conçu et réalisé avec précision." },
  modal: {
    context: "Contexte", objective: "Objectif", methods: "Méthodes & Outils", flow: "Flux du Processus", figures: "Chiffres Clés", approach: "Démarche",
    existingProcess: "Processus Existant", theApproach: "La Démarche", digitalSolution: "La Solution Digitale", visualization: "Visualisation", impact: "Impact",
    beforeAfter: "Avant / Après", before: "Avant", after: "Après", myContribution: "Ma Contribution", confidentialNote: "Note sur la Confidentialité",
    keyLearning: "Ce que j'ai Appris", whatILearned: "Ce que j'ai appris — ",
    overview: "Aperçu", problem: "Problématique", technologies: "Technologies", concepts: "Concepts d'Ingénierie", methodology: "Méthodologie",
    indicators: "Indicateurs Suivis", implementation: "Mise en Œuvre", results: "Résultats", sourceCode: "Code Source", downloadSource: "Télécharger le code source (.ipynb) ↓",
    interactiveDemos: "Démos Interactives", whatLearned: "Ce que j'ai Appris", gallery: "Galerie", photosComingSoon: "Photos à venir",
    academicProject: "Projet Académique",
    keyTopics: "Points Clés", certificates: "Certificats", whatILearnedCert: "Ce que j'ai Appris"
  },
  langToggle: { hint: "Choisissez votre langue" }
}

};
