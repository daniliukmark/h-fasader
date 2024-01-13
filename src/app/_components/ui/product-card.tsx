import { ArrowRight } from "lucide-react";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface ProductCard {
  lang: string;
  src: StaticImport;
  alt: string;
  href: string;
}
export default function ProductCard({ lang, src, alt, href }: ProductCard) {
  return (
    <div className="relative flex h-96  w-72 flex-shrink-0 flex-col p-4 shadow-md">
      <Link href={`${href}`}>
        <ArrowRight className="absolute bottom-0 right-0 m-4" />
      </Link>
      <div className="relative aspect-square overflow-hidden">
        <Image src={src} alt={alt} fill sizes="10vw 100vw" />
      </div>
      <section>
        <h1 className="text-sm font-semibold">Fastkarm Vindu 40x50 (39x49)</h1>
        <p className="line-clamp-2 pt-1 text-xs text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>
    </div>
  );
}
