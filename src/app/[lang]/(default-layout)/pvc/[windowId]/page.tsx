export const dynamic = "force-static";
import BreadCrumbs from "~/app/_components/ui/breadcrumbs";
import { Button } from "~/app/_components/ui/button";
import Link from "next/link";
import ProductCard from "~/app/_components/ui/product-card";
import ProductDetails from "~/app/_components/feature/product-details";
import ProductShowcase from "~/app/_components/feature/product-showcase";

import { api } from "~/trpc/server";

interface PageProps {
	params: {
		lang: string;
		windowId: string;
	};
}

export default async function Page({ params: { lang, windowId } }: PageProps) {
	const recomendedWindows = await api.window.getAll.query({
		limit: 4,
		lang: lang,
		material: "pvc",
	});

	const mainWindow = await api.window.getById.query({
		id: windowId,
		lang: lang,
		material: "pvc",
	});

	const imagesList = mainWindow ? mainWindow.images.map((img) => img.url) : [];
	const mainImage = mainWindow?.mainImage.url ? mainWindow.mainImage.url : "";
	return (
		<>
			<main className="flex w-full flex-col scroll-smooth md:flex-row">
				<div className="h-96 md:basis-1/2 my-auto">
					<ProductShowcase images={imagesList} defaultImage={mainImage} />
				</div>
				<section className="my-auto basis-1/2">
					<div className="m-4 sm:m-8">
						<BreadCrumbs>
							<BreadCrumbs.Item href={`/${lang}/`}>
								<h1>Home</h1>
							</BreadCrumbs.Item>
							<BreadCrumbs.Item href={`/${lang}/pvc`}>
								<h1>PVC</h1>
							</BreadCrumbs.Item>
							<BreadCrumbs.Item href={`/${lang}/pvc/${windowId}`}>
								<h1>{mainWindow?.translation[0]?.title}</h1>
							</BreadCrumbs.Item>
						</BreadCrumbs>
						<h1 className="pt-2 text-3xl font-semibold">
							{mainWindow?.translation[0]?.title}
						</h1>
						<p className="py-2 text-neutral-700">
							{mainWindow?.translation[0]?.desc}
						</p>
						<Link href="#details">
							<Button
								className="mt-2 rounded-3xl"
								size={"lg"}
								variant={"outline"}
							>
								View more
							</Button>
						</Link>
					</div>
				</section>
			</main>
			<ProductDetails
				lang={lang}
				specs={`${mainWindow?.translation[0]?.specs}`}
				accs={`${mainWindow?.translation[0]?.accs}`}
			/>
			<section>
				<h2 className="text-2xl font-semibold">Kiti Produktai</h2>
				<div className="grid grid-cols-1 gap-4 px-2 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{recomendedWindows.map((window) => {
						return (
							<ProductCard
								key={`${window.id}`}
								className="h-96 w-full"
								title={`${window.translation[0]?.title}`}
								src={`${window.mainImage.url}`}
								desc={`${window.translation[0]?.desc}`}
								alt={`${window.translation[0]?.title} image`}
								href={`/${lang}/pvc/${window.id}`}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
}
