"use client";
import Image from "next/image";
import { type Dispatch, useState } from "react";
import { Button } from "../ui/button";
import EmblaCarousel from "../ui/emba-carousel/EmblaCarousel";
import "react-loading-skeleton/dist/skeleton.css";
import Modal from "../ui/modal";
import { Expand } from "lucide-react";

interface ProductShowcaseItem {
	src: string;
	setPeekImage: Dispatch<string | null>;
	setFocusImage: Dispatch<string | null>;
}

function ProductShowcaseItem({
	src,
	setPeekImage,
	setFocusImage,
}: ProductShowcaseItem) {
	return (
		<li
			onClick={() => {
				setFocusImage(src);
			}}
			onKeyDown={() => {
				setFocusImage(src);
			}}
			onMouseEnter={() => {
				setPeekImage(src);
			}}
			onMouseLeave={() => {
				setPeekImage(null);
			}}
		>
			<Button
				variant={"outline"}
				className="relative w-12 h-12 overflow-hidden border-0"
			>
				<Image
					src={src}
					alt="window image"
					sizes="vw-100"
					className="object-contain mix-blend-normal hover:mix-blend-darken"
					fill
				/>
			</Button>
		</li>
	);
}

interface ProductShowcase {
	images: string[];
	defaultImage: string;
}

function ProductShowcase({ images, defaultImage }: ProductShowcase) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [focusImage, setFocusImage] = useState<string | null>(defaultImage);

	const [peekImage, setPeekImage] = useState<string | null>(null);

	return (
		<figure className="relative w-full h-full flex-basis ">
			<Image
				src={peekImage ? peekImage : focusImage ? focusImage : ""}
				alt="window image"
				sizes="vw-100"
				fill
				className="object-contain px-8 max-h-96"
			/>
			<div className="absolute left-0 flex items-center h-full">
				<ul className="flex flex-col items-center justify-center gap-2 overflow-y-scroll max-h-72">
					{images.slice(0, 4).map((image) => {
						return (
							<ProductShowcaseItem
								src={image}
								setFocusImage={setFocusImage}
								setPeekImage={setPeekImage}
								key={image}
							/>
						);
					})}
					{images.length > 4 ? (
						<Button
							variant={"ghost"}
							size={"icon"}
							onClick={() => setIsModalOpen(true)}
						>
							<span className="font-semibold text-center">...</span>
						</Button>
					) : null}
				</ul>
			</div>
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
