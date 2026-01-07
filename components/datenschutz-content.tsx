"use client";

import { useLanguage } from "@/components/language-provider";

export default function DatenschutzContent() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">{t("datenschutz.title")}</h1>
        <div className="space-y-8 text-muted-foreground">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">{t("datenschutz.verantwortlicher")}</h2>
            <p>{t("datenschutz.verantwortlicher.name")}</p>
            <p>{t("datenschutz.verantwortlicher.email")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">{t("datenschutz.zwecke.title")}</h2>
            <p>{t("datenschutz.zwecke.text")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">{t("datenschutz.serverlogs.title")}</h2>
            <p>{t("datenschutz.serverlogs.text")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">{t("datenschutz.cookies.title")}</h2>
            <p>{t("datenschutz.cookies.text")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">{t("datenschutz.kontakt.title")}</h2>
            <p>{t("datenschutz.kontakt.text")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">{t("datenschutz.links.title")}</h2>
            <p>{t("datenschutz.links.text")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">{t("datenschutz.rechte.title")}</h2>
            <p>{t("datenschutz.rechte.text")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">{t("datenschutz.weitergabe.title")}</h2>
            <p>{t("datenschutz.weitergabe.text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
