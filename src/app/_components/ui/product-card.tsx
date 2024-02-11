import { type ClassValue } from "clsx";
import { ArrowRight } from "lucide-react";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../../../utils/utils";
import { title } from "process";

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
				<div className="relative aspect-square overflow-hidden h-64">
					<Image
						src={src}
						alt={alt}
						className="object-contain"
						fill
						sizes="10vw 100vw"
					/>
				</div>
			</Link>
			<section>
				<h1 className="text-sm font-semibold truncate">{title}</h1>
				<p className="line-clamp-2 max-h-32 pt-1 pr-4 text-xs text-neutral-600">
					{desc}
				</p>
			</section>
			<Link href={`${href}`}>
				<ArrowRight className="absolute bottom-0 right-0 m-4" />
			</Link>
		</div>
	);
}
