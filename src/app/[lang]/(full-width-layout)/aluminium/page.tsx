export const dynamic = "force-static";

import Image from "next/image";
import WindowMessageForm from "~/app/_components/feature/window-message-form";
import Link from "next/link";

import SAPA_BG from "public/assets/sapa/sapa-bg.webp";
import SAPA_LOGO from "public/assets/sapa/sapa-logo.webp";
import BreadCrumbs from "~/app/_components/ui/breadcrumbs";
import { Button } from "~/app/_components/ui/button";
import Separator from "~/app/_components/ui/separator";
import { useTranslation } from "~/app/i18n";

interface PageProps {
	params: {
		lang: string;
	};
}

export default async function Page({ params: { lang } }: PageProps) {
	const { t } = await useTranslation(lang, "aluminium-page", {});
	return (
		<>
			<section className="block md:flex items-center mx-auto w-full max-w-7xl md:min-h-[40rem]">
				<article className="flex flex-col justify-items-center sm:pr-4 pb-4 h-full basis-1/2">
					<div className="">
						<BreadCrumbs>
							<BreadCrumbs.Item href={`/${lang}/`}>
								<h1>{t("home")}</h1>
							</BreadCrumbs.Item>
							<BreadCrumbs.Item href={`/${lang}/pvc`}>
								<h1>{t("aluminium")}</h1>
							</BreadCrumbs.Item>
						</BreadCrumbs>
						<h1 className="mb-2 pb-2 font-semibold text-3xl">
							{t("aluminium")}
						</h1>
						<article>
							<p className="text-sm">{t("paragraph1")}</p>
							<ul className="pl-4 text-sm list-disc">
								<li>{t("list1-item1")}</li>
								<li>{t("list1-item2")}</li>
								<li>{t("list1-item3")}</li>
								<li>{t("list1-item4")}</li>
							</ul>
							<p className="text-sm">{t("paragraph2")}</p>
							<ul className="pl-4 text-sm list-disc">
								<li>{t("list2-item1")}</li>
								<li>{t("list2-item2")}</li>
								<li>{t("list2-item3")}</li>
								<li>{t("list2-item4")}</li>
								<li>{t("list2-item5")}</li>
								<li>{t("list2-item6")}</li>
								<li>{t("list2-item7")}</li>
								<li>{t("list2-item8")}</li>
							</ul>
						</article>
						<Link href="https://www.sapabuildingsystem.com/en/baltics/products/">
							<Button className="px-0 py-2 h-fit underline" variant={"link"}>
								{t("button")}
							</Button>
						</Link>
					</div>
					<Separator className="my-2" />
					<WindowMessageForm lang={lang} emailReceiver="info@pluswindows.eu" />
				</article>
				<figure className="md:hidden relative flex-1 rounded-lg h-64 overflow-hidden basis-1/2">
					<Image
						src={SAPA_BG}
						fill
						className="object-cover pointer-events-none"
						alt="An image of Sapa designed Interior"
					/>
					<div className="right-2 bottom-2 absolute">
						<figure className="relative w-16 aspect-square">
							<Image
								src={SAPA_LOGO}
								fill
								className="object-cover pointer-events-none"
								alt="An image of Sapa designed Interior"
							/>
						</figure>
					</div>
				</figure>
			</section>
			<div className="hidden top-24 left-0 absolute md:flex gap-8 w-full pointer-events-none">
				<div className="basis-1/2" />
				<figure className="relative flex-1 rounded-lg h-[48rem] overflow-hidden basis-1/2">
					<Image
						src={SAPA_BG}
						fill
						className="object-cover pointer-events-none"
						alt="An image of Sapa designed Interior"
					/>
					<div className="right-8 bottom-8 absolute">
						<figure className="relative w-32 aspect-square">
							<Image
								src={SAPA_LOGO}
								fill
								className="object-cover pointer-events-none"
								alt="An image of Sapa designed Interior"
							/>
						</figure>
					</div>
				</figure>
			</div>
		</>
	);
}
