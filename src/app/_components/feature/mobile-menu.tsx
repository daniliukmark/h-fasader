"use client";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Menu } from "lucide-react";
import CITY_BG from "public/assets/city-skyline-background.jpeg";

interface MobileMenu {
  lang: string;
}

export default function MobileMenu({ lang }: MobileMenu) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <>
      <Menu
        onClick={() => setIsOpen(true)}
        className="inline-block h-8 w-8 cursor-pointer text-neutral-900  duration-100 hover:text-neutral-500 lg:hidden"
      />
      <Sheet onOpenChange={setIsOpen} open={isOpen}>
        <SheetContent className="border-0  p-0">
          <SheetHeader className="pl-4 pt-10">
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>
          <nav className="relative h-full flex-col">
            <ul className="flex flex-col gap-2 pl-4 pt-2  sm:pt-4 ">
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  className={
                    pathname.split("/").length == 2
                      ? "font-bold"
                      : "text-neutral-800"
                  }
                  href={`/${lang}`}
                >
                  Home
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
                  PVC
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
                  Aluminium
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
                  Contacts
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
                  About H-fasader
                </Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
