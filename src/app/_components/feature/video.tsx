"use client";
import { ClassValue } from "clsx";
import { useEffect } from "react";
import { cn } from "~/utils/utils";

interface VideoProps {
	hrefMp4: string;
	hrefWebm: string;
	className: string;
}
export default function Video({ hrefMp4, hrefWebm, className }: VideoProps) {
	useEffect(() => {
		if (document) {
			const video = document.getElementById("video-bg") as HTMLVideoElement;
			if (video) video.play();
		}
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
