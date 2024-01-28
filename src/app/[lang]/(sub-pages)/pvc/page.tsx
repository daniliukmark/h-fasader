"use client";
import ProductCard from "~/app/_components/ui/product-card";
import BreadCrumbs from "../../../_components/ui/breadcrumbs";
import default_img from "public/assets/products/window-1.png";
import Separator from "~/app/_components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/app/_components/ui/select";

interface Page {
  params: {
    lang: string;
  };
}
const a = Array.from({ length: 8 }, (v, i) => i);

export default function Page({ params: { lang } }: Page) {
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
      </article>
      <Separator />
      <section>
        <div className="grid grid-cols-1 gap-4 px-2 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {a.map((value, i) => {
            return (
              <ProductCard
                key={i}
                lang={lang}
                src={default_img}
                className="h-96 w-full"
                alt="product"
                href={`/${lang}/pvc/widndows`}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
