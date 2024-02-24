import Image from "next/image";
import Footer from "~/app/_components/layout/footer";
import Navbar from "~/app/_components/layout/navbar";
import Separator from "~/app/_components/ui/separator";
import { cn } from "~/utils/utils";
import Link from "next/link";
import { Button } from "~/app/_components/ui/button";
import { Pacifico } from "next/font/google";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import { useTranslation } from "~/app/i18n";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import MAP_IMAGE from "public/assets/map2.png";
import ALUMINIUM_CATEGORY from "public/windows/aluminium-window.webp";
import PVC_CATEGORY from "public/windows/pvc-window.webp";
import PARTNER_IMG1 from "public/assets/company-logos/logo1.png";
import PARTNER_IMG2 from "public/assets/company-logos/logo2.png";
import PARTNER_IMG3 from "public/assets/company-logos/logo3.png";
import PARTNER_IMG4 from "public/assets/company-logos/logo4.png";
import PARTNER_IMG5 from "public/assets/company-logos/logo5.png";
import PARTNER_IMG6 from "public/assets/company-logos/logo6.png";
import PARTNER_IMG7 from "public/assets/company-logos/logo7.png";
import PARTNER_IMG8 from "public/assets/company-logos/logo8.png";
import PARTNER_IMG9 from "public/assets/company-logos/logo9.png";
import PARTNER_IMG10 from "public/assets/company-logos/logo10.png";
import PARTNER_IMG11 from "public/assets/company-logos/logo11.png";
import PARTNER_IMG12 from "public/assets/company-logos/logo12.png";

const partnerLogos = [
	PARTNER_IMG1,
	PARTNER_IMG2,
	PARTNER_IMG3,
	PARTNER_IMG4,
	PARTNER_IMG5,
	PARTNER_IMG6,
	PARTNER_IMG7,
	PARTNER_IMG8,
	PARTNER_IMG9,
	PARTNER_IMG10,
	PARTNER_IMG11,
	PARTNER_IMG12,
];
const duplicatedPartnerLogos = [...partnerLogos, ...partnerLogos];

const pacifico = Pacifico({
	weight: ["400"],
	style: "normal",
	subsets: ["latin"],
});

interface CategoryCard {
	href: string;
	src: StaticImport;
	alt: string;
	children: React.ReactNode;
}

function CategoryCard({ href, alt, src, children }: CategoryCard) {
	return (
		<div className="relative h-fit flex-auto basis-[36rem] rounded-lg border-2 bg-white   border-neutral-100 ">
			<Link href={href}>
				<figure className="relative h-80 duration-200 sm:h-96 lg:h-[32rem] w-full overflow-hidden rounded-md bg-gradient-to-b from-[#F1F2F6] via-[#E3E7EA] to-[#D5D7E0] hover:opacity-60">
					<Suspense fallback={<Skeleton className="w-full h-full" />}>
						<Image
							src={src}
							alt={alt}
							sizes="vw-100"
							placeholder="blur"
							fill
							className="object-contain"
						/>
					</Suspense>
				</figure>
			</Link>
			<article className="w-full p-4 h-fit">
				{children}
				<Link href={href}>
					<Button variant={"link"} className="p-0">
						View more
					</Button>
				</Link>
			</article>
		</div>
	);
}

interface PageProps {
	params: {
		lang: string;
	};
}
export default async function Page({ params: { lang } }: PageProps) {
	const { t } = await useTranslation(lang, "home-page", {});
	return (
		<>
			<Navbar lang={lang} isMainPage={true} />
			<div className="flex flex-col justify-between w-full min-h-screen">
				<div className="w-full">
					<section className="relative flex h-[40rem] flex-col justify-center sm:h-[52rem] ">
						<div className="z-10 flex items-center justify-between w-full max-w-3xl mx-auto lg:max-w-7xl">
							<h1 className="mx-8 text-4xl font-semibold leading-normal text-white sm:text-5xl sm:leading-relaxed ">
								{t("header.part1")} <br />
								{t("header.part2")}{" "}
								<span
									className={cn("text-5xl sm:text-6xl", pacifico.className)}
								>
									{t("header.part3")} <br />
								</span>
								{t("header.part4")}
							</h1>
						</div>
						<div className="absolute inset-0 -z-10  bg-gradient-to-b from-[#F1F2F6] via-[#E3E7EA] to-[#D5D7E0]">
							<figure className="w-full h-full">
								<Suspense fallback={<Skeleton className="w-full h-full" />}>
									<video
										className="relative object-cover w-full h-full bg-slate-100"
										controls={false}
										preload=""
										loop
										autoPlay
										muted
										placeholder="public/assets/mountains-placeholder.jpeg"
									>
										<source
											type="video/mp4"
											src="https://cdn.sanity.io/files/zkqihy5d/production/37008853aa8ae3962ce58b5ecd28e0ac031bb6ca.mp4"
										/>
									</video>
								</Suspense>
							</figure>
						</div>
					</section>
					<div className="w-full px-4 pt-8 mx-auto -mt-20 2 sm:px-8 lg:max-w-5xl lg:px-0 xl:max-w-7xl">
						<section className="pb-8">
							<div className="flex flex-wrap justify-center gap-8 md:flex-nowrap">
								<CategoryCard
									src={PVC_CATEGORY}
									alt="PVC window"
									href={`${lang}/pvc`}
								>
									<h1 className="text-2xl font-semibold text-left">
										{t("catalogue.pvc.title")}
									</h1>
									<p className="pb-2 text-left">
										{t("catalogue.pvc.description")}
									</p>
								</CategoryCard>
								<CategoryCard
									src={ALUMINIUM_CATEGORY}
									alt="Aluminium window"
									href={`${lang}/aluminium`}
								>
									<h1 className="text-2xl font-semibold text-left">
										{t("catalogue.aluminium.title")}
									</h1>
									<p className="pb-2 text-left">
										{t("catalogue.aluminium.description")}
									</p>
								</CategoryCard>
							</div>
						</section>
						<section className="pb-8 sm:block">
							<Separator />
							<Suspense fallback={<Skeleton className="w-full h-full" />}>
								<div className="flex max-h-[32rem] justify-center">
									<Image
										src={MAP_IMAGE}
										alt="window image"
										sizes="vw-100"
										className="object-contain h-auto w-auto"
									/>
								</div>
							</Suspense>
							<Separator />
						</section>
						<section className="pb-8 overflow-hidden">
							<div className="relative inline-flex w-full flex-nowrap">
								<ul className="flex animate-infinite-scroll  items-center justify-center opacity-70 md:justify-start [&_img]:max-w-none [&_li]:mx-8">
									{duplicatedPartnerLogos.map((logo, index) => {
										return (
											<li key={`${logo.src}${index}`}>
												<Image
													src={logo}
													alt="image"
													placeholder="blur"
													className="relative object-contain w-20 h-20"
												/>
											</li>
										);
									})}
								</ul>
							</div>
						</section>
					</div>
					<Footer lang={lang} />
				</div>
			</div>
		</>
	);
}
