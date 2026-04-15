export function TagBadge({ tag }: { tag: string }) {
  return (
    <span className="inline-block rounded-sm border border-forest/30 bg-parchment px-2 py-0.5 font-hand text-sm text-forest shadow-stamp transition-colors">
      {tag}
    </span>
  );
}
