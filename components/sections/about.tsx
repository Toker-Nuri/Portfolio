"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Target, Heart } from "lucide-react";

const highlights = [
  {
    icon: User,
    title: "Wer ich bin",
    description:
      "Leidenschaftlicher Frontend-Developer mit starkem Fokus auf User Experience und moderne Web-Technologien.",
  },
  {
    icon: Briefcase,
    title: "Meine Spezialisierung",
    description:
      "Entwicklung von performanten Web-Applications mit JavaScript, Angular und modernen CSS-Frameworks.",
  },
  {
    icon: Target,
    title: "Wie ich arbeite",
    description:
      "Agil, testgetrieben und mit klarem Fokus auf Clean Code, Best Practices und Zusammenarbeit im Team.",
  },
  {
    icon: Heart,
    title: "Was ich suche",
    description:
      "Eine Position als Junior Frontend Developer, wo ich lernen und wachsen kann.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Über mich</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Als Frontend Developer verbinde ich kreatives Design mit technischer Präzision.
            Mein Ziel ist es, digitale Erlebnisse zu schaffen, die nicht nur gut aussehen,
            sondern auch performant und zugänglich sind.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-background rounded-xl p-8 border border-border"
        >
          <h3 className="text-xl font-bold mb-4">Mein Ansatz</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Ich glaube daran, dass großartige Software das Ergebnis von klarer Kommunikation,
              kontinuierlichem Lernen und Liebe zum Detail ist. Dabei lege ich besonderen Wert
              auf:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>
                  <strong>Code-Qualität:</strong> Sauberer, wartbarer und gut dokumentierter Code
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>
                  <strong>Performance:</strong> Optimierung für schnelle Ladezeiten und flüssige Interaktionen
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>
                  <strong>Zugänglichkeit:</strong> Websites, die für alle Nutzer zugänglich sind
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>
                  <strong>Teamwork:</strong> Effektive Zusammenarbeit durch klare Kommunikation
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
