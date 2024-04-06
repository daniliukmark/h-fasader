export const dynamic = "force-static";

import Image from "next/image";
import FACTORY_IMG from "public/assets/h-fasader-factory.webp";
import BreadCrumbs from "~/app/_components/ui/breadcrumbs";
import { useTranslation } from "~/app/i18n";
interface PageProps {
	params: {
		lang: string;
	};
}
export default async function Page({ params: { lang } }: PageProps) {
	const { t } = await useTranslation(lang, "about-us-page", {});
	return (
		<>
			<section className="block mx-auto w-full max-w-7xl md:min-h-[36rem]">
				<article className="pr-4">
					<BreadCrumbs>
						<BreadCrumbs.Item href={`/${lang}/`}>
							<h1>{t("breadcrumbs.home")}</h1>
						</BreadCrumbs.Item>
						<BreadCrumbs.Item href={`/${lang}/pvc`}>
							<h1>{t("breadcrumbs.about-us")}</h1>
						</BreadCrumbs.Item>
					</BreadCrumbs>
					<section className="w-full">
						<h1 className="mb-2 pb-2 font-semibold text-3xl">
							{t("header.title")}
						</h1>
						<p className="mb-4 max-w-xl text-justify text-sm">
							{t("header.desc1")}
						</p>
						<p className="mb-4 max-w-xl text-justify text-sm">
							{t("header.desc2")}
						</p>
						<p className="mb-4 max-w-xl text-justify text-sm">
							{t("header.desc3")}
						</p>
						<figure className="relative mb-4 rounded-lg w-full min-w-full h-[24rem] overflow-hidden basis-1/2">
							<Image
								src={FACTORY_IMG}
								alt="An image of a H-fasader factory"
								className="object-bottom object-cover"
								fill
							/>
						</figure>
					</section>
				</article>
			</section>
		</>
	);
}
