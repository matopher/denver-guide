import { Place } from "./types";

export const places: Place[] = [
  {
    id: "bohemian-biergarten",
    name: "Bohemian Biergarten",
    description:
      "A bit of a drive up to Boulder, but every German-style dish is ridiculously good and genuinely authentic. Worth the trip.",
    tags: ["beer", "german", "group-friendly"],
    neighborhood: "Boulder",
    address: "2017 13th St, Boulder, CO 80302",
    category: "bar",
    featured: true,
  },
  {
    id: "la-loteria-taqueria",
    name: "La Loteria Taqueria",
    description:
      "Casual Mexican fare on South Broadway. The kind of weeknight spot you end up at more than you mean to.",
    tags: ["mexican", "casual", "tacos"],
    neighborhood: "Baker",
    address: "42 S Broadway, Denver, CO 80209",
    category: "restaurant",
  },
  {
    id: "blue-pan-pizza",
    name: "Blue Pan Pizza",
    description:
      "Detroit-style pizza, and some of the best pizza in the city full stop. Crispy, cheesy, the corners are the point.",
    tags: ["pizza", "detroit-style", "casual"],
    neighborhood: "West Highland",
    address: "3930 W 32nd Ave, Denver, CO 80212",
    category: "restaurant",
    featured: true,
  },
  {
    id: "linger",
    name: "Linger",
    description:
      "Was once a mortuary, now a restaurant with a rooftop bar offering killer views and street food from around the world.",
    tags: ["rooftop", "views", "global", "date-night"],
    neighborhood: "LoHi",
    address: "2030 W 30th Ave, Denver, CO 80211",
    category: "restaurant",
  },
  {
    id: "feral",
    name: "Feral Outdoor Supply",
    description:
      "Used outdoor goods — camping, hiking, climbing. Great spot to pick up gear without paying REI prices.",
    tags: ["outdoor-gear", "used", "local"],
    category: "shop",
  },
  {
    id: "adrift",
    name: "Adrift",
    description:
      "Tiki bar serving tropical cocktails and Asian-fusion bites in a loud, beachy, completely un-Denver atmosphere. Commit to the bit.",
    tags: ["tiki", "cocktails", "date-night"],
    neighborhood: "Baker",
    category: "bar",
    featured: true,
  },
  {
    id: "cart-driver",
    name: "Cart-Driver",
    description:
      "Cozy RiNo spot with wood-fired pizza, house-made pasta, and a good local beer list. Always a solid call.",
    tags: ["pizza", "pasta", "casual", "date-night"],
    neighborhood: "RiNo",
    address: "2500 Larimer St, Denver, CO 80205",
    category: "restaurant",
  },
  {
    id: "redeemer-pizza",
    name: "Redeemer Pizza",
    description:
      "Wood-fired pizza and craft beer. Low-key, reliable, the kind of place that does one thing well.",
    tags: ["pizza", "beer", "casual"],
    category: "restaurant",
  },
  {
    id: "bao-brewhouse",
    name: "Bao Brewhouse",
    description:
      "Cozy taproom in Aurora doing inventive bao buns alongside a rotating craft beer list. Worth the drive.",
    tags: ["beer", "bao", "casual"],
    neighborhood: "Aurora",
    address: "13971 E Exposition Ave, Aurora, CO 80012",
    category: "bar",
  },
  {
    id: "death-and-co",
    name: "Death & Co",
    description:
      "A unique and unforgettable dining experience with expertly crafted cocktails. The NYC transplant that actually earned its spot — go on a weeknight.",
    tags: ["cocktails", "date-night", "moody"],
    neighborhood: "RiNo",
    category: "bar",
    featured: true,
  },
  {
    id: "savannah-bee-mead-tasting",
    name: "Mead Tasting @ Savannah Bee Company",
    description:
      "Taste your way through Colorado-made meads while learning more about honey and bees than you expected to care about.",
    tags: ["mead", "tasting", "quirky"],
    category: "attraction",
  },
  {
    id: "international-church-of-cannabis",
    name: "International Church of Cannabis",
    description:
      "A kaleidoscopic, fully painted chapel sitting at the intersection of art and cannabis culture. Only in Denver.",
    tags: ["art", "quirky", "only-in-denver"],
    category: "attraction",
  },
  {
    id: "meow-wolf",
    name: "Meow Wolf",
    description:
      "Immersive, interactive art at full tilt — a fantasy world you wander through rather than just look at. Bring friends.",
    tags: ["art", "immersive", "group-friendly"],
    category: "attraction",
  },
  {
    id: "stranahans",
    name: "Stranahan's Distillery Tour",
    description:
      "Tour Colorado's flagship whiskey distillery, learn the process, and taste the good stuff at the end.",
    tags: ["whiskey", "tour", "tasting"],
    category: "attraction",
  },
  {
    id: "red-rocks",
    name: "Red Rocks Amphitheatre",
    description:
      "The iconic outdoor amphitheater. Go for a concert, but also go for a sunrise workout or a random Tuesday hike — the geology alone is worth it.",
    tags: ["concerts", "iconic", "views", "hiking", "outdoors"],
    neighborhood: "Morrison",
    category: "outdoors",
    featured: true,
  },
  {
    id: "manitou-incline",
    name: "Manitou Incline",
    description:
      "A nearly 2,000-step ladder straight up a mountain. Brutal, beautiful, and the views at the top earn themselves.",
    tags: ["hiking", "views", "intense"],
    neighborhood: "Manitou Springs",
    category: "outdoors",
  },
  {
    id: "idaho-springs-disc-golf",
    name: "Idaho Springs Ghost Town Disc Golf",
    description:
      "A disc golf course set among the ruins of an old mining town. Casual round, scenic mountain backdrop, a little history thrown in.",
    tags: ["disc-golf", "scenic", "quirky"],
    neighborhood: "Idaho Springs",
    category: "outdoors",
  },
  {
    id: "mt-evans-byway",
    name: "Mt. Evans Scenic Byway",
    description:
      "Highest paved road in North America. White-knuckle drive to the top with jaw-dropping Rocky Mountain views the whole way.",
    tags: ["scenic-drive", "views", "mountains"],
    category: "outdoors",
  },
  {
    id: "sweet-cow",
    name: "Sweet Cow Ice Cream",
    description:
      "Local ice cream done right. Rotating flavors, nothing too precious — the salted Oreo is life-changing if they have it.",
    tags: ["dessert", "family-friendly", "casual"],
    neighborhood: "LoHi",
    address: "2628 W 32nd Ave, Denver, CO 80211 (+ other locations)",
    category: "shop",
  },
  {
    id: "little-man-ice-cream",
    name: "Little Man Ice Cream",
    description:
      "Local ice cream, charming walk-up atmosphere, giant milk-can building you can't miss. Expect a line — it's worth it.",
    tags: ["dessert", "iconic", "family-friendly"],
    neighborhood: "LoHi",
    category: "shop",
  },
  {
    id: "uncle",
    name: "Uncle",
    description:
      "Trendy, welcoming Asian fusion — ramen-forward menu that holds up against just about anything in town.",
    tags: ["ramen", "asian", "dinner"],
    neighborhood: "RiNo",
    address: "2616 Walnut St, Denver, CO 80205",
    category: "restaurant",
  },
  {
    id: "family-jones",
    name: "Family Jones Spirit House",
    description:
      "Tasting room for a solid local distillery. Cocktails are thoughtful and the space is the right kind of dressed-up.",
    tags: ["cocktails", "distillery", "date-night"],
    category: "bar",
  },
  {
    id: "spirit-hound",
    name: "Spirit Hound Distillers",
    description:
      "My favorite local distillery. The whiskey is the move.",
    tags: ["whiskey", "distillery", "local"],
    category: "bar",
  },
  {
    id: "thin-man",
    name: "Thin Man",
    description:
      "One of my favorite Denver bars. Quirky, charming, solid drinks that won't break your wallet.",
    tags: ["cocktails", "neighborhood", "casual"],
    category: "bar",
    featured: true,
  },
  {
    id: "cookery-myrtle-hill",
    name: "The Cookery at Myrtle Hill",
    description:
      "Top-three brunch spot in town. Stellar baked goods — stop by Devil's Food next door after — and generous pours.",
    tags: ["brunch", "baked-goods", "weekend"],
    category: "restaurant",
  },
  {
    id: "stowaway-kitchen",
    name: "Stowaway Kitchen",
    description:
      "My favorite brunch in RiNo. Japanese-inspired, solid waffles, bright little room.",
    tags: ["brunch", "japanese", "weekend"],
    neighborhood: "RiNo",
    category: "restaurant",
  },
  {
    id: "new-image-artys",
    name: "New Image Brewing + Arty's Burgers",
    description:
      "Favorite burger-and-beer combo in Denver by a long shot. Olde Town Arvada, worth the drive.",
    tags: ["burger", "beer", "casual"],
    neighborhood: "Olde Town Arvada",
    category: "bar",
    featured: true,
  },
  {
    id: "our-mutual-friend",
    name: "Our Mutual Friend",
    description:
      "Probably my favorite brewery in RiNo. Fun little space, great indoor/outdoor seating, solid beer selection.",
    tags: ["beer", "brewery", "patio"],
    neighborhood: "RiNo",
    category: "bar",
  },
  {
    id: "huckleberry",
    name: "Huckleberry Roasters",
    description:
      "Probably my favorite local coffee chain if you want a solid latte. Locations have been multiplying lately — in a good way.",
    tags: ["coffee", "latte", "local"],
    category: "coffee",
  },
  {
    id: "corvus",
    name: "Corvus Coffee Roasters",
    description:
      "My go-to local coffee chain. Several locations scattered around Denver, consistently excellent.",
    tags: ["coffee", "roaster", "local"],
    category: "coffee",
    featured: true,
  },
  {
    id: "la-diabla",
    name: "La Diabla Pozole y Mezcal",
    description:
      "Really solid pozole and mezcal-forward drinks. An ideal chilly-day move.",
    tags: ["mexican", "pozole", "mezcal"],
    category: "restaurant",
  },
  {
    id: "little-machine",
    name: "Little Machine Beer",
    description:
      "One of my favorite microbreweries, right in the middle of the city. Parking is miserable, but the beer's worth it.",
    tags: ["beer", "brewery", "neighborhood"],
    category: "bar",
  },
  {
    id: "bakery-four",
    name: "Bakery Four",
    description:
      "Stellar pastries. Get there early if you want the full selection — they sell out.",
    tags: ["bakery", "pastries", "morning"],
    category: "shop",
  },
  {
    id: "twansburger",
    name: "Twansburger",
    description:
      "Top-two burger in Denver for my money. Started by a former Wolf's Tailor cook — two menu items, both bangers if you like crispy smashburgers and perfect fries. Located in Finn's Manor; grab a drink while you're there.",
    tags: ["burger", "smashburger", "casual"],
    neighborhood: "RiNo",
    address: "Finn's Manor, Denver, CO",
    category: "restaurant",
  },
  {
    id: "el-taco-de-mexico",
    name: "El Taco De Mexico",
    description:
      "My favorite breakfast burrito in Denver. It won a James Beard award. 'Nuff said.",
    tags: ["breakfast-burrito", "mexican", "iconic"],
    category: "restaurant",
    featured: true,
  },
  {
    id: "denver-central-market",
    name: "Denver Central Market",
    description:
      "Fun food hall in RiNo with a broad spread of options — coffee, oysters, pasta, pastries, drinks. Good for groups who can't agree.",
    tags: ["food-hall", "group-friendly", "variety"],
    neighborhood: "RiNo",
    address: "2669 Larimer St, Denver, CO 80205",
    category: "restaurant",
  },
  {
    id: "brutal-poodle",
    name: "The Brutal Poodle",
    description:
      "Heavy metal bar serving mouthwatering bites and cocktails. Get the Gwarled Cheese.",
    tags: ["dive", "cocktails", "metal", "late-night"],
    category: "bar",
    featured: true,
  },
  {
    id: "onefold",
    name: "Onefold",
    description:
      "My second-favorite breakfast burrito in town. The inside is cramped — grab it to go.",
    tags: ["breakfast-burrito", "breakfast", "casual"],
    category: "restaurant",
  },
  {
    id: "bonfire-burritos",
    name: "Bonfire Burritos",
    description:
      "Top-three breakfast burrito in town. Locations in Golden and Arvada.",
    tags: ["breakfast-burrito", "breakfast", "casual"],
    neighborhood: "Golden / Arvada",
    category: "restaurant",
  },
  {
    id: "kawa-ni",
    name: "Kawa Ni",
    description:
      "Cozy, upscale Japanese pub food and drinks. Great experience top to bottom.",
    tags: ["japanese", "izakaya", "date-night"],
    category: "restaurant",
    featured: true,
  },
];

export const allTags = [...new Set(places.flatMap((p) => p.tags))].sort();
export const allNeighborhoods = [
  ...new Set(places.map((p) => p.neighborhood).filter(Boolean)),
].sort();
