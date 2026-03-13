type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div id={id} className="max-w-3xl">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-8 text-stone-600 dark:text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}
