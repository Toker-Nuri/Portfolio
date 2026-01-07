"use client";

import { motion } from "framer-motion";
import { Github, Code2 } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { useLanguage } from "@/components/language-provider";


const projects = [
  {
    title_de: "El Pollo Loco",
    title_en: "El Pollo Loco",
    description_de:
      "Ein OOP-basiertes Jump-and-Run-Spiel, in dem Pepe Münzen und Tabasco-Salsa sammelt, um sich dem verrückten Huhn im Endkampf zu stellen.",
    description_en:
      "An OOP-based jump-and-run game where Pepe collects coins and Tabasco salsa to face the crazy chicken in the final boss fight.",
    image: "/elpollolocco.png",
    tech: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://nuri-toker.developerakademie.net/El%20Pollo%20Loco/index.html",
    githubLink: "https://github.com/Toker-Nuri/El-Pollo-Loco",
    features_de: [
      "Objektorientierte Architektur",
      "Jump-and-Run-Mechanik mit Sammelobjekten",
      "Kollisions- und Physik-Logik",
    ],
    features_en: [
      "Object-oriented architecture",
      "Jump-and-run mechanics with collectible items",
      "Collision and basic physics logic",
    ],
  },
  {
    title_de: "Join - Team Task Manager",
    title_en: "Join - Team Task Manager",
    description_de:
      "Task-Management mit Echtzeit-Synchronisation, Drag & Drop und Team-Features. Ermöglicht effiziente Projektverwaltung für Teams jeder Größe.",
    description_en:
      "Task management with real-time sync, drag & drop and team features. Enables efficient project management for teams of any size.",
    image: "/join.png",
    tech: ["JavaScript", "HTML", "CSS", "REST API", "Firebase", "Figma"],
    liveLink: "https://nuri-toker.developerakademie.net/Join/index.html",
    githubLink: "https://github.com/Toker-Nuri/Join",
    features_de: [
      "Drag & Drop Kanban-Board",
      "Team-Kollaboration mit Rechten",
      "REST-API-Integration",
    ],
    features_en: [
      "Drag & Drop Kanban board",
      "Team collaboration with permissions",
      "REST API integration",
    ],
  },
  {
    title_de: "Pokedex - Pokémon Lexikon",
    title_en: "Pokedex - Pokémon Encyclopedia",
    description_de:
      "Dynamischer Pokédex, der Pokémon-Daten direkt über die PokéAPI abruft. Nutzer können suchen, filtern und Details zu Typ, Fähigkeiten und Statuswerten einsehen.",
    description_en:
      "Dynamic Pokédex that fetches Pokémon data from the PokéAPI. Users can search, filter and view details such as types, abilities and stats.",
    image: "/pokedex.png",
    tech: ["JavaScript", "HTML", "CSS", "PokéAPI"],
    liveLink: "https://nuri-toker.developerakademie.net/Pokedex/index.html",
    githubLink: "https://github.com/Toker-Nuri/Pokedex",
    features_de: [
      "Integration mit der PokéAPI",
      "Dynamische Anzeige der Pokémon-Daten",
      "Suche und Filter für einfache Navigation",
    ],
    features_en: [
      "Integration with PokéAPI",
      "Dynamic rendering of Pokémon data",
      "Search and filters for easy navigation",
    ],
  },
  {
    title_de: "WeFixIt - KI Mechatroniker",
    title_en: "WeFixIt - AI Mechatronics",
    description_de:
      "Flutter-App mit Supabase-Backend für KFZ-Wartungen, Kosten und Dokumente, inklusive Uploads, Export, Benachrichtigungen, KI-Chatbot und Diagnose (OBD-Anbindung). Aktuell in der Testphase.",
    description_en:
      "Flutter app with Supabase backend for vehicle maintenance, expenses and documents, including uploads, export, notifications, AI chatbot and diagnostics (OBD integration). Currently in testing.",
    video: "/WeFixIt.mp4",
    hideLinks: true,
    tech: ["Flutter", "Dart", "Windsurf IDE", "Cursor IDE", "Supabase", "OpenAI API", "RevenueCat", "Perplexity AI"],
    features_de: [
      "RAG-Chatbot & Diagnose mit Vektor-Datenbank",
      "Automatischer Knowledge-Harvester per Cron",
      "Wartungsplanung mit smarten Erinnerungen",
    ],
    features_en: [
      "RAG chatbot & diagnostics with vector DB",
      "Automated knowledge harvester via cron",
      "Maintenance planning with smart reminders",
    ],
  },
  {
    title_de: "Vory - KI Geschichten",
    title_en: "Vory - AI Stories",
    description_de:
      "Vory ist eine per KI (Vibe Coding) entwickelte Flutter-App mit Supabase-Backend für Kinder und Erwachsene, die personalisierte Geschichten erstellt und automatisch als Audio verfügbar macht. App befindet sich aktuell in der Testphase.",
    description_en:
      "Vory is an AI-driven Flutter app with Supabase backend that generates personalized stories and automatically provides audio versions. App currently in testing.",
    video: "/vory.mp4",
    hideLinks: true,
    tech: ["Flutter", "Dart", "Windsurf IDE", "Cursor IDE", "Supabase", "OpenAI API", "Amazon Polly TTS"],
    features_de: [
      "Mehrsprachige Story- & TTS-Generierung",
      "Asynchrone KI-Pipelines (Text → Audio → Storage)",
      "Supabase Storage & DB für Story- und Audio-Versionierung",
    ],
    features_en: [
      "Multilingual story & TTS generation",
      "Asynchronous AI pipelines (Text → Audio → Storage)",
      "Supabase storage & DB for story and audio versioning",
    ],
  },
];

export function Projects() {
  const { language, t } = useLanguage();
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Code2 className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold">{t("projects.title")}</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("projects.desc")}</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => {
            const isDe = language === "de";
            return (
              <ProjectCard
                key={isDe ? project.title_de : project.title_en}
                project={{
                  title: isDe ? project.title_de : project.title_en,
                  description: isDe ? project.description_de : project.description_en,
                  features: isDe ? project.features_de : project.features_en,
                  image: project.image ?? project.video ?? "",
                  tech: project.tech,
                  liveLink: project.liveLink,
                  githubLink: project.githubLink,
                  video: project.video,
                  hideLinks: project.hideLinks,
                }}
                index={index}
              />
            );
          })}
        </div>

        {/* Center remaining projects using the same grid so widths match top */}
        {projects.length > 3 ? (
          <div className="mt-8 flex flex-wrap justify-center gap-8 items-stretch">
            {projects.slice(3).map((project, idx) => {
              const isDe = language === "de";
              return (
                <div key={isDe ? project.title_de : project.title_en} className="w-full sm:w-[48%] md:w-[48%] lg:w-[420px] xl:w-[420px]">
                <ProjectCard
                  project={{
                    title: isDe ? project.title_de : project.title_en,
                    description: isDe ? project.description_de : project.description_en,
                    features: isDe ? project.features_de : project.features_en,
                    image: project.image ?? project.video ?? "",
                    tech: project.tech,
                    liveLink: project.liveLink,
                    githubLink: project.githubLink,
                    video: project.video,
                    hideLinks: project.hideLinks,
                  }}
                  index={3 + idx}
                />
              </div>
              );
            })}
          </div>
        ) : null}

        {/* Add Your Projects Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary rounded-lg">
            <Github className="h-5 w-5" />
            <p className="text-sm text-muted-foreground">
              {t("projects.github_note_prefix")} {" "}
              <a
                href="https://github.com/Toker-Nuri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {t("projects.github")}
              </a>
              {t("projects.github_note_suffix")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
