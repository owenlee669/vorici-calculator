"use client";

import { Button } from "@/components/ui/button";
import { getVoriciStrategies, type VoriciInput } from "@/lib/vorici";
import { useMemo, useState } from "react";

type FormState = VoriciInput;

const presets: Array<{ label: string; values: FormState }> = [
  {
    label: "STR helm: 3B 1G",
    values: {
      strength: 138,
      dexterity: 0,
      intelligence: 0,
      sockets: 4,
      red: 0,
      green: 1,
      blue: 3,
    },
  },
  {
    label: "Hybrid chest: 4R 1G 1B",
    values: {
      strength: 0,
      dexterity: 107,
      intelligence: 98,
      sockets: 6,
      red: 4,
      green: 1,
      blue: 1,
    },
  },
  {
    label: "Gloves: 2G 2B",
    values: {
      strength: 95,
      dexterity: 0,
      intelligence: 0,
      sockets: 4,
      red: 0,
      green: 2,
      blue: 2,
    },
  },
];

const initialState: FormState = presets[0].values;

function formatPercent(value: number) {
  return `${(value * 100).toFixed(value < 0.01 ? 3 : 2)}%`;
}

function formatCost(value: number | null) {
  if (value == null || !Number.isFinite(value)) {
    return "No orb cost";
  }

  return `${Math.round(value).toLocaleString()} Chromatic Orbs`;
}

function formatAttempts(value: number) {
  if (!Number.isFinite(value)) {
    return "N/A";
  }

  return value >= 100 ? Math.round(value).toLocaleString() : value.toFixed(1);
}

function strategySummary(
  guaranteed: { red: number; green: number; blue: number },
  label: string
) {
  if (label === "Chromatic") {
    return "Roll all sockets with Chromatic Orbs.";
  }

  if (label === "Drop Rate") {
    return "Reference odds for naturally dropped socket colors.";
  }

  const parts = [
    guaranteed.red ? `${guaranteed.red}R` : "",
    guaranteed.green ? `${guaranteed.green}G` : "",
    guaranteed.blue ? `${guaranteed.blue}B` : "",
  ].filter(Boolean);

  return `Guarantee ${parts.join(" ")} first, then roll the remaining sockets.`;
}

export default function CalculatorPanel() {
  const [form, setForm] = useState<FormState>(initialState);

  const analysis = useMemo(() => getVoriciStrategies(form), [form]);
  const bestPaidStrategy = analysis.strategies.find(
    (strategy) => strategy.kind !== "drop-rate"
  );
  const alternativeStrategies = analysis.strategies.filter(
    (strategy) => strategy.id !== bestPaidStrategy?.id && strategy.kind !== "drop-rate"
  );

  function updateField(key: keyof FormState, value: string) {
    const nextValue = Math.max(0, Number(value || 0));
    setForm((current) => ({
      ...current,
      [key]: key === "sockets" ? Math.min(6, nextValue) : nextValue,
    }));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
      <div className="rounded-3xl border border-stone-200 bg-white/90 p-6 shadow-[0_24px_70px_rgba(120,53,15,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => setForm(preset.values)}
              className="rounded-full border border-stone-300 px-3 py-1 text-sm text-stone-700 transition hover:border-amber-700 hover:text-amber-800 dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-500 dark:hover:text-amber-300"
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["strength", "Strength Requirement"],
            ["dexterity", "Dexterity Requirement"],
            ["intelligence", "Intelligence Requirement"],
            ["sockets", "Total Sockets"],
            ["red", "Desired Red"],
            ["green", "Desired Green"],
            ["blue", "Desired Blue"],
          ].map(([key, label]) => (
            <label
              key={key}
              className="grid gap-2 text-sm font-medium text-stone-700 dark:text-slate-300"
            >
              {label}
              <input
                type="number"
                min={0}
                max={key === "sockets" ? 6 : undefined}
                value={form[key as keyof FormState]}
                onChange={(event) =>
                  updateField(key as keyof FormState, event.target.value)
                }
                className="h-12 rounded-2xl border border-stone-300 bg-stone-50 px-4 text-base text-stone-900 outline-none transition focus:border-amber-700 focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-amber-500"
              />
            </label>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button className="rounded-full bg-amber-700 px-6 text-white hover:bg-amber-800">
            Calculate
          </Button>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => setForm(initialState)}
          >
            Reset
          </Button>
        </div>

        {analysis.error && (
          <p className="mt-4 text-sm text-red-600 dark:text-red-400">
            {analysis.error}
          </p>
        )}
      </div>

      <div className="rounded-3xl border border-stone-200 bg-stone-950 p-6 text-stone-50 shadow-[0_24px_70px_rgba(15,23,42,0.28)] dark:border-slate-800">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-amber-300">
              Strategy Engine
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Classic Vorici model
            </h2>
          </div>
          <div className="rounded-full border border-white/15 px-3 py-1 text-xs text-stone-300">
            Beta
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-stone-300">
          This result panel compares raw Chromatic rolls with the classic Vorici
          bench-color recipes used by the historical community calculator model.
        </p>

        {analysis.chances && (
          <div className="mt-6 rounded-2xl bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-stone-400">
              Base Socket Odds
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <div>
                <p className="text-sm text-stone-400">Red</p>
                <p className="mt-1 text-xl font-semibold text-red-300">
                  {formatPercent(analysis.chances.red)}
                </p>
              </div>
              <div>
                <p className="text-sm text-stone-400">Green</p>
                <p className="mt-1 text-xl font-semibold text-emerald-300">
                  {formatPercent(analysis.chances.green)}
                </p>
              </div>
              <div>
                <p className="text-sm text-stone-400">Blue</p>
                <p className="mt-1 text-xl font-semibold text-sky-300">
                  {formatPercent(analysis.chances.blue)}
                </p>
              </div>
            </div>
          </div>
        )}

        {bestPaidStrategy && (
          <div className="mt-4 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-amber-200">
              Best Paid Strategy
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              {bestPaidStrategy.label}
            </h3>
            <p className="mt-3 text-sm leading-6 text-stone-200">
              {strategySummary(bestPaidStrategy.guaranteed, bestPaidStrategy.label)}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-stone-400">
                  Average Cost
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  {formatCost(bestPaidStrategy.averageCost)}
                </p>
              </div>
              <div className="rounded-2xl bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-stone-400">
                  Success Chance
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  {formatPercent(bestPaidStrategy.successChance)}
                </p>
              </div>
              <div className="rounded-2xl bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-stone-400">
                  Expected Attempts
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  {formatAttempts(bestPaidStrategy.averageAttempts)}
                </p>
              </div>
              <div className="rounded-2xl bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-stone-400">
                  Cost Per Try
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  {formatCost(bestPaidStrategy.costPerTry)}
                </p>
              </div>
            </div>
          </div>
        )}

        {alternativeStrategies.length > 0 && (
          <div className="mt-4 rounded-2xl border border-white/10 p-4">
            <p className="text-sm font-medium text-stone-100">
              Alternative strategies
            </p>
            <div className="mt-3 grid gap-3">
              {alternativeStrategies.slice(0, 4).map((strategy) => (
                <div
                  key={strategy.id}
                  className="grid gap-2 rounded-2xl bg-white/5 p-4 sm:grid-cols-[1.2fr_0.8fr_0.8fr]"
                >
                  <div>
                    <p className="font-medium text-stone-100">{strategy.label}</p>
                    <p className="mt-1 text-sm leading-6 text-stone-300">
                      {strategySummary(strategy.guaranteed, strategy.label)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-stone-400">
                      Avg Cost
                    </p>
                    <p className="mt-1 text-sm font-semibold text-stone-100">
                      {formatCost(strategy.averageCost)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-stone-400">
                      Chance
                    </p>
                    <p className="mt-1 text-sm font-semibold text-stone-100">
                      {formatPercent(strategy.successChance)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 rounded-2xl border border-white/10 p-4">
          <p className="text-sm font-medium text-stone-100">Current request</p>
          <p className="mt-2 text-sm leading-6 text-stone-300">
            {form.sockets} sockets with {form.red} red, {form.green} green, and{" "}
            {form.blue} blue on an item with {form.strength} STR,{" "}
            {form.dexterity} DEX, and {form.intelligence} INT requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
