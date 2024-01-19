"use client";

import { Fragment, useCallback, useMemo } from "react";
import Separator from "../ui/separator";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { cn } from "~/utils/utils";

interface Categories {
  lang: string;
  currentCategory: string | null;
}

const Categories = ({ lang, currentCategory }: Categories) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categories = useMemo(() => {
    return [
      {
        category: "specifications",
        name: "Specifikacija",
      },
      {
        category: "colors",
        name: "Spalvos",
      },
      {
        category: "decorations",
        name: "Dekoratyvus skirtukai",
      },
      {
        category: "glass",
        name: "Stiklas",
      },
      {
        category: "accessories",
        name: "Aksesuarai",
      },
      {
        category: "drawings",
        name: "Brėžiniai",
      },
    ];
  }, [lang]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const categoryList = categories.map((item, index) => {
    return (
      <Fragment key={index}>
        <li
          onClick={() => {
            router.push(
              pathname + "?" + createQueryString("category", item.category),
              { scroll: false },
            );
          }}
          className={cn(
            "cursor-pointer",
            item.category == currentCategory
              ? "font-semibold text-neutral-900"
              : "",
          )}
        >
          {item.name}
        </li>
        <Separator variant="vertical" className="h-16 basis-0.5 " />
      </Fragment>
    );
  });
  return <>{categoryList}</>;
};

interface ProductDetails {
  lang: string;
}

const ProductDetails = ({ lang }: ProductDetails) => {
  const searchParams = useSearchParams();

  const currentCategory = useMemo(() => {
    let currentCategory = searchParams.get("category");
    currentCategory = currentCategory ?? "specifications";
    return currentCategory;
  }, [searchParams]);

  return (
    <>
      <nav id="specification">
        <Separator className="mt-8 sm:mt-4" />
        <ul className="flex flex-row flex-wrap items-center gap-2 text-sm text-neutral-500">
          {<Categories lang={lang} currentCategory={currentCategory} />}
        </ul>
      </nav>

      <section className="mb-6 flex w-full gap-4 px-4">
        <div className="lg:basis-1/2 ">
          <h2 className="text-lg font-semibold">Specifikacija</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            massa felis, placerat quis orci et, ornare fermentum lorem. Aenean
            laoreet quam at nibh tincidunt, sit amet sodales augue sagittis.
            Cras cursus, nisi et elementum porta, leo velit lobortis justo, sed
            efficitur justo urna nec justo. Nullam quis odio nec lectus
            fringilla suscipit vitae id neque. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus massa felis, placerat quis orci
            et, ornare fermentum lorem. Aenean laoreet quam at nibh tincidunt,
            sit amet sodales augue sagittis. Cras cursus, nisi et elementum
            porta, leo velit lobortis justo, sed efficitur justo urna nec justo.
            Nullam quis odio nec lectus fringilla suscipit vitae id neque.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
