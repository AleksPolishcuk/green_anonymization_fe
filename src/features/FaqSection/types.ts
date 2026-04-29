export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type UseFaqSectionReturn = {
  items: FaqItem[];
  expandedId: string | null;
  onToggle: (id: string) => void;
};
