import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Nuri Toker",
  description: "Rechtliche Angaben und Kontaktinformationen",
};

export default function ImpressumPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Impressum</h1>
        <div className="space-y-8 text-muted-foreground">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
            <p>Nuri Toker</p>
            <p>E-Mail: n.toker@yahoo.com</p>
            <p>Telefon: +49 174 3389049</p>
            <p>Postanschrift: Mechenseerstr. 12, 88316 Isny im Allgäu,</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Verantwortlich für den Inhalt</h2>
            <p>Gemäß § 55 Abs. 2 RStV: Nuri Toker</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Haftung für Links</h2>
            <p>
              Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung bedarf der
              schriftlichen Zustimmung des jeweiligen Autors.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            <p>
              Plattform der EU-Kommission zur Online-Streitbeilegung: <a className="text-primary hover:underline" href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
