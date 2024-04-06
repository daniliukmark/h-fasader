export const dynamic = "force-static";

import { Mail, Phone, Smartphone } from "lucide-react";
import Image from "next/image";
import MAP from "public/assets/map.webp";
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
			<section className="block z-10 md:flex gap-8 mx-auto w-full max-w-7xl h-full md:min-h-[36rem]">
				<article>
					<BreadCrumbs>
						<BreadCrumbs.Item href={`/${lang}/`}>
							<h1>{t("breadcrumbs.home")}</h1>
						</BreadCrumbs.Item>
						<BreadCrumbs.Item href={`/${lang}/pvc`}>
							<h1>{t("breadcrumbs.contacts")}</h1>
						</BreadCrumbs.Item>
					</BreadCrumbs>
					<section>
						<h1 className="mb-2 font-semibold text-3xl">
							{t("contacts.header")}
						</h1>
						<h2 className="mb-2 text-3xl">H-fasader Baltic UAB</h2>
						<article className="flex sm:flex-row flex-col gap-2 sm:gap-4 pb-4 text-sm">
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
								className="sm:block hidden h-52 self-center"
							/>
							<div>
								<p className="pb-1 text-gray-500">I - V: 8:00 - 17:00</p>
								<p className="flex items-center gap-2 pb-2">
									<Phone className="inline w-6 h-6" />
									<span>+370 41 583390</span>
								</p>
								<p className="flex items-center gap-2 pb-2">
									<Smartphone className="w-6 h-6" />
									<span>+370 618 59 084</span>
								</p>
								<p className="flex items-center gap-2 pb-2">
									<Mail className="inline w-6 h-6" />
									<span>info@pluswindows.eu</span>
								</p>
								<p className="flex items-center gap-2 pb-2">
									<Mail className="inline w-6 h-6" />
									<span>admin@pluswindows.eu</span>
								</p>
							</div>
						</article>
						<figure className="relative flex-1 md:hidden rounded-lg h-64 overflow-hidden basis-1/2">
							<Image
								src={MAP}
								alt="An image of a city"
								className="object-cover"
								fill
							/>
						</figure>
					</section>
				</article>
			</section>
			<div className="top-24 left-0 absolute md:flex gap-8 hidden w-full pointer-events-none">
				<div className="basis-1/2" />
				<figure className="relative flex-1 rounded-lg h-[40rem] overflow-hidden basis-1/2">
					<Image
						src={MAP}
						alt="An image of a city"
						className="filter object-cover"
						fill
					/>
				</figure>
			</div>
		</>
	);
}
