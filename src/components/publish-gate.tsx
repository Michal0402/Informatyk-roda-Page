import { hasConfirmedPhone } from "@/config/company";

export function PublishGate() {
  if (process.env.NODE_ENV !== "development" || hasConfirmedPhone()) return null;

  return (
    <aside className="border-b border-line bg-accent px-4 py-3 text-sm text-accent-ink">
      <p className="mx-auto max-w-6xl">
        Uzupełnij numer w <code>src/config/company.ts</code> zanim opublikujesz stronę.
      </p>
    </aside>
  );
}
