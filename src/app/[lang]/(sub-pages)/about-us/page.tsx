export const dynamic = "force-static";

interface PageProps {
	params: {
		lang: string;
	};
}
export default function Page({ params: { lang } }: PageProps) {
	return (
		<>
			<h1>about-us {lang}</h1>
		</>
	);
}
