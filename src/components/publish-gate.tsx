export function PublishGate({ missingPhone }: { missingPhone: boolean }) {
  if (process.env.NODE_ENV !== "development" || !missingPhone) return null;

  return (
    <aside className="border-b border-line bg-accent px-4 py-3 text-sm text-accent-ink">
      <p className="mx-auto max-w-6xl">
        Uzupełnij numer w panelu <code>/admin</code> albo w <code>content/site.json</code> zanim opublikujesz stronę.
      </p>
    </aside>
  );
}
