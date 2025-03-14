import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { cn } from "~/utils/utils";

type PropType = {
	selected: boolean;
	src: StaticImport | string;
	index: number;
	onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
	const { selected, src, index, onClick } = props;

	return (
		<div className={cn(selected ? "opacity-100" : "")}>
			<button
				onClick={onClick}
				className={cn(
					"h-32 w-32 rounded-sm overflow-hidden  relative  cursor-pointer touch-manipulation bg-transparent  duration-300",
				)}
				type="button"
			>
				<Image
					className="block bg-white object-contain"
					src={src}
					fill
					unoptimized
					sizes="10w"
					alt={`slide ${index}`}
				/>
				<div
					className={cn(
						"absolute inset-0 bg-black duration-300",
						selected ? "opacity-0" : "opacity-30",
					)}
				/>
			</button>
		</div>
	);
};
