"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type EditorialTileProps = {
  label: string;
  href: string;
  title: string;
  image: string;
  className?: string;
};

export function EditorialTile({ label, href, title, image, className }: EditorialTileProps) {
  const imageClassName = image.includes("massi-portrait")
    ? "object-cover object-[50%_18%]"
    : "object-cover";

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn("group relative overflow-hidden rounded-3xl border border-white/15", className)}
    >
      <Image src={image} alt={title} fill className={imageClassName} sizes="(max-width: 768px) 100vw, 50vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/20 transition duration-300 group-hover:from-black/70" />
      <Link href={href} className="absolute inset-0 flex flex-col justify-between p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose">
        <span className="w-fit rounded-full border border-white/35 bg-black/30 px-3 py-1 text-[10px] tracking-[0.2em] text-ink">{label}</span>
        <h2 className="max-w-sm font-serif text-2xl leading-tight text-ink">{title}</h2>
      </Link>
    </motion.article>
  );
}
