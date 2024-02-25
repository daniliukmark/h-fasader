"use client";
import { useEffect } from "react";
import { cn } from "~/utils/utils";

interface VideoProps {
	hrefMp4: string;
	hrefWebm: string;
	className: string;
}
export default function Video({ hrefMp4, hrefWebm, className }: VideoProps) {
	useEffect(() => {
		const playVideo = () => {
			if (document) {
				const video = document.getElementById("video-bg") as HTMLVideoElement;
				if (video)
					void video
						.play()
						.catch((error) => console.error("Error playing video:", error));
			}
		};

		playVideo();
	}, []);

	return (
		<>
			<video
				id="video-bg"
				className={cn(className, "pointer-events-none")}
				controls={false}
				preload="auto"
				playsInline
				loop
				muted
				placeholder="public/assets/mountains-placeholder.jpeg"
			>
				<source type="video/mp4" src={hrefWebm} />
				<source type="video/mp4" src={hrefMp4} />
			</video>
		</>
	);
}
