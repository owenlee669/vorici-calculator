export type VoriciInput = {
  strength: number;
  dexterity: number;
  intelligence: number;
  sockets: number;
  red: number;
  green: number;
  blue: number;
};

export type SocketChances = {
  red: number;
  green: number;
  blue: number;
};

export type StrategyResult = {
  id: string;
  label: string;
  averageCost: number | null;
  successChance: number;
  averageAttempts: number;
  costPerTry: number | null;
  stdDeviation: number;
  guaranteed: {
    red: number;
    green: number;
    blue: number;
  };
  kind: "drop-rate" | "chromatic" | "vorici";
};

type Recipe = {
  id: string;
  label: string;
  red: number;
  green: number;
  blue: number;
  cost: number | null;
  kind: StrategyResult["kind"];
};

const RECIPES: Recipe[] = [
  { id: "drop-rate", label: "Drop Rate", red: 0, green: 0, blue: 0, cost: null, kind: "drop-rate" },
  { id: "chromatic", label: "Chromatic", red: 0, green: 0, blue: 0, cost: 1, kind: "chromatic" },
  { id: "1r", label: "Vorici 1R", red: 1, green: 0, blue: 0, cost: 4, kind: "vorici" },
  { id: "1g", label: "Vorici 1G", red: 0, green: 1, blue: 0, cost: 4, kind: "vorici" },
  { id: "1b", label: "Vorici 1B", red: 0, green: 0, blue: 1, cost: 4, kind: "vorici" },
  { id: "2r", label: "Vorici 2R", red: 2, green: 0, blue: 0, cost: 25, kind: "vorici" },
  { id: "2g", label: "Vorici 2G", red: 0, green: 2, blue: 0, cost: 25, kind: "vorici" },
  { id: "2b", label: "Vorici 2B", red: 0, green: 0, blue: 2, cost: 25, kind: "vorici" },
  { id: "1g1b", label: "Vorici 1G1B", red: 0, green: 1, blue: 1, cost: 15, kind: "vorici" },
  { id: "1r1b", label: "Vorici 1R1B", red: 1, green: 0, blue: 1, cost: 15, kind: "vorici" },
  { id: "1r1g", label: "Vorici 1R1G", red: 1, green: 1, blue: 0, cost: 15, kind: "vorici" },
  { id: "3r", label: "Vorici 3R", red: 3, green: 0, blue: 0, cost: 120, kind: "vorici" },
  { id: "3g", label: "Vorici 3G", red: 0, green: 3, blue: 0, cost: 120, kind: "vorici" },
  { id: "3b", label: "Vorici 3B", red: 0, green: 0, blue: 3, cost: 120, kind: "vorici" },
  { id: "2r1g", label: "Vorici 2R1G", red: 2, green: 1, blue: 0, cost: 100, kind: "vorici" },
  { id: "2r1b", label: "Vorici 2R1B", red: 2, green: 0, blue: 1, cost: 100, kind: "vorici" },
  { id: "1r2g", label: "Vorici 1R2G", red: 1, green: 2, blue: 0, cost: 100, kind: "vorici" },
  { id: "2g1b", label: "Vorici 2G1B", red: 0, green: 2, blue: 1, cost: 100, kind: "vorici" },
  { id: "1r2b", label: "Vorici 1R2B", red: 1, green: 0, blue: 2, cost: 100, kind: "vorici" },
  { id: "1g2b", label: "Vorici 1G2B", red: 0, green: 1, blue: 2, cost: 100, kind: "vorici" },
];

function factorial(value: number): number {
  let total = 1;
  for (let index = 2; index <= value; index += 1) {
    total *= index;
  }
  return total;
}

function combinationProbability(
  chances: SocketChances,
  red: number,
  green: number,
  blue: number
) {
  const totalSockets = red + green + blue;
  return (
    factorial(totalSockets) /
    (factorial(red) * factorial(green) * factorial(blue)) *
    Math.pow(chances.red, red) *
    Math.pow(chances.green, green) *
    Math.pow(chances.blue, blue)
  );
}

function fillUnspecifiedSockets(
  chances: SocketChances,
  red: number,
  green: number,
  blue: number,
  freeSockets: number,
  position = 1
): number {
  if (freeSockets > 0) {
    return (
      (position <= 1
        ? fillUnspecifiedSockets(chances, red + 1, green, blue, freeSockets - 1, 1)
        : 0) +
      (position <= 2
        ? fillUnspecifiedSockets(chances, red, green + 1, blue, freeSockets - 1, 2)
        : 0) +
      fillUnspecifiedSockets(chances, red, green, blue + 1, freeSockets - 1, 3)
    );
  }

  return combinationProbability(chances, red, green, blue);
}

function chromaticCollisionBonus(
  chances: SocketChances,
  target: { red: number; green: number; blue: number },
  freeSockets: number,
  rolled = { red: 0, green: 0, blue: 0 },
  position = 1
): number {
  if (
    rolled.red >= target.red &&
    rolled.green >= target.green &&
    rolled.blue >= target.blue
  ) {
    return 0;
  }

  if (freeSockets > 0) {
    return (
      (position <= 1
        ? chromaticCollisionBonus(
            chances,
            target,
            freeSockets - 1,
            { red: rolled.red + 1, green: rolled.green, blue: rolled.blue },
            1
          )
        : 0) +
      (position <= 2
        ? chromaticCollisionBonus(
            chances,
            target,
            freeSockets - 1,
            { red: rolled.red, green: rolled.green + 1, blue: rolled.blue },
            2
          )
        : 0) +
      chromaticCollisionBonus(
        chances,
        target,
        freeSockets - 1,
        { red: rolled.red, green: rolled.green, blue: rolled.blue + 1 },
        3
      )
    );
  }

  return (
    factorial(rolled.red + rolled.green + rolled.blue) /
    (factorial(rolled.red) * factorial(rolled.green) * factorial(rolled.blue)) *
    Math.pow(chances.red, rolled.red * 2) *
    Math.pow(chances.green, rolled.green * 2) *
    Math.pow(chances.blue, rolled.blue * 2)
  );
}

export function getColorChances(input: Pick<VoriciInput, "strength" | "dexterity" | "intelligence">): SocketChances {
  const requirements = [
    input.strength,
    input.dexterity,
    input.intelligence,
  ];
  const activeRequirements = requirements.filter((value) => value > 0).length;
  const totalRequirements = requirements.reduce((sum, value) => sum + value, 0);

  const toChance = (requirement: number) => {
    const maxOnColorChance = 0.9;
    const x = 5;
    const c = 5;

    if (activeRequirements === 1) {
      if (requirement > 0) {
        return (maxOnColorChance * (x + c + requirement)) / (totalRequirements + 3 * x + c);
      }

      return (1 - maxOnColorChance) / 2 + maxOnColorChance * (x / (totalRequirements + 3 * x + c));
    }

    if (activeRequirements === 2) {
      if (requirement > 0) {
        return (maxOnColorChance * requirement) / totalRequirements;
      }

      return 1 - maxOnColorChance;
    }

    if (activeRequirements === 3) {
      return requirement / totalRequirements;
    }

    return 1 / 3;
  };

  return {
    red: toChance(input.strength),
    green: toChance(input.dexterity),
    blue: toChance(input.intelligence),
  };
}

export function validateVoriciInput(input: VoriciInput) {
  if (input.sockets <= 0 || input.sockets > 6) {
    return "Sockets must be between 1 and 6.";
  }

  if (
    input.strength < 0 ||
    input.dexterity < 0 ||
    input.intelligence < 0
  ) {
    return "Requirements cannot be negative.";
  }

  if (
    input.red < 0 ||
    input.green < 0 ||
    input.blue < 0 ||
    input.red + input.green + input.blue !== input.sockets
  ) {
    return "Desired socket colors must add up to the total socket count.";
  }

  if (input.strength === 0 && input.dexterity === 0 && input.intelligence === 0) {
    return "At least one requirement value is needed to model socket colors.";
  }

  return null;
}

export function getVoriciStrategies(input: VoriciInput) {
  const validationError = validateVoriciInput(input);
  if (validationError) {
    return { error: validationError, chances: null, strategies: [] as StrategyResult[] };
  }

  const chances = getColorChances(input);
  const strategies = RECIPES.filter(
    (recipe) =>
      recipe.red <= input.red &&
      recipe.green <= input.green &&
      recipe.blue <= input.blue
  )
    .map((recipe) => {
      const freeSockets = input.sockets - (recipe.red + recipe.green + recipe.blue);
      const successChance = fillUnspecifiedSockets(
        chances,
        input.red - recipe.red,
        input.green - recipe.green,
        input.blue - recipe.blue,
        freeSockets
      );

      const adjustedChance =
        recipe.kind === "chromatic"
          ? successChance /
            (1 -
              chromaticCollisionBonus(chances, {
                red: input.red,
                green: input.green,
                blue: input.blue,
              }, input.sockets))
          : successChance;

      const averageAttempts = 1 / adjustedChance;
      const averageCost =
        recipe.cost == null ? null : recipe.cost / adjustedChance;

      return {
        id: recipe.id,
        label: recipe.label,
        averageCost,
        successChance: adjustedChance,
        averageAttempts,
        costPerTry: recipe.cost,
        stdDeviation: Math.sqrt(Math.max(1 - adjustedChance, 0) / (adjustedChance * adjustedChance)),
        guaranteed: {
          red: recipe.red,
          green: recipe.green,
          blue: recipe.blue,
        },
        kind: recipe.kind,
      } satisfies StrategyResult;
    })
    .sort((left, right) => {
      if (left.averageCost == null && right.averageCost == null) return 0;
      if (left.averageCost == null) return -1;
      if (right.averageCost == null) return 1;
      return left.averageCost - right.averageCost;
    });

  return { error: null, chances, strategies };
}
