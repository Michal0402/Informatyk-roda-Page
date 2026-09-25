"use client";

import { useEffect, useState } from "react";
import type { SiteContent } from "@/lib/content";

const emptyContent: SiteContent = {
  company: {
    name: "",
    phoneDisplay: "",
    phoneHref: "",
    email: "",
    city: "",
    address: "",
    openingHours: "",
    serviceArea: [],
    nearbyToConfirm: [],
    pickupAvailable: false,
    domain: "",
    socialUrls: [],
  },
  pricingNote: "",
  pricing: [],
  faq: [],
  realizations: [],
};

export function AdminPanel() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [content, setContent] = useState<SiteContent>(emptyContent);

  useEffect(() => {
    fetch("/api/admin/content")
      .then(async (response) => {
        if (!response.ok) return;
        setContent((await response.json()) as SiteContent);
        setAuthed(true);
      })
      .finally(() => setReady(true));
  }, []);

  async function login(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(body?.error ?? "Nie udało się wejść.");
      return;
    }
    const data = await fetch("/api/admin/content");
    setContent((await data.json()) as SiteContent);
    setAuthed(true);
    setPassword("");
  }

  async function save(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    setNotice("");
    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(content),
    });
    if (!response.ok) {
      setError("Zapis nie powiódł się.");
      return;
    }
    setContent((await response.json()) as SiteContent);
    setNotice("Zapisane w content/site.json. Odśwież stronę, żeby zobaczyć treść.");
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setContent(emptyContent);
  }

  if (!ready) return <p className="px-5 py-10">Ładowanie…</p>;

  if (!authed) {
    return (
      <form onSubmit={login} className="mx-auto flex max-w-md flex-col gap-4 px-5 py-16">
        <h1 className="font-display text-4xl font-extrabold tracking-tight">Panel</h1>
        <p>Hasło jest w pliku .env.local, nie na stronie.</p>
        <label className="flex flex-col gap-1 text-sm">
          Hasło
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border border-line bg-card px-3 py-2 text-base"
            autoComplete="current-password"
          />
        </label>
        {error ? <p className="text-sm text-accent-deep">{error}</p> : null}
        <button type="submit" className="w-fit bg-accent px-4 py-2 font-semibold text-accent-ink">
          Wejdź
        </button>
      </form>
    );
  }

  const company = content.company;

  return (
    <form onSubmit={save} className="mx-auto flex max-w-3xl flex-col gap-8 px-5 py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-4xl font-extrabold tracking-tight">Treść strony</h1>
        <button type="button" onClick={logout} className="border border-line px-3 py-2 text-sm">
          Wyloguj
        </button>
      </div>
      <p>Zapis trafia do pliku content/site.json. Puste pole ceny zostaje „Wycena po diagnozie”.</p>

      <fieldset className="grid gap-3 border border-line p-4">
        <legend className="px-1 font-display text-xl font-bold">Firma</legend>
        <Field label="Nazwa" value={company.name} onChange={(name) => setContent({ ...content, company: { ...company, name } })} />
        <Field label="Telefon, zapisany" value={company.phoneDisplay} onChange={(phoneDisplay) => setContent({ ...content, company: { ...company, phoneDisplay } })} />
        <Field label="Link telefonu, tel:+48…" value={company.phoneHref} onChange={(phoneHref) => setContent({ ...content, company: { ...company, phoneHref } })} />
        <Field label="E-mail" value={company.email} onChange={(email) => setContent({ ...content, company: { ...company, email } })} />
        <Field label="Miasto" value={company.city} onChange={(city) => setContent({ ...content, company: { ...company, city } })} />
        <Field label="Adres" value={company.address} onChange={(address) => setContent({ ...content, company: { ...company, address } })} />
        <Field label="Godziny" value={company.openingHours} onChange={(openingHours) => setContent({ ...content, company: { ...company, openingHours } })} />
        <Field label="Domena" value={company.domain} onChange={(domain) => setContent({ ...content, company: { ...company, domain } })} />
        <Field label="Obszar, po przecinku" value={company.serviceArea.join(", ")} onChange={(value) => setContent({ ...content, company: { ...company, serviceArea: splitList(value) } })} />
        <Field label="Okolice do potwierdzenia" value={company.nearbyToConfirm.join(", ")} onChange={(value) => setContent({ ...content, company: { ...company, nearbyToConfirm: splitList(value) } })} />
      </fieldset>

      <fieldset className="grid gap-4 border border-line p-4">
        <legend className="px-1 font-display text-xl font-bold">Cennik</legend>
        <label className="flex flex-col gap-1 text-sm">
          Nota
          <textarea value={content.pricingNote} onChange={(event) => setContent({ ...content, pricingNote: event.target.value })} className="min-h-20 border border-line bg-card px-3 py-2" />
        </label>
        {content.pricing.map((item, index) => (
          <div key={item.id} className="grid gap-2 border-t border-line pt-3">
            <Field label="Nazwa" value={item.name} onChange={(name) => updateRow(content, setContent, "pricing", index, { name })} />
            <Field label="Opis" value={item.detail} onChange={(detail) => updateRow(content, setContent, "pricing", index, { detail })} />
            <Field label="Kwota, puste = wycena po diagnozie" value={item.amount} onChange={(amount) => updateRow(content, setContent, "pricing", index, { amount })} />
          </div>
        ))}
      </fieldset>

      <fieldset className="grid gap-4 border border-line p-4">
        <legend className="px-1 font-display text-xl font-bold">Pytania</legend>
        {content.faq.map((item, index) => (
          <div key={item.id} className="grid gap-2 border-t border-line pt-3">
            <Field label="Pytanie" value={item.question} onChange={(question) => updateRow(content, setContent, "faq", index, { question })} />
            <Field label="Odpowiedź" value={item.answer} onChange={(answer) => updateRow(content, setContent, "faq", index, { answer })} />
          </div>
        ))}
      </fieldset>

      {error ? <p className="text-sm text-accent-deep">{error}</p> : null}
      {notice ? <p className="text-sm">{notice}</p> : null}
      <button type="submit" className="w-fit bg-accent px-4 py-2 font-semibold text-accent-ink">
        Zapisz plik
      </button>
    </form>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {label}
      <input value={value} onChange={(event) => onChange(event.target.value)} className="border border-line bg-card px-3 py-2 text-base" />
    </label>
  );
}

function splitList(value: string) {
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}

function updateRow<K extends "pricing" | "faq">(
  content: SiteContent,
  setContent: (value: SiteContent) => void,
  key: K,
  index: number,
  patch: Partial<SiteContent[K][number]>,
) {
  const rows = content[key].map((item, itemIndex) => (itemIndex === index ? { ...item, ...patch } : item));
  setContent({ ...content, [key]: rows });
}
