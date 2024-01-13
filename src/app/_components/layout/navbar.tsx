import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "../feature/language-selector";
import MobileMenu from "../feature/mobile-menu";

import H_FASADER_LOGO from "public/assets/h-fasader-logo.svg";
import { memo } from "react";

interface Navbar {
  lang: string;
}
function Navbar({ lang }: Navbar) {
  return (
    <nav className="fixed top-0 z-50  h-20 w-full bg-white ">
      <div className="relative m-auto flex h-full w-full items-center justify-between px-4 sm:px-8 xl:max-w-7xl xl:px-0 ">
        <Link className="z-10" href={`/${lang}`}>
          <Image
            src={H_FASADER_LOGO as string}
            alt="H-fasader Logo"
            className="w-32 lg:w-36"
            key="h-fssader"
          />
        </Link>
        <ul className="absolute inset-0 z-0 hidden h-20 flex-row items-center justify-center gap-8 text-sm  lg:inline-flex">
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
          <LanguageSelector lang={lang} />
          <MobileMenu lang={lang} />
        </div>
      </div>
      <div className="absolute bottom-0 h-0.5 w-full bg-gradient-to-l from-transparent from-0% via-neutral-100 to-transparent to-90%"></div>
    </nav>
  );
}

export default memo(Navbar);
