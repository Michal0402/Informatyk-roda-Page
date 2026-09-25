import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function ServiceBoard({
  title,
  sentence,
  art,
  items,
}: {
  title: string;
  sentence: string;
  art: ReactNode;
  items: { id: string; title: string; icon: LucideIcon }[];
}) {
  return (
    <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <div className="tile grid items-center gap-4 p-5 sm:grid-cols-[200px_1fr]">
        <div className="mx-auto w-40">{art}</div>
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-balance">{title}</h1>
          <p className="mt-3 text-muted">{sentence}</p>
        </div>
      </div>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id} id={item.id} className="tile flex items-center gap-3 p-4">
            <item.icon aria-hidden strokeWidth={1.5} className="size-6 shrink-0 text-accent-deep" />
            <span className="font-medium">{item.title}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
