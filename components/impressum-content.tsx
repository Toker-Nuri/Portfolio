"use client";

import { useLanguage } from "@/components/language-provider";

export default function ImpressumContent() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">{t("impressum.title")}</h1>
        <div className="space-y-8 text-muted-foreground">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">{t("impressum.angaben")}</h2>
            <p>{t("impressum.name")}</p>
            <p>{t("impressum.email")}</p>
            <p>{t("impressum.phone")}</p>
            <p>{t("impressum.address")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">{t("impressum.verantwortlich")}</h2>
            <p>{t("impressum.verantwortlich.name")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Haftung für Inhalte</h2>
            <p>{t("impressum.haftung.inhalte")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Haftung für Links</h2>
            <p>{t("impressum.haftung.links")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Urheberrecht</h2>
            <p>{t("impressum.urheberrecht")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Verbraucherstreitbeilegung</h2>
            <p>{t("impressum.verbraucherstreit")}</p>
            <p>
              <a className="text-primary hover:underline" href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">{t("impressum.odr")}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
