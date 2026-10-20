
export interface DestinationActivity {
  title: string;
  description?: string;
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
    image: "/images/destinations/tarangire/tembo.jpg",
    desc: "Known for great elephant herds, ancient baobab trees and wildlife along the Tarangire River.",
    details:
      "Tarangire National Park is famous for its large elephant herds, iconic baobab trees and wildlife that gathers around the Tarangire River during the dry season. Visitors may see elephants, giraffes, zebras, wildebeest, lions and a rich variety of birds. It is a rewarding destination for game drives and photography.",
    highlights: [
      "Large elephant herds",
      "Ancient baobab trees",
      "Tarangire River wildlife",
      "Birdwatching and game drives",
    ],
    activities: [
      {
        title: "Day game drives",
        description:
          "Explore the savannah with a guide and look for elephants, giraffes, zebras and predators.",
        image: "/images/destinations/tarangire/ostrich.jpg",
      },
      {
        title: "Wildlife photography",
        description:
          "Capture elephant herds, baobab silhouettes and dramatic African landscapes.",
        image: "/images/destinations/tarangire/tembo.jpg",
      },
      {
        title: "termites",
        image: "/images/destinations/tarangire/termites.jpg",
      },
    ],
  },

  {
    id: "ngorongoro",
    name: "Ngorongoro Conservation Area",
    shortName: "Ngorongoro",
    image: "/images/ngorongoro-crater.jpg",
    desc: "A spectacular volcanic caldera with rich wildlife and sweeping highland views.",
    details:
      "The Ngorongoro Conservation Area is best known for the Ngorongoro Crater, a vast volcanic caldera with a remarkable concentration of wildlife. On a crater game drive, visitors may spot lions, elephants, buffalo, hippos and the endangered black rhino. The surrounding highlands also offer dramatic scenery and Maasai cultural heritage.",
    highlights: [
      "Ngorongoro Crater game drives",
      "Excellent wildlife viewing",
      "Chance to see black rhinos",
      "Highland scenery and Maasai heritage",
    ],
    activities: [
      {
        title: "Crater game drive",
        description:
          "Descend into the crater to look for wildlife across grasslands, wetlands and woodland.",
        image: "/images/destinations/game.jpg",
      },
      {
        title: "Scenic photography",
        description:
          "Photograph crater viewpoints, highland scenery and wildlife from permitted areas.",
        image: "/images/destinations/lions.jpeg",
      },
      {
        title: "Guided nature and cultural walks",
        description:
          "Discover highland landscapes and learn about local culture through approved guided experiences.",
        image: "/images/destinations/kalitu.jpg",
      },
    ],
  },

  {
    id: "serengeti",
    name: "Serengeti National Park",
    shortName: "Serengeti",
    image: "/images/hero-lions-tree.jpg",
    desc: "Vast open plains, iconic predators and seasonal movements of wildebeest and zebra.",
    details:
      "Serengeti National Park is renowned for its endless plains, big-cat sightings and the Great Migration of wildebeest and zebra. Wildlife viewing changes with the season and the movement of the herds. Game drives offer opportunities to look for lions, cheetahs, leopards, elephants, giraffes and many other species across the park's varied landscapes.",
    highlights: [
      "Great Wildebeest Migration",
      "Lions, cheetahs and leopards",
      "Wide-open savannah landscapes",
      "Year-round game drives",
    ],
    activities: [
      {
        title: "Guided game drives",
        description:
          "Search the vast plains for big cats, elephants, giraffes and other wildlife.",
        image: "/images/destinations/game-drive-in-serengeti-national-park.jpg",
      },
      {
        title: "Great Migration viewing",
        description:
          "Plan around seasonal herd movements; sightings and locations change throughout the year.",
        image:
          "/images/itinerary-days/tarangire-ndutu-serengeti-day-06.jpg",
      },
      {
        title: "Hot-air balloon safari",
        description:
          "On available routes, see the plains from the air during a sunrise flight.",
        image: "/images/destinations/hot-air-baloon.jpg",
      },
    ],
  },

  {
    id: "ndutu",
    name: "Ndutu",
    shortName: "Ndutu",
    image: "/images/destinations/clving1.jpg",
    desc: "Seasonal grasslands famed for wildebeest calving and excellent predator viewing.",
    details:
      "Ndutu lies in the southern Serengeti ecosystem and is especially popular during the wildebeest calving season, generally around the green season. Large herds gather on the nutrient-rich grasslands, attracting predators such as lions, cheetahs and hyenas. The experience depends on seasonal wildlife movements and conditions.",
    highlights: [
      "Wildebeest calving season",
      "Predator sightings",
      "Open grassland scenery",
      "Seasonal photography opportunities",
    ],
    activities: [
      {
        title: "Calving-season game drives",
        description:
          "Look for newborn wildebeest and the predators that follow the herds, especially in the seasonal calving period.",
        image: "/images/destinations/central-serengeti-safari.jpg",
      },
      {
        title: "Predator tracking",
        description:
          "With an experienced guide, look for lions, cheetahs and hyenas across open plains.",
        image: "/images/destinations/ndutu4.jpeg",
      },
      {
        title: "Safari photography",
        description:
          "Capture dramatic wildlife encounters and wide grassland landscapes.",
        image: "/images/destinations/ndutu3.jpeg",
      },
    ],
  },

  {
    id: "zanzibar",
    name: "Zanzibar",
    shortName: "Zanzibar",
    image: "/images/destinations/zanzibar0.jpg",
    desc: "An island escape with Indian Ocean beaches, Swahili culture and historic Stone Town.",
    details:
      "Zanzibar combines white-sand beaches and turquoise Indian Ocean waters with a distinctive Swahili culture. Visitors can explore historic Stone Town, discover spice farms, enjoy boat trips and snorkelling, or simply relax beside the sea. It is a popular way to unwind before or after a wildlife safari.",
    highlights: [
      "White-sand beaches",
      "Historic Stone Town",
      "Spice tours and Swahili culture",
      "Snorkelling and ocean excursions",
    ],
    activities: [
      {
        title: "Beach and ocean time",
        description:
          "Relax on the coast or arrange a boat trip with a local operator.",
        image: "/images/destinations/zanzibar1.jpg",
      },
      {
        title: "Stone Town walking tour",
        description:
          "Explore historic streets, architecture and the island's Swahili heritage with a guide.",
        image: "/images/destinations/zanzibar2.jpg",
      },
      {
        title: "Spice and marine excursions",
        description:
          "Discover spice-growing traditions or book snorkelling where conditions and operators allow.",
        image: "/images/destinations/zanzibar3.jpg",
      },
    ],
  },

  {
    id: "lake-manyara",
    name: "Lake Manyara National Park",
    shortName: "Lake Manyara",
    image: "/images/itinerary-days/classic-safari-day-02.jpg",
    desc: "A scenic Great Rift Valley lake, forest habitats and diverse birdlife and wildlife.",
    details:
      "Lake Manyara National Park sits beneath the Great Rift Valley escarpment and includes groundwater forest, open plains and the lake itself. It is known for birdlife, including flamingos when conditions are suitable, as well as elephants, giraffes, baboons and other wildlife. The park offers a varied landscape within a relatively compact area.",
    highlights: [
      "Great Rift Valley views",
      "Rich birdlife",
      "Groundwater forest",
      "Elephants, giraffes and baboons",
    ],
    activities: [
      {
        title: "Game drives",
        description:
          "Travel through forest and open habitats to look for elephants, giraffes and other wildlife.",
        image: "/images/destinations/usari (20).jpeg",
      },
      {
        title: "Birdwatching",
        description:
          "Watch for waterbirds and other species around the lake and woodland habitats.",
        image: "/images/destinations/usari (6).jpeg",
      },
      {
        title: "Canopy walkway and viewpoints",
        description:
          "Where open, enjoy elevated forest views and scenic stops around the park.",
        image: "/images/destinations/manyara2.jpg",
      },
    ],
  },
];
