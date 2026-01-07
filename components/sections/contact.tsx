"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function Contact() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Mail,
      label: t("contact.social.email"),
      href: "mailto:n.toker@yahoo.com",
      color: "hover:text-red-500",
      handle: "n.toker@yahoo.com",
    },
    {
      icon: Github,
      label: t("contact.social.github"),
      href: "https://github.com/Toker-Nuri",
      color: "hover:text-purple-500",
      handle: "Toker-Nuri",
    },
    {
      icon: Linkedin,
      label: t("contact.social.linkedin"),
      href: "https://www.linkedin.com/in/nuri-toker-649aa334b/",
      color: "hover:text-blue-500",
      handle: "nuri-toker-649aa334b",
    },
    {
      icon: Phone,
      label: t("contact.social.phone"),
      href: "tel:+491743389049",
      color: "hover:text-sky-500",
      handle: "+49 174 3389049",
    },
  ];
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.desc")}</p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-border"
        >
          {/* Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-4 p-4 bg-background rounded-xl border border-border transition-all duration-300 hover:scale-105 hover:border-primary/50 ${link.color}`}
                >
                  <div className="p-3 bg-muted rounded-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">{link.label}</p>
                    <p className="text-sm text-muted-foreground">{link.handle}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center pt-8 border-t border-border"
          >
            <p className="text-muted-foreground mb-4">{t("contact.prefer_direct")}</p>
            <a
              href="mailto:n.toker@yahoo.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="h-5 w-5" />
              {t("contact.cta.email")}
            </a>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-lg text-muted-foreground"
        >
          <p>
            © 2025 Nuri Toker</p>
            <a href="/impressum" className="ml-2 hover:underline text-foreground">{t("nav.impressum")}</a>
            <span className="mx-2"> </span>
            <a href="/datenschutz" className="hover:underline text-foreground">{t("nav.datenschutz")}</a>
         
        </motion.div>
      </div>
    </section>
  );
}
