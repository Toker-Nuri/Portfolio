import type { Metadata } from "next";
import DatenschutzContent from "@/components/datenschutz-content";

export const metadata: Metadata = {
  title: "Datenschutz | Nuri Toker",
  description: "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten",
};

export default function DatenschutzPage() {
  return <DatenschutzContent />;
}
