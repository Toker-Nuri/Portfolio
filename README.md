# Frontend Developer Portfolio

Ein modernes, responsives Portfolio für Frontend-Entwickler, gebaut mit Next.js 14, TypeScript, Tailwind CSS und Framer Motion.

## ✨ Features

- 🎨 **Modernes Design** - Clean, minimalistisch und professionell
- 🌓 **Dark/Light Mode** - Automatischer Theme-Wechsel
- 📱 **Fully Responsive** - Perfekte Darstellung auf allen Geräten
- ⚡ **Performance** - Optimiert mit Next.js 14 App Router
- 🎭 **Animationen** - Flüssige Animationen mit Framer Motion
- 🎯 **SEO-optimiert** - Meta-Tags und strukturierte Daten
- 💼 **Projektpräsentation** - Showcase deiner besten Arbeiten
- 🛠️ **Skills-Übersicht** - Gruppierte, visuelle Darstellung deiner Fähigkeiten

## 🚀 Schnellstart

### Voraussetzungen

- Node.js 18+ 
- npm oder yarn

### Installation

1. **Projekt-Dependencies installieren:**
```bash
npm install
```

2. **Development Server starten:**
```bash
npm run dev
```

3. **Im Browser öffnen:**
Öffne [http://localhost:3000](http://localhost:3000)

## 📝 Anpassung

### Persönliche Daten ändern

#### 1. Hero Section (`components/sections/hero.tsx`)
- Ändere den Titel und die Value Proposition
- Passe den Tech-Stack an deine Skills an

#### 2. Projekte (`components/sections/projects.tsx`)
Ersetze die Beispielprojekte mit deinen eigenen:

```typescript
const projects = [
  {
    title: "Dein Projekt",
    description: "Projektbeschreibung...",
    image: "URL zu deinem Screenshot",
    tech: ["React", "Node.js", "..."],
    liveLink: "https://dein-projekt.com",
    githubLink: "https://github.com/username/projekt",
    features: [
      "Feature 1",
      "Feature 2",
      // ...
    ],
  },
  // Weitere Projekte...
];
```

#### 3. Skills (`components/sections/skills.tsx`)
Aktualisiere deine Fähigkeiten und deren Level:

```typescript
skills: [
  { name: "React / Next.js", level: 90 },
  // Weitere Skills...
]
```

#### 4. Über mich (`components/sections/about.tsx`)
- Passe die Highlights an
- Ändere den Text im "Mein Ansatz" Bereich

#### 5. Kontakt (`components/sections/contact.tsx`)
Aktualisiere deine Social-Media-Links:

```typescript
const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:deine-email@example.com",
    // ...
  },
  // ...
];
```

### Farben & Theme anpassen

Bearbeite die Farben in `app/globals.css`:

```css
:root {
  --primary: 240 5.9% 10%;
  --secondary: 240 4.8% 95.9%;
  /* ... */
}
```

### Bilder & Assets

1. Erstelle einen `/public` Ordner
2. Füge deine Bilder hinzu
3. Referenziere sie in den Komponenten

## 🏗️ Projektstruktur

```
portfolio/
├── app/
│   ├── globals.css          # Globale Styles & Theme
│   ├── layout.tsx           # Root Layout
│   └── page.tsx             # Homepage
├── components/
│   ├── sections/
│   │   ├── hero.tsx         # Hero Section
│   │   ├── projects.tsx     # Projekte Section
│   │   ├── skills.tsx       # Skills Section
│   │   ├── about.tsx        # Über mich Section
│   │   └── contact.tsx      # Kontakt Section
│   ├── navigation.tsx       # Navigation Bar
│   ├── project-card.tsx     # Projekt Karte
│   └── theme-provider.tsx   # Theme Provider
├── public/                  # Statische Assets
└── package.json
```

## 🚀 Deployment

### Vercel (Empfohlen)

1. Push dein Projekt zu GitHub
2. Gehe zu [vercel.com](https://vercel.com)
3. Importiere dein Repository
4. Deploy! 🎉

### Netlify

1. Build Command: `npm run build`
2. Publish Directory: `.next`
3. Deploy! 🎉

### Andere Plattformen

```bash
# Build erstellen
npm run build

# Production Server starten
npm start
```

## 📦 Technologie-Stack

- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Animationen:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)
- **Theme:** next-themes

## 🎯 Best Practices

### Für Bewerbungen

1. ✅ **Maximal 3-5 Projekte** - Qualität über Quantität
2. ✅ **Live-Demos** - Deploye deine Projekte
3. ✅ **GitHub-Links** - Sauberer, dokumentierter Code
4. ✅ **Projektbeschreibungen** - Erkläre deine Entscheidungen
5. ✅ **Kontaktmöglichkeiten** - Mach es Recruitern leicht
6. ✅ **Professionelles Foto** - Optional, aber empfohlen
7. ✅ **Mobile-optimiert** - Viele schauen am Handy

### Content-Tipps

- **Value Proposition:** Kurz und präzise - was kannst du?
- **Projekte:** Zeige den Mehrwert, nicht nur Features
- **Skills:** Nur aufführen, was du wirklich kannst
- **Über mich:** Authentisch, aber professionell
- **Code-Qualität:** GitHub-Repos aufräumen vor dem Verlinken

## 📚 Weitere Ressourcen

- [Next.js Dokumentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Deployment](https://vercel.com/docs)

## 🤝 Support

Bei Fragen oder Problemen:
- Überprüfe die [Next.js Docs](https://nextjs.org/docs)
- Suche auf [Stack Overflow](https://stackoverflow.com)
- Öffne ein Issue auf GitHub

## 📄 Lizenz

Frei verwendbar für persönliche Portfolio-Websites.

---

**Viel Erfolg bei deiner Bewerbung! 🚀**
