"use client";
import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "../feature/language-selector";
import MobileMenu from "../feature/mobile-menu";

import H_FASADER_LOGO from "public/assets/h-fasader-logo.svg";
import { memo, useEffect, useState } from "react";
import { cn } from "~/utils/utils";
import Separator from "../ui/separator";

interface Navbar {
  lang: string;
  isMainPage?: boolean;
}

function Navbar({ lang, isMainPage = false }: Navbar) {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(isMainPage);
  const [hasBackround, sethasBackround] = useState(isMainPage);

  useEffect(() => {
    const handleScroll = () => {
      // When the scroll is more than 0, it means the user has scrolled
      const offset = window.scrollY;
      sethasBackround(offset > 10 && offset < 596 && isMainPage);
      setIsNavbarTransparent(!(offset > 596) && isMainPage);
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      ></div>
      <div className="relative m-auto flex h-full w-full items-center justify-between px-4 sm:px-8 xl:max-w-7xl xl:px-0 ">
        <Link className="z-10" href={`/${lang}`}>
          <Image
            src={H_FASADER_LOGO as string}
            alt="H-fasader Logo"
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
            <Link href={`/${lang}`}>Home</Link>
          </li>
          <li>
            <Link href={`/${lang}/pvc`}>PVC</Link>
          </li>
          <li>
            <Link href={`/${lang}/aluminium`}>Aluminium</Link>
          </li>
          <li>
            <Link href={`/${lang}/contacts`}>Contacts</Link>
          </li>
          <li>
            <Link href={`/${lang}/about-us`}>About H-fasader</Link>
          </li>
        </ul>
        <div className="z-10 flex flex-row items-center gap-4">
          <LanguageSelector
            lang={lang}
            isNavbarTransparent={isNavbarTransparent}
          />
          <MobileMenu lang={lang} isNavbarTransparent={isNavbarTransparent} />
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

export default memo(Navbar);
