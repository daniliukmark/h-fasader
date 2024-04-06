import Footer from "../../_components/layout/footer";
import Navbar from "../../_components/layout/navbar";
interface LayoutProps {
	children: React.ReactNode;
	params: {
		lang: string;
	};
}
export default function HomePage({ children, params: { lang } }: LayoutProps) {
	return (
		<>
			<Navbar lang={lang} />
			<div className="flex flex-col justify-between bg-white w-full min-h-screen scroll-smooth">
				<div className="px-4 sm:px-8 pt-24 h-full">{children}</div>
				<Footer lang={lang} />
			</div>
		</>
	);
}
