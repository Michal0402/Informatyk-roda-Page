import type { ReactNode } from "react";

export function ServiceBoard({
  sticker,
  title,
  sentence,
  art,
  items,
}: {
  sticker: string;
  title: string;
  sentence: string;
  art: ReactNode;
  items: { id: string; title: string }[];
}) {
  return (
    <article>
      <header className="bg-ink text-canvas">
        <div className="mx-auto grid min-h-[46vh] max-w-[1180px] items-end gap-8 px-5 py-14 md:grid-cols-[1fr_220px] md:px-8 md:py-20">
          <div>
            <p className="sticker w-fit text-5xl sm:text-7xl">{sticker}</p>
            <h1 className="mt-8 max-w-[18ch] font-display text-4xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-[42ch] text-lg">{sentence}</p>
          </div>
          <div className="w-40 text-canvas md:w-full">{art}</div>
        </div>
      </header>
      <ol className="mx-auto max-w-[1180px] border-b border-ink">
        {items.map((item, index) => (
          <li id={item.id} key={item.id} className="flex items-baseline gap-5 border-t border-ink px-5 py-6 md:gap-8 md:px-8">
            <span className="font-display text-xl font-bold tabular-nums">{String(index + 1).padStart(2, "0")}</span>
            <span className="font-display text-2xl font-bold tracking-tight sm:text-4xl">{item.title}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}
