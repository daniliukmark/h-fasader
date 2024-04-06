export const dynamic = "force-static";

import Image from "next/image";
import WindowMessageForm from "~/app/_components/feature/window-message-form";
import Link from "next/link";

import SAPA_BG from "public/assets/sapa/sapa-bg.webp";
import SAPA_LOGO from "public/assets/sapa/sapa-logo.webp";
import BreadCrumbs from "~/app/_components/ui/breadcrumbs";
import { Button } from "~/app/_components/ui/button";
import Separator from "~/app/_components/ui/separator";

interface PageProps {
	params: {
		lang: string;
	};
}

export default function Page({ params: { lang } }: PageProps) {
	return (
		<>
			<section className="block md:flex items-center mx-auto w-full max-w-7xl md:min-h-[40rem]">
				<article className="flex flex-col justify-items-center sm:pr-4 pb-4 h-full basis-1/2">
					<div className="">
						<BreadCrumbs>
							<BreadCrumbs.Item href={`/${lang}/`}>
								<h1>Home</h1>
							</BreadCrumbs.Item>
							<BreadCrumbs.Item href={`/${lang}/pvc`}>
								<h1>Aluminium</h1>
							</BreadCrumbs.Item>
						</BreadCrumbs>
						<h1 className="mb-2 pb-2 font-semibold text-3xl">Aluminium</h1>
						<article>
							<p className="text-sm">
								Certified approved SAPA / HYDRO fire resistance products:
							</p>
							<ul className="pl-4 text-sm list-disc">
								<li>1199/94 class E30, A30, EI15, EI30</li>
								<li>SC0836-14 class EI30 / EI60 (Sa/S200)</li>
								<li>SC1457-16 class EI30 / EI60 (Sa/S200)</li>
								<li>
									CE-marking EN 16034-2014, class EI230 / EI260 (Sa/S200/C)
								</li>
							</ul>
							<p className="text-sm">Aluminium products:</p>
							<ul className="pl-4 text-sm list-disc">
								<li>Certified approved SAPA fire resistant doors</li>
								<li>E30, A30, EI15, EI30, EI60 (Sa/S200/C)</li>
								<li>Facades</li>
								<li>Glazed roof constructions</li>
								<li>Sliding / patio doors</li>
								<li>Folding doors</li>
								<li>Windows</li>
								<li>CNC cutting and milling service</li>
							</ul>
						</article>
						<Link href="https://www.sapabuildingsystem.com/en/baltics/products/">
							<Button className="px-0 py-2 h-fit underline" variant={"link"}>
								See more on Sapa website.
							</Button>
						</Link>
					</div>
					<Separator className="my-2" />
					<WindowMessageForm lang={lang} emailReceiver="" />
				</article>
				<figure className="relative flex-1 md:hidden rounded-lg h-64 overflow-hidden basis-1/2">
					<Image
						src={SAPA_BG}
						fill
						className="pointer-events-none object-cover"
						alt="An image of Sapa designed Interior"
					/>
					<div className="right-2 bottom-2 absolute">
						<figure className="relative w-16 aspect-square">
							<Image
								src={SAPA_LOGO}
								fill
								className="pointer-events-none object-cover"
								alt="An image of Sapa designed Interior"
							/>
						</figure>
					</div>
				</figure>
			</section>
			<div className="top-24 left-0 absolute md:flex gap-8 hidden w-full pointer-events-none">
				<div className="basis-1/2" />
				<figure className="relative flex-1 rounded-lg h-[48rem] overflow-hidden basis-1/2">
					<Image
						src={SAPA_BG}
						fill
						className="pointer-events-none object-cover"
						alt="An image of Sapa designed Interior"
					/>
					<div className="right-8 bottom-8 absolute">
						<figure className="relative w-32 aspect-square">
							<Image
								src={SAPA_LOGO}
								fill
								className="pointer-events-none object-cover"
								alt="An image of Sapa designed Interior"
							/>
						</figure>
					</div>
				</figure>
			</div>
		</>
	);
}
