# 🚀 Schnellstart-Anleitung

## ⚠️ Wichtiger erster Schritt

**Alle Lint-Fehler, die du siehst, sind normal!** Sie verschwinden automatisch nach der Installation der Dependencies.

## 📦 Installation & Start

### 1. Dependencies installieren

Öffne ein Terminal im Portfolio-Ordner und führe aus:

```bash
npm install
```

Dies installiert alle benötigten Pakete:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- next-themes

### 2. Development Server starten

Nach erfolgreicher Installation:

```bash
npm run dev
```

Das Portfolio ist jetzt verfügbar unter: **http://localhost:3000**

## ✏️ Personalisierung

### Sofort ändern:

#### 1. **Kontaktdaten** (`components/sections/contact.tsx`)
Ersetze alle Vorkommen von:
- `deine-email@example.com` → Deine echte Email
- `dein-username` → Dein GitHub/LinkedIn/Twitter Username
- URLs der Social Links

#### 2. **Hero-Text** (`components/sections/hero.tsx`)
- Zeile 32-34: Ändere den Titel
- Zeile 43-46: Ändere die Beschreibung
- Zeile 7-16: Passe den Tech-Stack an

#### 3. **Projekte** (`components/sections/projects.tsx`)
Ersetze die Beispiel-Projekte (Zeile 8-50) mit deinen eigenen:
- Titel, Beschreibung
- Screenshot-URLs (verwende deine eigenen!)
- GitHub und Live-Demo Links
- Technologien und Features

#### 4. **Skills** (`components/sections/skills.tsx`)
Aktualisiere deine Skill-Level (Zeile 6-54)

#### 5. **Über mich** (`components/sections/about.tsx`)
Passe die Texte an deine Person an (Zeile 6-28 und 47-49)

### Screenshots hinzufügen:

1. Erstelle einen Ordner: `public/projects/`
2. Füge deine Screenshots hinzu
3. Referenziere sie in `projects.tsx`:
   ```typescript
   image: "/projects/mein-projekt.png"
   ```

## 🎨 Design anpassen

### Farben ändern (`app/globals.css`):

```css
:root {
  --primary: 240 5.9% 10%;     /* Hauptfarbe */
  --secondary: 240 4.8% 95.9%;  /* Sekundärfarbe */
  /* Weitere Farben... */
}
```

### Logo/Name ändern (`components/navigation.tsx`, Zeile 31):
```tsx
<a href="#home" className="text-xl font-bold">
  Dein Name  {/* Ändere "Portfolio" */}
</a>
```

## 📱 Testen

1. **Desktop:** http://localhost:3000
2. **Mobile:** Öffne Browser DevTools (F12) → Toggle Device Toolbar
3. **Dark Mode:** Klicke auf den Theme-Toggle in der Navigation

## 🚀 Deployment

### Option 1: Vercel (Empfohlen - Kostenlos)

1. Pushe das Projekt zu GitHub
2. Gehe zu [vercel.com](https://vercel.com)
3. "New Project" → Importiere dein Repository
4. Fertig! 🎉

### Option 2: Netlify

1. Build Command: `npm run build`
2. Publish Directory: `.next`

## ✅ Checkliste vor dem Deployment

- [ ] Alle Beispiel-Emails/Links ersetzt
- [ ] Eigene Projekte eingefügt
- [ ] Screenshots hinzugefügt
- [ ] Skills aktualisiert
- [ ] Über-mich-Text personalisiert
- [ ] Kontaktdaten geprüft
- [ ] Mobile-Ansicht getestet
- [ ] Dark/Light Mode getestet

## 🐛 Probleme?

### "Module not found" Fehler?
```bash
# Lösche node_modules und installiere neu
rm -rf node_modules
npm install
```

### Port 3000 bereits belegt?
```bash
# Starte auf anderem Port
npm run dev -- -p 3001
```

### Build-Fehler?
```bash
# Prüfe TypeScript-Fehler
npm run build
```

## 📚 Nützliche Befehle

```bash
npm run dev      # Development Server
npm run build    # Production Build
npm run start    # Production Server
npm run lint     # Linting
```

## 💡 Tipps

1. **Bilder optimieren:** Nutze WebP-Format für Screenshots
2. **GitHub Repos:** Räume Code auf bevor du verlinkst
3. **Live-Demos:** Deploye Projekte, zeige sie nicht nur im Code
4. **README:** Jedes Projekt auf GitHub sollte gutes README haben
5. **Commits:** Saubere Commit-Messages zeigen Professionalität

## 🎯 Nächste Schritte

1. Dependencies installieren: `npm install`
2. Server starten: `npm run dev`
3. Portfolio im Browser öffnen
4. Personalisieren (siehe oben)
5. Deployen auf Vercel/Netlify
6. In Bewerbungen nutzen! 🚀

---

**Viel Erfolg! 🎉**
