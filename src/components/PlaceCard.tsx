"use client";

import { Place } from "@/data/types";

function track(event: string, properties?: Record<string, unknown>) {
  try {
    const ph = require("posthog-js").default;
    if (ph?.__loaded) ph.capture(event, properties);
  } catch {}
}
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
    text: "text-ochre-dark",
    bg: "bg-ochre/25",
    ring: "ring-ochre/50",
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
        <div className={`relative flex h-full flex-col border border-dashed p-5 pt-4 ${place.featured ? "border-rust/50" : "border-forest/30"}`}>
          <div className="mb-4 flex items-center justify-between">
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
            {place.featured && (
              <span className="inline-flex items-center gap-x-1 font-hand text-[0.65rem] font-semibold uppercase tracking-wider text-rust">
                <svg
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  className="size-3.5 shrink-0"
                  aria-hidden
                >
                  <path d="M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z" opacity="0.2" />
                  <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z" />
                </svg>
                Favorite
              </span>
            )}
          </div>

          {/* name + neighborhood */}
          <h3 className="max-w-[22ch] font-display text-2xl font-semibold tracking-tight text-forest text-balance">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address ?? `${place.name} ${place.neighborhood ?? "Denver"} CO`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-baseline gap-x-1.5 transition-colors hover:text-pine"
              onClick={() => track("place_link_clicked", {
                place_id: place.id,
                place_name: place.name,
                category: place.category,
                neighborhood: place.neighborhood ?? null,
                featured: place.featured ?? false,
              })}
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
            <p className="mt-1.5 font-hand text-sm font-semibold uppercase tracking-wider text-pine">
              {place.neighborhood}
            </p>
          )}

          <p className="mt-3 max-w-[60ch] text-base text-ink/85 text-pretty">
            {place.description}
          </p>
        </div>


      </article>
    </div>
  );
}
