export const dynamic = "force-static";

import Image from "next/image";
import WindowMessageForm from "~/app/_components/feature/window-message-form";
import Link from "next/link";

import SAPA_BG from "public/assets/sapa/sapa-bg.webp";
import SAPA_LOGO from "public/assets/sapa/sapa-logo.webp";
import BreadCrumbs from "~/app/_components/ui/breadcrumbs";
import { Button } from "~/app/_components/ui/button";

interface PageProps {
	params: {
		lang: string;
	};
}

export default async function Page({ params: { lang } }: PageProps) {
	return (
		<>
			<section className="md:min-h-[40rem] w-full block md:flex mx-auto items-center max-w-7xl">
				<article className="basis-1/2 flex justify-items-center  h-full flex-col pb-4 sm:pr-4 ">
					<div className="">
						<BreadCrumbs>
							<BreadCrumbs.Item href={`/${lang}/`}>
								<h1>Home</h1>
							</BreadCrumbs.Item>
							<BreadCrumbs.Item href={`/${lang}/pvc`}>
								<h1>Aluminium</h1>
							</BreadCrumbs.Item>
						</BreadCrumbs>
						<h1 className="mb-2 text-3xl font-semibold">Aluminium</h1>
						<p className="mb-6 max-w-4xl text-sm text-neutral-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
							corrupti sit eaque quae sapiente, laborum fugit aut delectus odio
							similique, non animi accusamus velit vitae nesciunt sint
							consequatur accusantium maxime. <br />
							<Link href="https://www.sapabuildingsystem.com/en/baltics/products/">
								<Button className="p-0 underline h-fit" variant={"link"}>
									See more on Sapa website.
								</Button>
							</Link>
						</p>
					</div>
					<WindowMessageForm lang={lang} emailReceiver="" />
				</article>
				<figure className="relative md:hidden flex-1 h-64 overflow-hidden rounded-lg basis-1/2  ">
					<Image
						src={SAPA_BG}
						fill
						className="object-cover pointer-events-none"
						alt="An image of Sapa designed Interior"
					/>
					<div className="absolute bottom-2 right-2">
						<figure className="relative w-16 aspect-square ">
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

			<div className="absolute hidden md:flex left-0 w-full top-24 gap-8 pointer-events-none">
				<div className="basis-1/2" />
				<figure className="relative flex-1 h-[40rem] basis-1/2 overflow-hidden rounded-lg ">
					<Image
						src={SAPA_BG}
						fill
						className="object-cover pointer-events-none"
						alt="An image of Sapa designed Interior"
					/>
					<div className="absolute bottom-8 right-8">
						<figure className="relative w-32 aspect-square ">
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
