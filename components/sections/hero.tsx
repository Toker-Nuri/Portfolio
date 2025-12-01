"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="h-120 w-120 sm:h-84 sm:w-84 rounded-bl-2xl rounded-br-2xl overflow-hidden">
              <Image
                src="/profile.png"
                alt="Portrait"
                width={160}
                height={160}
                className="h-full w-full object-contain rounded-bl-2xl rounded-br-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Animated Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg sm:text-xl text-muted-foreground mb-2">
              Hallo, ich bin
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Frontend Developer
            </h1>
          </motion.div>

          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Ich entwickle moderne, performante Web-Anwendungen mit Fokus auf
            clean Code, best practices und herausragende User Experience.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {/* Firebase-Icon (vergrößert) */}
           <div className="h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-500 hover:[transform:rotate(360deg)]">
              <Image
                src="/angular-icon.png"
                alt="Icon"
                width={88}
                height={100}
                className="h-[100px] w-[88px] object-contain mx-auto"
              />
            </div>
           <div className="h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-500 hover:[transform:rotate(360deg)]">
              <Image
                src="/js-icon.png"
                alt="Icon"
                width={88}
                height={100}
                className="h-[100px] w-[88px] object-contain mx-auto"
              />
            </div>
           <div className="h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-500 hover:[transform:rotate(360deg)]">
              <Image
                src="/ts-icon.png"
                alt="Icon"
                width={88}
                height={100}
                className="h-[100px] w-[88px] object-contain mx-auto"
              />
            </div>
           <div className="h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-500 hover:[transform:rotate(360deg)]">
              <Image
                src="/html-icon.png"
                alt="Icon"
                width={88}
                height={100}
                className="h-[100px] w-[88px] object-contain mx-auto"
              />
            </div>
           <div className="h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-500 hover:[transform:rotate(360deg)]">
              <Image
                src="/css-icon.png"
                alt="Icon"
                width={88}
                height={100}
                className="h-[100px] w-[88px] object-contain mx-auto"
              />
            </div>
           <div className="h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-500 hover:[transform:rotate(360deg)]">
              <Image
                src="/git-icon.png"
                alt="Icon"
                width={88}
                height={100}
                className="h-[100px] w-[88px] object-contain mx-auto"
              />
            </div>
           <div className="h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-500 hover:[transform:rotate(360deg)]">
              <Image
                src="/firebase-icon.png"
                alt="Icon"
                width={88}
                height={100}
                className="h-[100px] w-[88px] object-contain mx-auto"
              />
            </div>
           <div className="h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-500 hover:[transform:rotate(360deg)]">
              <Image
                src="/rest-api-icon.png"
                alt="Icon"
                width={88}
                height={100}
                className="h-[100px] w-[88px] object-contain mx-auto"
              />
            </div>
           <div className="h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-500 hover:[transform:rotate(360deg)]">
              <Image
                src="/scrum-icon.png"
                alt="Icon"
                width={88}
                height={100}
                className="h-[100px] w-[88px] object-contain mx-auto"
              />
            </div>
           <div className="h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-500 hover:[transform:rotate(360deg)]">
              <Image
                src="/worldpress-icon.png"
                alt="Icon"
                width={88}
                height={100}
                className="h-[100px] w-[88px] object-contain mx-auto"
              />
            </div>
           <div className="h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-500 hover:[transform:rotate(360deg)]">
              <Image
                src="/material-icon.png"
                alt="Icon"
                width={88}
                height={100}
                className="h-[100px] w-[88px] object-contain mx-auto"
              />
            </div>
           <div className="h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-500 hover:[transform:rotate(360deg)]">
              <Image
                src="/woo-commerce-icon.png"
                alt="Icon"
                width={88}
                height={100}
                className="h-[100px] w-[88px] object-contain mx-auto"
              />
            </div>
           <div className="h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-500 hover:[transform:rotate(360deg)]">
              <Image
                src="/challenge-icon.png"
                alt="Icon"
                width={88}
                height={100}
                className="h-[100px] w-[88px] object-contain mx-auto"
              />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Projekte ansehen
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="pt-16"
          >
            <a
              href="#projects"
              className="inline-flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm mb-2">Scroll</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="h-5 w-5" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
