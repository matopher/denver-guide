"use client";

import { useMemo, useState } from "react";
import type { Place } from "@/data/types";
import { CardGrid } from "./CardGrid";
import { FilterBar, type Filters, emptyFilters } from "./FilterBar";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function matchesSearch(place: Place, query: string): boolean {
  const q = query.toLowerCase();
  return (
    place.name.toLowerCase().includes(q) ||
    place.description.toLowerCase().includes(q) ||
    place.tags.some((t) => t.toLowerCase().includes(q)) ||
    (place.neighborhood?.toLowerCase().includes(q) ?? false)
  );
}

export function FilteredGrid({ places }: { places: Place[] }) {
  const [shuffled] = useState(() => shuffle(places));
  const [filters, setFilters] = useState<Filters>(emptyFilters);

  const neighborhoods = useMemo(
    () =>
      [
        ...new Set(shuffled.map((p) => p.neighborhood).filter(Boolean)),
      ].sort() as string[],
    [shuffled],
  );

  const filtered = useMemo(() => {
    return shuffled.filter((p) => {
      if (filters.category && p.category !== filters.category) return false;
      if (filters.neighborhood && p.neighborhood !== filters.neighborhood)
        return false;
      if (filters.favorites && !p.featured) return false;
      if (filters.search && !matchesSearch(p, filters.search)) return false;
      return true;
    });
  }, [shuffled, filters]);

  return (
    <>
      <FilterBar
        filters={filters}
        onChange={setFilters}
        neighborhoods={neighborhoods}
        resultCount={filtered.length}
        totalCount={places.length}
      />
      <CardGrid places={filtered} />
    </>
  );
}
