document.querySelectorAll('.cta-buttons button').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 10px #FCEBB8';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
  });
});



/* Update language support*/
let translations = {
  en: {
    headline: "Feel Safe. Feel Seen. Feel ELSMY.",
    subtext: "Your emotional state matters. ELSMY protects you with intelligent emotional security.",
    getStarted: "Get Started",
    learnMore: "Learn How It Works",
    howItWorks: "How It Works",
    step1: "Connect your Security Emotional Sensor",
    step2: "Let ELSMY analyze your emotional signals",
    step3: "Receive real-time support and protection",
    dashboard: "Emotional Dashboard Preview",
    testimonials: "What Users Say"
  },
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
  }
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

/*Animation shift*/

let voiceBtn = document.getElementById("voiceBtn");
let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";

voiceBtn.addEventListener("click", () => {
  recognition.start();
});

recognition.onresult = (event) => {
  let transcript = event.results[0][0].transcript.toLowerCase();
  if (transcript.includes("start")) {
    document.querySelector(".primary").click();
  } else if (transcript.includes("learn")) {
    document.querySelector(".secondary").click();
  }
};

setInterval(() => {
  const states = [
    { emoji: "😊", label: "Calm", color: "#B8CBB8" },
    { emoji: "😟", label: "Anxious", color: "#F7C6D5" },
    { emoji: "😌", label: "Relieved", color: "#FCEBB8" },
    { emoji: "😠", label: "Frustrated", color: "#3A3D7C" }
  ];
  const state = states[Math.floor(Math.random() * states.length)];
  const el = document.querySelector(".state");
  el.textContent = `${state.emoji} Emotional State: ${state.label}`;
  el.style.backgroundColor = state.color;
}, 6000);