export const dynamic = "force-static";
import Image from "next/image";
import Footer from "~/app/_components/layout/footer";
import Navbar from "~/app/_components/layout/navbar";
import Link from "next/link";
import { Button } from "~/app/_components/ui/button";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import { useTranslation } from "~/app/i18n";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import ALUMINIUM_CATEGORY from "public/windows/aluminium.webp";
import PVC_CATEGORY from "public/windows/pvc-window.webp";
import Video from "~/app/_components/feature/video";

interface CategoryCard {
	href: string;
	src: StaticImport;
	alt: string;
	lang: string;
	children: React.ReactNode;
}

async function CategoryCardMobile({
	href,
	alt,
	src,
	children,
	lang,
}: CategoryCard) {
	const { t } = await useTranslation(lang, "home-page", {});

	return (
		<div className="relative flex-auto border-2 border-neutral-100 bg-white rounded-lg h-fit basis-[36rem]">
			<Link href={href}>
				<figure className="relative bg-gradient-to-b from-[#F1F2F6] via-[#E3E7EA] to-[#D5D7E0] hover:opacity-60 rounded-md w-full h-80 sm:h-96 lg:h-[32rem] duration-200 overflow-hidden">
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
			<article className="p-4 w-full h-fit">
				{children}
				<Link href={href}>
					<Button variant={"link"} className="p-0">
						{t("view-more-button")}
					</Button>
				</Link>
			</article>
		</div>
	);
}

async function CategoryCard({ href, alt, src, children, lang }: CategoryCard) {
	const { t } = await useTranslation(lang, "home-page", {});

	return (
		<div className="relative flex flex-row flex-auto border-neutral-100 bg-gray-600 hover:bg-gray-500 bg-opacity-50 hover:bg-opacity-40 backdrop-blur-md rounded-lg h-72 text-gray-100 duration-200">
			<Link href={href}>
				<figure className="relative bg-gray-50 bg-opacity-10 rounded-md w-52 xl:w-72 h-full overflow-hidden">
					<Image
						src={src}
						alt={alt}
						sizes="vw-100"
						fill
						className="object-contain"
					/>
				</figure>
			</Link>
			<article className="p-4 w-96 xl:h-72 text-justify">
				{children}
				<Link href={href}>
					<Button variant={"link"} className="p-0 text-gray-100">
						{t("view-more-button")}
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
				<section className="relative flex flex-col justify-center h-[40rem] sm:h-[52rem]">
					<div className="right-0 z-10 absolute lg:flex flex-col gap-8 hidden pt-20">
						<CategoryCard
							src={PVC_CATEGORY}
							alt="PVC window"
							lang={lang}
							href={`${lang}/pvc`}
						>
							<h1 className="font-semibold text-left text-xl">
								{t("catalogue.pvc.title")}
							</h1>
							<p
								className="pb-2 text-justify"
								// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
								dangerouslySetInnerHTML={{
									__html: t("catalogue.pvc.description"),
								}}
							/>
						</CategoryCard>
						<CategoryCard
							src={ALUMINIUM_CATEGORY}
							alt="Aluminium window"
							lang={lang}
							href={`${lang}/aluminium`}
						>
							<h1 className="font-semibold text-left text-xl">
								{t("catalogue.aluminium.title")}
							</h1>
							<p
								className="my-auto pb-2 text-justify"
								// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
								dangerouslySetInnerHTML={{
									__html: t("catalogue.aluminium.description"),
								}}
							/>
						</CategoryCard>
					</div>
					<div className="mx-auto w-full max-w-7xl">
						<div className="z-0 flex justify-between items-center mx-8 w-full max-w-3xl lg:max-w-7xl font-semibold text-4xl text-white sm:text-5xl leading-normal sm:leading-relaxed">
							<span
								className="absolute animate-infinite-fade"
								// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
								dangerouslySetInnerHTML={{ __html: t("header.paragraph1") }}
							/>
							<span
								className="absolute animate-infinite-fade [animation-delay:-8s]"
								// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
								dangerouslySetInnerHTML={{ __html: t("header.paragraph2") }}
							/>
						</div>
					</div>
					<div className="-z-10 absolute inset-0 bg-gradient-to-b from-[#F1F2F6] via-[#E3E7EA] to-[#D5D7E0]">
						<figure className="w-full h-full">
							<Suspense fallback={<Skeleton className="w-full h-full" />}>
								<Video
									className="relative object-left bg-slate-400 w-full h-full object-cover"
									hrefMp4="/assets/main-video-bg.mp4"
									hrefWebm="/assets/main-video-bg.webm"
								/>
							</Suspense>
						</figure>
					</div>
				</section>
				<div className="mx-auto px-4 sm:px-8 lg:px-0 pt-8 w-full lg:max-w-5xl xl:max-w-7xl">
					<section className="block lg:hidden -mt-20 pb-8">
						<div className="flex flex-wrap md:flex-nowrap justify-center gap-8">
							<CategoryCardMobile
								src={PVC_CATEGORY}
								alt="PVC window"
								lang={lang}
								href={`${lang}/pvc`}
							>
								<Link href={`${lang}/aluminium`}>
									<h1 className="font-semibold text-2xl text-justify">
										{t("catalogue.pvc.title")}
									</h1>
								</Link>
								<p
									className="pb-2 text-justify"
									// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
									dangerouslySetInnerHTML={{
										__html: t("catalogue.pvc.description"),
									}}
								/>
							</CategoryCardMobile>
							<CategoryCardMobile
								src={ALUMINIUM_CATEGORY}
								alt="Aluminium window"
								lang={lang}
								href={`${lang}/aluminium`}
							>
								<Link href={`${lang}/aluminium`}>
									<h1 className="font-semibold text-2xl text-justify">
										{t("catalogue.aluminium.title")}
									</h1>
								</Link>
								<p
									className="pb-2 text-justify"
									// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
									dangerouslySetInnerHTML={{
										__html: t("catalogue.aluminium.description"),
									}}
								/>
							</CategoryCardMobile>
						</div>
					</section>
				</div>
				<Footer lang={lang} />
			</div>
		</>
	);
}
