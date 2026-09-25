export type PriceItem = {
  id: string;
  name: string;
  scope: "komputer" | "laptop" | "telefon";
  detail: string;
  /** Uzupełnij kwotę dopiero po potwierdzeniu. Puste pole zostawia „Wycena po diagnozie”. */
  amount: string;
};

export function priceLabel(amount: string) {
  const value = amount.trim();
  return value.length > 0 ? value : "Wycena po diagnozie";
}
