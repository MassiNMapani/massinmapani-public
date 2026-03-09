import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type PressPhotoStripItem = {
  src: string;
  alt: string;
};

type PressPhotoStripProps = {
  title?: string;
  items: readonly PressPhotoStripItem[];
};

export function PressPhotoStrip({ title = "Press / Speaker", items }: PressPhotoStripProps) {
  return (
    <section aria-label={title} className="space-y-3">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">{title}</p>
      <div
        className={cn(
          "flex snap-x snap-mandatory flex-nowrap gap-3 overflow-x-auto pb-1",
          "md:overflow-visible md:snap-none",
          "no-scrollbar"
        )}
      >
        {items.map((item, index) => (
          <Link
            key={item.src}
            href="/press"
            className="group block w-32 shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-card-sm transition md:w-36"
            aria-label={`${item.alt} ${index + 1}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={160}
              height={96}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 50vw, 160px"
              quality={65}
              className="h-[72px] w-full object-cover opacity-90 grayscale-[20%] transition duration-200 group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:opacity-100 group-focus-visible:grayscale-0 md:h-[88px]"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
