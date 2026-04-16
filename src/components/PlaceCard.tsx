import { Place } from "@/data/types";
import { TagBadge } from "./TagBadge";
import { CategoryIcon } from "./CategoryIcon";

type CategoryStyle = {
  label: string;
  text: string;
  bg: string;
  ring: string;
};

const categoryMeta: Record<Place["category"], CategoryStyle> = {
  restaurant: {
    label: "Eat",
    text: "text-rust",
    bg: "bg-rust/10",
    ring: "ring-rust/25",
  },
  bar: {
    label: "Drink",
    text: "text-navy",
    bg: "bg-navy/10",
    ring: "ring-navy/25",
  },
  coffee: {
    label: "Coffee",
    text: "text-brown",
    bg: "bg-brown/10",
    ring: "ring-brown/25",
  },
  attraction: {
    label: "See",
    text: "text-ochre",
    bg: "bg-ochre/15",
    ring: "ring-ochre/30",
  },
  outdoors: {
    label: "Explore",
    text: "text-forest",
    bg: "bg-forest/10",
    ring: "ring-forest/25",
  },
  shop: {
    label: "Shop",
    text: "text-plum",
    bg: "bg-plum/10",
    ring: "ring-plum/25",
  },
};

export function PlaceCard({ place }: { place: Place }) {
  const meta = categoryMeta[place.category];

  return (
    <div className="stamp-shadow">
      <article className="stamp-edge relative bg-cream p-3">
        <div
          className={`relative flex h-full flex-col p-5 pt-4 ${place.featured ? "border-2 border-rust/50" : "border border-dashed border-forest/30"}`}
        >
          {place.featured && (
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cream px-4 py-0.5 font-hand text-sm text-rust">
              ★ Favorite
            </span>
          )}

          {/* top row: category + denomination */}
          <div className="mb-4 flex items-start justify-between gap-x-3">
            <div
              className={`inline-flex items-center gap-x-1.5 rounded-sm px-2 py-1 ring-1 ring-inset ${meta.bg} ${meta.ring} ${meta.text}`}
            >
              <CategoryIcon
                category={place.category}
                className="size-4 shrink-0"
              />
              <span className="font-display text-xs font-semibold uppercase tracking-wider">
                {meta.label}
              </span>
            </div>

            <div className="shrink-0 border border-forest/40 px-1.5 py-0.5 text-center font-display text-[0.6rem] leading-tight text-forest/80">
              <div className="font-semibold uppercase tracking-widest">
                Denver
              </div>
              <div className="tracking-widest">CO</div>
            </div>
          </div>

          {/* name + neighborhood */}
          <h3 className="max-w-[22ch] font-display text-2xl font-semibold tracking-tight text-forest text-balance">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address ?? `${place.name} ${place.neighborhood ?? "Denver"} CO`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-baseline gap-x-1.5 transition-colors hover:text-pine"
            >
              {place.name}
              <svg
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-3 shrink-0 self-center opacity-40 transition-opacity group-hover/link:opacity-70"
                aria-hidden
              >
                <path d="M3.5 1.5h7m0 0v7m0-7L1.5 10.5" />
              </svg>
            </a>
          </h3>
          {place.neighborhood && (
            <p className="mt-1 font-hand text-base text-pine">
              {place.neighborhood}
            </p>
          )}

          {/* description */}
          <p className="mt-3 mb-5 max-w-[60ch] text-[0.95rem] leading-relaxed text-ink/85 text-pretty">
            {place.description}
          </p>

          {/* tags */}
          <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
            {place.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        </div>


      </article>
    </div>
  );
}
