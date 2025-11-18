document.querySelectorAll('.cta-buttons button').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 10px #FCEBB8';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
  });
});

const translations = {
  it: {
    headline: "Sentiti al sicuro. Sentiti vista. Sentiti ELSMY.",
    subtext: "Il tuo stato emotivo conta. ELSMY ti protegge con sicurezza emotiva intelligente.",
    getStarted: "Inizia ora",
    learnMore: "Scopri come funziona",
    howItWorks: "Come Funziona",
    step1: "Collega il tuo Sensore Emotivo di Sicurezza",
    step2: "Lascia che ELSMY analizzi i tuoi segnali emotivi",
    step3: "Ricevi supporto e protezione in tempo reale",
    dashboard: "Anteprima del Cruscotto Emozionale",
    testimonials: "Cosa dicono gli utenti"
  },
  // Add more languages here...
};

document.getElementById("lang").addEventListener("change", (e) => {
  const lang = e.target.value;
  const t = translations[lang];
  if (!t) return;

  document.querySelector(".hero h2").textContent = t.headline;
  document.querySelector(".hero p").textContent = t.subtext;
  document.querySelector(".primary").textContent = t.getStarted;
  document.querySelector(".secondary").textContent = t.learnMore;
  document.querySelector(".how-it-works h3").textContent = t.howItWorks;
  document.querySelectorAll(".how-it-works li")[0].textContent = t.step1;
  document.querySelectorAll(".how-it-works li")[1].textContent = t.step2;
  document.querySelectorAll(".how-it-works li")[2].textContent = t.step3;
  document.querySelector(".dashboard-preview h3").textContent = t.dashboard;
  document.querySelector(".testimonials h3").textContent = t.testimonials;
});