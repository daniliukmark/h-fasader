import { type ClassValue } from "clsx";
import { ArrowRight } from "lucide-react";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../../../utils/utils";

interface ProductCardProps {
	src: StaticImport | string;
	alt: string;
	href: string;
	title: string;
	desc: string;
	className?: ClassValue;
}
export default function ProductCard({
	src,
	alt,
	href,
	title,
	desc,
	className,
}: ProductCardProps) {
	return (
		<div
			className={cn(
				"relative flex h-fit w-72 flex-shrink-0 flex-col rounded-lg border-2 border-neutral-100 p-4 shadow-sm",
				className,
			)}
		>
			<Link href={`${href}`}>
				<div className="relative w-full h-64 aspect-square overflow-hidden">
					<Image
						src={src}
						alt={alt}
						className="object-contain"
						fill
						unoptimized
						sizes="(max-width: 768px) 99vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			</Link>
			<section>
				<Link href={`${href}`}>
					<h1
						className="font-semibold text-sm"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: title }}
					/>
				</Link>
				<p className="pt-1 pr-4 max-h-32 text-neutral-600 text-xs line-clamp-2">
					{desc}
				</p>
			</section>
			<Link href={`${href}`}>
				<ArrowRight className="right-0 bottom-0 absolute m-4" />
			</Link>
		</div>
	);
}
