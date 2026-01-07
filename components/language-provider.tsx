"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "de" | "en";

type LangContext = {
  language: Lang;
  setLanguage: (l: Lang) => void;
  t: (key: string) => string;
};

const translations: Record<Lang, Record<string, string>> = {
  de: {
    "logo.portfolio": "Portfolio",
    "nav.home": "Home",
    "nav.projects": "Projekte",
    "nav.skills": "Skills",
    "nav.about": "Über mich",
    "nav.contact": "Kontakt",
    "nav.impressum": "Impressum",
    "nav.datenschutz": "Datenschutz",
    "hero.greeting": "Hallo, ich bin",
    "hero.title": "Frontend Developer",
    "hero.value": "Ich entwickle moderne, performante Web-Anwendungen mit Fokus auf clean Code, best practices und herausragende User Experience.",
    "hero.cta.projects": "Projekte ansehen",
    "hero.cta.contact": "Kontakt aufnehmen",
    "hero.scroll": "Scroll",

    "about.title": "Über mich",
    "about.intro": "Als Frontend Developer verbinde ich kreatives Design mit technischer Präzision. Mein Ziel ist es, digitale Erlebnisse zu schaffen, die nicht nur gut aussehen, sondern auch performant und zugänglich sind.",
    "about.h1.title": "Wer ich bin",
    "about.h1.description": "Leidenschaftlicher Frontend-Developer mit starkem Fokus auf User Experience und moderne Web-Technologien.",
    "about.h2.title": "Meine Spezialisierung",
    "about.h2.description": "Entwicklung von performanten Web-Applications mit JavaScript, Angular und modernen CSS-Frameworks.",
    "about.h3.title": "Wie ich arbeite",
    "about.h3.description": "Agil, testgetrieben und mit klarem Fokus auf Clean Code, Best Practices und Zusammenarbeit im Team.",
    "about.h4.title": "Was ich suche",
    "about.h4.description": "Eine Position als Junior Frontend Developer, wo ich lernen und wachsen kann.",
    "about.approachTitle": "Mein Ansatz",
    "about.approach.p1": "Ich glaube daran, dass großartige Software das Ergebnis von klarer Kommunikation, kontinuierlichem Lernen und Liebe zum Detail ist.",
    "about.approach.bullet.code": "Code-Qualität: Sauberer, wartbarer und gut dokumentierter Code",
    "about.approach.bullet.performance": "Performance: Optimierung für schnelle Ladezeiten und flüssige Interaktionen",
    "about.approach.bullet.accessibility": "Zugänglichkeit: Websites, die für alle Nutzer zugänglich sind",
    "about.approach.bullet.teamwork": "Teamwork: Effektive Zusammenarbeit durch klare Kommunikation",

    "projects.title": "Meine Projekte",
    "projects.desc": "Eine Auswahl meiner besten Arbeiten. Jedes Projekt zeigt meine Fähigkeiten in verschiedenen Bereichen der Webentwicklung.",
    "projects.github_note_prefix": "Alle Projekte sind auf",
    "projects.github": "GitHub ",
    "projects.github_note_suffix": "verfügbar",

    "project.key_features": "Key Features:",
    "project.view_github": "Auf GitHub ansehen",
    "project.view_live": "Live Demo ansehen",

    "skills.title": "Skills & Expertise",
    "skills.desc": "Meine technischen Fähigkeiten und Werkzeuge, die ich täglich einsetze.",

    "contact.title": "Lass uns zusammenarbeiten",
    "contact.desc": "Ich bin immer offen für neue Möglichkeiten und spannende Projekte. Kontaktiere mich gerne über einen der folgenden Kanäle.",
    "contact.prefer_direct": "Bevorzugst du direkten Kontakt?",
    "contact.cta.email": "Schreib mir eine Email",
    "contact.social.email": "Email",
    "contact.social.github": "GitHub",
    "contact.social.linkedin": "LinkedIn",
    "contact.social.phone": "Telefon",
    "datenschutz.title": "Datenschutzerklärung",
    "datenschutz.verantwortlicher": "Verantwortlicher",
    "datenschutz.verantwortlicher.name": "Nuri Toker",
    "datenschutz.verantwortlicher.email": "E-Mail: n.toker@yahoo.com",
    "datenschutz.zwecke.title": "Zwecke der Datenverarbeitung",
    "datenschutz.zwecke.text": "Diese Website dient der Darstellung eines Portfolios. Es werden keine Profile erstellt, keine Tracking-Dienste von Drittanbietern eingesetzt und keine personenbezogenen Daten ohne Ihre Mitwirkung verarbeitet.",
    "datenschutz.serverlogs.title": "Server-Logfiles",
    "datenschutz.serverlogs.text": "Beim Aufruf der Seiten werden technisch notwendige Informationen durch den Browser automatisch übermittelt (z. B. IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp). Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung des technischen Betriebs.",
    "datenschutz.cookies.title": "Cookies und lokale Speicherung",
    "datenschutz.cookies.text": "Es werden keine nicht notwendigen Cookies gesetzt. Die Theme-Einstellung (Hell/Dunkel) kann lokal im Browser gespeichert werden (localStorage). Dabei werden keine personenbezogenen Daten übertragen.",
    "datenschutz.kontakt.title": "Kontakt",
    "datenschutz.kontakt.text": "Wenn Sie per E-Mail Kontakt aufnehmen, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage gemäß Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden gelöscht, sobald der Zweck entfällt und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    "datenschutz.links.title": "Externe Links",
    "datenschutz.links.text": "Diese Website enthält Links zu externen Anbietern (z. B. GitHub, LinkedIn). Beim Anklicken werden Sie auf die Seiten der Drittanbieter weitergeleitet. Für deren Datenschutz ist der jeweilige Anbieter verantwortlich.",
    "datenschutz.rechte.title": "Ihre Rechte",
    "datenschutz.rechte.text": "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Widerspruch gegen die Verarbeitung und Datenübertragbarkeit. Wenden Sie sich hierzu an die oben angegebene E-Mail-Adresse.",
    "datenschutz.weitergabe.title": "Weitergabe an Dritte",
    "datenschutz.weitergabe.text": "Eine Weitergabe personenbezogener Daten an Dritte erfolgt nicht, sofern nicht eine gesetzliche Verpflichtung besteht.",
    "impressum.title": "Impressum",
    "impressum.angaben": "Angaben gemäß § 5 TMG",
    "impressum.name": "Nuri Toker",
    "impressum.email": "E-Mail: n.toker@yahoo.com",
    "impressum.phone": "Telefon: +49 174 3389049",
    "impressum.address": "Postanschrift: Mechenseerstr. 12, 88316 Isny im Allgäu",
    "impressum.verantwortlich": "Verantwortlich für den Inhalt",
    "impressum.verantwortlich.name": "Gemäß § 55 Abs. 2 RStV: Nuri Toker",
    "impressum.haftung.inhalte": "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
    "impressum.haftung.links": "Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
    "impressum.urheberrecht": "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung bedarf der schriftlichen Zustimmung des jeweiligen Autors.",
    "impressum.verbraucherstreit": "Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    "impressum.odr": "Plattform der EU-Kommission zur Online-Streitbeilegung: https://ec.europa.eu/consumers/odr",
  },
  en: {
    "logo.portfolio": "Portfolio",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.impressum": "Imprint",
    "nav.datenschutz": "Privacy",
    "hero.greeting": "Hello, I'm",
    "hero.title": "Frontend Developer",
    "hero.value": "I build modern, high-performance web applications focused on clean code, best practices, and outstanding user experience.",
    "hero.cta.projects": "View projects",
    "hero.cta.contact": "Contact me",
    "hero.scroll": "Scroll",

    "about.title": "About",
    "about.intro": "As a frontend developer I combine creative design with technical precision. My goal is to create digital experiences that not only look great but are also performant and accessible.",
    "about.h1.title": "Who I am",
    "about.h1.description": "Passionate frontend developer with a strong focus on user experience and modern web technologies.",
    "about.h2.title": "My Specialization",
    "about.h2.description": "Building high-performance web applications using JavaScript, Angular and modern CSS frameworks.",
    "about.h3.title": "How I work",
    "about.h3.description": "Agile, test-driven and with a clear focus on clean code, best practices and team collaboration.",
    "about.h4.title": "What I'm looking for",
    "about.h4.description": "A position as a junior frontend developer where I can learn and grow.",
    "about.approachTitle": "My approach",
    "about.approach.p1": "I believe great software is the result of clear communication, continuous learning and attention to detail.",
    "about.approach.bullet.code": "Code quality: Clean, maintainable and well-documented code",
    "about.approach.bullet.performance": "Performance: Optimized for fast load times and smooth interactions",
    "about.approach.bullet.accessibility": "Accessibility: Websites that are usable by everyone",
    "about.approach.bullet.teamwork": "Teamwork: Effective collaboration through clear communication",

    "projects.title": "My Projects",
    "projects.desc": "A selection of my best work. Each project demonstrates my skills across different areas of web development.",
    "projects.github_note_prefix": "All projects are available on",
    "projects.github": "GitHub",
    "projects.github_note_suffix": "",

    "project.key_features": "Key Features:",
    "project.view_github": "View on GitHub",
    "project.view_live": "View live demo",

    "skills.title": "Skills & Expertise",
    "skills.desc": "My technical skills and tools I use daily.",

    "contact.title": "Let's work together",
    "contact.desc": "I'm always open to new opportunities and exciting projects. Feel free to reach out via one of the channels below.",
    "contact.prefer_direct": "Prefer direct contact?",
    "contact.cta.email": "Send me an email",
    "contact.social.email": "Email",
    "contact.social.github": "GitHub",
    "contact.social.linkedin": "LinkedIn",
    "contact.social.phone": "Phone",
    "impressum.title": "Imprint",
    "impressum.angaben": "Identification according to § 5 TMG",
    "impressum.name": "Nuri Toker",
    "impressum.email": "E-mail: n.toker@yahoo.com",
    "impressum.phone": "Phone: +49 174 3389049",
    "impressum.address": "Postal address: Mechenseerstr. 12, 88316 Isny im Allgäu, Germany",
    "impressum.verantwortlich": "Person responsible for content",
    "impressum.verantwortlich.name": "According to § 55 para. 2 RStV: Nuri Toker",
    "impressum.haftung.inhalte": "As a service provider we are responsible for our own content on these pages in accordance with § 7 (1) TMG under general laws. Pursuant to §§ 8 to 10 TMG, however, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
    "impressum.haftung.links": "This website contains links to third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages.",
    "impressum.urheberrecht": "The content and works created by the site operators on these pages are subject to German copyright law. Contributions by third parties are marked as such. Duplication, editing, distribution and any kind of exploitation requires the written consent of the respective author.",
    "impressum.verbraucherstreit": "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
    "impressum.odr": "Online dispute resolution platform of the EU Commission: https://ec.europa.eu/consumers/odr",

    "datenschutz.title": "Privacy Policy",
    "datenschutz.verantwortlicher": "Controller",
    "datenschutz.verantwortlicher.name": "Nuri Toker",
    "datenschutz.verantwortlicher.email": "E-mail: n.toker@yahoo.com",
    "datenschutz.zwecke.title": "Purposes of data processing",
    "datenschutz.zwecke.text": "This website serves as a portfolio. No profiling is performed, no third-party tracking services are used, and no personal data is processed without your input.",
    "datenschutz.serverlogs.title": "Server log files",
    "datenschutz.serverlogs.text": "When the pages are accessed, technically necessary information is automatically transmitted by the browser (e.g. IP address, date and time of the request, browser type). Processing is based on Art. 6(1)(f) GDPR to ensure technical operation.",
    "datenschutz.cookies.title": "Cookies and local storage",
    "datenschutz.cookies.text": "No unnecessary cookies are set. The theme preference (light/dark) can be stored locally in the browser (localStorage). No personal data is transmitted.",
    "datenschutz.kontakt.title": "Contact",
    "datenschutz.kontakt.text": "If you contact us by e-mail, we process your details to handle the request in accordance with Art. 6(1)(b) GDPR. The data will be deleted as soon as the purpose no longer applies and there are no legal retention obligations.",
    "datenschutz.links.title": "External links",
    "datenschutz.links.text": "This website contains links to external providers (e.g. GitHub, LinkedIn). When clicking, you will be redirected to the third-party sites. The respective provider is responsible for their privacy policies.",
    "datenschutz.rechte.title": "Your rights",
    "datenschutz.rechte.text": "You have the right to access, rectification, deletion, restriction of processing, objection to processing and data portability. Please contact the e-mail address given above.",
    "datenschutz.weitergabe.title": "Disclosure to third parties",
    "datenschutz.weitergabe.text": "Personal data will not be disclosed to third parties unless there is a legal obligation.",
  },
};

const LanguageContext = createContext<LangContext | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Lang>("de");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("lang");
      if (stored === "de" || stored === "en") {
        setLanguageState(stored);
        return;
      }
    } catch (e) {
      // ignore
    }

    const nav = typeof navigator !== "undefined" ? navigator.language : "de";
    setLanguageState(nav.startsWith("en") ? "en" : "de");
  }, []);

  const setLanguage = (l: Lang) => {
    setLanguageState(l);
    try {
      localStorage.setItem("lang", l);
    } catch (e) {
      // ignore
    }
  };

  const t = (key: string) => {
    return translations[language]?.[key] ?? key;
  };

  const value = useMemo(() => ({ language, setLanguage, t }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
