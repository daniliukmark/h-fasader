import ProductCard from "~/app/_components/ui/product-card";
import BreadCrumbs from "../../../_components/ui/breadcrumbs";
import Separator from "~/app/_components/ui/separator";
import { api } from "~/trpc/server";
import { useTranslation } from "~/app/i18n";

interface PageProps {
	params: {
		lang: string;
	};
}

export default async function Page({ params: { lang } }: PageProps) {
	const { t } = await useTranslation(lang, "pvc-catalogue-page", {});
	const windows = await api.window.getAll.query({
		limit: 100,
		lang: lang,
		material: "pvc",
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
