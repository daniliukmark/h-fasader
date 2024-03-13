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
			<div className=" flex min-h-screen w-full flex-col justify-between scroll-smooth bg-white">
				<div className="mx-auto w-full px-4 pt-24 sm:px-8 lg:max-w-5xl lg:px-0 xl:max-w-7xl">
					{children}
				</div>
				<Footer lang={lang} />
			</div>
		</>
	);
}
