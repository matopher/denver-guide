"use client";

import { useMemo, useState } from "react";
import type { Place } from "@/data/types";
import { CardGrid } from "./CardGrid";
import { FilterBar, type Filters, emptyFilters } from "./FilterBar";

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
  const [filters, setFilters] = useState<Filters>(emptyFilters);

  const neighborhoods = useMemo(
    () =>
      [
        ...new Set(places.map((p) => p.neighborhood).filter(Boolean)),
      ].sort() as string[],
    [places],
  );

  const filtered = useMemo(() => {
    return places.filter((p) => {
      if (filters.category && p.category !== filters.category) return false;
      if (filters.neighborhood && p.neighborhood !== filters.neighborhood)
        return false;
      if (filters.favorites && !p.featured) return false;
      if (filters.search && !matchesSearch(p, filters.search)) return false;
      return true;
    });
  }, [places, filters]);

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
