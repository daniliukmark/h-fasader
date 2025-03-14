"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "~/utils/utils";

interface VideoProps {
	src: string;
	poster: string;
	className?: string;
}

export default function Video({ src, poster, className }: VideoProps) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const video = document.getElementById("video-bg") as HTMLVideoElement;

		if (video) {
			const playVideo = () => {
				video
					.play()
					.catch((error) => console.error("Error playing video:", error));
			};

			video.addEventListener("loadeddata", () => setLoading(false)); // Hide image when video loads
			playVideo();

			return () => {
				video.removeEventListener("loadeddata", () => setLoading(false));
			};
		}
	}, []);

	return (
		<div className="relative w-full h-full">
			{/* Show image when video is loading */}
			{loading && (
				<Image
					src={poster}
					alt="Loading placeholder"
					className="absolute object-center object-cover"
					fill
				/>
			)}
			<video
				id="video-bg"
				className={cn(
					"pointer-events-none mix-blend-darken absolute left-0",
					className,
				)}
				controls={false}
				preload="auto"
				playsInline
				loop
				muted
			>
				<source type="video/mp4" src={src} />
			</video>
		</div>
	);
}
