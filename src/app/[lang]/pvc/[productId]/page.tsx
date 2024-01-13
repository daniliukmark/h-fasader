import Image from "next/image";
import BreadCrumbs from "~/app/_components/ui/breadcrumbs";

import deafault_img from "public/assets/products/window-1.png";
import { Button } from "~/app/_components/ui/button";
import Separator from "../../../_components/ui/separator";
import Link from "next/link";
import ProductCarousel from "~/app/_components/ui/product-carousel";
import ProductCard from "~/app/_components/ui/product-card";

interface Page {
  params: {
    lang: string;
    productId: string;
  };
}
export default function Page({ params: { lang, productId } }: Page) {
  return (
    <>
      <main className="flex w-full flex-col sm:flex-row">
        <div className="h-96 min-h-[32rem] sm:basis-1/2">
          <figure className="flex-basis relative h-full w-full">
            <Image
              src={deafault_img}
              alt="window image"
              sizes="vw-100"
              objectFit="contain"
              fill
            />
          </figure>
        </div>
        <section className="my-auto basis-1/2">
          <div>
            <BreadCrumbs>
              <BreadCrumbs.Item href={`/${lang}/`}>
                <h1>Home</h1>
              </BreadCrumbs.Item>
              <BreadCrumbs.Item href={`/${lang}/pvc`}>
                <h1>PVC</h1>
              </BreadCrumbs.Item>
              <BreadCrumbs.Item href={`/${lang}/pvc`}>
                <h1>{productId}</h1>
              </BreadCrumbs.Item>
            </BreadCrumbs>
            <h1 className="pt-2 text-3xl font-semibold">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              massa felis, placerat quis orci et, ornare fermentum lorem. Aenean
              laoreet quam at nibh tincidunt, sit amet sodales augue sagittis.
              Cras cursus, nisi et elementum porta, leo velit lobortis justo,
              sed efficitur justo urna nec justo. Nullam quis odio nec lectus
              fringilla suscipit vitae id neque.
            </p>
            <Link href={"#specification"}>
              <Button
                className="mt-2 rounded-3xl"
                size={"lg"}
                variant={"outline"}
              >
                View more
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <nav id="specification">
        <Separator className="mt-8 sm:mt-4" />
        <ul className="flex flex-row flex-wrap items-center gap-2 text-sm text-neutral-500 ">
          <li className="cursor-pointer font-semibold text-neutral-900">
            Specifikacija
          </li>
          <Separator variant="vertical" className="h-16 basis-0.5 " />
          <li className="cursor-pointer">Spalvos</li>
          <Separator variant="vertical" className="h-16 basis-0.5 " />
          <li className="cursor-pointer">Dekoratyvus skirtukai</li>
          <Separator variant="vertical" className="h-16 basis-0.5 " />
          <li className="cursor-pointer">Stiklas</li>
          <Separator variant="vertical" className="h-16 basis-0.5 " />
          <li className="cursor-pointer">Aksesuarai</li>
          <Separator variant="vertical" className="h-16 basis-0.5 " />
          <li className="cursor-pointer">Brėžiniai</li>
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
            efficitur justo urna nec justo.
            <br />
            <br />
            Nullam quis odio nec lectus fringilla suscipit vitae id neque. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa
            felis, placerat quis orci et, ornare fermentum lorem. Aenean laoreet
            quam at nibh tincidunt, sit amet sodales augue sagittis. Cras
            cursus, nisi et elementum porta, leo velit lobortis justo, sed
            efficitur justo urna nec justo. Nullam quis odio nec lectus
            fringilla suscipit vitae id neque.
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Kiti Produktai</h2>
        <ProductCarousel>
          <ProductCard
            lang={lang}
            src={deafault_img}
            alt="window"
            href="/pvc/windows"
          />
          <ProductCard
            lang={lang}
            src={deafault_img}
            alt="window"
            href="/pvc/windows"
          />
          <ProductCard
            lang={lang}
            src={deafault_img}
            alt="window"
            href="/pvc/windows"
          />
          <ProductCard
            lang={lang}
            src={deafault_img}
            alt="window"
            href="/pvc/windows"
          />
        </ProductCarousel>
      </section>
    </>
  );
}
