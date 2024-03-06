"use client";
import { Fragment, useCallback, useMemo } from "react";
import Separator from "../ui/separator";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { cn } from "~/utils/utils";
import Link from "next/link";
import { Button } from "~/app/_components/ui/button";
import { useTranslation } from "~/app/i18n/client";

interface Categories {
	lang: string;
	currentCategory: string | null;
}

const Categories = ({ lang, currentCategory }: Categories) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { t } = useTranslation(lang, "components", {});

	const categories = useMemo(() => {
		return [
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
				category: "drawings",
				name: t("product-details.blueprints"),
			},
		];
	}, [t]);

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
					{<Categories lang={lang} currentCategory={currentCategory} />}
				</ul>
			</nav>
			<section className="mb-6  w-full gap-4 px-4">
				{currentCategory === "specifications" && (
					<div
						className="lg:basis-1/2"
						dangerouslySetInnerHTML={{ __html: specs }}
					/>
				)}
				{currentCategory === "accessories" && (
					<div
						className="lg:basis-1/2"
						dangerouslySetInnerHTML={{ __html: accs }}
					/>
				)}
				{currentCategory === "colors" && (
					<>
						<p>
							See our websites for more information and available colors: <br />
							<Link href="https://www.hfasader.no/byggevarer/fargevalg/fargevalg-pvc/">
								<Button className="p-0" variant={"link"}>
									https://www.hfasader.no/byggevarer/fargevalg/fargevalg-pvc/
								</Button>
							</Link>
						</p>
					</>
				)}
			</section>
		</>
	);
};

export default ProductDetails;
