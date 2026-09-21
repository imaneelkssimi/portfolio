/* ============================================================
   PORTFOLIO RENDERING & INTERACTIONS
   ------------------------------------------------------------
   This file reads content from data.js (SITE_DATA.en / .fr) and
   strings.js (UI_STRINGS.en / .fr) and builds the page. You
   generally should not need to edit this file — edit data.js or
   strings.js instead. See README.md for the full guide.
   ============================================================ */

const FORM_ENDPOINT = "https://formsubmit.co/ajax/imaneelkssimi18@gmail.com";

/* Small inline icon shapes used next to each "Area of Focus". */
const ICONS = {
  quality: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 12.5l2 2 4-4.5"/><circle cx="12" cy="12" r="9"/></svg>`,
  improvement: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 17l6-6 4 4 8-9"/><path d="M15 6h6v6"/></svg>`,
  automotive: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13"/><rect x="2.5" y="13" width="19" height="5" rx="1.5"/><circle cx="7" cy="18" r="1.4"/><circle cx="17" cy="18" r="1.4"/></svg>`,
  supply: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>`,
  digital: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 9l-4 3 4 3"/><path d="M16 9l4 3-4 3"/><path d="M13 6l-2 12"/></svg>`,
  performance: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 12l4-3"/><circle cx="12" cy="12" r="9"/><path d="M12 3v2M21 12h-2M3 12h2"/></svg>`
};

/* Real, official brand marks for tools with a freely-licensed open
   icon (Python, Java, SAP, Odoo, Excel, Power BI, MS Project, CATIA).
   Everything else falls back to a two-letter badge. */
const TOOL_LOGOS = {
  "Python": { mono: true, svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>` },
  "Java": { mono: false, svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/></svg>` },
  "SAP / ERP": { mono: true, svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 6.064v11.872h12.13L24 6.064zm3.264 2.208h.005c.863.001 1.915.245 2.676.633l-.82 1.43c-.835-.404-1.255-.442-1.73-.467-.708-.038-1.064.215-1.069.488-.007.332.669.633 1.305.838.964.306 2.19.715 2.377 1.9L7.77 8.437h2.046l2.064 5.576-.007-5.575h2.37c2.257 0 3.318.764 3.318 2.519 0 1.575-1.09 2.514-2.936 2.514h-.763l-.01 2.094-3.588-.003-.25-.908c-.37.122-.787.189-1.23.189-.456 0-.885-.071-1.263-.2l-.358.919-2 .006.09-.462c-.029.025-.057.05-.087.074-.535.43-1.208.629-2.037.644l-.213.002a5.075 5.075 0 0 1-2.581-.675l.73-1.448c.79.467 1.286.572 1.956.558.347-.007.598-.07.761-.239a.557.557 0 0 0 .156-.369c.007-.376-.53-.553-1.185-.756-.531-.164-1.135-.389-1.606-.735-.559-.41-.825-.924-.812-1.65a1.99 1.99 0 0 1 .566-1.377c.519-.537 1.357-.863 2.363-.863zm10.597 1.67v1.904h.521c.694 0 1.247-.23 1.248-.964 0-.709-.554-.94-1.248-.94zm-5.087.767l-.748 2.362c.223.085.481.133.757.133.268 0 .52-.047.742-.126l-.736-2.37z"/></svg>` },
  "Odoo": { mono: true, svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.1002 15.7957c-1.6015 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2979 2.8998-2.8998 2.8998zm0-1.2c.9388.0006 1.7003-.7601 1.7008-1.6989.0004-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zm-6.0655 1.2c-1.6014 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2999 2.8998-2.8998 2.8998zm0-1.2c.9389.0006 1.7003-.7601 1.7008-1.6989.0005-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zM11.865 12.858c0 1.6199-1.2979 2.9378-2.8977 2.9378s-2.8998-1.314-2.8998-2.9358 1.1799-2.8597 2.8998-2.8597c.6359 0 1.2239.134 1.6998.484v-1.68a.6.6 0 0 1 1.2 0v4.0537h-.002zm-2.8977 1.7399c.9388.0005 1.7002-.7602 1.7007-1.699.0005-.9388-.7602-1.7003-1.699-1.7007h-.0017c-.9389.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699zm-6.0675 1.1979C1.2983 15.7957 0 14.4974 0 12.8959s1.2983-2.8997 2.8998-2.8997 2.8997 1.2982 2.8997 2.8997c0 1.5999-1.2999 2.8998-2.8997 2.8998zm0-1.2c.9388.0006 1.7002-.7601 1.7007-1.699.0005-.9387-.7602-1.7002-1.699-1.7006h-.0017c-.9388.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699z"/></svg>` },
  "Excel": { img: "images/logos/excel.png", chip: "light" },
  "Power BI": { img: "images/logos/powerbi.png", chip: "light" },
  "MS Project": { img: "images/logos/msproject.png", chip: "light" },
  "CATIA": { img: "images/logos/catia.png", chip: "light" }
};

/* ---------- LANGUAGE STATE ---------- */
let currentLang = localStorage.getItem("portfolio-lang") || "en";
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let rotatorIntervals = [];
let revealObserver = null;
let currentGallery = [];
let currentIndex = 0;
let modalProjectNav = null;

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- ONE-TIME STATIC WIRING ---------- */
  modalProjectNav = document.getElementById("modal-project-nav");

  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobile-menu");
  burger.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.remove("open")));

  const navEl = document.getElementById("nav");
  const scrollProgress = document.getElementById("scroll-progress");
  const backToTop = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    navEl.classList.toggle("scrolled", window.scrollY > 8);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? window.scrollY / docHeight : 0;
    scrollProgress.style.transform = `scaleX(${ratio})`;
    backToTop.classList.toggle("visible", window.scrollY > 600);
  }, { passive: true });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const scrollCue = document.querySelector(".hero-scroll-cue");
  if (scrollCue) {
    scrollCue.style.cursor = "pointer";
    scrollCue.addEventListener("click", () => document.getElementById("about").scrollIntoView({ behavior: "smooth" }));
  }
  const portraitFrame = document.querySelector(".hero-portrait-frame");
  const portraitWrap = document.querySelector(".hero-portrait-wrap");
  if (portraitFrame && portraitWrap && window.matchMedia("(pointer: fine)").matches) {
    portraitWrap.style.perspective = "900px";
    portraitFrame.addEventListener("mousemove", (e) => {
      const rect = portraitFrame.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      portraitFrame.style.transform = `rotateY(${px * 8}deg) rotateX(${py * -8}deg)`;
    });
    portraitFrame.addEventListener("mouseleave", () => { portraitFrame.style.transform = "rotateY(0deg) rotateX(0deg)"; });
  }

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(s => sectionObserver.observe(s));

  const transitionSection = document.getElementById("transition");
  if (transitionSection) {
    const transitionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          transitionSection.classList.add("in-view");
          transitionObserver.unobserve(transitionSection);
        }
      });
    }, { threshold: 0.4 });
    transitionObserver.observe(transitionSection);

    // subtle parallax: the quote drifts gently toward the cursor
    const transitionWrap = transitionSection.querySelector(".transition-wrap");
    if (transitionWrap && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      transitionSection.addEventListener("mousemove", (e) => {
        const rect = transitionSection.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        transitionWrap.style.transform = `translate(${relX * 10}px, ${relY * 8}px)`;
      });
      transitionSection.addEventListener("mouseleave", () => {
        transitionWrap.style.transform = "translate(0, 0)";
      });
    }
  }

  /* ---------- MODAL (shared by experiences and projects) ---------- */
  const modalOverlay = document.getElementById("modal-overlay");
  const modalEyebrow = document.getElementById("modal-eyebrow");
  const modalTitle = document.getElementById("modal-title");
  const modalMeta = document.getElementById("modal-meta");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");

  function openModal({ eyebrow, title, meta, bodyHTML }) {
    modalEyebrow.textContent = eyebrow;
    modalTitle.textContent = title;
    modalMeta.textContent = meta;
    modalBody.innerHTML = bodyHTML;
    modalOverlay.classList.add("open");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    wireGalleries(modalBody);
  }
  function closeModal() {
    modalOverlay.classList.remove("open");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeLightbox(); } });
  window.__closeModal = closeModal;

  function section(label, html) {
    if (!html) return "";
    return `<div class="modal-section"><div class="modal-label">${label}</div>${html}</div>`;
  }
  window.__section = section;

  /* ---------- LIGHTBOX ---------- */
  const lightboxOverlay = document.getElementById("lightbox-overlay");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  function showLightbox() {
    const item = currentGallery[currentIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption || "";
    lightboxCaption.textContent = item.caption || "";
    lightboxOverlay.classList.add("open");
    lightboxOverlay.setAttribute("aria-hidden", "false");
  }
  function closeLightbox() {
    lightboxOverlay.classList.remove("open");
    lightboxOverlay.setAttribute("aria-hidden", "true");
  }
  window.__closeLightbox = closeLightbox;
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxOverlay.addEventListener("click", (e) => { if (e.target === lightboxOverlay) closeLightbox(); });
  lightboxPrev.addEventListener("click", () => { currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length; showLightbox(); });
  lightboxNext.addEventListener("click", () => { currentIndex = (currentIndex + 1) % currentGallery.length; showLightbox(); });

  function wireGalleries(scope) {
    scope.querySelectorAll("[data-gallery]").forEach(strip => {
      const thumbs = Array.from(strip.querySelectorAll(".gallery-thumb"));
      thumbs.forEach((thumb, i) => {
        thumb.addEventListener("click", () => {
          currentGallery = thumbs.map(t => ({ src: t.dataset.img, caption: t.dataset.caption }));
          currentIndex = i;
          showLightbox();
        });
      });
    });
  }
  window.__wireGalleries = wireGalleries;

  /* ---------- DELEGATED CLICKS (survive re-renders) ---------- */
  document.body.addEventListener("click", (e) => {
    const d = SITE_DATA[currentLang];
    const s = UI_STRINGS[currentLang];

    const expBtn = e.target.closest("[data-open-experience]");
    if (expBtn) {
      const exp = d.experiences.find(x => x.id === expBtn.dataset.openExperience);
      if (exp) {
        modalProjectNav.style.display = "none";
        modalProjectNav.innerHTML = "";
        openModal({
          eyebrow: exp.department, title: exp.title,
          meta: `${exp.company} · ${exp.date} · ${exp.role}`,
          bodyHTML: buildExperienceModalHTML(exp, s)
        });
      }
    }
    const projBtn = e.target.closest("[data-open-project]");
    if (projBtn) openProjectById(projBtn.dataset.openProject, openModal, s);

    const navBtn = e.target.closest("[data-project-nav]");
    if (navBtn) openProjectById(navBtn.dataset.projectNav, openModal, s);

    const actBtn = e.target.closest("[data-open-activity]");
    if (actBtn) {
      const act = (d.activities || []).find(x => x.id === actBtn.dataset.openActivity);
      if (act) {
        modalProjectNav.style.display = "none";
        modalProjectNav.innerHTML = "";
        openModal({
          eyebrow: act.category,
          title: act.subtitle ? `${act.title} — ${act.subtitle}` : act.title,
          meta: [act.dateFull, act.location].filter(Boolean).join(" · "),
          bodyHTML: window.__buildActivityModalHTML(act, s)
        });
      }
    }

    const certBtn = e.target.closest("[data-open-cert]");
    if (certBtn) {
      const cert = d.certifications[Number(certBtn.dataset.openCert)];
      if (cert) {
        modalProjectNav.style.display = "none";
        modalProjectNav.innerHTML = "";
        const metaBits = [cert.duration, cert.date].filter(Boolean);
        openModal({
          eyebrow: cert.provider, title: cert.title,
          meta: metaBits.join(" · "),
          bodyHTML: window.__buildCertModalHTML(cert, s)
        });
      }
    }
  });

  /* ---------- CONTACT FORM ---------- */
  const form = document.getElementById("contact-form");
  const status = document.getElementById("f-status");
  const submitBtn = document.getElementById("f-submit");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const d = SITE_DATA[currentLang];
    const s = UI_STRINGS[currentLang].contact;
    if (FORM_ENDPOINT.includes("YOUR_FORM_ID")) {
      status.textContent = `${s.notConnected} ${d.profile.email}.`;
      status.className = "form-status error";
      return;
    }
    submitBtn.disabled = true;
    status.textContent = s.sending;
    status.className = "form-status";
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Accept": "application/json" }, body: new FormData(form) });
      const result = await res.json().catch(() => ({}));
      if (res.ok && result.success !== false && result.success !== "false") {
        status.textContent = s.sent;
        status.className = "form-status success";
        form.reset();
      } else { throw new Error("Request failed"); }
    } catch (err) {
      status.textContent = `${s.error} ${d.profile.email}.`;
      status.className = "form-status error";
    } finally {
      submitBtn.disabled = false;
    }
  });

  /* ---------- LANGUAGE SWITCH (two explicit EN / FR buttons) ---------- */
  function setLang(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.lang = UI_STRINGS[lang].htmlLang;
    closeModal();
    renderPage(lang);
  }
  document.getElementById("lang-btn-en").addEventListener("click", () => setLang("en"));
  document.getElementById("lang-btn-fr").addEventListener("click", () => setLang("fr"));
  document.getElementById("lang-btn-en-mobile").addEventListener("click", () => { setLang("en"); mobileMenu.classList.remove("open"); });
  document.getElementById("lang-btn-fr-mobile").addEventListener("click", () => { setLang("fr"); mobileMenu.classList.remove("open"); });

  /* ---------- FIRST RENDER ---------- */
  document.documentElement.lang = UI_STRINGS[currentLang].htmlLang;
  renderPage(currentLang);

  /* ---------- CINEMATIC HERO ENTRANCE (once, on load) ---------- */
  requestAnimationFrame(() => {
    setTimeout(() => document.getElementById("home").classList.add("hero-loaded"), 60);
  });
});

/* ==========================================================
   RENDER PAGE — called on load and every language switch
   ========================================================== */
function renderPage(lang) {
  const d = SITE_DATA[lang];
  const s = UI_STRINGS[lang];

  // stop any running photo-rotation timers before re-building the DOM
  rotatorIntervals.forEach(id => clearInterval(id));
  rotatorIntervals = [];

  /* ---------- LANGUAGE SWITCH: hint text + active-pill state ---------- */
  document.getElementById("lang-switch-hint").textContent = s.langToggle.hint;
  document.getElementById("lang-switch-hint-mobile").textContent = s.langToggle.hint;
  document.querySelectorAll(".lang-pill").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  /* ---------- NAV ---------- */
  document.querySelectorAll("[data-nav]").forEach(el => { el.textContent = s.nav[el.dataset.nav]; });
  document.getElementById("nav-cv").textContent = s.nav.downloadCV;
  document.getElementById("nav-cv").href = d.profile.cv;
  document.getElementById("mobile-nav-cv").textContent = s.nav.downloadCV;
  document.getElementById("mobile-nav-cv").href = d.profile.cv;

  /* ---------- HERO ---------- */
  document.getElementById("hero-title").textContent = d.profile.title;
  document.getElementById("hero-intro-text").textContent = d.profile.heroIntro;
  document.getElementById("hero-photo").src = d.profile.photo;
  document.getElementById("hero-photo").alt = "Portrait of " + d.profile.name;
  document.getElementById("hero-cv").href = d.profile.cv;
  document.getElementById("hero-cv").textContent = s.hero.viewCV;
  document.getElementById("hero-contact-btn").textContent = s.hero.getInTouch;
  document.getElementById("hero-linkedin").href = d.profile.linkedin;
  document.getElementById("hero-linkedin").textContent = s.hero.linkedin;
  document.getElementById("hero-school-tag").textContent = s.hero.schoolTag;
  document.getElementById("hero-program-tag").textContent = s.hero.programTag;

  /* ---------- ABOUT ---------- */
  document.getElementById("about-heading").textContent = s.about.heading;
  document.getElementById("about-eyebrow").textContent = s.about.eyebrow;
  document.getElementById("about-me-label").textContent = s.about.aboutMeLabel;
  document.getElementById("about-focus-label").textContent = s.about.focusLabel;

  const aboutText = document.getElementById("about-text");
  aboutText.innerHTML = "";
  d.profile.about.forEach(p => {
    const el = document.createElement("p");
    el.innerHTML = p;
    aboutText.appendChild(el);
  });
  const pullquoteEl = document.getElementById("about-pullquote");
  pullquoteEl.textContent = d.profile.aboutPullQuote || "";

  const focusList = document.getElementById("focus-list");
  focusList.innerHTML = "";
  d.profile.areasOfFocus.forEach((a, i) => {
    const el = document.createElement("div");
    el.className = "focus-item";
    el.innerHTML = `
      <span class="focus-num">${a.num || ""}</span>
      <div class="focus-body">
        <div class="focus-row">
          <span class="focus-icon">${ICONS[a.icon] || ""}</span>
          <span class="focus-title">${a.title}</span>
          <span class="focus-arrow">→</span>
        </div>
        <div class="focus-methods">${a.methods}</div>
      </div>
    `;
    focusList.appendChild(el);
  });

  /* ---------- WOW TRANSITION ---------- */
  const t = d.profile.transition;
  document.getElementById("transition-line1").textContent = t.line1;
  document.getElementById("transition-line2").innerHTML = `${t.line2Before}<span class="transition-accent">${t.line2Accent}</span>${t.line2After}`;

  /* ---------- PROFESSIONAL EXPERIENCE ---------- */
  document.getElementById("experience-heading").textContent = s.experience.heading;
  document.getElementById("experience-sub").textContent = s.experience.sub;

  function mediaSlotHTML(images, captions, reportPath) {
    let inner;
    if (images && images.length) {
      inner = images.map((src, i) => `
        <div class="gallery-thumb exp-rotator-slide${i === 0 ? " active" : ""}" data-img="${src}" data-caption="${(captions && captions[i]) || ""}">
          <img src="${src}" alt="${(captions && captions[i]) || "Experience photo"}" loading="lazy">
        </div>
      `).join("");
    } else {
      inner = `<div class="exp-media-placeholder"><span>Add photo</span></div>`;
    }
    const dots = (images && images.length > 1) ? `<div class="exp-rotator-dots">${images.map((_, i) => `<span class="rotator-dot${i === 0 ? " active" : ""}"></span>`).join("")}</div>` : "";
    const reportBtn = reportPath ? `<a class="btn-text exp-report-link" href="${reportPath}" target="_blank" rel="noopener">${s.experience.downloadReport}</a>` : "";
    return `
      <div class="exp-media-label">${s.experience.gallery}</div>
      <div class="exp-rotator" data-gallery data-rotate="${!!(images && images.length > 1)}">${inner}</div>
      ${dots}
      ${reportBtn}
    `;
  }

  function setupRotator(rotatorEl) {
    if (reducedMotion || rotatorEl.dataset.rotate !== "true") return;
    const slides = Array.from(rotatorEl.querySelectorAll(".exp-rotator-slide"));
    const dots = rotatorEl.parentElement.querySelectorAll(".rotator-dot");
    if (slides.length < 2) return;
    let idx = 0;
    const id = setInterval(() => {
      slides[idx].classList.remove("active");
      if (dots[idx]) dots[idx].classList.remove("active");
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add("active");
      if (dots[idx]) dots[idx].classList.add("active");
    }, 5000);
    rotatorIntervals.push(id);
  }

  const expList = document.getElementById("experience-list");
  expList.innerHTML = "";
  d.experiences.forEach((exp, i) => {
    const item = document.createElement("div");
    item.className = "exp-item" + (exp.featured ? " is-featured" : "");
    item.innerHTML = `
      <div class="exp-dot"></div>
      <div class="exp-card${exp.featured ? " is-featured" : ""}" id="${exp.id}" style="transition-delay:${Math.min(i * 90, 270)}ms">
        <div class="exp-card-inner">
          <div class="exp-card-body">
            <div class="exp-eyebrow">
              <span class="exp-date">${exp.date}</span>
              <span class="exp-dept">${exp.department}</span>
            </div>
            <div class="exp-company-row">
              ${exp.companyLogo ? `<img class="exp-company-logo" src="${exp.companyLogo}" alt="${exp.company} logo">` : ""}
              <h3 class="exp-company">${exp.company}</h3>
            </div>
            <p class="exp-theme">${exp.theme}</p>
            <p class="exp-summary">${exp.summary}</p>
            <div class="exp-tags-row">${exp.methodology.slice(0, 5).map(m => `<span class="tool-tag">${m}</span>`).join("")}</div>
            <div class="exp-cta-row">
              <button class="btn-text" data-open-experience="${exp.id}">${s.experience.viewExperience}</button>
            </div>
          </div>
          <div class="exp-card-media">
            ${mediaSlotHTML(exp.images, exp.imageCaptions, exp.report)}
          </div>
        </div>
      </div>
    `;
    expList.appendChild(item);
    window.__wireGalleries(item);
    setupRotator(item.querySelector(".exp-rotator"));
  });

  /* ---------- ACADEMIC PROJECTS ---------- */
  document.getElementById("projects-heading").textContent = s.projects.heading;
  document.getElementById("projects-sub").textContent = s.projects.sub;

  function projectCoverHTML(p) {
    if (p.cover && p.cover.type === "iframe") {
      return `<div class="project-cover" data-style="${p.style}"><div class="project-cover-iframe"><iframe src="${p.cover.file}" loading="lazy" tabindex="-1" title="${p.title} preview"></iframe><div class="project-cover-shield"></div></div><div class="project-cover-shine"></div></div>`;
    }
    const imgSrc = (p.cover && p.cover.type === "image") ? p.cover.file : (p.images && p.images[0]);
    if (imgSrc) {
      return `<div class="project-cover" data-style="${p.style}"><img src="${imgSrc}" alt="${p.title}" loading="lazy"><div class="project-cover-shine"></div></div>`;
    }
    return `<div class="project-cover" data-style="${p.style}"><div class="project-cover-shine"></div></div>`;
  }

  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = "";
  d.academicProjects.forEach((p, i) => {
    const el = document.createElement("div");
    el.className = "project-card project-card-poster";
    el.dataset.style = p.style;
    el.dataset.openProject = p.id;
    el.style.transitionDelay = Math.min(i * 90, 270) + "ms";
    el.innerHTML = `
      ${projectCoverHTML(p)}
      <div class="project-caption">
        <h3 class="project-title">${p.title}</h3>
        <span class="project-caption-arrow" aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </span>
      </div>
    `;
    projectsGrid.appendChild(el);
  });

  /* ---------- TOOLS MARQUEE ---------- */
  const marqueeTrack = document.getElementById("marquee-track");
  const allTools = Object.values(d.tools).flat();
  const marqueeItemHTML = (name) => {
    const logo = TOOL_LOGOS[name];
    if (logo && logo.svg) return `<div class="marquee-item"><span class="marquee-icon has-logo${logo.mono ? " mono" : ""}">${logo.svg}</span>${name}</div>`;
    if (logo && logo.img) return `<div class="marquee-item"><span class="marquee-icon has-logo${logo.chip === "light" ? " chip-light" : ""}"><img src="${logo.img}" alt="${name} logo" loading="lazy"></span>${name}</div>`;
    return `<div class="marquee-item"><span class="marquee-icon">${name.slice(0, 2).toUpperCase()}</span>${name}</div>`;
  };
  const marqueeHTML = allTools.map(marqueeItemHTML).join("");
  marqueeTrack.innerHTML = marqueeHTML + marqueeHTML;

  /* ---------- CERTIFICATIONS (heading = Education & Certifications) ---------- */
  document.getElementById("certifications-heading").textContent = s.certifications.heading;
  document.getElementById("certifications-sub").textContent = s.certifications.sub;

  /* One distinct icon + accent color per certificate topic, matched by
     order (Project Mgmt, Supply Chain, Quality Mgmt, Root Cause, Six Sigma, Business Process Improvement). */
  const CERT_ICONS = [
    { accent: "#C24632", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/><path d="M8 13h3M8 17h6"/></svg>` },
    { accent: "#B98A3E", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg>` },
    { accent: "#7E9E7A", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>` },
    { accent: "#6E93A8", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8"/><path d="M10.5 7.5v6M7.5 10.5h6"/></svg>` },
    { accent: "#A6402F", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>` },
    { accent: "#5E9C94", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="4" width="6" height="5" rx="1"/><rect x="15.5" y="15" width="6" height="5" rx="1"/><path d="M8.5 6.5h4.5a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h0"/><path d="M15.5 17.5H11a2 2 0 0 1-2-2v-1"/><path d="M14 11.5l2.5 2-2.5 2"/></svg>` }
  ];

  const certList = document.getElementById("cert-list");
  certList.innerHTML = "";
  d.certifications.forEach((c, i) => {
    const icon = CERT_ICONS[i % CERT_ICONS.length];
    const certs = c.certs || [];
    const el = document.createElement("div");
    el.className = "cert-card";
    el.style.setProperty("--cert-accent", icon.accent);
    el.style.transitionDelay = Math.min(i * 80, 240) + "ms";
    const metaBits = [c.duration, c.provider, c.date].filter(Boolean);
    const topicsHTML = (c.topics || []).slice(0, 5).map(t => `<span class="cert-topic-tag">${t}</span>`).join("");
    el.innerHTML = `
      <div class="cert-card-top">
        <div class="cert-icon">${icon.svg}</div>
        <span class="cert-badge">${certs.length || "—"}</span>
      </div>
      <h4 class="cert-title">${c.title}</h4>
      <p class="cert-meta">${metaBits.join(" · ")}</p>
      ${topicsHTML ? `<div class="cert-topics">${topicsHTML}</div>` : ""}
      <p class="cert-learned">${c.learned}</p>
      ${certs.length ? `<button type="button" class="cert-link" data-open-cert="${i}">${s.certifications.viewDetails} →</button>` : ""}
    `;
    certList.appendChild(el);
  });

  const eduList = document.getElementById("education-list");
  eduList.innerHTML = "";
  d.profile.education.forEach(e => {
    const el = document.createElement("div");
    el.className = "edu-row";
    el.innerHTML = `<div><div class="edu-school">${e.school}</div><div class="edu-program">${e.program}</div></div><div class="edu-period">${e.period}</div>`;
    eduList.appendChild(el);
  });

  /* ---------- ACTIVITIES (carousel of activity cards) ---------- */
  const actStr = s.activities;
  document.getElementById("activities-heading").textContent = actStr.heading;
  document.getElementById("activities-sub").textContent = actStr.sub;
  document.getElementById("act-carousel").setAttribute("aria-label", actStr.carouselLabel);
  const actPrev = document.getElementById("act-prev");
  const actNext = document.getElementById("act-next");
  actPrev.textContent = actStr.prev; actPrev.setAttribute("aria-label", actStr.prev);
  actNext.textContent = actStr.next; actNext.setAttribute("aria-label", actStr.next);

  const actTrack = document.getElementById("act-track");
  actTrack.innerHTML = "";
  (d.activities || []).forEach((a, i) => {
    const card = document.createElement("div");
    card.className = "act-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.dataset.openActivity = a.id;
    const label = [a.title, a.subtitle, a.date].filter(Boolean).join(", ");
    card.setAttribute("aria-label", `${label}. ${actStr.viewDetails}`);
    const multi = a.images.length > 1;
    const alt = a.subtitle ? `${a.title} — ${a.subtitle}` : a.title;
    const slidesHTML = a.images.map((im, k) => {
      const contain = im.fit === "contain";
      return `<div class="act-slide${k === 0 ? " active" : ""}" data-fit="${im.fit}">
        ${contain ? `<img class="act-slide-bg" src="${im.src}" alt="" aria-hidden="true" loading="lazy">` : ""}
        <img class="act-slide-img" src="${im.src}" alt="${alt}" loading="lazy" style="object-position:${im.pos}">
      </div>`;
    }).join("");
    const dotsHTML = multi ? `<div class="act-dots" aria-hidden="true">${a.images.map((_, k) => `<span class="act-dot${k === 0 ? " active" : ""}"></span>`).join("")}</div>` : "";
    card.innerHTML = `
      ${slidesHTML}
      <div class="act-shade" aria-hidden="true"></div>
      ${dotsHTML}
      <div class="act-info">
        <h3 class="act-title">${a.title}</h3>
        ${a.subtitle ? `<p class="act-sub">${a.subtitle}</p>` : ""}
        <div class="act-foot">
          <span class="act-date">${a.date}</span>
          <span class="act-go" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
        </div>
      </div>`;
    card.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); card.click(); }
    });
    actTrack.appendChild(card);

    /* photos of the same activity cross-fade inside ONE card */
    if (multi && !reducedMotion) {
      const slides = Array.from(card.querySelectorAll(".act-slide"));
      const dots = Array.from(card.querySelectorAll(".act-dot"));
      let idx = 0, hold = false;
      ["mouseenter", "focusin"].forEach(ev => card.addEventListener(ev, () => { hold = true; }));
      ["mouseleave", "focusout"].forEach(ev => card.addEventListener(ev, () => { hold = false; }));
      const id = setInterval(() => {
        if (hold || document.hidden) return;
        slides[idx].classList.remove("active"); dots[idx].classList.remove("active");
        idx = (idx + 1) % slides.length;
        slides[idx].classList.add("active"); dots[idx].classList.add("active");
      }, 4600 + i * 260);
      rotatorIntervals.push(id);
    }
  });

  /* Prev / Next move the track one card at a time (touch swipe = native scroll-snap) */
  const actStep = () => {
    const c = actTrack.querySelector(".act-card");
    return c ? c.offsetWidth + (parseFloat(getComputedStyle(actTrack).columnGap) || 24) : 0;
  };
  const actUpdate = () => {
    const max = actTrack.scrollWidth - actTrack.clientWidth;
    actPrev.disabled = actTrack.scrollLeft <= 2;
    actNext.disabled = actTrack.scrollLeft >= max - 2;
  };
  actPrev.onclick = () => actTrack.scrollBy({ left: -actStep(), behavior: reducedMotion ? "auto" : "smooth" });
  actNext.onclick = () => actTrack.scrollBy({ left: actStep(), behavior: reducedMotion ? "auto" : "smooth" });
  actTrack.onscroll = actUpdate;
  actTrack.scrollLeft = 0;
  actUpdate();
  window.__actUpdate = actUpdate;
  if (!window.__actBound) {
    window.__actBound = true;
    window.addEventListener("resize", () => window.__actUpdate && window.__actUpdate());
    window.addEventListener("load", () => window.__actUpdate && window.__actUpdate());
  }

  /* ---------- CONTACT ---------- */
  document.getElementById("contact-heading").textContent = s.contact.heading;
  document.getElementById("contact-sub").textContent = s.contact.sub;
  document.getElementById("contact-email-label").textContent = s.contact.email;
  document.getElementById("contact-linkedin-label").textContent = s.contact.linkedin;
  document.getElementById("contact-email").href = "mailto:" + d.profile.email;
  document.getElementById("contact-email").textContent = d.profile.email;
  document.getElementById("contact-linkedin").href = d.profile.linkedin;
  document.getElementById("contact-linkedin").textContent = "linkedin.com/in/imane-elkssimi";
  document.getElementById("f-name-label").textContent = s.contact.nameLabel;
  document.getElementById("f-email-label").textContent = s.contact.emailLabel;
  document.getElementById("f-subject-label").textContent = s.contact.subjectLabel;
  document.getElementById("f-message-label").textContent = s.contact.messageLabel;
  document.getElementById("f-submit").textContent = s.contact.send;
  document.getElementById("f-status").textContent = "";
  document.getElementById("f-status").className = "form-status";

  /* ---------- FOOTER ---------- */
  document.getElementById("footer-role").textContent = s.footer.role;
  document.getElementById("footer-linkedin").href = d.profile.linkedin;
  document.getElementById("footer-linkedin").textContent = s.footer.linkedin;
  document.getElementById("footer-email").href = "mailto:" + d.profile.email;
  document.getElementById("footer-email").textContent = s.footer.email;
  document.getElementById("footer-cv").href = d.profile.cv;
  document.getElementById("footer-cv").textContent = s.footer.cv;
  document.getElementById("footer-copy-text").textContent = s.footer.copyright;
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- MODAL BUILDERS (need d/s in scope, so defined per-render) ---------- */
  function renderGallery(images, captions) {
    if (images && images.length) {
      return `<div class="gallery-strip" data-gallery>` + images.map((src, i) => `
        <div class="gallery-thumb" data-img="${src}" data-caption="${(captions && captions[i]) || ""}">
          <img src="${src}" alt="${(captions && captions[i]) || "Photo"}" loading="lazy">
        </div>
      `).join("") + `</div>`;
    }
    return `<div class="gallery-strip">
      <div class="gallery-empty">${s.modal.photosComingSoon}</div>
      <div class="gallery-empty">${s.modal.photosComingSoon}</div>
      <div class="gallery-empty">${s.modal.photosComingSoon}</div>
    </div>`;
  }
  window.__renderGallery = renderGallery;

  window.__buildExperienceModalHTML = function (exp, str) {
    const sec = window.__section;
    let html = "";
    if (exp.context) html += sec(str.modal.context, `<p class="modal-text">${exp.context}</p>`);
    if (exp.objective) html += sec(str.modal.objective, `<p class="modal-text">${exp.objective}</p>`);
    if (exp.methodology) html += sec(str.modal.methods, `<div class="tool-tags">${exp.methodology.map(m => `<span class="tool-tag">${m}</span>`).join("")}</div>`);
    if (exp.flow) html += sec(str.modal.flow, `<div class="flow-row">${exp.flow.map((f, i) => `<span class="flow-step">${f}</span>` + (i < exp.flow.length - 1 ? `<span class="flow-sep">→</span>` : "")).join("")}</div>`);
    if (exp.figures) html += sec(str.modal.figures, `<div class="figures-grid">${exp.figures.map(f => `<div class="figure-card"><div class="figure-value">${f.value}</div><div class="figure-label">${f.label}</div></div>`).join("")}</div>`);
    if (exp.steps) html += sec(str.modal.approach, `<div class="step-list">${exp.steps.map(st => `<div class="step-row"><div class="step-phase">${st.phase}</div><p class="step-text">${st.text}</p></div>`).join("")}</div>`);
    if (exp.caseStudy) {
      const cs = exp.caseStudy;
      html += sec(str.modal.existingProcess, `<p class="modal-text">${cs.existingProcess}</p>`);
      html += sec(str.modal.theApproach, `<p class="modal-text">${cs.approach}</p>`);
      html += sec(str.modal.digitalSolution, `<p class="modal-text">${cs.solution}</p>`);
      html += sec(str.modal.visualization, `<p class="modal-text">${cs.visualization}</p>`);
      html += sec(str.modal.impact, `<p class="modal-text">${cs.impact}</p>`);
    }
    if (exp.before && exp.after) {
      html += sec(str.modal.beforeAfter, `<div class="ba-grid">
        <div class="ba-col before"><h5>${str.modal.before}</h5><ul>${exp.before.map(x => `<li>${x}</li>`).join("")}</ul></div>
        <div class="ba-col after"><h5>${str.modal.after}</h5><ul>${exp.after.map(x => `<li>${x}</li>`).join("")}</ul></div>
      </div>`);
    }
    if (exp.contribution) html += sec(str.modal.myContribution, `<p class="modal-text">${exp.contribution}</p>`);
    if (exp.note) html += sec(str.modal.confidentialNote, `<p class="confidential-note">${exp.note}</p>`);
    html += sec(str.experience.gallery, window.__renderGallery(exp.images, exp.imageCaptions));
    if (exp.learned) html += sec(str.modal.keyLearning, `<div class="learned-box"><strong>${str.modal.whatILearned}</strong>${exp.learned}</div>`);
    return html;
  };

  window.__buildProjectModalHTML = function (p, str) {
    const sec = window.__section;
    let html = "";
    if (p.context) html += sec(str.modal.context, `<p class="modal-text">${p.context}</p>`);
    html += sec(str.modal.overview, `<p class="modal-text">${p.summary}</p>`);
    html += sec(str.modal.problem, `<p class="modal-text">${p.problem}</p>`);
    html += sec(str.modal.approach, `<p class="modal-text">${p.approach}</p>`);
    html += sec(str.modal.technologies, `<div class="tool-tags">${p.technologies.map(t => `<span class="tool-tag">${t}</span>`).join("")}</div>`);
    if (p.concepts) html += sec(str.modal.concepts, `<div class="tool-tags">${p.concepts.map(t => `<span class="tool-tag">${t}</span>`).join("")}</div>`);
    if (p.flow) html += sec(str.modal.methodology, `<div class="flow-row">${p.flow.map((f, i) => `<span class="flow-step">${f}</span>` + (i < p.flow.length - 1 ? `<span class="flow-sep">→</span>` : "")).join("")}</div>`);
    if (p.indicators) html += sec(str.modal.indicators, `<div class="tool-tags">${p.indicators.map(t => `<span class="tool-tag">${t}</span>`).join("")}</div>`);
    if (p.steps) html += sec(str.modal.implementation, `<div class="step-list">${p.steps.map(st => `<div class="step-row"><div class="step-phase">${st.phase}</div><p class="step-text">${st.text}</p></div>`).join("")}</div>`);
    if (p.output) html += sec(str.modal.results, `<p class="modal-text">${p.output}</p>`);
    if (p.sourceCode) html += sec(str.modal.sourceCode, `<a class="btn-text" href="${p.sourceCode}" download>${str.modal.downloadSource}</a>`);
    if (p.interactiveLinks && p.interactiveLinks.length) {
      html += sec(str.modal.interactiveDemos, `<div class="interactive-links">${p.interactiveLinks.map(l => `<a class="btn-secondary interactive-link" href="${l.file}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("")}</div>`);
    }
    if (!p.noGallery) html += sec(str.modal.gallery, window.__renderGallery(p.images, p.imageCaptions));
    html += sec(str.modal.whatLearned, `<div class="learned-box"><strong>${str.modal.whatILearned}</strong>${p.learned}</div>`);
    return html;
  };

  window.__buildCertModalHTML = function (c, str) {
    const sec = window.__section;
    let html = "";
    if (c.topics && c.topics.length) html += sec(str.modal.keyTopics, `<div class="tool-tags">${c.topics.map(t => `<span class="tool-tag">${t}</span>`).join("")}</div>`);
    if (c.certs && c.certs.length) {
      html += sec(str.modal.certificates, `<div class="cert-org-list">${c.certs.map(cert => `
        <div class="cert-org-row">
          <div class="cert-org-id">
            <img class="cert-org-logo" src="${cert.logo}" alt="${cert.org} logo" loading="lazy">
            <span class="cert-org-name">${cert.org}</span>
          </div>
          <a class="btn-secondary cert-org-link" href="${cert.file}" target="_blank" rel="noopener">${str.certifications.viewCertificate}</a>
        </div>`).join("")}</div>`);
    }
    html += sec(str.modal.whatILearnedCert, `<div class="learned-box">${c.learned}</div>`);
    return html;
  };

  window.__buildActivityModalHTML = function (a, str) {
    const sec = window.__section;
    const t = str.activities;
    let html = "";
    if (a.role) html += sec(t.role, `<p class="modal-text">${a.role}</p>`);
    html += sec(t.overview, a.description.map(p => `<p class="modal-text act-para">${p}</p>`).join(""));
    if (a.list && a.list.length) {
      html += sec(a.listLabel, `<ul class="act-list">${a.list.map(x => `<li>${x}</li>`).join("")}</ul>${a.closing ? `<p class="modal-text act-closing">${a.closing}</p>` : ""}`);
    } else if (a.closing) {
      html += sec(t.overview, `<p class="modal-text">${a.closing}</p>`);
    }
    if (a.impact) html += sec(t.impact, `<div class="figures-grid"><div class="figure-card"><div class="figure-value">${a.impact.value}</div><div class="figure-label">${a.impact.label}</div></div></div>`);
    const cap = a.subtitle ? `${a.title} — ${a.subtitle}` : a.title;
    html += sec(t.photos, window.__renderGallery(a.images.map(im => im.src), a.images.map(() => cap)));
    return html;
  };

  /* ---------- RE-APPLY SCROLL REVEAL ---------- */
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal, .exp-card, .project-card, .cert-card").forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });
}

function buildExperienceModalHTML(exp, s) { return window.__buildExperienceModalHTML(exp, s); }

function openProjectById(id, openModal, s) {
  const d = SITE_DATA[currentLang];
  const idx = d.academicProjects.findIndex(x => x.id === id);
  if (idx === -1) return;
  const p = d.academicProjects[idx];
  openModal({
    eyebrow: s.modal.academicProject,
    title: p.title,
    meta: p.technologies.join(" · "),
    bodyHTML: window.__buildProjectModalHTML(p, s)
  });
  const prev = d.academicProjects[(idx - 1 + d.academicProjects.length) % d.academicProjects.length];
  const next = d.academicProjects[(idx + 1) % d.academicProjects.length];
  modalProjectNav.style.display = "flex";
  modalProjectNav.innerHTML = `
    <button class="modal-nav-btn" data-project-nav="${prev.id}">← ${prev.title}</button>
    <button class="modal-nav-btn modal-nav-btn-next" data-project-nav="${next.id}">${next.title} →</button>
  `;
}
