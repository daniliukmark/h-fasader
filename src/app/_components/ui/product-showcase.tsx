"use client";
import Image from "next/image";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { Expand } from "lucide-react";
import Modal from "./modal";

const focusAtom = atom<StaticImport | null>(null);
const peekImageAtom = atom<StaticImport | null>(null);
const galleryAtom = atom<StaticImport[]>([]);

interface ProductShowcaseItem {
  src: StaticImport;
}

function ProductShowcaseItem({ src }: ProductShowcaseItem) {
  const [, setFocusImage] = useAtom(focusAtom);
  const [, setPeekImage] = useAtom(peekImageAtom);
  const [, setGallery] = useAtom(galleryAtom);

  useEffect(() => {
    setGallery((prev) => [...prev, src]);
  }, []);

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
          fill
          className="mix-blend-normal hover:mix-blend-darken"
        />
      </Button>
    </li>
  );
}

interface ProductShowcase {
  children?: React.ReactNode;
  defaultImage: StaticImport;
}

function ProductShowcase({ children, defaultImage }: ProductShowcase) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [focusImage, setFocusImage] = useAtom(focusAtom);
  const [peekImage] = useAtom(peekImageAtom);

  useEffect(() => {
    setFocusImage(() => defaultImage);
  }, []);

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
        {children}
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
        <div className="h-8 w-8 bg-black"></div>
      </Modal>
    </figure>
  );
}

ProductShowcase.Item = ProductShowcaseItem;

export default ProductShowcase;
