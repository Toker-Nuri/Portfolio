import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Nuri Toker",
  description: "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten",
};

export default function DatenschutzPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Datenschutzerklärung</h1>
        <div className="space-y-8 text-muted-foreground">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Verantwortlicher</h2>
            <p>Nuri Toker</p>
            <p>E-Mail: n.toker@yahoo.com</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Zwecke der Datenverarbeitung</h2>
            <p>
              Diese Website dient der Darstellung eines Portfolios. Es werden keine Profile erstellt,
              keine Tracking-Dienste von Drittanbietern eingesetzt und keine personenbezogenen Daten
              ohne Ihre Mitwirkung verarbeitet.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Server-Logfiles</h2>
            <p>
              Beim Aufruf der Seiten werden technisch notwendige Informationen durch den Browser
              automatisch übermittelt (z. B. IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp).
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur
              Gewährleistung des technischen Betriebs.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Cookies und lokale Speicherung</h2>
            <p>
              Es werden keine nicht notwendigen Cookies gesetzt. Die Theme-Einstellung (Hell/Dunkel)
              kann lokal im Browser gespeichert werden (localStorage). Dabei werden keine
              personenbezogenen Daten übertragen.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Kontakt</h2>
            <p>
              Wenn Sie per E-Mail Kontakt aufnehmen, verarbeiten wir Ihre Angaben zur Bearbeitung
              der Anfrage gemäß Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden gelöscht, sobald der
              Zweck entfällt und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Externe Links</h2>
            <p>
              Diese Website enthält Links zu externen Anbietern (z. B. GitHub, LinkedIn). Beim
              Anklicken werden Sie auf die Seiten der Drittanbieter weitergeleitet. Für deren
              Datenschutz ist der jeweilige Anbieter verantwortlich.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung sowie Widerspruch gegen die Verarbeitung und Datenübertragbarkeit.
              Wenden Sie sich hierzu an die oben angegebene E-Mail-Adresse.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Weitergabe an Dritte</h2>
            <p>
              Eine Weitergabe personenbezogener Daten an Dritte erfolgt nicht, sofern nicht eine
              gesetzliche Verpflichtung besteht.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
