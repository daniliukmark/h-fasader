import BreadCrumbs from "~/app/_components/ui/breadcrumbs";
import { Button } from "~/app/_components/ui/button";
import Link from "next/link";
import ProductCarousel from "~/app/_components/ui/product-carousel";
import ProductCard from "~/app/_components/ui/product-card";
import ProductDetails from "~/app/_components/feature/product-details";
import ProductShowcase from "~/app/_components/feature/product-showcase";

import default_img from "public/assets/products/window-1.png";
import default_img1 from "public/assets/products/window-1.png";
import default_img2 from "public/assets/products/window-2.png";
import default_img3 from "public/assets/products/window-3.png";
import default_img4 from "public/assets/products/window-4.png";

interface Page {
  params: {
    lang: string;
    productId: string;
  };
}

export default function Page({ params: { lang, productId } }: Page) {
  const images = [
    default_img1,
    default_img2,
    default_img3,
    default_img4,
    default_img4,
    default_img4,
    default_img1,
    default_img2,
    default_img3,
    default_img4,
    default_img4,
    default_img4,
  ];
  return (
    <>
      <main className="flex w-full flex-col scroll-smooth sm:flex-row">
        <div className="h-96 sm:basis-1/2">
          <ProductShowcase images={images} defaultImage={default_img} />
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
              <BreadCrumbs.Item href={`/${lang}/pvc/${productId}`}>
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
            <Link href="#specification">
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
      <ProductDetails lang={lang} />
      <section>
        <h2 className="text-2xl font-semibold">Kiti Produktai</h2>
        <ProductCarousel>
          <ProductCard
            lang={lang}
            src={default_img}
            alt="window"
            href="/pvc/windows"
          />
          <ProductCard
            lang={lang}
            src={default_img}
            alt="window"
            href="/pvc/windows"
          />
          <ProductCard
            lang={lang}
            src={default_img}
            alt="window"
            href="/pvc/windows"
          />
          <ProductCard
            lang={lang}
            src={default_img}
            alt="window"
            href="/pvc/windows"
          />
        </ProductCarousel>
      </section>
    </>
  );
}
