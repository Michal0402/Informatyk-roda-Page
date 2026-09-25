export type Company = {
  name: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  city: string;
  address: string;
  openingHours: string;
  serviceArea: string[];
  nearbyToConfirm: string[];
  pickupAvailable: boolean;
  domain: string;
  socialUrls: string[];
};

export function hasConfirmedPhone(company: Company) {
  return (
    company.phoneDisplay.trim().length > 0 &&
    company.phoneHref.startsWith("tel:") &&
    company.phoneHref !== "tel:"
  );
}

export function hasConfirmedEmail(company: Company) {
  return company.email.includes("@");
}

export function publicationReady(company: Company) {
  return hasConfirmedPhone(company) && company.domain.trim().length > 0;
}

export function callHref(company: Company) {
  return hasConfirmedPhone(company) ? company.phoneHref : "/#kontakt";
}
