import type { Language } from "../translations";

interface LocalizedDestinationCopy {
  summaries: Record<string, string>;
  details: string;
  highlights: [string, string, string];
  activities: [
    { title: string; description: string },
    { title: string; description: string },
    { title: string; description: string },
  ];
}

export const destinationsTranslations: Record<
  Exclude<Language, "en">,
  LocalizedDestinationCopy
> = {
  de: {
    summaries: {
      tarangire: "Entdecken Sie die von Baobabs geprägte Landschaft und große Elefantenherden im Norden Tansanias.",
      ngorongoro: "Erleben Sie die eindrucksvolle Kraterlandschaft und ihre vielfältige Tierwelt.",
      serengeti: "Erkunden Sie weite Ebenen, eine artenreiche Tierwelt und die saisonale Große Migration.",
      ndutu: "Besuchen Sie die südlichen Ebenen, die für die saisonale Kalbungszeit und Raubtiere bekannt sind.",
      zanzibar: "Entspannen Sie an der Küste des Indischen Ozeans mit Stränden, Kultur und Inselgeschichte.",
      "lake-manyara": "Entdecken Sie einen vielseitigen Park mit Seeufer, Wald und Landschaften am Grabenbruch.",
    },
    details: "Entdecken Sie {destination} mit erfahrenen lokalen Guides. Aktivitäten hängen von Jahreszeit, Wetter und Verfügbarkeit ab.",
    highlights: ["Landschaften und Natur", "Geführte Erlebnisse", "Lokale Kultur"],
    activities: [
      { title: "Landschaften entdecken", description: "Erkunden Sie die Natur und die besonderen Landschaften dieses Reiseziels." },
      { title: "Natur erleben", description: "Entdecken Sie die Umgebung mit einem erfahrenen lokalen Guide." },
      { title: "Lokale Erlebnisse", description: "Lernen Sie die Besonderheiten und die Kultur der Region kennen." },
    ],
  },
  es: {
    summaries: {
      tarangire: "Explora los paisajes de baobabs y las grandes manadas de elefantes del norte de Tanzania.",
      ngorongoro: "Descubre el impresionante paisaje del cráter y su variada fauna.",
      serengeti: "Recorre extensas llanuras, abundante fauna y la Gran Migración estacional.",
      ndutu: "Visita las llanuras del sur, conocidas por la época estacional de cría y la presencia de depredadores.",
      zanzibar: "Descansa en la costa del océano Índico entre playas, cultura e historia isleña.",
      "lake-manyara": "Explora un parque diverso con orillas de lago, bosques y paisajes del Gran Valle del Rift.",
    },
    details: "Descubre {destination} con guías locales experimentados. Las actividades dependen de la temporada, el clima y la disponibilidad.",
    highlights: ["Paisajes y naturaleza", "Experiencias guiadas", "Cultura local"],
    activities: [
      { title: "Explorar paisajes", description: "Descubre la naturaleza y los paisajes característicos de este destino." },
      { title: "Disfrutar de la naturaleza", description: "Explora los alrededores con un guía local experimentado." },
      { title: "Experiencias locales", description: "Conoce las particularidades y la cultura de la región." },
    ],
  },
  fr: {
    summaries: {
      tarangire: "Découvrez les paysages ponctués de baobabs et les grands troupeaux d’éléphants du nord de la Tanzanie.",
      ngorongoro: "Explorez le spectaculaire cratère et la grande diversité de sa faune.",
      serengeti: "Parcourez de vastes plaines, une faune abondante et la Grande Migration saisonnière.",
      ndutu: "Visitez les plaines du sud, réputées pour la saison des naissances et la présence de prédateurs.",
      zanzibar: "Détendez-vous sur la côte de l’océan Indien entre plages, culture et histoire insulaire.",
      "lake-manyara": "Découvrez un parc aux paysages variés, entre lac, forêt et escarpement de la vallée du Rift.",
    },
    details: "Découvrez {destination} avec des guides locaux expérimentés. Les activités dépendent de la saison, de la météo et des disponibilités.",
    highlights: ["Paysages et nature", "Expériences guidées", "Culture locale"],
    activities: [
      { title: "Explorer les paysages", description: "Découvrez la nature et les paysages caractéristiques de cette destination." },
      { title: "Au cœur de la nature", description: "Explorez les environs avec un guide local expérimenté." },
      { title: "Expériences locales", description: "Découvrez les particularités et la culture de la région." },
    ],
  },
  it: {
    summaries: {
      tarangire: "Scopri i paesaggi punteggiati di baobab e i grandi branchi di elefanti della Tanzania settentrionale.",
      ngorongoro: "Ammira lo spettacolare paesaggio del cratere e la sua ricca fauna.",
      serengeti: "Esplora vaste pianure, una fauna abbondante e la Grande Migrazione stagionale.",
      ndutu: "Visita le pianure meridionali, note per la stagione dei parti e la presenza di predatori.",
      zanzibar: "Rilassati sulla costa dell’Oceano Indiano tra spiagge, cultura e storia dell’isola.",
      "lake-manyara": "Scopri un parco variegato tra rive lacustri, foreste e paesaggi della Rift Valley.",
    },
    details: "Scopri {destination} con guide locali esperte. Le attività dipendono dalla stagione, dal meteo e dalla disponibilità.",
    highlights: ["Paesaggi e natura", "Esperienze guidate", "Cultura locale"],
    activities: [
      { title: "Esplora i paesaggi", description: "Scopri la natura e i paesaggi caratteristici di questa destinazione." },
      { title: "A contatto con la natura", description: "Esplora i dintorni con una guida locale esperta." },
      { title: "Esperienze locali", description: "Scopri le caratteristiche e la cultura della regione." },
    ],
  },
  zh: {
    summaries: {
      tarangire: "探索坦桑尼亚北部的猴面包树景观和成群的大象。",
      ngorongoro: "欣赏壮观的火山口景观及其丰富多样的野生动物。",
      serengeti: "探索辽阔草原、丰富的野生动物和季节性大迁徙。",
      ndutu: "探访坦桑尼亚南部平原，感受季节性产仔期和捕食者活动。",
      zanzibar: "在印度洋海岸享受海滩、当地文化和岛屿历史。",
      "lake-manyara": "探索湖岸、林地与东非大裂谷景观交织的多样化公园。",
    },
    details: "在经验丰富的当地向导带领下探索{destination}。活动安排可能受季节、天气和当地供应情况影响。",
    highlights: ["自然景观", "向导陪同体验", "当地文化"],
    activities: [
      { title: "探索自然景观", description: "欣赏目的地独特的自然风光与周边景色。" },
      { title: "亲近自然", description: "在经验丰富的当地向导陪同下探索周边区域。" },
      { title: "当地体验", description: "了解该地区的特色与当地文化。" },
    ],
  },
};
