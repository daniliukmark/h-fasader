import Image from "next/image";
import Footer from "~/app/_components/layout/footer";
import Navbar from "~/app/_components/layout/navbar";
import Separator from "~/app/_components/ui/separator";
import { cn } from "~/utils/utils";
import { Pacifico } from "next/font/google";
import { Button } from "~/app/_components/ui/button";

import MAP_IMAGE from "public/assets/map2.png";
import ALUMINIUM_CATEGORY from "public/assets/windows/window-test.jpg";
import PVC_CATEGORY from "public/assets/windows/window-test4.jpg";
import FACTORY_IMG from "public/assets/h-fasader-factory.png";

const pacifico = Pacifico({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
});

interface Page {
  params: {
    lang: string;
  };
}
export default function Page({ params: { lang } }: Page) {
  return (
    <>
      <Navbar lang={lang} isMainPage={true} />
      <div className="flex min-h-screen w-full flex-col justify-between">
        <div className="w-full">
          <section className="relative flex h-[40rem] flex-col justify-center sm:h-[52rem] ">
            <div className="z-10 mx-auto flex w-full max-w-3xl items-center justify-between lg:max-w-7xl">
              <h1 className="mx-8 text-4xl font-semibold leading-normal text-white  sm:text-5xl  sm:leading-relaxed ">
                Norway's Gateway <br />
                to{" "}
                <span
                  className={cn("text-5xl sm:text-6xl", pacifico.className)}
                >
                  Comfort <br />
                </span>
                with H-fasader.
              </h1>
            </div>
            <div className="absolute inset-0 -z-10">
              <figure className="h-full w-full">
                {/* <video
                  className=" relative h-full w-full object-cover"
                  loop
                  autoPlay
                  muted
                  src="https://cdn.sanity.io/files/zkqihy5d/production/37008853aa8ae3962ce58b5ecd28e0ac031bb6ca.mp4"
                ></video> */}

                <div className="absolute inset-0 bg-neutral-500 opacity-100">
                  <Image src={FACTORY_IMG} alt="a"></Image>
                </div>

                <div className="absolute inset-0 bg-neutral-900 opacity-20" />
              </figure>
            </div>
          </section>
          <div className="mx-auto -mt-32 w-full px-4 pt-8 sm:px-8 lg:max-w-5xl lg:px-0 xl:max-w-7xl">
            <section className="pb-8">
              <div className="flex flex-wrap justify-center gap-8 md:flex-nowrap">
                <div className="relative h-[36rem] flex-auto basis-[36rem] rounded-lg border-2 border-neutral-100 bg-white p-4">
                  <figure className="relative h-full w-full overflow-hidden rounded-md">
                    <Image
                      src={PVC_CATEGORY}
                      alt="window image"
                      sizes="vw-100"
                      fill
                      className="object-cover duration-200 hover:opacity-60"
                    />
                    <article className="absolute bottom-0 h-fit w-full bg-white p-4">
                      <h1 className="text-left text-2xl font-semibold">PVC</h1>
                      <p className="pb-2 text-left">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. At distinctio expedita quasi impedit, libero
                        laudantium aspernatur, voluptas nisi saepe itaque nihil
                        sed accusantium maiores non doloribus veniam optio
                        reiciendis porro!
                      </p>
                      <Button variant={"link"} className="rounded-full p-0">
                        View more
                      </Button>
                    </article>
                  </figure>
                </div>
                <div className="relative h-[36rem] flex-auto basis-[36rem] rounded-lg border-2 border-neutral-100 bg-white p-4">
                  <figure className="relative h-full w-full overflow-hidden rounded-md">
                    <Image
                      src={ALUMINIUM_CATEGORY}
                      alt="window image"
                      sizes="vw-100"
                      fill
                      className="object-cover hover:opacity-60"
                    />
                    <article className="absolute bottom-0 h-fit w-full bg-white p-4">
                      <h1 className="text-left text-2xl font-semibold">
                        Aluminium
                      </h1>
                      <p className="pb-2 text-left">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. At distinctio expedita quasi impedit, libero
                        laudantium aspernatur, voluptas nisi saepe itaque nihil
                        sed accusantium maiores non doloribus veniam optio
                        reiciendis porro!
                      </p>
                      <Button variant={"link"} className="rounded-full p-0">
                        View more
                      </Button>
                    </article>
                  </figure>
                </div>
              </div>
            </section>
            <section className=" pb-8 sm:block">
              <Separator />
              <div className="relative  h-[32rem] w-full overflow-hidden rounded-lg  bg-white ">
                <Image
                  src={MAP_IMAGE}
                  alt="window image"
                  sizes="vw-100"
                  fill
                  className="h-full w-full object-contain"
                />
              </div>
              <Separator />
            </section>
            <section className="overflow-hidden pb-8">
              <Separator />
              <div className="inline-flex w-full flex-nowrap">
                <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
                  <li>
                    <img src="./facebook.svg" alt="Facebook" />
                  </li>
                  <li>
                    <img src="./disney.svg" alt="Disney" />
                  </li>
                  <li>
                    <img src="./airbnb.svg" alt="Airbnb" />
                  </li>
                  <li>
                    <img src="./apple.svg" alt="Apple" />
                  </li>
                  <li>
                    <img src="./spark.svg" alt="Spark" />
                  </li>
                  <li>
                    <img src="./samsung.svg" alt="Samsung" />
                  </li>
                  <li>
                    <img src="./quora.svg" alt="Quora" />
                  </li>
                  <li>
                    <img src="./sass.svg" alt="Sass" />
                  </li>
                </ul>
              </div>
              <Separator />
            </section>
          </div>
          <Footer lang={lang} />
        </div>
      </div>
    </>
  );
}
