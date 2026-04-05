import { useState } from "react";
import { useTranslation } from "react-i18next";

import type { FaqItem } from "../types";

const FAQ_IDS = [
  "whatIndustries",
  "customSolutions",
  "implementationTime",
  "whatSupport",
] as const;

type UseFaqSectionReturn = {
  items: FaqItem[];
  expandedId: string | null;
  onToggle: (id: string) => void;
};

export const useFaqSection = (): UseFaqSectionReturn => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const items: FaqItem[] = FAQ_IDS.map((id) => ({
    id,
    question: t(`faqSection.items.${id}.question`),
    answer: t(`faqSection.items.${id}.answer`),
  }));

  const onToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return { items, expandedId, onToggle };
};
