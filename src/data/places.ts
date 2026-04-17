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
    id: "feral",
    name: "Feral Outdoor Supply",
    description:
      "Used outdoor goods — camping, hiking, climbing. Great spot to pick up gear without paying REI prices.",
    tags: ["outdoor-gear", "used", "local"],
    neighborhood: "Berkeley",
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
    neighborhood: "Five Points",
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
    neighborhood: "Boulder",
    category: "attraction",
  },
  {
    id: "international-church-of-cannabis",
    name: "International Church of Cannabis",
    description:
      "A kaleidoscopic, fully painted chapel sitting at the intersection of art and cannabis culture. Only in Denver.",
    tags: ["art", "quirky", "only-in-denver"],
    neighborhood: "Wash Park",
    category: "attraction",
  },
  {
    id: "meow-wolf",
    name: "Meow Wolf",
    description:
      "Immersive, interactive art at full tilt — a fantasy world you wander through rather than just look at. Bring friends.",
    tags: ["art", "immersive", "group-friendly"],
    neighborhood: "Sun Valley",
    category: "attraction",
  },
  {
    id: "stranahans",
    name: "Stranahan's Distillery Tour",
    description:
      "Tour Colorado's flagship whiskey distillery, learn the process, and taste the good stuff at the end.",
    tags: ["whiskey", "tour", "tasting"],
    neighborhood: "Lincoln Park",
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
    neighborhood: "Highland",
    address: "2215 W 32nd Ave, Denver, CO 80211",
    category: "restaurant",
  },
  {
    id: "family-jones",
    name: "Family Jones Spirit House",
    description:
      "Tasting room for a solid local distillery. Cocktails are thoughtful and the space is the right kind of dressed-up.",
    tags: ["cocktails", "distillery", "date-night"],
    neighborhood: "Highland",
    category: "bar",
  },
  {
    id: "spirit-hound",
    name: "Spirit Hound Distillers",
    description:
      "My favorite local distillery. The whiskey is the move.",
    tags: ["whiskey", "distillery", "local"],
    neighborhood: "Lyons",
    category: "bar",
  },
  {
    id: "thin-man",
    name: "Thin Man",
    description:
      "One of my favorite Denver bars. Quirky, charming, solid drinks that won't break your wallet.",
    tags: ["cocktails", "neighborhood", "casual"],
    neighborhood: "Uptown",
    category: "bar",
    featured: true,
  },
  {
    id: "cookery-myrtle-hill",
    name: "The Cookery at Myrtle Hill",
    description:
      "Top-three brunch spot in town. Stellar baked goods — stop by Devil's Food next door after — and generous pours.",
    tags: ["brunch", "baked-goods", "weekend"],
    neighborhood: "Wash Park",
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
    neighborhood: "Sunnyside",
    category: "coffee",
  },
  {
    id: "corvus",
    name: "Corvus Coffee Roasters",
    description:
      "My go-to local coffee chain. Several locations scattered around Denver, consistently excellent.",
    tags: ["coffee", "roaster", "local"],
    neighborhood: "Platt Park",
    category: "coffee",
    featured: true,
  },
  {
    id: "la-diabla",
    name: "La Diabla Pozole y Mezcal",
    description:
      "Really solid pozole and mezcal-forward drinks. An ideal chilly-day move.",
    tags: ["mexican", "pozole", "mezcal"],
    neighborhood: "Five Points",
    category: "restaurant",
  },
  {
    id: "little-machine",
    name: "Little Machine Beer",
    description:
      "One of my favorite microbreweries, right in the middle of the city. Parking is miserable, but the beer's worth it.",
    tags: ["beer", "brewery", "neighborhood"],
    neighborhood: "Jefferson Park",
    category: "bar",
  },
  {
    id: "bakery-four",
    name: "Bakery Four",
    description:
      "Stellar pastries. Get there early if you want the full selection — they sell out.",
    tags: ["bakery", "pastries", "morning"],
    neighborhood: "Berkeley",
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
    neighborhood: "Lincoln Park",
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
    neighborhood: "South Broadway",
    category: "bar",
    featured: true,
  },
  {
    id: "onefold",
    name: "Onefold",
    description:
      "My second-favorite breakfast burrito in town. The inside is cramped — grab it to go.",
    tags: ["breakfast-burrito", "breakfast", "casual"],
    neighborhood: "Uptown",
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
    neighborhood: "Highland",
    category: "restaurant",
    featured: true,
  },
  {
    id: "yacht-club",
    name: "Yacht Club",
    description:
      "Award-winning cocktail bar — and you can snag a gourmet hot dog while you're at it. Nautical vibes, no pretense.",
    tags: ["cocktails", "hot-dogs", "date-night"],
    neighborhood: "Cole",
    category: "bar",
  },
  {
    id: "ashkara",
    name: "Ash'Kara",
    description:
      "Wood-fired Middle Eastern from Alon Shaya. The pita is unreal and the lamb shoulder is a group-dinner showstopper.",
    tags: ["middle-eastern", "wood-fired", "group-friendly"],
    neighborhood: "RiNo",
    category: "restaurant",
  },
  {
    id: "safta",
    name: "Safta",
    description:
      "Israeli food done beautifully — also Alon Shaya. The hummus alone is a destination. Inside The Source Hotel.",
    tags: ["israeli", "brunch", "hummus"],
    neighborhood: "RiNo",
    category: "restaurant",
  },
  {
    id: "rich-spirit",
    name: "Rich Spirit",
    description:
      "Legit NY-style bagels in Denver — finally. Solid schmears, good coffee, and they sell out fast so don't sleep on it.",
    tags: ["bagels", "breakfast", "coffee"],
    neighborhood: "Wheat Ridge",
    category: "restaurant",
  },
  {
    id: "procession-coffee",
    name: "Procession Coffee",
    description:
      "Specialty coffee with real intention behind every cup. Clean space, knowledgeable baristas, and they roast their own.",
    tags: ["coffee", "specialty", "roaster"],
    neighborhood: "Ballpark",
    category: "coffee",
  },
  {
    id: "the-golden-mill",
    name: "The Golden Mill",
    description:
      "Massive food hall in Golden with self-pour beer and wine taps. Grab a pint, wander the vendors, sit by the creek.",
    tags: ["food-hall", "self-pour", "beer", "creek-side"],
    neighborhood: "Golden",
    category: "bar",
  },
  {
    id: "la-fillette",
    name: "La Fillette",
    description:
      "French bakery with killer sandwiches. The bread is the real star — everything on it just works. Pastries are great too.",
    tags: ["bakery", "sandwiches", "french", "pastries"],
    neighborhood: "Mayfair",
    category: "shop",
  },
  {
    id: "run-for-the-roses",
    name: "Run for the Roses",
    description:
      "Intimate cocktail bar with a bourbon-forward menu and a dark, romantic feel. Great for a slow evening drink.",
    tags: ["cocktails", "bourbon", "date-night"],
    neighborhood: "LoDo",
    address: "Run for the Roses, Denver, CO",
    category: "bar",
  },
  {
    id: "westbound-and-down",
    name: "Westbound & Down Brewing Company",
    description:
      "Excellent craft beer from the Idaho Springs crew, now with a Denver taproom. Great space, great beer.",
    tags: ["beer", "brewery", "casual"],
    neighborhood: "LoDo",
    address: "1617 Blake St, Denver, CO 80202",
    category: "bar",
  },
  {
    id: "poka-lola",
    name: "Poka Lola Social Club",
    description:
      "Bright, airy cocktail bar tucked inside The Source Hotel. Creative drinks, good energy, and a solid happy hour.",
    tags: ["cocktails", "happy-hour", "casual"],
    neighborhood: "RiNo",
    address: "Poka Lola Social Club, Denver, CO",
    category: "bar",
  },
  {
    id: "the-wild",
    name: "The Wild",
    description:
      "Coffee by day, cocktails by night. A dual-purpose spot in Boulder that does both well — cozy and worth lingering.",
    tags: ["cocktails", "coffee", "casual"],
    neighborhood: "Boulder",
    address: "The Wild, Boulder, CO",
    category: "bar",
  },
  {
    id: "pony-up",
    name: "Pony Up",
    description:
      "Honky-tonk bar with live music, cheap drinks, and a dance floor that actually gets used. No frills, big fun.",
    tags: ["live-music", "late-night", "dive"],
    neighborhood: "LoDo",
    address: "Pony Up, Denver, CO",
    category: "bar",
  },
  {
    id: "jovaninas",
    name: "Jovanina's Broken Italian",
    description:
      "Italian comfort food that doesn't play by the rules — creative pastas, bold flavors, and a fun atmosphere. The name says it all.",
    tags: ["italian", "pasta", "date-night"],
    neighborhood: "LoDo",
    address: "Jovanina's Broken Italian, Denver, CO",
    category: "restaurant",
  },
  {
    id: "garage-sale-vintage",
    name: "Garage Sale Vintage",
    description:
      "Curated vintage shop with a great eye — clothing, accessories, and home goods. The kind of place you always find something in.",
    tags: ["vintage", "clothing", "local"],
    neighborhood: "LoDo",
    address: "Garage Sale Vintage, Denver, CO",
    category: "shop",
  },
  {
    id: "globe-hall",
    name: "Globe Hall",
    description:
      "Underrated music venue with an intimate room and a great patio. The kind of place where you're ten feet from the band.",
    tags: ["live-music", "intimate", "neighborhood"],
    neighborhood: "Baker",
    address: "Globe Hall, Denver, CO",
    category: "attraction",
  },
  {
    id: "barcelona-wine-bar",
    name: "Barcelona Wine Bar",
    description:
      "Yeah, it's a chain — but it's a good one. Solid tapas, great wine list, and the patio is a vibe. No shame.",
    tags: ["wine", "tapas", "date-night", "patio"],
    neighborhood: "Ballpark",
    address: "Barcelona Wine Bar, Denver, CO",
    category: "bar",
  },
  {
    id: "birdcall",
    name: "Birdcall",
    description:
      "Local fast-food chain with solid fried chicken sandwiches. Quick, reliable, and way better than it has to be. Multiple locations around town.",
    tags: ["chicken", "fast-casual", "local"],
    category: "restaurant",
  },
  {
    id: "hop-alley",
    name: "Hop Alley",
    description:
      "Sichuan-leaning Chinese in a loud, fun room. The dan dan noodles are non-negotiable. Bring a group.",
    tags: ["chinese", "spicy", "group-friendly"],
    neighborhood: "RiNo",
    address: "Hop Alley, Denver, CO",
    category: "restaurant",
  },
  {
    id: "two-moons",
    name: "Two Moons Music Hall",
    description:
      "Has one of my favorite espresso martinis in town. Live music venue with a great bar — solid combo.",
    tags: ["live-music", "cocktails", "espresso-martini"],
    neighborhood: "RiNo",
    address: "2944 Larimer St, Denver, CO 80205",
    category: "bar",
  },
  {
    id: "crema-coffee",
    name: "Crema Coffee House",
    description:
      "Reliable neighborhood coffee shop with a warm atmosphere and solid espresso drinks. Good spot to post up and work.",
    tags: ["coffee", "work-friendly", "neighborhood"],
    neighborhood: "RiNo",
    address: "Crema Coffee House, Denver, CO",
    category: "coffee",
  },
  {
    id: "casa-bonita",
    name: "Casa Bonita",
    description:
      "The South Park episode was a documentary. Cliff divers, arcades, Black Bart's Cave — it's a theme park that happens to serve food. Revamped and actually good now.",
    tags: ["iconic", "only-in-denver", "group-friendly"],
    neighborhood: "Lakewood",
    address: "6715 W Colfax Ave, Lakewood, CO 80214",
    category: "attraction",
  },
];

export const allTags = [...new Set(places.flatMap((p) => p.tags))].sort();
export const allNeighborhoods = [
  ...new Set(places.map((p) => p.neighborhood).filter(Boolean)),
].sort();
