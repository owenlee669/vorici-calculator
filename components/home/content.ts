export const exampleCards = [
  {
    title: "3 Blue 1 Green on a STR Helmet",
    summary:
      "A classic example where the item base naturally fights your target colors.",
    stats: ["138 STR / 0 DEX / 0 INT", "4 sockets", "Target: 3B 1G"],
  },
  {
    title: "4 Red on a DEX/INT Chest",
    summary:
      "This scenario shows why hybrid bases make heavy red socket requests expensive unless you lock the hardest colors first.",
    stats: ["0 STR / 107 DEX / 98 INT", "6 sockets", "Target: 4R 1G 1B"],
  },
  {
    title: "2 Green 2 Blue on STR Gloves",
    summary:
      "A mid-range case where raw chromatic spam can be close to bench-assisted methods.",
    stats: ["95 STR / 0 DEX / 0 INT", "4 sockets", "Target: 2G 2B"],
  },
  {
    title: "5 Off-Colors on a Heavy Base",
    summary:
      "A useful check for when a direct recolor becomes unrealistic and a staged method is needed.",
    stats: ["180 STR / 0 DEX / 0 INT", "6 sockets", "Target: 4B 1G 1R"],
  },
];

export const howItWorksPoints = [
  "Vorici Calculator starts from socket color weights. Strength favors red, Dexterity favors green, and Intelligence favors blue.",
  "It uses those weights to estimate how likely your exact socket combination is on the chosen base.",
  "For pure Chromatic Orb rolls, the average cost comes from the inverse of the success probability.",
  "The strategy layer then compares direct rolling against staged approaches such as color locking and socket manipulation.",
];

export const howToUseSteps = [
  "Enter the Strength, Dexterity, and Intelligence requirements into Vorici Calculator.",
  "Choose the total number of sockets so it can model the right combination space.",
  "Set how many red, green, and blue sockets you want.",
  "Review the Vorici Calculator probability preview, cost estimate, and then decide whether you need a more advanced bench plan.",
];

export const featurePillars = [
  {
    title: "Clipboard import",
    description:
      "A serious Vorici Calculator should parse copied item text from Path of Exile so users do not have to retype attribute requirements by hand.",
  },
  {
    title: "Method comparison",
    description:
      "The winning UX is not a single probability output. It is a ranked set of ways to solve the same coloring problem at different cost profiles.",
  },
  {
    title: "Mobile-first inputs",
    description:
      "A large part of the audience checks craft costs while mapping. Inputs, presets, and results need to stay thumb-friendly on mobile.",
  },
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
      "Often the best method when the target colors already fit the item base reasonably well.",
      "Best when the raw probability is not brutally low.",
      "Easy to estimate because the average cost is directly tied to the success chance.",
    ],
  },
];

export const taintedChromaticPoints = [
  "Tainted Chromatic Orbs ignore the item's attribute bias, so each socket color is effectively weightless on corrupted gear and outside the normal Vorici Calculator flow.",
  "That makes corrupted recolors a separate decision flow and a separate SEO opportunity, not just a footnote under the main calculator.",
  "The right product move is a dedicated guide and calculator variant for corrupted items rather than forcing that logic into a tiny FAQ answer.",
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
      "Each socket color is modeled from the item's attribute requirements. Strength leans red, Dexterity leans green, and Intelligence leans blue.",
  },
  {
    question: "Is bench crafting always cheaper?",
    answer:
      "No. Bench methods are strongest when you need difficult off-colors. If your target already matches the item base, direct Chromatic Orb rolls can be competitive.",
  },
  {
    question: "Does this page support 1 to 6 sockets?",
    answer:
      "Yes. Vorici Calculator supports common one- to six-socket scenarios in the current page flow and probability preview.",
  },
  {
    question: "What is the Jeweller's Method?",
    answer:
      "It is a staged coloring approach where you manipulate socket counts to preserve useful colors while rerolling the newest sockets.",
  },
];

export const comingSoonCards = [
  {
    title: "Tainted Chromatic Guide",
    description: "A separate flow for corrupted recolors, 1/3 style odds, and endgame recolor decisions.",
  },
  {
    title: "Jeweller's Method Guide",
    description: "A step-by-step explanation of staged socket manipulation for hard recolors.",
  },
];
