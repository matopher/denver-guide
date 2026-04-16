import type { PlaceCategory } from "@/data/types";

type IconProps = { className?: string };

function Utensils({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M3 2v7a2 2 0 0 0 2 2h2V2" />
      <path d="M7 11v11" />
      <path d="M19 22V2c-2 0-3 3-3 6s1 4 3 4" />
    </svg>
  );
}

function Martini({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M8 22h8" />
      <path d="M12 15v7" />
      <path d="M3 3h18l-9 12L3 3z" />
    </svg>
  );
}

function Coffee({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M17 9h1a3 3 0 0 1 0 6h-1" />
      <path d="M3 9h14v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9z" />
      <path d="M7 3v2M11 3v2M15 3v2" />
    </svg>
  );
}

function Eye({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function Mountain({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M3 20 10 6l4 7 2-3 5 10z" />
    </svg>
  );
}

function Bag({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 7h14l-1 14H6L5 7z" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

const iconMap: Record<PlaceCategory, (p: IconProps) => React.ReactElement> = {
  restaurant: Utensils,
  bar: Martini,
  coffee: Coffee,
  attraction: Eye,
  outdoors: Mountain,
  shop: Bag,
};

export function CategoryIcon({
  category,
  className,
}: {
  category: PlaceCategory;
  className?: string;
}) {
  const Icon = iconMap[category];
  return <Icon className={className} />;
}
