import type { Metadata } from "next";
import ImpressumContent from "@/components/impressum-content";

export const metadata: Metadata = {
  title: "Impressum | Nuri Toker",
  description: "Rechtliche Angaben und Kontaktinformationen",
};

export default function ImpressumPage() {
  return <ImpressumContent />;
}
