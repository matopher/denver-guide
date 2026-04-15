export type PlaceCategory =
  | "restaurant"
  | "bar"
  | "coffee"
  | "attraction"
  | "outdoors"
  | "shop";

export interface Place {
  id: string;
  name: string;
  description: string;
  tags: string[];
  neighborhood?: string;
  address?: string;
  category: PlaceCategory;
  featured?: boolean;
}
