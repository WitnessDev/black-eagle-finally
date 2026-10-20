export interface DestinationActivity {
  title: string;
  description: string;
  image: string;
}

export interface Destination {
  id: string;
  name: string;
  shortName: string;
  image: string;
  desc: string;
  details: string;
  highlights: string[];
  activities: DestinationActivity[];
}

export const destinations: Destination[] = [
  {
    id: "tarangire",
    name: "Tarangire National Park",
    shortName: "Tarangire",
    image: "/images/tarangire1.jpg",
    desc: "Explore baobab-dotted landscapes and large elephant herds in northern Tanzania.",
    details: "Tarangire is known for its ancient baobab trees, varied landscapes and seasonal wildlife concentrations along the Tarangire River. It pairs well with other parks on a northern Tanzania safari.",
    highlights: ["Elephant herds", "Ancient baobab trees", "Seasonal river wildlife"],
    activities: [
      { title: "Game drives", description: "Look for elephants and other wildlife across open plains and river habitats.", image: "/images/tarangire1.jpg" },
      { title: "Baobab landscapes", description: "See the park’s distinctive baobab trees and changing savannah scenery.", image: "/images/destinations/lions.jpeg" },
      { title: "Birdwatching", description: "Discover a variety of birdlife across the park’s different habitats.", image: "/images/destinations/manyara2.jpg" },
    ],
  },
  {
    id: "ngorongoro",
    name: "Ngorongoro Conservation Area",
    shortName: "Ngorongoro",
    image: "/images/ngorongoro-crater.jpg",
    desc: "Discover the dramatic crater landscape and its rich variety of wildlife.",
    details: "The Ngorongoro Conservation Area combines highland scenery with the remarkable Ngorongoro Crater. A crater game drive offers the chance to see a broad range of wildlife in a compact and striking landscape.",
    highlights: ["Ngorongoro Crater", "Highland scenery", "Exceptional wildlife viewing"],
    activities: [
      { title: "Crater game drive", description: "Explore the crater floor with a guide and look for its resident wildlife.", image: "/images/destinations/crater-game.jpeg" },
      { title: "Highland views", description: "Take in wide views across the crater and surrounding conservation area.", image: "/images/ngorongoro-crater.jpg" },
      { title: "Cultural experiences", description: "Learn about the communities and traditions of the wider conservation area.", image: "/images/destinations/culture.jpeg" },
    ],
  },
  {
    id: "serengeti",
    name: "Serengeti National Park",
    shortName: "Serengeti",
    image: "/images/hero-lions-tree.jpg",
    desc: "Experience vast plains, abundant wildlife and the seasonal Great Migration.",
    details: "The Serengeti is celebrated for its open plains, resident predators and the annual movement of wildebeest and zebra. Wildlife viewing varies by season and location, making a well-planned route especially valuable.",
    highlights: ["Open savannah plains", "Resident predators", "Seasonal Great Migration"],
    activities: [
      { title: "Wildlife game drives", description: "Explore the plains with a local guide and look for the Serengeti’s diverse wildlife.", image: "/images/hero-lions-tree.jpg" },
      { title: "Great Migration", description: "Plan around the seasonal movement of wildebeest and zebra herds.", image: "/images/elephants-herd.jpg" },
      { title: "Hot-air balloon safari", description: "Take in the landscape from above on a scheduled balloon flight.", image: "/images/destinations/hot-air-baloon.jpg" },
    ],
  },
  {
    id: "ndutu",
    name: "Ndutu",
    shortName: "Ndutu",
    image: "/images/ndutu.jpg",
    desc: "Visit the southern plains, known for seasonal calving and predator activity.",
    details: "Ndutu’s open grasslands and seasonal lakes form part of the southern Serengeti ecosystem. During the calving season, wildlife gathers across the plains, creating memorable opportunities for guided game viewing.",
    highlights: ["Seasonal calving", "Open southern plains", "Predator sightings"],
    activities: [
      { title: "Calving season", description: "See the southern plains when wildebeest calves arrive during the seasonal migration.", image: "/images/destinations/ndutu1.jpg" },
      { title: "Guided game drives", description: "Explore the plains and seasonal lakes with an experienced safari guide.", image: "/images/destinations/ndutu2.jpeg" },
      { title: "Birdlife and wetlands", description: "Look for birds around Ndutu’s seasonal lakes and wetland areas.", image: "/images/destinations/ndutu3.jpeg" },
    ],
  },
  {
    id: "zanzibar",
    name: "Zanzibar",
    shortName: "Zanzibar",
    image: "/images/destinations/zanzibar0.jpg",
    desc: "Unwind on the Indian Ocean coast with beaches, culture and island history.",
    details: "Zanzibar offers a relaxed coastal contrast to a mainland safari, with historic Stone Town, local spice heritage and Indian Ocean beaches. Activities and sea conditions vary with the season.",
    highlights: ["Indian Ocean beaches", "Historic Stone Town", "Spice and island culture"],
    activities: [
      { title: "Beach time", description: "Relax along the island’s Indian Ocean coastline and enjoy the sea.", image: "/images/destinations/zanzibar1.jpg" },
      { title: "Stone Town", description: "Explore the historic streets and architecture of Zanzibar’s old town.", image: "/images/destinations/zanzibar2.jpg" },
      { title: "Spice experiences", description: "Discover the island’s spice-growing heritage on a local visit.", image: "/images/destinations/zanzibar3.jpg" },
    ],
  },
  {
    id: "lake-manyara",
    name: "Lake Manyara National Park",
    shortName: "Lake Manyara",
    image: "/images/destinations/manyara2.jpg",
    desc: "Explore a compact park of lakeshore, woodland and escarpment landscapes.",
    details: "Lake Manyara National Park brings together a scenic lakeshore, groundwater forest and the Great Rift Valley escarpment. Its varied habitats support diverse wildlife and birdlife throughout the year.",
    highlights: ["Rift Valley escarpment", "Lakeshore and forest habitats", "Diverse birdlife"],
    activities: [
      { title: "Lakeshore wildlife", description: "Look for wildlife and waterbirds along the lake and surrounding habitats.", image: "/images/destinations/manyara2.jpg" },
      { title: "Forest game drive", description: "Travel through groundwater forest and open woodland with a guide.", image: "/images/chui.jpeg" },
      { title: "Rift Valley views", description: "Enjoy views of the escarpment and the changing landscapes around the park.", image: "/images/destinations/crater-game.jpeg" },
    ],
  },
];
