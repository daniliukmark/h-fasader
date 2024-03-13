import React from "react";
import { cn } from "~/utils/utils";

interface ProductCarousel {
	children: React.ReactNode;
}
const ProductCarousel = ({ children }: ProductCarousel) => {
	return (
		<div className="relative">
			<div className="absolute left-0 z-10 h-full w-4 bg-gradient-to-r from-white to-transparent" />
			<div className="absolute right-0 z-10 h-full w-4 bg-gradient-to-l from-white to-transparent" />
			<div
				className={cn(
					"scrollbar-hide flex w-full min-w-0 flex-row gap-4 overflow-scroll px-2 py-4 lg:flex-wrap lg:overflow-visible",
				)}
			>
				{children}
			</div>
		</div>
	);
};
export default ProductCarousel;
