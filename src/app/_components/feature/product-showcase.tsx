"use client";
import Image from "next/image";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { Button } from "../ui/button";
import EmblaCarousel from "../ui/emba-carousel/EmblaCarousel";

import { Expand } from "lucide-react";
import Modal from "../ui/modal";

interface ProductShowcaseItem {
  src: StaticImport;
  setPeekImage: Dispatch<SetStateAction<StaticImport | null>>;
  setFocusImage: Dispatch<SetStateAction<StaticImport | null>>;
}

function ProductShowcaseItem({
  src,
  setPeekImage,
  setFocusImage,
}: ProductShowcaseItem) {
  return (
    <li
      onClick={() => {
        setFocusImage(() => src);
      }}
      onMouseEnter={() => {
        setPeekImage(() => src);
      }}
      onMouseLeave={() => {
        setPeekImage(() => null);
      }}
    >
      <Button
        variant={"outline"}
        className="relative h-12 w-12 overflow-hidden border-0"
      >
        <Image
          src={src}
          alt="window image"
          sizes="vw-100"
          className="mix-blend-normal hover:mix-blend-darken"
          fill
        />
      </Button>
    </li>
  );
}

interface ProductShowcase {
  images: StaticImport[];
  defaultImage: StaticImport;
}

function ProductShowcase({ images, defaultImage }: ProductShowcase) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [focusImage, setFocusImage] = useState<StaticImport | null>(
    defaultImage,
  );

  const [peekImage, setPeekImage] = useState<StaticImport | null>(null);

  return (
    <figure className="flex-basis relative h-full w-full ">
      <Image
        src={peekImage ? peekImage : focusImage ? focusImage : ""}
        alt="window image"
        sizes="vw-100"
        fill
        className="max-h-96 object-contain px-8"
      />
      <ul className="absolute left-0 flex h-full flex-col justify-center gap-2">
        {images.map((image, index) => {
          return (
            <ProductShowcaseItem
              src={image}
              setFocusImage={setFocusImage}
              setPeekImage={setPeekImage}
              key={index}
            />
          );
        })}
      </ul>
      <Button
        variant={"ghost"}
        size={"icon"}
        className="absolute bottom-0 right-0 my-4 sm:mx-4"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <Expand className="text-neutral-900" />
      </Button>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <EmblaCarousel images={images} />
      </Modal>
    </figure>
  );
}

ProductShowcase.Item = ProductShowcaseItem;

export default ProductShowcase;
