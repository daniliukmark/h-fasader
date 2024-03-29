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

const Categories = ({ lang, currentCategory, t }: Categories) => {
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
			category: "blueprints",
			name: t("product-details.blueprints"),
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
				<Separator variant="vertical" className="h-16 basis-0.5 " />
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
				<ul className="flex flex-row flex-wrap items-center gap-x-2 text-sm text-neutral-500">
					{<Categories t={t} lang={lang} currentCategory={currentCategory} />}
				</ul>
			</nav>
			<section className="mb-6  w-full gap-4 px-4">
				{currentCategory === "specifications" && (
					<div
						className="lg:basis-1/2"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: specs }}
					/>
				)}
				{currentCategory === "colors" && (
					<>
						<section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
							{COLORS.map((color) => {
								return (
									<div key={color.colorId + color.imageUrl}>
										<div className="w-full h-fit relative overflow-hidden rounded-lg">
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
						<h1 className="text-lg font-semibold pb-2">Decorations</h1>
						<ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
							{DECOR_IMGS.map((image) => (
								<li>
									<figure>
										<Image
											src={image}
											className="object-cover object-center h-64 w-full rounded-lg"
											alt="Possible decoration of the window"
										/>
									</figure>
								</li>
							))}
						</ul>
					</>
				)}
				{currentCategory === "accessories" && (
					<>
						<div
							className="lg:basis-1/2"
							// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
							dangerouslySetInnerHTML={{ __html: accs }}
						/>
					</>
				)}
				{currentCategory === "glass" && (
					<>
						<h1 className="text-lg font-semibold">Glass</h1>
						<p className="pb-2 pr-1">
							Glass.LT website has information about the glass we offer: <br />
						</p>
						<Button variant={"outline"} className="rounded-full text-base">
							<Link href={"https://glasslt.com/en/products/"}>
								Go to Glass.lt
							</Link>
						</Button>
					</>
				)}
				{currentCategory === "blueprints" && (
					<>
						<h1 className="text-lg font-semibold">Blueprints</h1>
						<p className="pb-2 pr-1">
							Website is still being filled with content, for more information
							regarding blueprints:
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
