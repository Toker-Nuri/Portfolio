"use client";

import { motion } from "framer-motion";
import { Code, Bot, Cloud, Wrench } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: [
      { name: "HTML / CSS", level: 95 },
      { name: "JavaScript", level: 80 },
      { name: "Angular", level: 70 },
      { name: "TypeScript", level: 60 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Supabase", level: 95 },
      { name: "AWS Basics", level: 60 },
      { name: "Firebase", level: 90 },

    ],
  },
  {
    icon: Wrench,
    title: "Tools & Methods",
    skills: [
      { name: "Figma", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Scrum", level: 70 },
      { name: "Bootstrap", level: 80 },
      { name: "Clean Code", level: 85 },
    ],
  },
  {
    icon: Bot,
    title: "AI Engineering",
    skills: [
      { name: "LLM API Integration (OpenAI GPT-4 / Claude Sonnet)", level: 95 },
      { name: "Prompt Engineering & SSML", level: 90 },
      { name: "Text-to-Speech (Amazon Polly / Elevenlabs)", level: 95 },
      { name: "Serverless AI Backends (Supabase Edge Functions)", level: 90 },
      { name: "AI-powered Mobile Apps (Android & Flutter)", level: 95 },

    ],
  }
];

export function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("skills.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("skills.desc")}</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.slice(0, 2).map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-muted/30 rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        {/* Skill Name */}
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary to-primary/60"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.slice(2).map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-muted/30 rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.2 + skillIndex * 0.05 + idx * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        {/* Skill Name */}
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: 0.2 + skillIndex * 0.05 + idx * 0.05,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary to-primary/60"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
