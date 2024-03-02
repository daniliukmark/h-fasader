export const dynamic = "force-static";

import { api } from "~/trpc/server";

interface PageProps {
	params: {
		lang: string;
	};
}
export default async function Page({ params: { lang } }: PageProps) {
	const data = await api.window.hello.query({ text: "abc" });
	return (
		<>
			<h1>aluminium {lang}</h1>
			{data.greeting}
		</>
	);
}
