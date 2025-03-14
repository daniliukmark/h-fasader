import React, { useState, useEffect, useCallback } from "react";
import { type EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import Image from "next/image";
import { cn } from "~/utils/utils";
import LONG_CHEVRON from "public/assets/longChevron.svg";

interface EmblaCarousel {
	images: string[];
	options?: EmblaOptionsType;
}

const EmblaCarousel = ({ images, options }: EmblaCarousel) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
	const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({});

	const onThumbClick = useCallback(
		(index: number) => {
			if (!emblaMainApi || !emblaThumbsApi) return;
			emblaMainApi.scrollTo(index);
		},
		[emblaMainApi, emblaThumbsApi],
	);

	const onSelect = useCallback(() => {
		if (!emblaMainApi || !emblaThumbsApi) return;
		if (images.length !== emblaMainApi.selectedScrollSnap()) {
			setSelectedIndex(emblaMainApi.selectedScrollSnap());
			emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
		}
	}, [emblaMainApi, emblaThumbsApi, images.length]);

	useEffect(() => {
		if (!emblaMainApi) return;
		onSelect();
		emblaMainApi.on("select", onSelect);
		emblaMainApi.on("reInit", onSelect);
	}, [emblaMainApi, onSelect]);

	return (
		<section className="px-4 w-full overflow-hidden">
			<div className="relative mx-auto w-full sm:w-fit" ref={emblaMainRef}>
				<div className="flex gap-4 mx-auto w-full lg:max-w-[36rem] sm:max-w-sm touch-pan-y">
					{images.map((image, index) => (
						<div
							className="relative flex-none rounded-lg w-full h-80 sm:h-96 lg:h-[36rem] sm:aspect-square overflow-hidden"
							key={image}
						>
							<Image
								className="bg-white object-contain"
								src={image}
								alt={image}
								unoptimized
								sizes="10w 100vw"
								fill
							/>
							<div
								className={cn(
									"absolute inset-0 bg-black duration-300",
									selectedIndex === index ? "opacity-0" : "opacity-60",
								)}
							/>
						</div>
					))}
				</div>
				<div className="hidden absolute inset-0 lg:flex justify-between mx-auto w-full lg:max-w-[36rem] sm:max-w-sm h-full">
					<Image
						src={LONG_CHEVRON as string}
						alt="Arrow left"
						onClick={() => {
							if (selectedIndex > 0) onThumbClick(selectedIndex - 1);
						}}
						unoptimized
						className={cn(
							"select-none opacity-70 hover:opacity-100 duration-300 -ml-16 cursor-pointer",
							selectedIndex === 0 &&
								"opacity-0 hover:opacity-0 cursor-auto w-0",
						)}
					/>
					<Image
						src={LONG_CHEVRON as string}
						alt="Arrow left"
						onClick={() => {
							if (selectedIndex + 1 < images.length)
								onThumbClick(selectedIndex + 1);
						}}
						unoptimized
						className={cn(
							"select-none opacity-70 hover:opacity-100 duration-300 -mr-16 rotate-180 cursor-pointer",
							selectedIndex + 1 === images.length &&
								"opacity-0 hover:opacity-0 cursor-auto w-0",
						)}
					/>
				</div>
			</div>
			<div
				className="mx-auto mt-4 w-full max-w-5xl touch-pan-y"
				ref={emblaThumbsRef}
			>
				<div className="flex flex-row gap-2">
					{images.map((image, index) => (
						<Thumb
							onClick={() => onThumbClick(index)}
							selected={index === selectedIndex}
							index={index}
							src={image ? image : ""}
							key={image}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default EmblaCarousel;
