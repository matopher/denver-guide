import { Place } from "./types";

export const places: Place[] = [
  {
    id: "death-and-co",
    name: "Death & Co",
    description:
      "The NYC transplant that actually earned its spot. Dark, moody, every cocktail is a minor event. Go on a weeknight.",
    tags: ["cocktails", "date-night", "moody"],
    neighborhood: "RiNo",
    category: "bar",
  },
  {
    id: "hop-alley",
    name: "Hop Alley",
    description:
      "Sichuan-leaning Chinese in a loud, fun room. The dan dan noodles are non-negotiable. Bring a group.",
    tags: ["dinner", "group-friendly", "spicy"],
    neighborhood: "RiNo",
    category: "restaurant",
  },
  {
    id: "little-owl-coffee",
    name: "Little Owl Coffee",
    description:
      "Quiet neighborhood spot with genuinely great espresso. The kind of place where the barista remembers your order.",
    tags: ["coffee", "chill", "work-friendly"],
    neighborhood: "LoHi",
    category: "coffee",
  },
  {
    id: "red-rocks",
    name: "Red Rocks Amphitheatre",
    description:
      "You already know. But go for a sunrise workout or a random Tuesday hike, not just the concerts. The geology alone is worth it.",
    tags: ["outdoors", "iconic", "views", "hiking"],
    neighborhood: "Morrison",
    category: "outdoors",
  },
  {
    id: "beckon",
    name: "Beckon",
    description:
      "Tasting menu in a tiny room. No sign on the door. The kind of meal you think about for weeks after.",
    tags: ["splurge", "date-night", "tasting-menu"],
    neighborhood: "RiNo",
    category: "restaurant",
  },
  {
    id: "ratio-beerworks",
    name: "Ratio Beerworks",
    description:
      "The patio is the move. Solid beer, good vibes, dogs everywhere. Peak Denver afternoon.",
    tags: ["beer", "patio", "dog-friendly", "casual"],
    neighborhood: "RiNo",
    category: "bar",
  },
  {
    id: "union-station",
    name: "Union Station",
    description:
      "More than a train station. The Great Hall is gorgeous, the Terminal Bar is a solid hang, and it anchors LoDo perfectly.",
    tags: ["landmark", "drinks", "architecture"],
    neighborhood: "LoDo",
    category: "attraction",
  },
  {
    id: "sweet-cow",
    name: "Sweet Cow Ice Cream",
    description:
      "Local ice cream done right. Rotating flavors, nothing too precious. The salted Oreo is life-changing if they have it.",
    tags: ["dessert", "family-friendly", "casual"],
    neighborhood: "LoHi",
    category: "shop",
  },
  {
    id: "cheesman-park",
    name: "Cheesman Park",
    description:
      "The best people-watching lawn in the city. Gorgeous pavilion, mountain views, and yes it used to be a cemetery. Character.",
    tags: ["outdoors", "views", "chill", "free"],
    neighborhood: "Capitol Hill",
    category: "outdoors",
  },
  {
    id: "work-and-class",
    name: "Work & Class",
    description:
      "Wood-fired everything. The brisket cornbread alone is worth the trip. Loud, communal, deeply satisfying.",
    tags: ["dinner", "wood-fired", "hearty"],
    neighborhood: "RiNo",
    category: "restaurant",
  },
];

export const allTags = [...new Set(places.flatMap((p) => p.tags))].sort();
export const allNeighborhoods = [
  ...new Set(places.map((p) => p.neighborhood).filter(Boolean)),
].sort();
