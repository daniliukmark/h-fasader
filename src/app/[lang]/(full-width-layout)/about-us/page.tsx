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
			<section className="md:min-h-[36rem] w-full block mx-auto  max-w-7xl">
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
						<h1 className="mb-2 text-3xl font-semibold">{t("header.title")}</h1>
						<p className="mb-4 max-w-xl text-sm text-neutral-600">
							{t("header.desc1")}
						</p>
						<p className="mb-4 max-w-xl text-sm text-neutral-600">
							{t("header.desc2")}
						</p>
						<p className="mb-4 max-w-xl text-sm text-neutral-600">
							{t("header.desc3")}
						</p>
						<figure className="relative mb-4 w-full min-w-full h-[24rem] overflow-hidden rounded-lg basis-1/2  ">
							<Image
								src={FACTORY_IMG}
								alt="An image of a H-fasader factory"
								className="object-cover object-bottom"
								fill
							/>
						</figure>
					</section>
				</article>
			</section>

			{/* <div className="absolute hidden md:flex left-0 w-full top-24 gap-8 pointer-events-none">
				<div className="basis-1/2" />
				<figure className="relative  flex-1 h-[30rem] basis-1/2 overflow-hidden rounded-lg ">
					<Image
						src={FACTORY_IMG}
						alt="An image of a H-fasader factory"
						className="object-left object-cover"
						fill
					/>
				</figure>
			</div> */}
		</>
	);
}
