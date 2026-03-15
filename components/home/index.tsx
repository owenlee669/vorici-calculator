import Link from "next/link";
import Hero from "@/components/home/Hero";
import SectionHeading from "@/components/home/SectionHeading";
import {
  benchVsChromatic,
  comingSoonCards,
  exampleCards,
  faqItems,
  featurePillars,
  howItWorksPoints,
  howToUseSteps,
  taintedChromaticPoints,
} from "@/components/home/content";

export default function HomeComponent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Vorici Calculator",
    applicationCategory: "GameApplication",
    operatingSystem: "Web",
    description:
      "Calculate socket color odds and chromatic cost for Path of Exile gear.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />

      <section
        id="examples"
        className="w-full bg-stone-100/80 py-20 dark:bg-slate-900/60"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Result Library"
            title="Popular Vorici Calculator examples"
            description="This section plays the role of a V2-style result gallery. Instead of fake UGC, it surfaces high-frequency coloring scenarios that help visitors compare patterns before they start experimenting with the Vorici Calculator."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {exampleCards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              >
                <h3 className="text-2xl font-semibold text-stone-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-stone-600 dark:text-slate-300">
                  {card.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {card.stats.map((stat) => (
                    <li
                      key={stat}
                      className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700 dark:bg-slate-900 dark:text-slate-300"
                    >
                      {stat}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="How the Vorici Calculator works"
            description="The page follows the V2.0 structure from the Web.Cafe notes: first-screen utility, a real explanation layer for SEO, and result-oriented blocks that keep users exploring the same Vorici Calculator URL."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {howItWorksPoints.map((point, index) => (
              <div
                key={point}
                className="rounded-3xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400">
                  0{index + 1}
                </p>
                <p className="mt-4 text-lg leading-8 text-stone-700 dark:text-slate-300">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-base leading-8 text-stone-600 dark:text-slate-300">
            The probability model used here follows long-running community
            research rather than a black-box guess. If you want the historical
            baseline, review the{" "}
            <Link
              href="https://github.com/Siveran/siveran.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-amber-700 underline-offset-4 hover:underline dark:text-amber-400"
            >
              Siveran calculator source
            </Link>{" "}
            and the{" "}
            <Link
              href="https://www.pathofexile.com/forum/view-thread/761831/page/1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-amber-700 underline-offset-4 hover:underline dark:text-amber-400"
            >
              original Chromatic Orb probability spreadsheet
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="w-full bg-stone-100/80 py-20 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Use Flow"
                title="How to use the Vorici Calculator"
                description="Keep the path short. The point of the Vorici Calculator page is to reduce exploration time, not force users through a blog post before they can start."
              />
              <ol className="mt-10 grid gap-4">
                {howToUseSteps.map((step, index) => (
                  <li
                    key={step}
                    className="rounded-3xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950"
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400">
                      Step {index + 1}
                    </span>
                    <p className="mt-3 text-lg leading-8 text-stone-700 dark:text-slate-300">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <SectionHeading
                eyebrow="Method Choice"
                title="Vorici Calculator bench craft vs Chromatic spam"
                description="Visitors do not just want a probability table. They want to know what to do with it. This comparison section gives the Vorici Calculator page a conversion argument, not only an SEO paragraph."
              />
              <div className="mt-10 grid gap-4">
                {benchVsChromatic.map((column) => (
                  <div
                    key={column.title}
                    className="rounded-3xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
                  >
                    <h3 className="text-2xl font-semibold text-stone-900 dark:text-white">
                      {column.title}
                    </h3>
                    <ul className="mt-4 grid gap-3">
                      {column.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-2xl bg-stone-100 px-4 py-3 text-base leading-7 text-stone-700 dark:bg-slate-900 dark:text-slate-300"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Product Layer"
            title="How the Vorici Calculator can improve without hurting SEO"
            description="The source plans are directionally right about one thing: Vorici Calculator should become a decision tool, not stay a bare probability widget. The homepage can absorb the highest-value product cues while keeping keyword intent focused."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featurePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
              >
                <h3 className="text-2xl font-semibold text-stone-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-stone-600 dark:text-slate-300">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Off-Color Guide"
            title="Where the Jeweller's Method fits in Vorici Calculator"
            description="The Web.Cafe notes stress that a strong Vorici Calculator page should also educate enough to improve user trust and time on page. This section explains the main companion tactic without turning the page into a bloated article."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-lg leading-8 text-stone-700 dark:text-slate-300">
                The Jeweller&apos;s Method is useful when you need hard off-colors
                on an attribute-heavy base. In Vorici Calculator terms, this is
                the staged path where you avoid brute forcing every socket at
                once, keep the useful colors you already have, and reroll the
                newest socket as you move up and down the socket count.
              </p>
              <p className="mt-6 text-lg leading-8 text-stone-700 dark:text-slate-300">
                In practice, this matters most when an item strongly favors one
                color but your build needs the opposite. It is the clearest
                example of why a raw probability estimate is useful but not
                always the whole plan by itself.
              </p>
              <p className="mt-6 text-base leading-8 text-stone-600 dark:text-slate-300">
                For the underlying currency rule behind socket cycling, the{" "}
                <Link
                  href="https://www.poewiki.net/wiki/Jeweller%27s_Orb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-amber-700 underline-offset-4 hover:underline dark:text-amber-400"
                >
                  PoE Wiki entry for Jeweller&apos;s Orb
                </Link>{" "}
                is the cleanest reference point before you compare method cost.
              </p>
            </div>

            <div className="rounded-[2rem] bg-stone-950 p-8 text-stone-50">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                Quick example
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                STR helmet, target 3 blue and 1 green
              </h3>
              <ul className="mt-6 grid gap-4 text-base leading-7 text-stone-300">
                <li>Start from a lower socket count.</li>
                <li>Lock the hard colors you already hit.</li>
                <li>Reroll the newest socket instead of resetting the full item.</li>
                <li>
                  Use the calculator first so you know when brute force becomes
                  irrational.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-stone-100/80 py-20 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            <div>
              <SectionHeading
                eyebrow="Corrupted Gear"
                title="Tainted Chromatic deserves its own content lane"
                description="Corrupted recoloring belongs on its own future page because the decision model is different from normal socket coloring and does not need to dominate the homepage."
              />
              <div className="mt-8 grid gap-4">
                {taintedChromaticPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-3xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950"
                  >
                    <p className="text-base leading-7 text-stone-700 dark:text-slate-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="w-full bg-stone-100/80 py-20 dark:bg-slate-900/60"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Vorici Calculator FAQ"
            description="These answers support both user clarity and structured search understanding while keeping the homepage centered on the Vorici Calculator query."
          />

          <div className="mt-12 grid gap-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
              >
                <h3 className="text-xl font-semibold text-stone-900 dark:text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-base leading-7 text-stone-600 dark:text-slate-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="coming-soon" className="w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Related Guides"
            title="Two follow-up guides make the most sense"
            description="If the homepage performs, the next buildout should stay close to the same user intent: hard off-colors and corrupted recolors."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {comingSoonCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-dashed border-stone-300 bg-white p-6 dark:border-slate-700 dark:bg-slate-950"
              >
                <h3 className="text-2xl font-semibold text-stone-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-stone-600 dark:text-slate-300">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
