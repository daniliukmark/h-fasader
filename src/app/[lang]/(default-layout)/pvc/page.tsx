export const dynamic = "force-static";

import ProductCard from "~/app/_components/ui/product-card";
import BreadCrumbs from "../../../_components/ui/breadcrumbs";
import Separator from "~/app/_components/ui/separator";
import { api } from "~/trpc/server";
import { useTranslation } from "~/app/i18n";
import Image from "next/image";

import H_VINDUET from "public/windows/h-vinduet.jpg";

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
					<div className="flex flex-wrap items-center gap-x-8 gap-y-2 pb-4">
						<h1 className="font-semibold text-3xl">{t("header.title")}</h1>
						<figure className="inline-block w-40">
							<Image src={H_VINDUET} alt="H-Vinduet Logo" />
						</figure>
					</div>
					<p className="mb-4 max-w-4xl text-justify text-neutral-700 text-sm">
						{t("header.description")}
					</p>
				</section>
			</article>
			<Separator />
			<section>
				<div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 py-4">
					{sortedWindows.map((window) => {
						return (
							<ProductCard
								key={`${window.id}`}
								className="w-full h-96"
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
