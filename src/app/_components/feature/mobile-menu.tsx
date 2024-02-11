"use client";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { type Dispatch, type SetStateAction } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Menu } from "lucide-react";
import { cn } from "~/utils/utils";
import { type TFunction } from "i18next";

interface MobileMenuProps {
	lang: string;
	isNavbarTransparent: boolean;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	t: TFunction<string, undefined>;
}

export default function MobileMenu({
	lang,
	isNavbarTransparent,
	isOpen,
	setIsOpen,
	t,
}: MobileMenuProps) {
	const pathname = usePathname();
	return (
		<>
			<Menu
				onClick={() => setIsOpen(true)}
				className={cn(
					"inline-block h-8 w-8 cursor-pointer text-neutral-900  duration-100 hover:text-neutral-500 lg:hidden",
					isNavbarTransparent && "text-neutral-100",
				)}
			/>
			<Sheet onOpenChange={setIsOpen} open={isOpen}>
				<SheetContent className="border-2  p-0">
					<SheetHeader className="pl-4 pt-10">
						<SheetTitle className="text-left text-xl">Menu</SheetTitle>
					</SheetHeader>
					<nav className="relative h-full flex-col">
						<ul className="flex flex-col gap-2 pl-4 pt-2 sm:pt-4 ">
							<li>
								<Link
									onClick={() => setIsOpen(false)}
									className={
										pathname.split("/").length === 2
											? "font-bold"
											: "text-neutral-800"
									}
									href={`/${lang}`}
								>
									{t("directories.home")}
								</Link>
							</li>
							<li>
								<Link
									onClick={() => setIsOpen(false)}
									className={
										pathname.includes("/pvc") ? "font-bold" : "text-neutral-800"
									}
									href={`/${lang}/pvc`}
								>
									{t("directories.pvc")}
								</Link>
							</li>
							<li>
								<Link
									onClick={() => setIsOpen(false)}
									className={
										pathname.includes("/aluminium")
											? "font-bold"
											: "text-neutral-800"
									}
									href={`/${lang}/aluminium`}
								>
									{t("directories.aluminium")}
								</Link>
							</li>
							<li>
								<Link
									onClick={() => setIsOpen(false)}
									className={
										pathname.includes("/contacts")
											? "font-bold"
											: "text-neutral-800"
									}
									href={`/${lang}/contacts`}
								>
									{t("directories.contacts")}
								</Link>
							</li>
							<li>
								<Link
									onClick={() => setIsOpen(false)}
									className={
										pathname.includes("/about-us")
											? "font-bold"
											: "text-neutral-800"
									}
									href={`/${lang}/about-us`}
								>
									{t("directories.about-us")}
								</Link>
							</li>
						</ul>
					</nav>
				</SheetContent>
			</Sheet>
		</>
	);
}
