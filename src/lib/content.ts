import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import type { Company } from "@/config/company";
import type { FaqItem } from "@/data/faq";
import type { PriceItem } from "@/data/pricing";
import type { Realization } from "@/data/realizations";

export type SiteContent = {
  company: Company;
  pricingNote: string;
  pricing: PriceItem[];
  faq: FaqItem[];
  realizations: Realization[];
};

const filePath = path.join(process.cwd(), "content", "site.json");

function text(value: unknown, max: number) {
  return String(value ?? "").slice(0, max);
}

function lines(value: unknown, max: number) {
  const source = Array.isArray(value) ? value.join("\n") : String(value ?? "");
  return source
    .split(/[\n,]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, max);
}

function slug(value: string, fallback: string) {
  const id = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
  return id || fallback;
}

export function sanitizeContent(input: unknown): SiteContent {
  const source = input && typeof input === "object" ? (input as Record<string, unknown>) : {};
  const rawCompany = source.company && typeof source.company === "object" ? (source.company as Record<string, unknown>) : {};
  const phoneHref = text(rawCompany.phoneHref, 40);
  const company: Company = {
    name: text(rawCompany.name, 120),
    phoneDisplay: text(rawCompany.phoneDisplay, 40),
    phoneHref: phoneHref.startsWith("tel:") ? phoneHref : "",
    email: text(rawCompany.email, 120),
    city: text(rawCompany.city, 80),
    address: text(rawCompany.address, 160),
    openingHours: text(rawCompany.openingHours, 160),
    serviceArea: lines(rawCompany.serviceArea, 12),
    nearbyToConfirm: lines(rawCompany.nearbyToConfirm, 12),
    pickupAvailable: rawCompany.pickupAvailable === true,
    domain: text(rawCompany.domain, 120).replace(/^https?:\/\//, "").replace(/\/$/, ""),
    socialUrls: lines(rawCompany.socialUrls, 8),
  };

  const scopes = new Set(["komputer", "laptop", "telefon"]);
  const pricing = (Array.isArray(source.pricing) ? source.pricing : []).slice(0, 40).map((item, index) => {
    const row = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    const scope = text(row.scope, 20);
    return {
      id: slug(text(row.id, 40) || text(row.name, 40), `pozycja-${index + 1}`),
      name: text(row.name, 120),
      scope: (scopes.has(scope) ? scope : "komputer") as PriceItem["scope"],
      detail: text(row.detail, 400),
      amount: text(row.amount, 40),
    };
  });

  const faq = (Array.isArray(source.faq) ? source.faq : []).slice(0, 40).map((item, index) => {
    const row = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    return {
      id: slug(text(row.id, 40) || text(row.question, 40), `pytanie-${index + 1}`),
      question: text(row.question, 200),
      answer: text(row.answer, 800),
    };
  });

  const realizations = (Array.isArray(source.realizations) ? source.realizations : []).slice(0, 40).map((item, index) => {
    const row = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    const image = text(row.image, 200);
    return {
      id: slug(text(row.id, 40) || text(row.title, 40), `realizacja-${index + 1}`),
      title: text(row.title, 120),
      device: text(row.device, 80),
      summary: text(row.summary, 400),
      image: image.startsWith("/") && !image.includes("..") ? image : "",
      imageAlt: text(row.imageAlt, 160),
    };
  });

  return {
    company,
    pricingNote: text(source.pricingNote, 500),
    pricing: pricing.filter((item) => item.name.trim()),
    faq: faq.filter((item) => item.question.trim() && item.answer.trim()),
    realizations: realizations.filter((item) => item.title.trim() && item.image),
  };
}

export function getSiteContent(): SiteContent {
  return sanitizeContent(JSON.parse(readFileSync(filePath, "utf8")));
}

export function saveSiteContent(input: unknown) {
  const content = sanitizeContent(input);
  writeFileSync(filePath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
  return content;
}
