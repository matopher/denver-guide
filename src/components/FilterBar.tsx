"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PlaceCategory } from "@/data/types";

function track(event: string, properties?: Record<string, unknown>) {
  try {
    const ph = require("posthog-js").default;
    if (ph?.__loaded) ph.capture(event, properties);
  } catch {}
}

const categoryOptions: { value: PlaceCategory; label: string }[] = [
  { value: "restaurant", label: "Eat" },
  { value: "bar", label: "Drink" },
  { value: "coffee", label: "Coffee" },
  { value: "attraction", label: "See" },
  { value: "outdoors", label: "Explore" },
  { value: "shop", label: "Shop" },
];

export type Filters = {
  category: PlaceCategory | null;
  neighborhood: string | null;
  favorites: boolean;
  search: string;
};

export const emptyFilters: Filters = {
  category: null,
  neighborhood: null,
  favorites: false,
  search: "",
};

function FilterPill({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string | null;
  options: string[];
  onChange: (v: string | null) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  const active = value !== null;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-x-1.5 rounded-sm border px-3 py-1.5 font-display text-xs font-medium uppercase tracking-wider transition-colors ${
          active
            ? "border-forest bg-forest/10 text-forest"
            : "border-forest/30 text-brown hover:border-forest/50"
        }`}
      >
        {active ? value : label}
        <svg
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`size-3 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M3 4.5l3 3 3-3" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 z-50 mt-1.5 min-w-36 overflow-hidden rounded-sm border border-forest/30 bg-cream shadow-lg">
          <button
            type="button"
            onClick={() => {
              onChange(null);
              setOpen(false);
            }}
            className={`flex w-full px-3 py-2 text-left font-display text-xs uppercase tracking-wider transition-colors hover:bg-parchment ${
              !active ? "font-semibold text-forest" : "text-brown"
            }`}
          >
            All
          </button>
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`flex w-full px-3 py-2 text-left font-display text-xs uppercase tracking-wider transition-colors hover:bg-parchment ${
                value === opt ? "font-semibold text-forest" : "text-brown"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function FilterBar({
  filters,
  onChange,
  neighborhoods,
  resultCount,
  totalCount,
}: {
  filters: Filters;
  onChange: (f: Filters) => void;
  neighborhoods: string[];
  resultCount: number;
  totalCount: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const hasActiveFilters =
    filters.category !== null ||
    filters.neighborhood !== null ||
    filters.favorites ||
    filters.search.length > 0;

  const resetAll = useCallback(() => {
    track("filters_cleared");
    onChange(emptyFilters);
    setExpanded(false);
  }, [onChange]);

  const toggle = useCallback(() => {
    setExpanded((v) => {
      if (!v) {
        track("filter_opened");
        setTimeout(() => searchRef.current?.focus(), 0);
      } else {
        track("filter_closed");
      }
      return !v;
    });
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        if (hasActiveFilters) {
          resetAll();
        } else if (expanded) {
          setExpanded(false);
        }
        searchRef.current?.blur();
        return;
      }

      if (
        e.key === "f" &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement) &&
        !(e.target instanceof HTMLSelectElement)
      ) {
        e.preventDefault();
        toggle();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [toggle, hasActiveFilters, resetAll]);

  useEffect(() => {
    if (expanded) {
      searchRef.current?.focus();
    }
  }, [expanded]);

  return (
    <div className="sticky top-0 z-40 -mx-4 mb-8 border-b border-forest/20 bg-parchment/95 px-4 py-3 backdrop-blur-sm sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center gap-x-3">
        {expanded ? (
          <>
            <div className="relative">
              <input
                ref={searchRef}
                type="text"
                value={filters.search}
                onChange={(e) =>
                  onChange({ ...filters, search: e.target.value })
                }
                onBlur={(e) => {
                  if (e.target.value) {
                    track("filter_search_submitted", { query: e.target.value });
                  }
                }}
                placeholder="Search places…"
                className="w-40 rounded-sm border border-forest/30 bg-cream px-3 py-1.5 font-hand text-sm text-ink placeholder:text-brown/40 focus:border-forest/60 focus:outline-none sm:w-48"
              />
              {filters.search && (
                <button
                  type="button"
                  onClick={() => onChange({ ...filters, search: "" })}
                  className="absolute top-1/2 right-2 -translate-y-1/2 text-brown/50 hover:text-brown"
                  aria-label="Clear search"
                >
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    className="size-3"
                    aria-hidden
                  >
                    <path d="M3 3l6 6M9 3l-6 6" />
                  </svg>
                </button>
              )}
            </div>

            <FilterPill
              label="Category…"
              value={
                filters.category
                  ? categoryOptions.find((c) => c.value === filters.category)
                      ?.label ?? null
                  : null
              }
              options={categoryOptions.map((c) => c.label)}
              onChange={(v) => {
                const cat = v
                  ? categoryOptions.find((c) => c.label === v)?.value ?? null
                  : null;
                if (cat) track("filter_category_selected", { category: cat });
                onChange({ ...filters, category: cat });
              }}
            />

            <FilterPill
              label="Neighborhood…"
              value={filters.neighborhood}
              options={neighborhoods}
              onChange={(v) => {
                if (v) track("filter_neighborhood_selected", { neighborhood: v });
                onChange({ ...filters, neighborhood: v });
              }}
            />

            <button
              type="button"
              onClick={() => {
                track("filter_favorites_toggled", { enabled: !filters.favorites });
                onChange({ ...filters, favorites: !filters.favorites });
              }}
              className={`inline-flex items-center gap-x-1 rounded-sm border px-3 py-1.5 font-display text-xs font-medium uppercase tracking-wider transition-colors ${
                filters.favorites
                  ? "border-rust bg-rust/10 text-rust"
                  : "border-forest/30 text-brown hover:border-forest/50"
              }`}
            >
              ★ Favorites
            </button>

            <div className="ml-auto flex items-center gap-x-3">
              {hasActiveFilters && (
                <>
                  <span className="font-hand text-sm tabular-nums text-brown">
                    {resultCount} of {totalCount}
                  </span>
                  <button
                    type="button"
                    onClick={resetAll}
                    className="inline-flex items-center gap-x-1 font-hand text-sm text-pine transition-colors hover:text-forest"
                  >
                    Clear
                    <kbd className="pointer-events-none inline-flex items-center rounded border border-forest/50 bg-forest/5 px-1 py-[1px] font-display text-[0.5rem] uppercase text-forest/80">
                      Esc
                    </kbd>
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={toggle}
                className="flex size-8 items-center justify-center rounded-sm border border-forest/40 text-forest transition-colors hover:bg-forest/10"
                aria-label="Close filters"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  className="size-4"
                  aria-hidden
                >
                  <path d="M2 4h12M5 8h6M7 12h2" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={toggle}
              className="inline-flex items-center font-hand text-sm text-brown/60 hover:text-brown transition-colors"
            >
              Filter places…
              <kbd className="ml-1.5 inline-flex items-center rounded border border-forest/50 bg-forest/5 px-1.5 py-0.5 font-display text-[0.55rem] uppercase text-forest/80">
                F
              </kbd>
            </button>
            {hasActiveFilters && (
              <>
                <span className="font-hand text-sm text-brown">
                  {resultCount} of {totalCount}
                </span>
                <button
                  type="button"
                  onClick={resetAll}
                  className="inline-flex items-center gap-x-1 font-hand text-sm text-pine transition-colors hover:text-forest"
                >
                  Clear
                  <kbd className="pointer-events-none inline-flex items-center rounded border border-forest/50 bg-forest/5 px-1 py-[1px] font-display text-[0.5rem] uppercase text-forest/80">
                    Esc
                  </kbd>
                </button>
              </>
            )}
            <button
              type="button"
              onClick={toggle}
              className="ml-auto flex size-8 items-center justify-center rounded-sm border border-forest/40 text-forest transition-colors hover:bg-forest/10"
              aria-label="Open filters"
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                className="size-4"
                aria-hidden
              >
                <path d="M2 4h12M5 8h6M7 12h2" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
