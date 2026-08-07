const translations = {
  "Per un web più sostenibile":"For a more sustainable web",
  "Nato da un idea di Piero De Lorenzis durante lo sviluppo di una tesi di laurea.":"Conceived by Piero De Lorenzis during the development of his degree thesis.",
  "Vai al contenuto": "Skip to content",
  "Torna all'inizio": "Back to top",
  "Navigazione principale": "Main navigation",
  "Il progetto": "The project",
  "Risultati": "Results",
  "Leggi la tesi": "Read the thesis",
  "Tesi di laurea · Ingegneria dell'Informazione": "Bachelor's thesis · Information Engineering",
  "Un web che si adatta all'energia che utilizza.": "A web that adapts to the energy it uses.",
  "Implementazione delle specifiche di": "Implementation of",
  "in React: un'interfaccia capace di ridurre automaticamente dati ed emissioni quando l'energia disponibile è più inquinante.": "specifications in React: an interface that automatically reduces data and emissions when the available energy is more carbon-intensive.",
  "Esplora il repository": "Explore the repository",
  "Le tre modalità del prototipo": "The three modes of the prototype",
  "Adattiva": "Adaptive",
  "L'interfaccia reagisce in tempo reale all'intensità carbonica.": "The interface responds to carbon intensity in real time.",
  "Prestazioni e sostenibilità, nello stesso design.": "Performance and sustainability, in the same design.",
  "Il prototipo reinterpreta la home page dell'Università del Salento e ne modula il peso in base alla carbon intensity della rete elettrica italiana. Quando l'energia ha un impatto maggiore, la pagina carica immagini più leggere o elimina gli elementi grafici non essenziali.": "The prototype reimagines the University of Salento homepage and adjusts its weight according to the carbon intensity of Italy's electricity grid. When energy has a higher impact, the page loads lighter images or removes non-essential visual elements.",
  "La modalità": "The",
  "usa i dati di Electricity Maps per scegliere automaticamente il livello più adatto. Le modalità manuali permettono invece di osservare e confrontare i tre scenari.": "mode uses Electricity Maps data to automatically select the most appropriate level. Manual modes make it possible to observe and compare the three scenarios.",
  "Come funziona": "How it works",
  "Tre risposte, un solo obiettivo.": "Three responses, one goal.",
  "LOW · fino a 250 gCO₂/kWh": "LOW · up to 250 gCO₂/kWh",
  "Esperienza completa": "Full experience",
  "Immagini ad alta risoluzione e interfaccia visuale completa.": "High-resolution images and the complete visual interface.",
  "MEDIUM · 250–400 gCO₂/kWh": "MEDIUM · 250–400 gCO₂/kWh",
  "Contenuti ottimizzati": "Optimized content",
  "Immagini a risoluzione ridotta per limitare i dati trasferiti.": "Lower-resolution images to reduce transferred data.",
  "HIGH · oltre 400 gCO₂/kWh": "HIGH · above 400 gCO₂/kWh",
  "Essenziale per scelta": "Essential by design",
  "Grafica minima e risorse non necessarie rimosse dalla pagina.": "Minimal graphics, with unnecessary resources removed from the page.",
  "Risultati sperimentali": "Experimental results",
  "Meno dati.": "Less data.",
  "Meno emissioni.": "Fewer emissions.",
  "I test eseguiti con cache svuotata mostrano una riduzione progressiva del peso della pagina e delle emissioni stimate per ogni visualizzazione.": "Tests performed with an empty cache show a progressive reduction in page weight and estimated emissions per page view.",
  "Valori riferiti al modello e alle condizioni illustrate nella tesi.": "Values refer to the model and conditions described in the thesis.",
  "emissioni stimate in modalità HIGH rispetto a LOW": "estimated emissions in HIGH mode compared with LOW",
  "dati trasferiti nella versione più essenziale": "data transferred in the most essential version",
  "CO₂ stimata per visualizzazione in modalità HIGH": "estimated CO₂ per page view in HIGH mode",
  "Approfondisci": "Learn more",
  "Dal metodo all'implementazione.": "From method to implementation.",
  "La tesi raccoglie il contesto teorico, l'architettura React, la metodologia di test e l'analisi completa dei risultati.": "The thesis covers the theoretical background, React architecture, testing methodology, and a complete analysis of the results.",
  "Apri il PDF della tesi": "Open the thesis PDF",
  "Relatore Prof. Roberto Vergallo · A.A. 2022/2023": "Supervisor Prof. Roberto Vergallo · Academic year 2022/2023"
};

const originals = new Map();

function translatableTextNodes() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const tag = node.parentElement?.tagName;
      return tag === "SCRIPT" || tag === "STYLE" || !node.nodeValue.trim()
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}

function setLanguage(language) {
  const english = language === "en";

  translatableTextNodes().forEach((node) => {
    if (!originals.has(node)) originals.set(node, node.nodeValue);
    const original = originals.get(node);
    if (!english) {
      node.nodeValue = original;
      return;
    }

    const text = original.trim().replace(/\s+/g, " ");
    if (!translations[text]) return;
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    node.nodeValue = `${leading}${translations[text]}${trailing}`;
  });

  document.documentElement.lang = language;

  const toggle = document.getElementById("language-toggle");
  toggle.textContent = english ? "IT" : "EN";
  toggle.setAttribute(
    "aria-label",
    english ? "Traduci la pagina in italiano" : "Translate page into English"
  );

  document.querySelector(".brand").setAttribute(
    "aria-label",
    english ? "Webkind — back to top" : "Webkind — torna all'inizio"
  );
  document.querySelector("nav").setAttribute(
    "aria-label",
    english ? "Main navigation" : "Navigazione principale"
  );
  document.querySelector(".hero-visual").setAttribute(
    "aria-label",
    english ? "The three modes of the prototype" : "Le tre modalità del prototipo"
  );
  document.querySelector(".footer-github").setAttribute(
    "aria-label",
    english ? "GitHub repository" : "Repository GitHub"
  );
  localStorage.setItem("preferred-language", language);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("preferred-language");
  setLanguage(savedLanguage === "en" ? "en" : "it");

  document.getElementById("language-toggle").addEventListener("click", () => {
    setLanguage(document.documentElement.lang === "it" ? "en" : "it");
  });
});
