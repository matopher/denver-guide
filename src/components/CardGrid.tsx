import { Place } from "@/data/types";
import { PlaceCard } from "./PlaceCard";

export function CardGrid({ places }: { places: Place[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
      {places.map((place, i) => (
        <PlaceCard key={place.id} place={place} index={i} />
      ))}
    </div>
  );
}
