"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "El Pollo Loco",
    description:
      "Ein OOP-basiertes Jump-and-Run-Spiel, in dem Pepe Münzen und Tabasco-Salsa sammelt, um sich dem verrückten Huhn im Endkampf zu stellen.",
    image: "/elpollolocco.png",
    tech: ["JavaScript", "HTML", "CSS",],
    liveLink: "https://nuri-toker.developerakademie.net/El%20Pollo%20Loco/index.html",
    githubLink: "https://github.com/Toker-Nuri/El-Pollo-Loco",
    features: [
      "Objektorientierte Architektur",
      "Jump-and-Run-Mechanik mit Sammelobjekten",
      "Kollisions- und Physik-Logik",
    ],
  },
  {
    title: "Join - Team Task Manager",
    description:
      "Task-Management mit Echtzeit-Synchronisation, Drag & Drop und Team-Features. Ermöglicht effiziente Projektverwaltung für Teams jeder Größe.",
    image: "/join.png",
    tech: ["JavaScript", "HTML", "CSS", "Rest API", "Firebase", "Figma"],
    liveLink: "https://nuri-toker.developerakademie.net/Join/index.html",
    githubLink: "https://github.com/Toker-Nuri/Join",
    features: [
      "Drag & Drop Kanban-Board",
      "Team-Kollaboration mit Permissions",
      "REST-API für nahtlose Integration",
    ],
  },
  {
    title: "Pokedex - Pokémon Lexikon",
    description:
      "Dynamischer Pokédex, der Pokémon-Daten direkt über die PokéAPI abruft. Nutzer können suchen, filtern und Details zu Typ, Fähigkeiten und Statuswerten einsehen.",
    image: "/pokedex.png",
    tech: ["JavaScript", "HTML", "CSS", "PokéAPI"],
    liveLink: "https://nuri-toker.developerakademie.net/Pokedex/index.html",
    githubLink: "https://github.com/Toker-Nuri/Pokedex",
    features: [
      "Integration mit PokéAPI",
      "Dynamische Anzeige der Pokémon-Daten",
      "Suche und Filter für einfache Navigation",
    ],
  },
];

export function Projects() {
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
            <h2 className="text-3xl sm:text-4xl font-bold">Meine Projekte</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Eine Auswahl meiner besten Arbeiten. Jedes Projekt zeigt meine
            Fähigkeiten in verschiedenen Bereichen der Webentwicklung.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

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
              Alle Projekte sind auf{" "}
              <a
                href="https://github.com/Toker-Nuri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>{" "}
              verfügbar
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
