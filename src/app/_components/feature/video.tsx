"use client";
import { ClassValue } from "clsx";
import { useEffect } from "react";

interface VideoProps {
	hrefMp4: string;
	hrefWebm: string;
	className: string;
}
export default function Video({ hrefMp4, hrefWebm, className }: VideoProps) {
	useEffect(() => {
		if (document) {
			const video = document.getElementById("video-input");
			if (video) video.play();
		}
	}, []);

	return (
		<>
			<video
				id="video-bg"
				className={className}
				controls={false}
				preload="auto"
				playsInline
				loop
				autoPlay
				muted
				placeholder="public/assets/mountains-placeholder.jpeg"
			>
				<source type="video/mp4" src={hrefWebm} />
				<source type="video/mp4" src={hrefMp4} />
			</video>
		</>
	);
}
