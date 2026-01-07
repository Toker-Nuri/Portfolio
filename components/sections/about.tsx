"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Target, Heart } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: User,
      title: t("about.h1.title"),
      description: t("about.h1.description"),
    },
    {
      icon: Briefcase,
      title: t("about.h2.title"),
      description: t("about.h2.description"),
    },
    {
      icon: Target,
      title: t("about.h3.title"),
      description: t("about.h3.description"),
    },
    {
      icon: Heart,
      title: t("about.h4.title"),
      description: t("about.h4.description"),
    },
  ];
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("about.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("about.intro")}
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
          <h3 className="text-xl font-bold mb-4">{t("about.approachTitle")}</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>{t("about.approach.p1")}</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{t("about.approach.bullet.code")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{t("about.approach.bullet.performance")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{t("about.approach.bullet.accessibility")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{t("about.approach.bullet.teamwork")}</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
