export const dynamic = "force-static";

import Image from "next/image";
import FACTORY_IMG from "public/assets/h-fasader-factory copy 2.webp";
import BreadCrumbs from "~/app/_components/ui/breadcrumbs";
import { useTranslation } from "~/app/i18n";

import CERTIFICATES from "public/assets/certificates";

interface PageProps {
	params: {
		lang: string;
	};
}

export default async function Page({ params: { lang } }: PageProps) {
	const { t } = await useTranslation(lang, "about-us-page", {});

	return (
		<>
			<section className="block z-10 sm:flex gap-4 mx-auto w-full max-w-7xl h-full md:min-h-[36rem]">
				<article className="pr-4 md:basis-1/2">
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
						<p className="mb-8 max-w-xl text-justify text-sm">
							{t("header.desc3")}
						</p>
						<ul className="flex flex-wrap gap-x-4 gap-y-2 pb-8">
							{CERTIFICATES.map((certificate) => (
								<li className="inline-block border-2 border-gray-50 rounded-lg h-64 overflow-hidden">
									<Image
										src={certificate}
										className="w-auto h-full object-contain"
										alt="certificate, H-Fasader Baltic UAB"
									/>
								</li>
							))}
						</ul>
					</section>
				</article>
			</section>
			<div className="top-24 left-0 absolute md:flex gap-4 hidden pt-[4.5rem] w-full pointer-events-none">
				<div className="basis-1/2" />
				<figure className="relative flex-1 my-auto rounded-lg h-[28rem] overflow-hidden basis-1/2">
					<Image
						src={FACTORY_IMG}
						alt="An image of a city"
						className="object-left-bottom filter object-cover"
						fill
					/>
				</figure>
			</div>
		</>
	);
}
