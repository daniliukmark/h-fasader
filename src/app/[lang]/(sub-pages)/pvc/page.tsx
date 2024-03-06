export const dynamic = "force-static";

import ProductCard from "~/app/_components/ui/product-card";
import BreadCrumbs from "../../../_components/ui/breadcrumbs";
import Separator from "~/app/_components/ui/separator";
import { api } from "~/trpc/server";
import { useTranslation } from "~/app/i18n";
import { useMemo } from "react";

interface PageProps {
	params: {
		lang: string;
	};
}

export default async function Page({ params: { lang } }: PageProps) {
	const { t } = await useTranslation(lang, "pvc-catalogue-page", {});
	const windowOrder = [
		"h90_top-swing-two-handled-window",
		"h90_top-swing-window-one-handled",
		"softline-82_tilt-first-window-(vipp-drei)",
		"trend-85_tilt-first-window-(vipp-drei)_hidden-hinges",
		"h90_outward-opening-door",
		"softline-82_innward-openning-window",
		"hs_sliding-door_gealan",
		"hs-sliding-door_trend",
	];
	const windows = await api.window.getAll.query(
		{
			limit: 100,
			lang: lang,
			material: "pvc",
		},
		{},
	);

	const sortedWindows = windows.sort((a, b) => {
		const indexA = windowOrder.indexOf(a.id);
		const indexB = windowOrder.indexOf(b.id);
		return indexA - indexB;
	});
	return (
		<>
			<article>
				<BreadCrumbs>
					<BreadCrumbs.Item href={`/${lang}/`}>
						<h1>{t("breadcrumbs.home")}</h1>
					</BreadCrumbs.Item>
					<BreadCrumbs.Item href={`/${lang}/pvc`}>
						<h1>{t("breadcrumbs.pvc")}</h1>
					</BreadCrumbs.Item>
				</BreadCrumbs>
				<section>
					<h1 className="mb-2 text-3xl font-semibold">{t("header.title")}</h1>
					<p className="mb-4 max-w-4xl text-sm text-neutral-600">
						{t("header.description")}
					</p>
				</section>
			</article>
			<Separator />
			<section>
				<div className="grid grid-cols-1 gap-4 px-2 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{windows.map((window) => {
						console.log(window);
						return (
							<ProductCard
								key={`${window.id}`}
								className="h-96 w-full"
								title={`${window.translation[0]?.title}`}
								src={`${window.mainImage.url}`}
								desc={`${window.translation[0]?.desc}`}
								alt={`${window.translation[0]?.title} image`}
								href={`/${lang}/pvc/${window.id}`}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
}
