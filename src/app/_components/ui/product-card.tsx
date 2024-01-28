import { type ClassValue } from "clsx";
import { ArrowRight } from "lucide-react";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../../../utils/utils";

interface ProductCard {
  lang: string;
  src: StaticImport;
  alt: string;
  href: string;
  className?: ClassValue;
}
export default function ProductCard({
  lang,
  src,
  alt,
  href,
  className,
}: ProductCard) {
  return (
    <div
      className={cn(
        "relative flex h-96 w-72  flex-shrink-0 flex-col rounded-lg border-2 border-neutral-100 p-4 shadow-sm",
        className,
      )}
    >
      <Link href={`${href}`}>
        <ArrowRight className="absolute bottom-0 right-0 m-4" />
      </Link>
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={src}
          alt={alt}
          className="object-contain"
          fill
          sizes="10vw 100vw"
        />
      </div>
      <section>
        <h1 className="text-sm font-semibold">Fastkarm Vindu 40x50 (39x49)</h1>
        <p className="line-clamp-2 pb-8 pt-1 text-xs text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>
    </div>
  );
}
