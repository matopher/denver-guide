export function TagBadge({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-forest/35 bg-parchment px-2 py-[2px] font-hand text-[0.65rem] font-semibold uppercase tracking-wide leading-tight text-forest">
      {tag}
    </span>
  );
}
