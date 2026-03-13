export const exampleCards = [
  {
    title: "3 Blue 1 Green on a STR Helmet",
    summary:
      "A classic off-color problem where the item base naturally fights your target colors.",
    stats: ["138 STR / 0 DEX / 0 INT", "4 sockets", "Target: 3B 1G"],
  },
  {
    title: "4 Red on a DEX/INT Chest",
    summary:
      "Hybrid bases make heavy red socket requests expensive unless you lock the hardest colors first.",
    stats: ["0 STR / 107 DEX / 98 INT", "6 sockets", "Target: 4R 1G 1B"],
  },
  {
    title: "2 Green 2 Blue on STR Gloves",
    summary:
      "A mid-range recolor where raw chromatic spam can be close to bench-assisted methods.",
    stats: ["95 STR / 0 DEX / 0 INT", "4 sockets", "Target: 2G 2B"],
  },
  {
    title: "5 Off-Colors on a Heavy Base",
    summary:
      "Useful for seeing when a direct recolor becomes unrealistic and a staged method is needed.",
    stats: ["180 STR / 0 DEX / 0 INT", "6 sockets", "Target: 4B 1G 1R"],
  },
];

export const howItWorksPoints = [
  "Socket colors are weighted by attribute requirements. Strength favors red, Dexterity favors green, and Intelligence favors blue.",
  "The calculator uses those weights to estimate how likely your exact socket combination is.",
  "For pure Chromatic Orb rolls, the average cost comes from the inverse of the success probability.",
  "A full strategy engine can then compare direct rolling against staged approaches such as color locking and socket manipulation.",
];

export const howToUseSteps = [
  "Enter the Strength, Dexterity, and Intelligence requirements from your item.",
  "Choose the total number of sockets on the item.",
  "Set how many red, green, and blue sockets you want.",
  "Review the probability preview, cost estimate, and then decide whether you need a more advanced bench plan.",
];

export const benchVsChromatic = [
  {
    title: "Bench crafting",
    points: [
      "Useful when you need to secure the hardest off-colors before rolling the remaining sockets.",
      "Best for extreme color requests on mismatched bases.",
      "Usually trades lower variance for a higher cost per attempt.",
    ],
  },
  {
    title: "Pure Chromatic spam",
    points: [
      "Simplest method when the target colors already fit the item base reasonably well.",
      "Best when the raw probability is not brutally low.",
      "Easy to estimate because the average cost is directly tied to the success chance.",
    ],
  },
];

export const faqItems = [
  {
    question: "What is a Vorici Calculator?",
    answer:
      "A Vorici Calculator estimates the odds and expected cost of rolling a specific socket color setup on a Path of Exile item.",
  },
  {
    question: "How do socket colors work in Path of Exile?",
    answer:
      "Each socket color is weighted by the item's attribute requirements. Strength leans red, Dexterity leans green, and Intelligence leans blue.",
  },
  {
    question: "Is bench crafting always cheaper?",
    answer:
      "No. Bench methods are strongest when you need difficult off-colors. If your target already matches the item base, direct Chromatic Orb rolls can be competitive.",
  },
  {
    question: "Does this page support 1 to 6 sockets?",
    answer:
      "Yes. The page layout and probability preview support common one- to six-socket scenarios.",
  },
  {
    question: "What is the Jeweller's Method?",
    answer:
      "It is a staged coloring approach where you manipulate socket counts to preserve useful colors while rerolling the newest sockets.",
  },
];

export const comingSoonCards = [
  {
    title: "Chromatic Calculator",
    description: "A tighter view for raw chromatic-only planning and quick cost comparisons.",
  },
  {
    title: "Socket Coloring Guide",
    description: "A practical reference for off-colors, hybrid bases, and common gearing patterns.",
  },
  {
    title: "Jeweller's Method Guide",
    description: "A step-by-step explanation of staged socket manipulation for hard recolors.",
  },
];
