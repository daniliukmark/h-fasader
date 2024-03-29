export const dynamic = "force-static";

import { Mail, Phone, Smartphone } from "lucide-react";
import Image from "next/image";
import OSLO_HQ from "public/assets/oslo-hq.webp";
import BreadCrumbs from "~/app/_components/ui/breadcrumbs";
import Separator from "~/app/_components/ui/separator";
import { useTranslation } from "~/app/i18n";

interface PageProps {
	params: {
		lang: string;
	};
}

export default async function Page({ params: { lang } }: PageProps) {
	const { t } = await useTranslation(lang, "contacts-page", {});
	return (
		<>
			<section className="md:min-h-[36rem] w-full block md:flex mx-auto max-w-7xl gap-8 z-10">
				<article className="basis-1/2">
					<BreadCrumbs>
						<BreadCrumbs.Item href={`/${lang}/`}>
							<h1>{t("breadcrumbs.home")}</h1>
						</BreadCrumbs.Item>
						<BreadCrumbs.Item href={`/${lang}/pvc`}>
							<h1>{t("breadcrumbs.contacts")}</h1>
						</BreadCrumbs.Item>
					</BreadCrumbs>
					<section>
						<h1 className="mb-2 text-3xl font-semibold">
							{t("contacts.header")}
						</h1>
						<h2 className="mb-2 text-3xl ">H-fasader Baltic UAB</h2>
						<article className="flex flex-col text-sm gap-2 sm:gap-4 sm:flex-row pb-4 ">
							<div>
								<p className="pb-2">
									<span className="text-gray-500">
										{t("contacts.address")} <br />
									</span>
									Aviacijos g. 26, LT-77103 <br />
									Šiauliai. Lietuva
								</p>
								<p className="pb-2">
									<span className="text-gray-500">
										{t("contacts.company-code")}
										<br />
									</span>
									302480330
								</p>
								<p className="pb-2">
									<span className="text-gray-500">
										{t("contacts.bank")}
										<br />
									</span>
									Swedbank AB
								</p>
								<p className="pb-2">
									<span className="text-gray-500">
										{t("contacts.iban")}
										<br />
									</span>
									LT97 7300 0101 5889 4301
								</p>
							</div>
							<Separator
								variant="vertical"
								className="h-52 self-center hidden sm:block"
							/>
							<div>
								<p className="text-gray-500 pb-1  ">I - V: 8:00 - 17:00</p>
								<p className="pb-2 flex items-center gap-2">
									<Phone className="w-6 h-6 inline" />
									<span>+370 41 583390</span>
								</p>
								<p className="pb-2 flex items-center gap-2">
									<Smartphone className="w-6 h-6 " />
									<span>+370 618 59 084</span>
								</p>
								<p className="pb-2 flex items-center gap-2">
									<Mail className="w-6 h-6 inline " />
									<span>info@pluswindows.eu</span>
								</p>
								<p className="pb-2 flex items-center gap-2">
									<Mail className="w-6 h-6 inline " />
									<span>admin@pluswindows.eu</span>
								</p>
							</div>
						</article>
						<figure className="relative md:hidden flex-1 h-64 overflow-hidden rounded-lg basis-1/2  ">
							<Image
								src={OSLO_HQ}
								alt="An image of a city"
								className="object-cover"
								fill
							/>
						</figure>
					</section>
				</article>
			</section>
			<div className="absolute hidden md:flex left-0 w-full top-24 gap-8 pointer-events-none">
				<div className="basis-1/2" />
				<figure className="relative flex-1 h-[40rem] basis-1/2  overflow-hidden rounded-lg  ">
					<Image
						src={OSLO_HQ}
						alt="An image of a city"
						className="object-cover filter"
						fill
					/>
				</figure>
			</div>
		</>
	);
}
