import CalculatorPanel from "@/components/home/CalculatorPanel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.22),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(190,24,93,0.14),_transparent_30%),linear-gradient(180deg,_rgba(245,158,11,0.08),_rgba(248,245,239,0))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.14),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(251,113,133,0.12),_transparent_30%),linear-gradient(180deg,_rgba(148,163,184,0.08),_rgba(2,6,23,0))]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-400">
            Path of Exile Utility
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-6xl lg:text-7xl">
            Vorici Calculator
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-stone-700 dark:text-slate-300">
            Vorici Calculator helps you find the cheapest way to roll socket
            colors in Path of Exile. Use this Vorici Calculator to estimate
            chromatic odds, see how hostile an item base is, and plan harder
            off-colors without guessing.
          </p>
          <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-stone-500 dark:text-slate-400">
            One Vorici Calculator page. One keyword. One place to start
            coloring gear.
          </p>
        </div>

        <CalculatorPanel />
      </div>
    </section>
  );
}
