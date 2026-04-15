import { Place } from "@/data/types";
import { TagBadge } from "./TagBadge";

const categoryLabels: Record<string, string> = {
  restaurant: "EAT",
  bar: "DRINK",
  coffee: "COFFEE",
  attraction: "SEE",
  outdoors: "EXPLORE",
  shop: "SHOP",
};

const rotations = [
  "-rotate-[0.4deg]",
  "rotate-[0.3deg]",
  "-rotate-[0.2deg]",
  "rotate-[0.5deg]",
  "-rotate-[0.1deg]",
  "rotate-[0.4deg]",
];

export function PlaceCard({ place, index }: { place: Place; index: number }) {
  const rotation = rotations[index % rotations.length];

  return (
    <article
      className={`relative border-3 border-forest/70 bg-cream p-5 pb-4 shadow-stamp-lg transition-transform hover:scale-[1.02] hover:shadow-stamp-lg ${rotation}`}
    >
      {/* Paper texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 128 128%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.2%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')] bg-repeat bg-[length:128px_128px] opacity-[0.03] mix-blend-multiply" />

      {/* Category stamp */}
      <div className="category-stamp absolute -top-2 -right-2 rounded-sm border-2 border-rust bg-cream px-2 py-0.5 font-hand text-xs font-bold tracking-wider text-rust">
        {categoryLabels[place.category] || place.category.toUpperCase()}
      </div>

      {/* Neighborhood */}
      {place.neighborhood && (
        <p className="mb-1 font-hand text-sm text-pine">
          {place.neighborhood}
        </p>
      )}

      {/* Name */}
      <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-wide text-forest">
        {place.name}
      </h3>

      {/* Description */}
      <p className="mb-3 font-body text-sm leading-relaxed text-brown">
        {place.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {place.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </article>
  );
}
