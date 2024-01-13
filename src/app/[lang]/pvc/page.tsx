import ProductCard from "~/app/_components/ui/product-card";
import BreadCrumbs from "../../_components/ui/breadcrumbs";
import ProductCarousel from "~/app/_components/ui/product-carousel";

import deafault_img from "public/assets/products/window-1.png";

interface Page {
  params: {
    lang: string;
    productId: string;
  };
}

export default function Page({ params: { lang, productId } }: Page) {
  return (
    <>
      <article>
        <BreadCrumbs>
          <BreadCrumbs.Item href={`/${lang}/`}>
            <h1>Home</h1>
          </BreadCrumbs.Item>
          <BreadCrumbs.Item href={`/${lang}/pvc`}>
            <h1>PVC</h1>
          </BreadCrumbs.Item>
        </BreadCrumbs>
        <section>
          <h1 className="mb-2 text-3xl font-semibold">PVC Catalogue</h1>
          <p className="mb-4 max-w-4xl text-sm text-neutral-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            massa felis, placerat quis orci et, ornare fermentum lorem. Aenean
            laoreet quam at nibh tincidunt, sit amet sodales augue sagittis.
            Cras cursus, nisi et elementum porta, leo velit lobortis justo, sed
            efficitur justo urna nec justo. Nullam quis odio nec lectus
            fringilla suscipit vitae id neque.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Top Swing</h2>
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
          </ProductCarousel>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Drei/vipp </h2>
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
          </ProductCarousel>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Side Hinged</h2>
          <ProductCarousel>
            <ProductCard
              lang={lang}
              src={deafault_img}
              alt="window"
              href="/pvc/windows"
            />
          </ProductCarousel>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Doors</h2>
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
            <ProductCard
              lang={lang}
              src={deafault_img}
              alt="window"
              href="/pvc/windows"
            />
          </ProductCarousel>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Sliding Doors</h2>
          <div className="lex-row flex w-full  gap-4 overflow-scroll p-4">
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
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Windex Sprosser</h2>
          <div className="lex-row flex w-full  gap-4 overflow-scroll p-4">
            <ProductCard
              lang={lang}
              src={deafault_img}
              alt="window"
              href="/pvc/windows"
            />
          </div>
        </section>
      </article>
    </>
  );
}
