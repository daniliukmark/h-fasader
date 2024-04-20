"use client";
import Image from "next/image";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { usePathname, useSearchParams } from "next/navigation";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import { cn } from "~/utils/utils";
import { useRouter } from "next/navigation";

import NORWAY_FLAG from "/public/assets/norway-flag.png";
import BRITAIN_FLAG from "/public/assets/britain-flag.png";
import LITHIANIA_FLAG from "public/assets/lithuania-flag.png";
import { useTranslation } from "~/app/i18n/client";

interface LanguageSelectorProps {
	lang: string;
	isNavbarTransparent: boolean;
}

const flags: Record<string, StaticImport> = {
	en: BRITAIN_FLAG,
	no: NORWAY_FLAG,
	lt: LITHIANIA_FLAG,
};

export default function LanguageSelector({
	lang,
	isNavbarTransparent,
}: LanguageSelectorProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { t } = useTranslation(lang, "components", {});

	const handleTransition = async (lang: string, pathname: string) => {
		const newPathname = pathname.substring(1).split("/").slice(1).join("/");
		const newPath = `/${lang}/${newPathname}?${searchParams.toString()}`;
		router.push(newPath, {
			scroll: false,
		});
	};

	const flagImage = flags[lang] ?? BRITAIN_FLAG;

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger className="flex flex-row items-center gap-4 my-2">
					<span
						className={cn(
							"text-sm duration-100",
							isNavbarTransparent && "text-neutral-100",
						)}
					>
						{lang.toUpperCase()}
					</span>
					<Image
						src={flagImage}
						alt="H-fasader Logo"
						height={20}
						width={20}
						className="opacity-100 hover:opacity-75 w-5 h-5 duration-100 cursor-pointer"
					/>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="border-neutral-100 mt-2 rounded-md">
					<DropdownMenuLabel className="px-6 text-center text-neutral-900">
						{t("language-menu.languages")}
					</DropdownMenuLabel>
					<DropdownMenuSeparator />

					<DropdownMenuItem
						onClick={() => handleTransition("en", pathname)}
						className="flex justify-between px-7 rounded-none w-full cursor-pointer"
					>
						<span className={lang === "en" ? "font-bold" : ""}>EN</span>
						<Image
							src={BRITAIN_FLAG}
							alt="the flag of the Great Britain"
							height={20}
							width={20}
							className="relative w-5 h-5"
						/>
					</DropdownMenuItem>
					{/* <DropdownMenuItem
						onClick={() => handleTransition("no", pathname)}
						className="flex justify-between px-7 rounded-none w-full cursor-pointer"
					>
						<span className={lang === "no" ? "font-bold" : ""}>NO</span>
						<Image
							src={NORWAY_FLAG}
							alt="the flag of the Norway"
							height={20}
							width={20}
							className="relative w-5 h-5"
						/>
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() => handleTransition("lt", pathname)}
						className="flex justify-between px-7 rounded-none w-full cursor-pointer"
					>
						<span className={lang === "lt" ? "font-bold" : ""}>LT</span>
						<Image
							src={LITHIANIA_FLAG}
							alt="the flag of the Lithuania"
							height={20}
							width={20}
							className="relative w-5 h-5"
						/>
					</DropdownMenuItem> */}
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}
