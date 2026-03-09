type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-rose">{eyebrow}</p> : null}
      <h1 className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl">{title}</h1>
      {description ? <p className="mt-4 text-base leading-relaxed text-stone">{description}</p> : null}
    </div>
  );
}
