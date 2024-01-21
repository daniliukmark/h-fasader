import React, { useState, useEffect, useCallback } from "react";
import { type EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import Image from "next/image";
import { cn } from "~/utils/utils";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";

interface EmblaCarousel {
  images: StaticImport[];
  options?: EmblaOptionsType;
}

const EmblaCarousel = ({ images, options }: EmblaCarousel) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    if (images.length != emblaMainApi.selectedScrollSnap()) {
      setSelectedIndex(emblaMainApi.selectedScrollSnap());
      emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    }
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <section className="max-w-7xl">
      <div ref={emblaMainRef}>
        <div className="flex touch-pan-y gap-4">
          {images.map((image, index) => (
            <div
              className={cn(
                "relative min-w-0 flex-none",
                images.length === index ? "mr-64" : "",
              )}
              key={index}
            >
              <Image
                className="block h-64 w-full object-contain sm:h-96 lg:h-[32rem]"
                src={image}
                alt="Your alt text"
              />
              <div
                className={cn(
                  "absolute inset-0 bg-black duration-300",
                  selectedIndex === index ? "opacity-0" : "opacity-60",
                )}
              />
            </div>
          ))}
          {/* <div className={cn("relative min-w-0 flex-none")}>
            <Image
              className="block h-64 w-full object-contain sm:h-96 lg:h-[32rem]"
              src={BLANK_IMG}
              alt="Your alt text"
            />
          </div> */}
        </div>
      </div>

      <div className="mt-4">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex flex-row gap-4">
            {images.map((image, index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                src={image ? image : ""}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
