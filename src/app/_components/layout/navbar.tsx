"use client";
import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "../feature/language-selector";
import MobileMenu from "../feature/mobile-menu";

import H_FASADER_LOGO from "public/assets/h-fasader-logo.svg";
import { useEffect, useState } from "react";
import { cn } from "~/utils/utils";
import Separator from "../ui/separator";
import { useTranslation } from "~/app/i18n/client";

interface Navbar {
	lang: string;
	isMainPage?: boolean;
}

function Navbar({ lang, isMainPage = false }: Navbar) {
	const [isNavbarTransparent, setIsNavbarTransparent] = useState(isMainPage);
	const [hasBackround, sethasBackround] = useState(isMainPage);
	const { t } = useTranslation(lang, "components", {});

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			sethasBackround(offset > 10 && offset < 144 && isMainPage);
			setIsNavbarTransparent(!(offset > 144) && isMainPage);
		};

		// Add the event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isMainPage]);

	return (
		<nav
			className={cn(
				"fixed top-0  z-20 h-20 w-full bg-white duration-200",
				isNavbarTransparent && "top-0 bg-opacity-0",
			)}
		>
			<div
				className={cn(
					"absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-20 duration-200",
					!hasBackround && "opacity-0",
				)}
			/>
			<div className="relative flex items-center justify-between w-full h-full px-4 m-auto sm:px-8 xl:max-w-7xl xl:px-0 ">
				<Link className="z-10" href={`/${lang}`}>
					<Image
						src={H_FASADER_LOGO as string}
						alt="H-fasader Logo"
						sizes="10w 100vw"
						className={cn(
							"relative w-32 lg:w-36",
							isNavbarTransparent && "brightness-0 invert",
						)}
					/>
				</Link>
				<ul
					className={cn(
						"absolute inset-0 z-0 hidden h-20 flex-row items-center justify-center gap-8 text-sm font-medium lg:inline-flex",
						isNavbarTransparent && "text-neutral-100",
					)}
				>
					<li>
						<Link href={`/${lang}`}>{t("directories.home")}</Link>
					</li>
					<li>
						<Link href={`/${lang}/pvc`}>{t("directories.pvc")}</Link>
					</li>
					<li>
						<Link href={`/${lang}/aluminium`}>
							{t("directories.aluminium")}
						</Link>
					</li>
					<li>
						<Link href={`/${lang}/contacts`}>{t("directories.contacts")}</Link>
					</li>
					<li>
						<Link href={`/${lang}/about-us`}>{t("directories.about-us")}</Link>
					</li>
					<li>
						<Link href="https://www.hfasader.no/aktuelt/">
							{t("directories.news")}
						</Link>
					</li>
				</ul>
				<div className="z-10 flex flex-row items-center gap-4">
					<LanguageSelector
						lang={lang}
						isNavbarTransparent={isNavbarTransparent}
					/>
					<MobileMenu
						t={t}
						lang={lang}
						isNavbarTransparent={isNavbarTransparent}
					/>
				</div>
			</div>
			<Separator
				className={cn(
					"opacity-100 duration-200",
					isNavbarTransparent && "opacity-0",
				)}
			/>
		</nav>
	);
}

export default Navbar;
