"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveLink: string;
  githubLink: string;
  features: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        {/* Title & Links */}
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <div className="flex gap-2">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground">{project.description}</p>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {project.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
