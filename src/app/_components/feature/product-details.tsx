"use client";
import { Fragment, useCallback, useMemo } from "react";
import Separator from "../ui/separator";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { cn } from "~/utils/utils";
import { useTranslation } from "~/app/i18n/client";
import COLORS from "public/assets/data/colors";
import { TFunction } from "i18next";
import Image from "next/image";
import DECOR_IMGS from "public/assets/decor";
import Link from "next/link";
import { Button } from "../ui/button";

interface Categories {
	lang: string;
	currentCategory: string | null;
	t: TFunction;
}

const Categories = ({ currentCategory, t }: Categories) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const categories = [
		{
			category: "specifications",
			name: t("product-details.specs"),
		},
		{
			category: "colors",
			name: t("product-details.colors"),
		},
		{
			category: "decorations",
			name: t("product-details.decor"),
		},
		{
			category: "glass",
			name: t("product-details.glass"),
		},
		{
			category: "accessories",
			name: t("product-details.accs"),
		},
		{
			category: "documentation",
			name: t("product-details.documentation"),
		},
	];

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);
			return params.toString();
		},
		[searchParams],
	);

	const categoryList = categories.map((item) => {
		return (
			<Fragment key={item.category}>
				<li
					onClick={() => {
						router.push(
							`${pathname}?${createQueryString("category", item.category)}`,
							{ scroll: false },
						);
					}}
					onKeyDown={() => {
						router.push(
							`${pathname}?${createQueryString("category", item.category)}`,
							{ scroll: false },
						);
					}}
					className={cn(
						"cursor-pointer",
						item.category === currentCategory
							? "font-semibold text-neutral-900"
							: "",
					)}
				>
					{item.name}
				</li>
				<Separator variant="vertical" className="h-16 basis-0.5" />
			</Fragment>
		);
	});
	return <>{categoryList}</>;
};

interface ProductDetails {
	lang: string;
	specs: string;
	accs: string;
}

const ProductDetails = ({ specs, accs, lang }: ProductDetails) => {
	const searchParams = useSearchParams();
	const { t } = useTranslation(lang, "components", {});
	const currentCategory = useMemo(() => {
		let currentCategory = searchParams.get("category");
		currentCategory = currentCategory ?? "specifications";
		return currentCategory;
	}, [searchParams]);

	return (
		<>
			<nav id="details">
				<Separator className="mt-8 sm:mt-4" />
				<ul className="flex flex-row flex-wrap items-center gap-x-2 text-neutral-500 text-sm">
					{<Categories t={t} lang={lang} currentCategory={currentCategory} />}
				</ul>
				<div className="backdrop-blur-xl" />
			</nav>
			<section className="gap-4 mb-6 px-4 w-full">
				{currentCategory === "specifications" && (
					<div
						className="lg:basis-1/2"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: specs }}
					/>
				)}
				{currentCategory === "colors" && (
					<>
						<section className="gap-4 grid grid-cols-2 lg:grid-cols-4">
							{COLORS.map((color) => {
								return (
									<div key={color.colorId + color.imageUrl}>
										<div className="relative rounded-lg w-full h-fit overflow-hidden">
											<img
												src={color.imageUrl}
												alt={`color ${color.colorId}`}
											/>
										</div>
										<p className="text-lg">{color.text}</p>
										<p className="text-sm">{color.colorId}</p>
										<p className="text-sm">{color.subText}</p>
									</div>
								);
							})}
						</section>
					</>
				)}
				{currentCategory === "decorations" && (
					<>
						<h1 className="pb-4 font-semibold text-lg">Decorations</h1>
						<ul className="gap-4 sm:gap-16 grid grid-cols-2 lg:grid-cols-4">
							{DECOR_IMGS.map((image) => (
								<li>
									<figure>
										<Image
											src={image.img}
											className="rounded-lg w-full h-64 object-center object-cover"
											alt="Possible decoration of the window"
										/>
									</figure>
									<div className="w-full whitespace-pre-wrap">
										<h1 className="font-semibold">{image.title}</h1>
										<p>{image.text}</p>
									</div>
								</li>
							))}
						</ul>
					</>
				)}
				{currentCategory === "accessories" && (
					<div
						className="lg:basis-1/2"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: accs }}
					/>
				)}
				{currentCategory === "glass" && (
					<>
						<h1 className="pb-2 font-semibold text-lg">Glass</h1>
						<h1 className="font-semibold text-base">Feautures</h1>
						<ul className="pb-4 pl-2">
							<li>
								<b>+</b> Standard insulated glass unit (48mm)
							</li>
							<li>
								<b>+</b> 3-layers with low-E selective coating
							</li>
							<li>
								<b>+</b> Argon gas
							</li>
							<li>
								<b>+</b> Grey Swiss pacer
							</li>
						</ul>
						<p className="pr-1 pb-2 font-semibold">
							For special glass information see link:
						</p>
						<Button variant={"outline"} className="rounded-full text-base">
							<Link href={"https://glasslt.com/en/products/"}>
								Choose glass
							</Link>
						</Button>
					</>
				)}
				{currentCategory === "documentation" && (
					<>
						<h1 className="font-semibold text-lg">Documentation</h1>
						<p className="pr-1 pb-2">
							Website is still being filled with content, for more information
							regarding documentation:
						</p>
						<Button variant={"outline"} className="rounded-full text-base">
							<Link href={`/${lang}/contacts`}>Contact us</Link>
						</Button>
					</>
				)}
			</section>
		</>
	);
};

export default ProductDetails;
