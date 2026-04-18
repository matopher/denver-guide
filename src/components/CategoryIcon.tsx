import type { PlaceCategory } from "@/data/types";

type IconProps = { className?: string };

function Pizza({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M218,91.76,187.13,142.4A32,32,0,1,0,154,196.78l-19.13,31.38a8,8,0,0,1-13.7,0L84.3,167.71a32,32,0,1,0-30.48-50L38,91.76a159.77,159.77,0,0,1,180,0Z" opacity="0.2" />
      <path d="M239.54,63a15.91,15.91,0,0,0-7.25-9.9,201.49,201.49,0,0,0-208.58,0,16,16,0,0,0-5.37,22l96,157.27a16,16,0,0,0,27.36,0L194,146.53v0l43.61-71.45A15.82,15.82,0,0,0,239.54,63ZM63.59,118.5a24,24,0,1,1,24.47,40.09Zm87.92,66.95A24,24,0,0,1,176,145.37Zm32.93-53.93a40,40,0,0,0-41.38,67.77L128,224,96.5,172.43a40,40,0,1,0-41.35-67.76L48.8,94.26a152,152,0,0,1,158.39,0Zm31.1-50.93a168.12,168.12,0,0,0-175.08,0L32,66.77a185.6,185.6,0,0,1,192,0Z" />
    </svg>
  );
}

function Martini({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M200,72l-72,72L56,72Z" opacity="0.2" />
      <path d="M237.66,45.66A8,8,0,0,0,232,32H24a8,8,0,0,0-5.66,13.66L120,147.31V208H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V147.31ZM75.31,80H180.69L128,132.69ZM212.69,48l-16,16H59.31l-16-16Z" />
    </svg>
  );
}

function Coffee({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M208,88v48a88,88,0,0,1-51.3,80H83.3A88,88,0,0,1,32,136V88Z" opacity="0.2" />
      <path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z" />
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

function Boot({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M32,168c9.22-32.06,12-88.65,0-120H144a8,8,0,0,1,8,8v64h40a48,48,0,0,1,48,48Z" opacity="0.2" />
      <path d="M192,112H160V56a16,16,0,0,0-16-16H32a8,8,0,0,0-7.47,10.86c11.06,28.84,8.76,83.71-.22,114.93A8.25,8.25,0,0,0,24,168v32a16,16,0,0,0,16,16H66.11a16,16,0,0,0,7.16-1.69L85.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69h28.22a16,16,0,0,0,7.16-1.69L169.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69H232a16,16,0,0,0,16-16V168A56.06,56.06,0,0,0,192,112ZM144,56V80H112a8,8,0,0,0,0,16h32v16H112a8,8,0,0,0,0,16h80a40.07,40.07,0,0,1,39.2,32H42.25c6.74-30.84,8.16-74.17.61-104Zm61.89,144-12.62-6.31a16,16,0,0,0-7.16-1.69H169.89a16,16,0,0,0-7.16,1.69L150.11,200H121.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H85.89a16,16,0,0,0-7.16,1.69L66.11,200H40V176H232v24Z" />
    </svg>
  );
}

function Storefront({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M224,96v16a32,32,0,0,1-64,0V96H96v16a32,32,0,0,1-64,0V96L46.34,45.8A8,8,0,0,1,54,40H202a8,8,0,0,1,7.69,5.8Z" opacity="0.2" />
      <path d="M231.69,93.81,217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.81A7.94,7.94,0,0,0,24,96v16a40,40,0,0,0,16,32v72a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V144a40,40,0,0,0,16-32V96A7.94,7.94,0,0,0,231.69,93.81ZM54,48H202l11.42,40H42.61Zm98,56v8a24,24,0,0,1-48,0v-8ZM51.06,132.2A24,24,0,0,1,40,112v-8H88v8a24,24,0,0,1-35.12,21.26A7.88,7.88,0,0,0,51.06,132.2ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm16-96a24,24,0,0,1-11.07,20.2,8.08,8.08,0,0,0-1.8,1.05A24,24,0,0,1,168,112v-8h48Z" />
    </svg>
  );
}

const iconMap: Record<PlaceCategory, (p: IconProps) => React.ReactElement> = {
  restaurant: Pizza,
  bar: Martini,
  coffee: Coffee,
  attraction: Eye,
  outdoors: Boot,
  shop: Storefront,
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
