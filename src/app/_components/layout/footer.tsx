import Link from "next/link";
import Image from "next/image";

import H_FASADER_LOGO from "public/assets/h-fasader-logo.svg";
import Separator from "../ui/separator";
import { memo } from "react";

interface Footer {
  lang: string;
}

function Footer({ lang }: Footer) {
  return (
    <div className="mx-auto mt-8 flex h-28 w-full flex-col px-4 pb-4 text-xs  sm:max-w-4xl sm:px-8 lg:max-w-5xl lg:px-0 xl:max-w-7xl">
      <div className="flex flex-row flex-wrap-reverse justify-center gap-4 text-neutral-500 sm:justify-between">
        <figure>
          <Image
            src={H_FASADER_LOGO as string}
            alt="H-fasader Logo"
            className="w-24 opacity-75 grayscale filter sm:w-32"
          />
        </figure>
        <ul className="flex flex-row items-center gap-4">
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
      </div>
      <Separator className="my-3 sm:my-4" />
      <h1 className="mx-auto  text-xs text-neutral-500">
        © 2023 H-Fasader™. All Rights Reserved
      </h1>
    </div>
  );
}

export default memo(Footer);
