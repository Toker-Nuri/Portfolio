# 🎨 Personalisierungs-Guide

Schnellanleitung zum Anpassen deines Portfolios.

## 🔥 Must-Change (Vor dem Deployment!)

### 1. Kontaktinformationen

**Datei:** `components/sections/contact.tsx`

```typescript
// Zeile 8-29: Ändere alle Links
const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:deine-email@example.com", // ← ÄNDERN
    color: "hover:text-red-500",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/dein-username", // ← ÄNDERN
    color: "hover:text-purple-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/dein-profil", // ← ÄNDERN
    color: "hover:text-blue-500",
  },
  // ...
];
```

**Auch ändern:**
- Zeile 86: Email-Anzeige
- Zeile 109: Button-Email-Link

### 2. Hero/Startseite

**Datei:** `components/sections/hero.tsx`

```typescript
// Zeile 29-35: Begrüßung & Titel
<h2>Hallo, ich bin</h2>
<h1>Frontend Developer</h1> // ← Dein Titel

// Zeile 43-46: Beschreibung
<p>
  Ich entwickle moderne, performante Web-Anwendungen... // ← Dein Text
</p>

// Zeile 7-16: Tech Stack
const techStack = [
  "TypeScript",  // ← Deine Technologies
  "React",
  // ...
];
```

### 3. Projekte (Wichtigster Teil!)

**Datei:** `components/sections/projects.tsx`

```typescript
// Zeile 8: Ersetze ALLE Beispiel-Projekte
const projects = [
  {
    title: "Dein Projekt Name",
    description: "Detaillierte Beschreibung deines Projekts...",
    image: "/projects/screenshot.png", // Dein Screenshot!
    tech: ["React", "Node.js"], // Deine Tech
    liveLink: "https://dein-projekt.com",
    githubLink: "https://github.com/username/projekt",
    features: [
      "Key Feature 1",
      "Key Feature 2",
      "Key Feature 3",
    ],
  },
  // Weitere Projekte (3-5 empfohlen)
];
```

**Screenshots hinzufügen:**
1. Erstelle Ordner: `public/projects/`
2. Füge Bilder hinzu: `screenshot1.png`, `screenshot2.png`, etc.
3. Nutze in code: `image: "/projects/screenshot1.png"`

## 📝 Optional aber empfohlen

### 4. Skills anpassen

**Datei:** `components/sections/skills.tsx`

```typescript
// Zeile 6-54: Passe Level an (0-100)
{
  icon: Code,
  title: "Frontend",
  skills: [
    { name: "React / Next.js", level: 90 }, // ← Dein Level
    { name: "TypeScript", level: 85 },
    // ...
  ],
}
```

### 5. Über mich

**Datei:** `components/sections/about.tsx`

```typescript
// Zeile 6-28: Highlights anpassen
const highlights = [
  {
    icon: User,
    title: "Wer ich bin",
    description: "Deine Beschreibung...", // ← ÄNDERN
  },
  // ...
];

// Zeile 47-49: Haupt-Beschreibung
<p>
  Als Frontend Developer verbinde ich... // ← Dein Text
</p>
```

### 6. Navigation/Logo

**Datei:** `components/navigation.tsx`

```typescript
// Zeile 31-33: Logo/Name
<a href="#home" className="text-xl font-bold">
  Dein Name // ← Statt "Portfolio"
</a>
```

### 7. Metadata (SEO)

**Datei:** `app/layout.tsx`

```typescript
// Zeile 10-12
export const metadata: Metadata = {
  title: "Dein Name - Frontend Developer",
  description: "Portfolio von [Dein Name]...",
};
```

## 🎨 Design anpassen

### Farben

**Datei:** `app/globals.css`

```css
/* Zeile 5-14: Light Mode */
:root {
  --primary: 240 5.9% 10%;        /* Hauptfarbe */
  --secondary: 240 4.8% 95.9%;    /* Hintergrund Cards */
  /* ... */
}

/* Zeile 16-24: Dark Mode */
.dark {
  --primary: 0 0% 98%;
  /* ... */
}
```

**Schnelle Farb-Variationen:**
- Blau-Theme: `--primary: 217 91% 60%;`
- Grün-Theme: `--primary: 142 71% 45%;`
- Lila-Theme: `--primary: 262 83% 58%;`

### Schriftart

**Datei:** `app/layout.tsx`

```typescript
// Zeile 2: Andere Google Font
import { Inter } from "next/font/google";
// Beispiele: Poppins, Montserrat, Roboto

const inter = Inter({ subsets: ["latin"] });
```

## 📸 Bilder & Assets

### Projekt-Screenshots
```
public/
  └── projects/
      ├── projekt1.png
      ├── projekt2.png
      └── projekt3.png
```

### Profilbild (optional)
```typescript
// In components/sections/hero.tsx einfügen:
import Image from "next/image";

// Vor dem Text:
<div className="mb-8">
  <Image
    src="/profile.jpg"
    alt="Profilbild"
    width={150}
    height={150}
    className="rounded-full mx-auto"
  />
</div>
```

## ⚡ Quick Tips

### Professionelle Screenshots erstellen
1. **Full-Screen:** Nutze Browser im Vollbild
2. **Auflösung:** Min. 1920x1080px
3. **Format:** WebP oder PNG
4. **Größe:** Unter 500KB
5. **Tools:** Firefox Screenshot oder ShareX

### GitHub Links optimieren
- ✅ Sauberes README mit Setup-Anleitung
- ✅ .gitignore für node_modules etc.
- ✅ Lizenz-Datei hinzufügen
- ✅ Demo-GIF im README
- ✅ Aussagekräftige Commit-Messages

### Content-Qualität
- **Value Proposition:** Was kannst du, was macht dich einzigartig?
- **Projekte:** Problem → Lösung → Technologie → Ergebnis
- **Skills:** Nur was du wirklich kannst (keine falschen Versprechen)
- **Über mich:** Authentisch aber professionell

## 🚫 Häufige Fehler vermeiden

❌ **Nicht:**
- Beispiel-Emails/Links im deployed Portfolio
- Zu viele Projekte (max. 5)
- Skills ohne echte Erfahrung
- Broken Links zu Projekten
- Ungetestete mobile Ansicht

✅ **Stattdessen:**
- Alle persönlichen Daten eintragen
- 3-5 beste Projekte mit Live-Demos
- Ehrliche Skill-Angaben
- Alle Links testen
- Mobile-First entwickeln

## 📋 Pre-Deployment Checkliste

```
[ ] Alle Kontaktdaten geändert
[ ] Eigene Projekte eingefügt
[ ] Screenshots hochgeladen
[ ] Skills angepasst
[ ] Über-mich-Text personalisiert
[ ] Navigation/Logo geändert
[ ] Alle Links getestet
[ ] Mobile-Ansicht geprüft
[ ] Dark/Light Mode getestet
[ ] Rechtschreibung geprüft
[ ] GitHub Repos aufgeräumt
```

## 🎯 Nächste Schritte

1. Arbeite diese Liste von oben nach unten ab
2. Teste alles lokal: `npm run dev`
3. Baue Production: `npm run build`
4. Deploye auf Vercel/Netlify
5. Teile deinen Portfolio-Link! 🚀

---

**Bei Fragen:** Schaue ins README.md oder ANLEITUNG.md
