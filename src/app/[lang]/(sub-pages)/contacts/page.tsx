interface PageProps {
	params: {
		lang: string;
	};
}
export default function Page({ params: { lang } }: PageProps) {
	return (
		<>
			<h1>contacts {lang}</h1>
		</>
	);
}
