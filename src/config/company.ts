export const company = {
  name: "Serwis Komputerowy i GSM Środa Wielkopolska",
  phoneDisplay: "",
  phoneHref: "",
  email: "",
  city: "Środa Wielkopolska",
  address: "",
  openingHours: "",
  serviceArea: ["Środa Wielkopolska"],
  nearbyToConfirm: ["Dominowo", "Krzykosy", "Zaniemyśl", "Kórnik"],
  pickupAvailable: false,
  domain: "",
  socialUrls: [] as string[],
};

export function hasConfirmedPhone() {
  return (
    company.phoneDisplay.trim().length > 0 &&
    company.phoneHref.startsWith("tel:") &&
    company.phoneHref !== "tel:"
  );
}

export function hasConfirmedEmail() {
  return company.email.includes("@");
}

export function publicationReady() {
  return hasConfirmedPhone() && company.domain.trim().length > 0;
}
